import { Link, useLoaderData } from "react-router-dom";

const HotelsList = () => {
  const fetchData = useLoaderData();
  return (
    <div className="">
      {fetchData?.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
          <p className="bg-slate-900 mt-5 p-3 ">{data.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default HotelsList;

export const ApiFetchLoader = async () => {
  const res = await fetch("http://localhost:3000/HotelReviews");
  if (!res.ok) {
    throw new Error("fetching data failed");
  }
  return res.json();
};
