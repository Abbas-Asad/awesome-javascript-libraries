"use client"
import useSWR from "swr";

export default function Home() {
  const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR("api/books", fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <div>Book id: {data[0].id}</div>
      <div>Book name: {data[0].name}</div>
    </>
  );
}
