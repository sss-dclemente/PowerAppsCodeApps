import React from "react";
import { Card, Text } from "@fluentui/react-components";
import { getTotalHours } from "../utils/reporting";

export function AnalyticsDashboard({ entries }: { entries: any[] }) {
  return (
    <Card>
      <Text size={500} weight="semibold">Total Hours: {getTotalHours(entries)}</Text>
      {/* Add more analytics widgets here */}
    </Card>
  );
}
