import { toolIcons } from "./portfolio";

const capabilityReplacements = {
  Zabbix: {
    icon: "🚨",
    name: "Observability & Alerting",
  },
  "Uptime Kuma": {
    icon: "⌨️",
    name: "Scripting",
  },
  Netdata: {
    icon: "📜",
    name: "Log Monitoring",
  },
};

toolIcons.forEach((tool) => {
  const replacement = capabilityReplacements[tool.name];

  if (replacement) {
    Object.assign(tool, replacement);
  }
});
