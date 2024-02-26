import { useLoaderData } from "react-router";

const HotelReviewDetail = () => {
  const data = useLoaderData();
  return (
    <section>
      {data && (
        <div className="bg-stone-500  p-3 mt-5 rounded-md">
          <p className="text-3xl pb-3 font-mono">{data.name}</p>
          <p className="pb-2">Price - {data.price}</p>
          <p>Review - {data.about}</p>
        </div>
      )}
    </section>
  );
};

export default HotelReviewDetail;

export const FetchDetails = async ({ params }) => {
  const res = await fetch("http://localhost:3000/HotelReviews/" + params.id);
  if (!res.ok) {
    throw new Error("Fetching details failed");
  }
  return res.json();
};
