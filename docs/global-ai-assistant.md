# Global PabaOps AI Assistant

The portfolio uses two compatible assistant implementations:

- The main React application renders the existing React assistant.
- Static HTML pages load `public/pabaops-ai/assistant-loader.js`, which waits for browser idle time or the visitor's first interaction before loading `assistant.js`.

## Future Static Pages

Production builds run `scripts/inject-global-ai.mjs` after Vite. The script scans every generated HTML file under `dist/`, skips the root React application, and automatically injects the lightweight assistant loader into static pages that do not already include it.

For local Vite development, add this before `</body>` in a new static HTML page:

```html
<script src="../pabaops-ai/assistant-loader.js" defer data-pabaops-ai-loader></script>
```

Adjust `../` when the page is nested more deeply. The production injector calculates the correct relative path automatically.

## Behaviour

- Prevents duplicate assistants when the React assistant already exists.
- Loads static-page assistant code during browser idle time or immediately on the first pointer, touch, or keyboard interaction.
- Uses the PabaOps logo and the same portfolio knowledge topics.
- Stores recent messages in `sessionStorage` so the conversation continues between static pages.
- Supports keyboard access, Enter-to-send, Escape-to-close, reduced motion, and mobile layouts.
- Uses built-in portfolio knowledge by default.
- Can use a future live endpoint through `window.PABAOPS_AI_API_URL`.

## Intentional Opt-Out

Add the following anywhere in a static page when the assistant must not be injected during production builds:

```html
<meta data-pabaops-ai="disabled" />
```
