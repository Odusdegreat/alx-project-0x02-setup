import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();

  // Hide header on these routes
  const isHiddenRoute = ["/login", "/register", "/about"].includes(
    router.pathname
  );

  // Optional effect: log or act when user navigates to /about
  useEffect(() => {
    if (router.pathname === "/about") {
      console.log("User navigated to /about");
      // You can do more things here if needed
    }
  }, [router.pathname]);

  if (isHiddenRoute) return null;

  return (
    <header>
      <h1>My Header</h1>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
