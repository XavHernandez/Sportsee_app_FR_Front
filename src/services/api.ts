export async function getUser(id: number) {
  const data = await fetch(`http://localhost:3000/user/${id}`);
  const response = await data.json();
  return response.data;
}

export async function getActivity(id: number) {
  const data = await fetch(`http://localhost:3000/user/${id}/activity`);
  const response = await data.json();
  return response.data;
}

export async function getSessions(id: number) {
  const data = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
  const response = await data.json();
  return response.data;
}

export async function getPerformance(id: number) {
  const data = await fetch(`http://localhost:3000/user/${id}/performance`);
  const response = await data.json();
  return response.data;
}
