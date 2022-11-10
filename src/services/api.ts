export async function getUser(id: number) {
  try {
    const data = await fetch(`http://localhost:3000/user/${id}`);
    const response = await data.json();
    return response.data;
  } catch (err) {
    throw new Error("Erreur avec les données utilisateurs !");
  }
}

export async function getActivity(id: number) {
  try {
    const data = await fetch(`http://localhost:3000/user/${id}/activity`);
    const response = await data.json();
    return response.data;
  } catch (err) {
    throw new Error("Erreur avec les données d'activités !");
  }
}

export async function getSessions(id: number) {
  try {
    const data = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
    const response = await data.json();
    return response.data;
  } catch (err) {
    throw new Error("Erreur avec les données de sessions !");
  }
}

export async function getPerformance(id: number) {
  try {
    const data = await fetch(`http://localhost:3000/user/${id}/performance`);
    const response = await data.json();
    return response.data;
  } catch (err) {
    throw new Error("Erreur avec les données de performances !");
  }
}
