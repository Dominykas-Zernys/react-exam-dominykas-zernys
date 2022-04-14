async function fetchPost(objToSend, endpoint) {
  const res = await fetch(process.env.REACT_APP_BASE_URL + endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(objToSend),
  });
  return res.status === 200 ? true : false;
}

export default fetchPost;
