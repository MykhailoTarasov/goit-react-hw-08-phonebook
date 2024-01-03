import { useAuth } from "hooks";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
    );
  };