import { useAuth } from "hooks";
import { Notify } from "notiflix";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { StyledButton } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const handlerOnClick = () => {
      dispatch(logOut());
      Notify.success(`You are logged out of your account`);
    };
  
    return (
      <div>
        <p>Welcome, {user.name}</p>
        <StyledButton type="button" onClick={() => handlerOnClick()}>
          Log out
        </StyledButton>
      </div>
    );
  };