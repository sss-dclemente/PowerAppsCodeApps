import { useState, useEffect } from "react";
import { getProjects } from "../api/dataverseApi";

export function useProjects(accessToken: string) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (!accessToken) return;
    getProjects(accessToken).then(setProjects);
  }, [accessToken]);
  return { projects };
}
