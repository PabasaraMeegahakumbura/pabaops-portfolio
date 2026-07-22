import { lazy, Suspense } from "react";

const MonitoringCaseStudyContent = lazy(() =>
  import("./lazy/MonitoringCaseStudyContent").then((module) => ({
    default: module.MonitoringCaseStudyContent,
  })),
);

export function MonitoringCaseStudy() {
  return (
    <Suspense fallback={<div className="route-loading" role="status">Loading monitoring case study…</div>}>
      <MonitoringCaseStudyContent />
    </Suspense>
  );
}
