import React from "react";
import { usePreferences } from "../context/PreferencesContext";
import { Field, Input, Button } from "@fluentui/react-components";

export function UserPreferences() {
  const { preferences, setPreferences } = usePreferences();
  // Example: default project
  return (
    <form onSubmit={e => { e.preventDefault(); setPreferences({ ...preferences }); }}>
      <Field label="Default Project">
        <Input value={preferences.defaultProject || ""} onChange={e => setPreferences({ ...preferences, defaultProject: e.target.value })} />
      </Field>
      <Button type="submit">Save Preferences</Button>
    </form>
  );
}
