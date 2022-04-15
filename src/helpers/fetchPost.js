async function fetchPost(objToSend, endpoint, token) {
  const authorizationText = token ? { Authorization: 'Bearer ' + token } : {};
  const res = await fetch(process.env.REACT_APP_BASE_URL + endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authorizationText },
    body: JSON.stringify(objToSend),
  });
  const resInJson = await res.json();
  return res.status === 200 ? resInJson : false;
}

export default fetchPost;
