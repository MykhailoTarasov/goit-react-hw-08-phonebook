import { LoginForm } from "components/LoginForm/LoginForm";
import { Loading } from "notiflix";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";

export default function Login() {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
        {isLoading && <Loading/>}
        {error && <span>Whoops... Error! Please, reload this page!</span>}
      </div>
    );
  }