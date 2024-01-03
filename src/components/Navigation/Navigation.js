import { useAuth } from "hooks";
import { Link, Nav } from "./Navigation.Styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <Nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </Nav>
    );
  };