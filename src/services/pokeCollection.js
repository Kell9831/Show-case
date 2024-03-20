const BASE_URL = "https://poke-collection-lite-production.up.railway.app/api";

export async function getFavorites(username) {
  const url = `${BASE_URL}/${username}/favorites`;

  const response = await fetch(url);
  if (response.ok) {
    const body = await response.json();
    if (body.ok) {
      return body.data;
    } else {
      throw new Error(body.error);
    }
  } else {
    throw new Error(response.status);
  }
}

export async function createFavorite(username, pokemon) {
  const url = `${BASE_URL}/${username}/favorites`;

  const options = {
    method: "POST",
    body: JSON.stringify(pokemon),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  if (response.ok) {
    const body = await response.json();
    if (body.ok) {
      return body.data;
    } else {
      throw new Error(body.error);
    }
  } else {
    throw new Error(response.status);
  }
}

export async function deleteFavorites(username, id) {
  const url = `${BASE_URL}/${username}/favorites/${id}`;

  const response = await fetch(url, { method: "DELETE" });
  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.error);
  }
}
