import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const isHiddenRoute = ["/login", "/register"].includes(router.pathname); // Add "/home" if needed

  if (isHiddenRoute) return null;

  return (
    <header>
      <h1>My Header</h1>
    </header>
  );
};
