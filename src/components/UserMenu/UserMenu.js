import { useAuth } from "hooks";
import { Notify } from "notiflix";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

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
        <button type="button" onClick={() => handlerOnClick()}>
          Log out
        </button>
      </div>
    );
  };