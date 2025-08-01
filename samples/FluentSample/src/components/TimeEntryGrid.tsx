import React from "react";
import { Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell, Button } from "@fluentui/react-components";
import { TimeEntry } from "../models/timeEntry";

export function TimeEntryGrid({ entries, onEdit, onDelete }: {
  entries: TimeEntry[],
  onEdit: (entry: TimeEntry) => void,
  onDelete: (id: string) => void
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Date</TableHeaderCell>
          <TableHeaderCell>Project</TableHeaderCell>
          <TableHeaderCell>Hours</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map(entry => (
          <TableRow key={entry.id}>
            <TableCell>{entry.date}</TableCell>
            <TableCell>{entry.projectName}</TableCell>
            <TableCell>{entry.hours}</TableCell>
            <TableCell>{entry.status}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(entry)}>Edit</Button>
              <Button onClick={() => onDelete(entry.id)} appearance="subtle">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
