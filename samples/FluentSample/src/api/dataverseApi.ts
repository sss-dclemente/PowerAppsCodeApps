const API_BASE = "https://<YOUR_ENVIRONMENT>.crm.dynamics.com/api/data/v9.2";

export async function fetchDataverse(endpoint: string, accessToken: string, options: RequestInit = {}) {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
      "OData-MaxVersion": "4.0",
      "OData-Version": "4.0",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function getProjects(accessToken: string) {
  return fetchDataverse("new_projects", accessToken);
}

export async function createTimeEntry(entry: any, accessToken: string) {
  return fetchDataverse('new_timeentries', accessToken, {
    method: 'POST',
    body: JSON.stringify(entry),
  });
}

export async function getTimeEntries(accessToken: string, filter = '') {
  return fetchDataverse(`new_timeentries${filter ? `?$filter=${filter}` : ''}`, accessToken);
}
