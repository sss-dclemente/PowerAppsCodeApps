import React, { useState } from "react";
import { Button, Textarea, Field } from "@fluentui/react-components";
import { TimeEntry } from "../models/timeEntry";

export function ApprovalPanel({ entry, onApprove, onReject }: {
  entry: TimeEntry,
  onApprove: (entry: TimeEntry, comment: string) => void,
  onReject: (entry: TimeEntry, comment: string) => void
}) {
  const [comment, setComment] = useState("");
  return (
    <div>
      <h3>Approve/Reject Time Entry</h3>
      <Field label="Comment">
        <Textarea value={comment} onChange={e => setComment(e.target.value)} />
      </Field>
      <Button onClick={() => onApprove(entry, comment)} appearance="primary">Approve</Button>
      <Button onClick={() => onReject(entry, comment)} appearance="danger">Reject</Button>
    </div>
  );
}
