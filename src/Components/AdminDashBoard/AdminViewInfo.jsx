import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AdminViewInfo = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/post/get-blog-posts/${id}`
        );

        if (response.status !== 200) {
          throw new Error("Card not found");
        }
        setCard(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="md:max-w-[1000] sm:max-w-[auto] max-w-md mx-auto md:mt-[100px] mt-[180px] p-4 bg-white shadow-lg rounded-lg ">
          <h2 className="md:text-xl text-l font-semibold">View Blog Post</h2>
          <img
            src={"http://localhost:5000/" + card.image[0]}
            className="w-full h-64 object-cover mb-4"
            alt="Card Image"
          />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {card.title}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            {new Date(card.updatedDate || card.date).toDateString()}
          </p>
          <p className="text-lg text-gray-600 mb-2">Author: {card.author}</p>
          <p className="text-lg text-gray-600 mb-2">
            Category: {card.category}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Description:</strong>
          </p>
          <div
            className="text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: card.description }}
          />
          <Link to={`/updateinfo/${id}`}>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Edit
            </button>
          </Link>
          <Link to={`/deleteinfo/${id}`}>
            <button className="mt-4 ml-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminViewInfo;
