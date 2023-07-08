import Link from "next/link";

export default function Layout({
  children,
  parallel,
}: {
  children: React.ReactNode;
  parallel: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/a">A</Link>
          </li>
          <li>
            <Link href="/b">B</Link>
          </li>
        </ul>
        <h1>Children</h1>
        {children}
        <h1>Parallel</h1>
        {parallel}
      </body>
    </html>
  );
}
