const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export async function post(path, body){
  const res = await fetch(API_BASE + path, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return res.json();
}

export async function get(path){
  const res = await fetch(API_BASE + path, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
}
