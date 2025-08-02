import React from "react";
import { usePreferences, UserPreferences } from "../context/PreferencesContext";
import { Field, Input, Button, Dropdown, Option, Switch, Text } from "@fluentui/react-components";

const locations = ["Remote", "Office", "Hybrid"];
const themes = ["System", "Light", "Dark"];

  const { preferences, setPreferences } = usePreferences();
  return (
    <form onSubmit={e => { e.preventDefault(); setPreferences({ ...preferences }); }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Field label="Default Project">
        <Input value={preferences.defaultProject || ""} onChange={e => setPreferences({ ...preferences, defaultProject: e.target.value })} />
      </Field>
      <Field label="Default Hours per Day">
        <Input type="number" min={0} max={24} value={preferences.defaultHoursPerDay ?? ""} onChange={e => setPreferences({ ...preferences, defaultHoursPerDay: e.target.value })} />
      </Field>
      <Field label="Default Location">
        <Dropdown value={preferences.defaultLocation || ""} onOptionSelect={(_, d) => setPreferences({ ...preferences, defaultLocation: d.optionValue })}>
          {locations.map(loc => <Option key={loc} value={loc}>{loc}</Option>)}
        </Dropdown>
      </Field>
      <Field label="Preferred Theme">
        <Dropdown value={preferences.theme || "System"} onOptionSelect={(_, d) => setPreferences({ ...preferences, theme: d.optionValue })}>
          {themes.map(t => <Option key={t} value={t}>{t}</Option>)}
        </Dropdown>
      </Field>
      <Field label="Enable Notifications">
        <Switch checked={!!preferences.notifications} onChange={(_, d) => setPreferences({ ...preferences, notifications: d.checked })} label={preferences.notifications ? "On" : "Off"} />
      </Field>
      <Button type="submit" appearance="primary">Save Preferences</Button>
      <Text size={200} style={{ color: '#888', marginTop: 8 }}>Your preferences are saved locally in this demo.</Text>
    </form>
  );
}
