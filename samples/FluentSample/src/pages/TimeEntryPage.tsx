import React, { useState } from "react";
import { TimeEntryForm } from "../components/TimeEntryForm";
import { TimeEntryGrid } from "../components/TimeEntryGrid";
import { TimeEntry } from "../models/timeEntry";

const mockEntries: TimeEntry[] = [
  {
    id: "1",
    date: "2025-08-01",
    projectId: "p1",
    projectName: "PowerApps",
    hours: 2,
    notes: "Bug fixes",
    status: "Draft",
    createdBy: "user1",
    createdOn: "2025-08-01T10:00:00Z"
  },
  {
    id: "2",
    date: "2025-08-01",
    projectId: "p2",
    projectName: "CodeApp",
    hours: 3.5,
    notes: "Feature development",
    status: "Submitted",
    createdBy: "user2",
    createdOn: "2025-08-01T11:00:00Z"
  }
];

export default function TimeEntryPage() {
  const [entries, setEntries] = useState<TimeEntry[]>(mockEntries);
  // Add handlers for add/edit/delete as needed
  return (
    <div>
      <h2>Time Entry</h2>
      <TimeEntryForm onSubmit={() => {}} accessToken={"mock-token"} />
      <TimeEntryGrid entries={entries} onEdit={() => {}} onDelete={() => {}} />
    </div>
  );
}
