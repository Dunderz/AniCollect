"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  return (
    <div className="p-8">
      <div>Home</div>
      {!session && (
        <>
          <div className="cursor-pointer" onClick={() => router.push("signup")}>
            Sign Up
          </div>
          <div className="cursor-pointer" onClick={() => router.push("login")}>
            Sign In
          </div>
        </>
      )}
      {session && (
        <>
          <div className="text-white">{session?.data?.user?.email}</div>
          <div className="cursor-pointer" onClick={() => signOut()}>
            Logout
          </div>
          <div>omg</div>
        </>
      )}
    </div>
  );
}

Home.requireAuth = true;
