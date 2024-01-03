import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};