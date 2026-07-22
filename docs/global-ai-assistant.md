# Global PabaOps AI Assistant

The portfolio uses two compatible assistant implementations:

- The main React application renders the existing React assistant.
- Static HTML pages load `public/pabaops-ai/assistant.js`, which injects the same portfolio assistant experience without React.

## Future Static Pages

Production builds run `scripts/inject-global-ai.mjs` after Vite. The script scans every generated HTML file under `dist/`, skips the root React application, and automatically injects the shared assistant into static pages that do not already include it.

For local Vite development, add this before `</body>` in a new static HTML page:

```html
<script src="../pabaops-ai/assistant.js" defer data-pabaops-global-ai></script>
```

Adjust `../` when the page is nested more deeply. The production injector calculates the correct relative path automatically.

## Behaviour

- Prevents duplicate assistants when the React assistant already exists.
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
