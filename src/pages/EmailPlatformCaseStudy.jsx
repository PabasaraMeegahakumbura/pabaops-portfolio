import { lazy, Suspense } from "react";

const EmailPlatformCaseStudyContent = lazy(() =>
  import("./lazy/EmailPlatformCaseStudyContent").then((module) => ({
    default: module.EmailPlatformCaseStudyContent,
  })),
);

export function EmailPlatformCaseStudy() {
  return (
    <Suspense fallback={<div className="route-loading" role="status">Loading email platform case study…</div>}>
      <EmailPlatformCaseStudyContent />
    </Suspense>
  );
}
