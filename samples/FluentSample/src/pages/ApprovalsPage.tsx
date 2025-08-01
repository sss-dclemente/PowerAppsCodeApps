import React from "react";
import { ApprovalPanel } from "../components/ApprovalPanel";

const mockEntries: any[] = [
  { id: "2", date: "2025-08-01", projectName: "CodeApp", hours: 3.5, status: "Submitted" }
];

export default function ApprovalsPage() {
  const submitted = mockEntries.filter((e: any) => e.status === "Submitted");
  return (
    <div>
      <h2>Approvals</h2>
      {submitted.map((entry: any) => (
        <ApprovalPanel key={entry.id} entry={entry} onApprove={() => {}} onReject={() => {}} />
      ))}
    </div>
  );
}
