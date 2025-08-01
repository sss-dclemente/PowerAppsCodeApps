import React from "react";
import { Alert } from "@fluentui/react-components";

export function NotificationBar({ message, type = "info" }: { message: string, type?: "info" | "error" | "success" }) {
  return (
    <Alert intent={type}>{message}</Alert>
  );
}
