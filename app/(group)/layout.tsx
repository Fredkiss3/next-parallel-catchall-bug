"use client";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>nested layout - {Math.random()}</p>
      <br />
      {children}
    </>
  );
}
