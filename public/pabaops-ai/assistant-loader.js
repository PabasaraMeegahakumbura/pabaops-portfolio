(() => {
  if (window.__PABAOPS_AI_LOADER_ACTIVE__) return;
  window.__PABAOPS_AI_LOADER_ACTIVE__ = true;

  const loaderScript = document.currentScript;
  const assistantUrl = loaderScript
    ? new URL("assistant.js", loaderScript.src).href
    : new URL("./pabaops-ai/assistant.js", window.location.href).href;
  let loaded = false;

  const loadAssistant = () => {
    if (loaded || window.__PABAOPS_GLOBAL_AI_LOADED__) return;
    loaded = true;

    const script = document.createElement("script");
    script.src = assistantUrl;
    script.async = true;
    script.dataset.pabaopsGlobalAi = "";
    document.body.append(script);
  };

  ["pointerdown", "touchstart", "keydown"].forEach((eventName) => {
    window.addEventListener(eventName, loadAssistant, {
      once: true,
      passive: eventName !== "keydown",
    });
  });

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadAssistant, { timeout: 1400 });
  } else {
    window.setTimeout(loadAssistant, 700);
  }
})();
