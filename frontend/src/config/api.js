const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const fetchJson = async (path, options) => {
  const response = await fetch(`${API_BASE_URL}${path}`, options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};

export { API_BASE_URL, fetchJson };
