import React, { useState } from "react";
import {
  Button,
  Input,
  Dropdown,
  Option,
  Checkbox,
  Textarea,
  RadioGroup,
  Radio,
  DataGrid,
  tokens,
  TableColumnDefinition,
} from "@fluentui/react-components";

const projects = ["PowerApps", "CodeApp", "HR System"];
const leaveTypes = ["Vacation", "Sick", "Personal", "Other"];
const statusOptions = ["Draft", "Submitted", "Approved", "Rejected"];

// Minimal TimeEntry type for demo; adjust as needed
type GridTimeEntry = {
  id: number;
  date: string;
  projectId: string;
  projectName: string;
  type: string;
  leaveType?: string;
  hours: number;
  minutes: number;
  billable: boolean;
  location?: string;
  costCode?: string;
  notes?: string;
  status: string;
  createdBy: string;
  createdOn: string;
};

const initialEntries: GridTimeEntry[] = [
  {
    id: 1,
    date: "2025-08-01",
    projectId: "p1",
    projectName: "PowerApps",
    type: "Work",
    hours: 8,
    minutes: 0,
    billable: true,
    location: "Remote",
    costCode: "A100",
    notes: "Dev work",
    status: "Approved",
    createdBy: "alice",
    createdOn: "2025-08-01T09:00:00Z",
  },
  {
    id: 2,
    date: "2025-08-02",
    projectId: "p2",
    projectName: "CodeApp",
    type: "Leave",
    leaveType: "Vacation",
    hours: 4,
    minutes: 30,
    billable: false,
    location: "",
    costCode: "B200",
    notes: "Family trip",
    status: "Submitted",
    createdBy: "bob",
    createdOn: "2025-08-02T10:00:00Z",
  },
];

