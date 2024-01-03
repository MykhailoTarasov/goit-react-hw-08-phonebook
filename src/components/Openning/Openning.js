import { NavLink } from "react-router-dom";

export const Opening = () => {
    return (
      <div>
        <p>
          It is designed to help your brain not remember numbers, but write them
          down.
        </p>
        <NavLink to={'/contacts'}>Add contact</NavLink>
      </div>
    );
  };