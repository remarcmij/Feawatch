'use strict';

export async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response failed!`);
  }
  return response.json();
}
