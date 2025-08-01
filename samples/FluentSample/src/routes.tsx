import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const TimeEntryPage = lazy(() => import("./pages/TimeEntryPage"));
const ApprovalsPage = lazy(() => import("./pages/ApprovalsPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/time-entry" element={<TimeEntryPage />} />
        <Route path="/approvals" element={<ApprovalsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
