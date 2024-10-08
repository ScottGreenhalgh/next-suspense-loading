import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/fast">Fast</Link>
      <Link href="/slow">Slow</Link>
      <Link href="/broken">Broken</Link>
    </nav>
  );
}
