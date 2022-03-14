'use strict';
// Fetch Data from Main API
export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response failed!`);
  }
  return response.json();
};
