import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center  mt-10">
      <p className="text-3xl pb-10">
        The Page You are looking for does not exist!
      </p>
      <Link to={""} className="bg-slate-800 px-4 py-2 rounded-md">
        Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