export function TimeEntryGrid() {
  const [rows, setRows] = useState<GridTimeEntry[]>(initialEntries);
  const [editId, setEditId] = useState<number | null>(null);
  const [editRow, setEditRow] = useState<GridTimeEntry | null>(null);
  const [filter, setFilter] = useState<{ project: string; status: string; search: string }>({ project: "", status: "", search: "" });
  const [sort, setSort] = useState<{ col: string; dir: "asc" | "desc" }>({ col: "date", dir: "desc" });

  // Filtering
  let filtered = rows.filter((e: GridTimeEntry) =>
    (!filter.project || e.projectName === filter.project) &&
    (!filter.status || e.status === filter.status) &&
    (filter.search === "" ||
      (e.notes?.toLowerCase().includes(filter.search.toLowerCase()) ?? false) ||
      e.projectName.toLowerCase().includes(filter.search.toLowerCase())
    )
  );

  // Sorting
  filtered = filtered.sort((a: GridTimeEntry, b: GridTimeEntry) => {
    if (sort.col === "date") {
      return sort.dir === "asc"
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date);
    }
    if (sort.col === "project") {
      return sort.dir === "asc"
        ? a.projectName.localeCompare(b.projectName)
        : b.projectName.localeCompare(a.projectName);
    }
    if (sort.col === "status") {
      return sort.dir === "asc"
        ? a.status.localeCompare(b.status)
        : b.status.localeCompare(a.status);
    }
    return 0;
  });

  // Inline edit handlers
  const startEdit = (id: number) => {
    setEditId(id);
    setEditRow(rows.find((e: GridTimeEntry) => e.id === id) || null);
  };
  const cancelEdit = () => {
    setEditId(null);
    setEditRow(null);
  };
  const saveEdit = () => {
    setRows((list: GridTimeEntry[]) => list.map((e: GridTimeEntry) => (e.id === editId && editRow ? { ...editRow, id: editId } : e)));
    setEditId(null);
    setEditRow(null);
  };

  // DataGrid columns
  const columns: TableColumnDefinition<GridTimeEntry>[] = [
    {
      columnId: "date",
      renderHeaderCell: () => "Date",
      renderCell: (item) => editId === item.id && editRow ? (
        <Input type="date" value={editRow.date} onChange={ev => setEditRow(r => r ? { ...r, date: ev.target.value } : r)} />
      ) : item.date,
      compare: (a, b) => a.date.localeCompare(b.date),
    },
    {
      columnId: "project",
      renderHeaderCell: () => "Project",
      renderCell: (item) => editId === item.id && editRow ? (
        <Dropdown value={editRow.projectName} onOptionSelect={(_, d) => setEditRow(r => r ? { ...r, projectName: d.optionValue as string } : r)}>
          {projects.map(p => <Option key={p} value={p}>{p}</Option>)}
        </Dropdown>
      ) : item.projectName,
      compare: (a, b) => a.projectName.localeCompare(b.projectName),
    },
    {
      columnId: "type",
      renderHeaderCell: () => "Type",
      renderCell: (item) => editId === item.id && editRow ? (
        <RadioGroup value={editRow.type} onChange={(_, d) => setEditRow(r => r ? { ...r, type: d.value as string } : r)}>
          <Radio value="Work" label="Work" />
          <Radio value="Leave" label="Leave/Absence" />
        </RadioGroup>
      ) : item.type,
      compare: (a, b) => a.type.localeCompare(b.type),
    },
    {
      columnId: "leaveType",
      renderHeaderCell: () => "Leave Type",
      renderCell: (item) => editId === item.id && editRow && editRow.type === "Leave" ? (
        <Dropdown value={editRow.leaveType} onOptionSelect={(_, d) => setEditRow(r => r ? { ...r, leaveType: d.optionValue as string } : r)}>
          {leaveTypes.map(t => <Option key={t} value={t}>{t}</Option>)}
        </Dropdown>
      ) : item.type === "Leave" ? item.leaveType : "",
      compare: (a, b) => (a.leaveType || "").localeCompare(b.leaveType || ""),
    },
    {
      columnId: "hours",
      renderHeaderCell: () => "Hours",
      renderCell: (item) => editId === item.id && editRow ? (
        <>
          <Input type="number" min={0} max={24} value={String(editRow.hours)} onChange={ev => setEditRow(r => r ? { ...r, hours: Number(ev.target.value) } : r)} style={{ width: 60 }} />
          <span style={{ margin: '0 4px' }}>:</span>
          <Input type="number" min={0} max={59} value={String(editRow.minutes)} onChange={ev => setEditRow(r => r ? { ...r, minutes: Number(ev.target.value) } : r)} style={{ width: 50 }} />
        </>
      ) : `${item.hours}:${item.minutes.toString().padStart(2, "0")}`,
      compare: (a, b) => a.hours - b.hours || a.minutes - b.minutes,
    },
    {
      columnId: "billable",
      renderHeaderCell: () => "Billable",
      renderCell: (item) => editId === item.id && editRow ? (
        <Checkbox checked={!!editRow.billable} onChange={(_, d) => setEditRow(r => r ? { ...r, billable: !!d.checked } : r)} label="Billable" />
      ) : item.billable ? "Yes" : "No",
      compare: (a, b) => Number(a.billable) - Number(b.billable),
    },
    {
      columnId: "location",
      renderHeaderCell: () => "Location",
      renderCell: (item) => editId === item.id && editRow ? (
        <Input value={editRow.location || ""} onChange={ev => setEditRow(r => r ? { ...r, location: ev.target.value } : r)} />
      ) : item.location,
      compare: (a, b) => (a.location || "").localeCompare(b.location || ""),
    },
    {
      columnId: "costCode",
      renderHeaderCell: () => "Cost Code",
      renderCell: (item) => editId === item.id && editRow ? (
        <Input value={editRow.costCode || ""} onChange={ev => setEditRow(r => r ? { ...r, costCode: ev.target.value } : r)} />
      ) : item.costCode,
      compare: (a, b) => (a.costCode || "").localeCompare(b.costCode || ""),
    },
    {
      columnId: "notes",
      renderHeaderCell: () => "Notes",
      renderCell: (item) => editId === item.id && editRow ? (
        <Textarea value={editRow.notes || ""} onChange={ev => setEditRow(r => r ? { ...r, notes: ev.target.value } : r)} />
      ) : item.notes,
      compare: (a, b) => (a.notes || "").localeCompare(b.notes || ""),
    },
    {
      columnId: "status",
      renderHeaderCell: () => "Status",
      renderCell: (item) => editId === item.id && editRow ? (
        <Dropdown value={editRow.status} onOptionSelect={(_, d) => setEditRow(r => r ? { ...r, status: d.optionValue as string } : r)}>
          {statusOptions.map(s => <Option key={s} value={s}>{s}</Option>)}
        </Dropdown>
      ) : item.status,
      compare: (a, b) => a.status.localeCompare(b.status),
    },
    {
      columnId: "audit",
      renderHeaderCell: () => "Audit",
      renderCell: (item) => (
        <div style={{ fontSize: 12, color: tokens.colorNeutralForeground3 }}>
          <div>By: {item.createdBy}</div>
          <div>On: {item.createdOn?.slice(0, 10)}</div>
        </div>
      ),
      compare: () => 0,
    },
    {
      columnId: "actions",
      renderHeaderCell: () => "Actions",
      renderCell: (item) => editId === item.id ? (
        <>
          <Button appearance="primary" onClick={saveEdit} size="small">Save</Button>
          <Button onClick={cancelEdit} size="small" style={{ marginLeft: 8 }}>Cancel</Button>
        </>
      ) : (
        <Button appearance="subtle" onClick={() => startEdit(item.id)} size="small">Edit</Button>
      ),
      compare: () => 0,
    },
  ];

  // Render
  return (
    <div>
      {/* Filters */}
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <Dropdown
          value={filter.project}
          placeholder="Filter by project"
          onOptionSelect={(_, d) => setFilter(f => ({ ...f, project: d.optionValue as string }))}
          style={{ minWidth: 140 }}
        >
          <Option value="">All Projects</Option>
          {projects.map(p => <Option key={p} value={p}>{p}</Option>)}
        </Dropdown>
        <Dropdown
          value={filter.status}
          placeholder="Filter by status"
          onOptionSelect={(_, d) => setFilter(f => ({ ...f, status: d.optionValue as string }))}
          style={{ minWidth: 140 }}
        >
          <Option value="">All Statuses</Option>
          {statusOptions.map(s => <Option key={s} value={s}>{s}</Option>)}
        </Dropdown>
        <Input
          value={filter.search}
          onChange={e => setFilter(f => ({ ...f, search: e.target.value }))}
          placeholder="Search notes/project"
          style={{ minWidth: 200 }}
        />
      </div>

      {/* DataGrid */}
      <DataGrid items={filtered} columns={columns} />
    </div>
  );
}
