import React, { useState } from "react";
import { Field, Input, Button, Dropdown, Option } from "@fluentui/react-components";

export function TimeEntryForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const projects = [
    { id: "p1", name: "PowerApps" },
    { id: "p2", name: "CodeApp" }
  ];
  const [form, setForm] = useState({ date: "", project: "", hours: "", notes: "" });

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(form); }}>
      <Field label="Date" required>
        <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
      </Field>
      <Field label="Project" required>
        <Dropdown
          value={form.project}
          onOptionSelect={(_, d) => setForm(f => ({ ...f, project: d.optionValue as string }))}
        >
          {projects.map((p: any) => <Option key={p.id} value={p.id}>{p.name}</Option>)}
        </Dropdown>
      </Field>
      <Field label="Hours" required>
        <Input type="number" min={0} max={24} value={form.hours} onChange={e => setForm(f => ({ ...f, hours: e.target.value }))} />
      </Field>
      <Field label="Notes">
        <Input value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
      </Field>
      <Button type="submit" appearance="primary">Save</Button>
    </form>
  );
}
