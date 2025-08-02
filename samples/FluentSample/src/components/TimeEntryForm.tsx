import React, { useState } from "react";
import {
  Field,
  Input,
  Button,
  Dropdown,
  Option,
  Textarea,
  Checkbox,
  RadioGroup,
  Radio,
} from "@fluentui/react-components";

const projects = [
  { id: "p1", name: "PowerApps" },
  { id: "p2", name: "CodeApp" },
  { id: "p3", name: "HR System" },
];
const leaveTypes = ["Vacation", "Sick", "Personal", "Other"];

const initialForm = {
  date: "",
  project: "",
  hours: "",
  minutes: "",
  notes: "",
  type: "Work", // Work or Leave
  leaveType: "",
  billable: false,
  location: "",
  costCode: "",
  status: "Draft",
};

export function TimeEntryForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  // Simple validation logic
  const validate = () => {
    const errs: { [k: string]: string } = {};
    if (!form.date) errs.date = "Date is required";
    if (!form.project) errs.project = "Project is required";
    if (!form.hours || isNaN(Number(form.hours)) || Number(form.hours) < 0 || Number(form.hours) > 24) errs.hours = "Hours must be 0-24";
    if (form.type === "Leave" && !form.leaveType) errs.leaveType = "Leave type required";
    // Add more business rules as needed
    return errs;
  };

  const handleChange = (field: string, value: any) => {
    setForm(f => ({ ...f, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Add audit fields (mocked)
      const now = new Date().toISOString();
      onSubmit({
        ...form,
        createdBy: "mockUser",
        createdOn: now,
        modifiedBy: "mockUser",
        modifiedOn: now,
        hours: Number(form.hours),
        minutes: form.minutes ? Number(form.minutes) : 0,
      });
      setForm(initialForm);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
      <Field label="Date" required validationState={errors.date ? "error" : undefined} validationMessage={errors.date}>
        <Input type="date" value={form.date} onChange={e => handleChange("date", e.target.value)} />
      </Field>
      <Field label="Project/Task" required validationState={errors.project ? "error" : undefined} validationMessage={errors.project}>
        <Dropdown
          value={form.project}
          onOptionSelect={(_, d) => handleChange("project", d.optionValue as string)}
        >
          {projects.map((p) => <Option key={p.id} value={p.id}>{p.name}</Option>)}
        </Dropdown>
      </Field>
      <Field label="Type" required>
        <RadioGroup value={form.type} onChange={(_, d) => handleChange("type", d.value)}>
          <Radio value="Work" label="Work" />
          <Radio value="Leave" label="Leave/Absence" />
        </RadioGroup>
      </Field>
      {form.type === "Leave" && (
        <Field label="Leave Type" required validationState={errors.leaveType ? "error" : undefined} validationMessage={errors.leaveType}>
          <Dropdown
            value={form.leaveType}
            onOptionSelect={(_, d) => handleChange("leaveType", d.optionValue as string)}
          >
            {leaveTypes.map((t) => <Option key={t} value={t}>{t}</Option>)}
          </Dropdown>
        </Field>
      )}
      <Field label="Hours" required validationState={errors.hours ? "error" : undefined} validationMessage={errors.hours}>
        <Input type="number" min={0} max={24} value={form.hours} onChange={e => handleChange("hours", e.target.value)} style={{ width: 100 }} />
        <span style={{ marginLeft: 8 }}>:</span>
        <Input type="number" min={0} max={59} value={form.minutes} onChange={e => handleChange("minutes", e.target.value)} style={{ width: 80, marginLeft: 8 }} placeholder="Minutes" />
      </Field>
      <Field label="Billable">
        <Checkbox checked={form.billable} onChange={(_, d) => handleChange("billable", d.checked)} label="Billable" />
      </Field>
      <Field label="Location">
        <Input value={form.location} onChange={e => handleChange("location", e.target.value)} placeholder="e.g. Remote, Office" />
      </Field>
      <Field label="Cost Code">
        <Input value={form.costCode} onChange={e => handleChange("costCode", e.target.value)} placeholder="Cost code" />
      </Field>
      <Field label="Notes/Description">
        <Textarea value={form.notes} onChange={e => handleChange("notes", e.target.value)} placeholder="Description or notes" />
      </Field>
      <Field label="Status">
        <Dropdown value={form.status} onOptionSelect={(_, d) => handleChange("status", d.optionValue as string)}>
          <Option value="Draft">Draft</Option>
          <Option value="Submitted">Submitted</Option>
          <Option value="Approved">Approved</Option>
          <Option value="Rejected">Rejected</Option>
        </Dropdown>
      </Field>
      <div style={{ marginTop: 16 }}>
        <Button type="submit" appearance="primary">Save Entry</Button>
      </div>
    </form>
  );
}
