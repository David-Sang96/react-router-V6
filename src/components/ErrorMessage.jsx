import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorMessage = () => {
  const error = useRouteError();
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl pb-4">ErrorMessage</h2>
      <p className="pb-4">{error.message}</p>
      <Link to={""} className="bg-slate-800 px-4 py-2 rounded-md text-white">
        Home Page
      </Link>
    </div>
  );
};

export default ErrorMessage;
