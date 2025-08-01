import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardPreview,
  Button,
  Input,
  Field,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHeaderCell,
  Text,
  tokens,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";

interface TimeEntry {
  id: number;
  date: string;
  project: string;
  hours: number;
  description: string;
}

const initialEntries: TimeEntry[] = [
  { id: 1, date: "2025-08-01", project: "PowerApps", hours: 2, description: "Bug fixes" },
  { id: 2, date: "2025-08-01", project: "CodeApp", hours: 3.5, description: "Feature development" },
];

const useStyles = makeStyles({
  root: {
    maxWidth: '900px', // fits well with sidebar
    margin: '2rem auto',
    ...shorthands.padding('32px'),
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusXLarge,
    boxShadow: tokens.shadow16,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    '@media (max-width: 1000px)': {
      maxWidth: '98vw',
      padding: '16px',
    },
  },
  formRow: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
    flexWrap: 'wrap',
  },
  table: {
    marginTop: '16px',
    background: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusLarge,
    boxShadow: tokens.shadow8,
    width: '100%',
    overflowX: 'auto',
  },
  addButton: {
    alignSelf: 'flex-end',
    minWidth: '100px',
  },
});

export const TimeEntryApp: React.FC = () => {
  const [entries, setEntries] = useState<TimeEntry[]>(initialEntries);
  const [form, setForm] = useState({
    date: "2025-08-01",
    project: "",
    hours: "",
    description: "",
  });
  const styles = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.project || !form.hours) return;
    setEntries([
      ...entries,
      {
        id: entries.length + 1,
        date: form.date,
        project: form.project,
        hours: parseFloat(form.hours),
        description: form.description,
      },
    ]);
    setForm({ ...form, project: "", hours: "", description: "" });
  };

  return (
    <Card className={styles.root}>
      <CardHeader
        header={<Text size={600} weight="semibold">Time Entry App</Text>}
        description={<Text size={300} color="brand">Track your time entries easily (mock data)</Text>}
      />
      <form onSubmit={handleAdd}>
        <div className={styles.formRow}>
          <Field label="Date">
            <Input name="date" type="date" value={form.date} onChange={handleChange} />
          </Field>
          <Field label="Project" required>
            <Input name="project" placeholder="Project" value={form.project} onChange={handleChange} />
          </Field>
          <Field label="Hours" required>
            <Input name="hours" type="number" step="0.1" placeholder="Hours" value={form.hours} onChange={handleChange} />
          </Field>
          <Field label="Description">
            <Input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
          </Field>
          <Button appearance="primary" type="submit" className={styles.addButton}>
            Add
          </Button>
        </div>
      </form>
      <Table className={styles.table} aria-label="Time Entries">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Project</TableHeaderCell>
            <TableHeaderCell>Hours</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.project}</TableCell>
              <TableCell>{entry.hours}</TableCell>
              <TableCell>{entry.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
