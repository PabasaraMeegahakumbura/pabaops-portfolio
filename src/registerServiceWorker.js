export function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || import.meta.env.DEV) {
    return;
  }

  const register = () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`, {
        scope: import.meta.env.BASE_URL,
        updateViaCache: "none",
      })
      .catch((error) => {
        console.warn("PabaOps service worker registration failed:", error);
      });
  };

  window.addEventListener(
    "load",
    () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(register, { timeout: 2500 });
      } else {
        window.setTimeout(register, 1200);
      }
    },
    { once: true },
  );
}
