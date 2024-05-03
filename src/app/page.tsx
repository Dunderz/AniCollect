"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      <div>NextBeat</div>
      {!session.data && (
        <>
          <div className="cursor-pointer" onClick={() => router.push("signup")}>
            Sign Up
          </div>
          <div className="cursor-pointer" onClick={() => router.push("login")}>
            Sign In
          </div>
        </>
      )}
      {session.data && (
        <>
          <div className="text-white">{session?.data?.user?.email}</div>
          <div className="cursor-pointer" onClick={handleSignOut}>
            Logout
          </div>
        </>
      )}
    </div>
  );
}

Home.requireAuth = true;
