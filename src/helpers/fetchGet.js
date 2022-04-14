async function fetchGet(endpoint, token) {
  const res = await fetch(process.env.REACT_APP_BASE_URL + endpoint, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const resInJson = await res.json();
  return resInJson;
}

export default fetchGet;
