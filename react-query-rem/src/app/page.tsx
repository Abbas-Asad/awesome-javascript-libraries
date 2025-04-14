"use client"
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, error, isLoading } = useQuery(['books'], () =>
    fetch('https://simple-books-api.glitch.me/books').then(res =>
      res.json()
    ))

  if (isLoading) return 'Loading...'

  if (error) return 'failed to load'
  return (
    <>
      <div>
        <h1>{data[0].id}</h1>
        <h1>{data[0].name}</h1>
        {/* <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{' '}
        <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong> */}
      </div>
    </>
  );
}
