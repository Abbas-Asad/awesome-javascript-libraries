"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()} className="border p-2 rounded cursor-pointer hover:bg-black hover:text-white transition-all">
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={() => signIn("github")} className="border p-2 rounded cursor-pointer hover:bg-black hover:text-white transition-all">
          Sign In with GitHub
        </button>
      )}
    </div>
  );
}