import { AuthNav } from "components/AuthNav/AuthNav";
import { Container } from "components/Layout";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { StyledHeader } from "./Header.Styled";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <StyledHeader>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledHeader>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};