(() => {
  const params = new URLSearchParams(window.location.search);
  const project = params.get("project");

  if (project !== "kubernetes-cicd-deployment") {
    return;
  }

  const iconContainer = document.querySelector("[data-icon]");
  if (!iconContainer) {
    return;
  }

  const image = document.createElement("img");
  image.src = "../k8s-logo.svg";
  image.alt = "Kubernetes";
  image.width = 96;
  image.height = 96;
  iconContainer.replaceChildren(image);
})();
