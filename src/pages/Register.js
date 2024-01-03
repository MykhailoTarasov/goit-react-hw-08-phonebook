import Loader from "components/Loader/Loader";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";

export default function Register() {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
        {isLoading && <Loader/>}
        {error && <span>Whoops... Error! Please, reload this page!</span>}
      </div>
    );
  }