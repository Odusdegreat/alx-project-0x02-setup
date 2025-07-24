import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();

  // Hide header on these routes
  const isHiddenRoute = ["/login", "/register"].includes(router.pathname);

  // Optional: do something when user navigates to /home
  useEffect(() => {
    if (router.pathname === "/home") {
      console.log("User navigated to /home");
      // Add any logic you want here (e.g., analytics, UI changes, etc.)
    }
  }, [router.pathname]);

  if (isHiddenRoute) return null;

  return (
    <header>
      <h1>My Header</h1>
      <nav>
        <Link href="/">Root</Link> | <Link href="/home">Home</Link> |{" "}
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
