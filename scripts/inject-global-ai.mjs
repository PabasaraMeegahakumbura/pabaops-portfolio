import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const distDir = path.join(projectRoot, "dist");
const assistantPath = path.join(distDir, "pabaops-ai", "assistant.js");

const collectHtmlFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
};

await readFile(assistantPath, "utf8");
const htmlFiles = await collectHtmlFiles(distDir);
let injected = 0;
let skipped = 0;

for (const htmlFile of htmlFiles) {
  const relativeHtmlPath = path.relative(distDir, htmlFile).split(path.sep).join("/");

  // The root Vite application already renders its React assistant.
  if (relativeHtmlPath === "index.html") {
    skipped += 1;
    continue;
  }

  let html = await readFile(htmlFile, "utf8");

  if (
    html.includes("pabaops-ai/assistant.js") ||
    html.includes('data-pabaops-ai="disabled"')
  ) {
    skipped += 1;
    continue;
  }

  if (!html.includes("</body>")) {
    throw new Error(`Cannot inject PabaOps AI: ${relativeHtmlPath} has no closing </body> tag.`);
  }

  const relativeAssistantPath = path
    .relative(path.dirname(htmlFile), assistantPath)
    .split(path.sep)
    .join("/");
  const scriptSrc = relativeAssistantPath.startsWith(".")
    ? relativeAssistantPath
    : `./${relativeAssistantPath}`;

  html = html.replace(
    "</body>",
    `  <script src="${scriptSrc}" defer data-pabaops-global-ai></script>\n</body>`,
  );

  await writeFile(htmlFile, html, "utf8");
  injected += 1;
}

console.log(
  `PabaOps global AI assistant: injected into ${injected} static page(s); skipped ${skipped} page(s).`,
);
