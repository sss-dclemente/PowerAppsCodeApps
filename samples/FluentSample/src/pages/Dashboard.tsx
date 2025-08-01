import React from "react";
import { AnalyticsDashboard } from "../components/AnalyticsDashboard";

const mockEntries: any[] = [
  { id: "1", date: "2025-08-01", projectName: "PowerApps", hours: 2 },
  { id: "2", date: "2025-08-01", projectName: "CodeApp", hours: 3.5 }
];

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <AnalyticsDashboard entries={mockEntries} />
    </div>
  );
}
