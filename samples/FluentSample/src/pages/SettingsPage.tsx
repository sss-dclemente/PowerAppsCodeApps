import React from "react";
import { UserPreferences } from "../components/UserPreferences";
import { Card, Text } from "@fluentui/react-components";

export default function SettingsPage() {
  return (
    <Card style={{ maxWidth: 480, margin: "32px auto", padding: 32 }}>
      <Text size={600} weight="semibold" as="h2" style={{ marginBottom: 16 }}>
        User Settings
      </Text>
      <UserPreferences />
    </Card>
  );
}
