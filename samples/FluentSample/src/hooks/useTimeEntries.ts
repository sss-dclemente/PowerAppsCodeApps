import { useState, useEffect } from "react";
import { getTimeEntries } from "../api/dataverseApi";

export function useTimeEntries(accessToken: string) {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    if (!accessToken) return;
    getTimeEntries(accessToken).then(setEntries);
  }, [accessToken]);
  return { entries };
}
