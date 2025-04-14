import { getSessionData } from "../../lib/auth";

export default async function Dashboard() {
  const session = await getSessionData();

  if (!session) {
    return <p>Access Denied. Please Sign In.</p>;
  }

  return <p>Welcome, {session.user?.name}!</p>;
}
