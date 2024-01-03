import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
      <span>
        Sorry, something went wrong. Click the link to go to the{' '}
        <NavLink to="/">home page</NavLink>.
      </span>
    );
  };
  
  export default NotFoundPage;