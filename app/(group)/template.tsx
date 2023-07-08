"use client";
export const dynamic = "force-dynamic";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>nested template - {Math.random()}</p>
      {children}
    </>
  );
}
