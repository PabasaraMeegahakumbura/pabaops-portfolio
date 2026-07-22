import { lazy, Suspense } from "react";

const CapabilitiesPageContent = lazy(() =>
  import("./lazy/CapabilitiesPageContent").then((module) => ({
    default: module.CapabilitiesPageContent,
  })),
);

export function CapabilitiesPage(props) {
  return (
    <Suspense fallback={<div className="route-loading" role="status">Loading technical capabilities…</div>}>
      <CapabilitiesPageContent {...props} />
    </Suspense>
  );
}
