import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OneBHK = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/post/get-blog-posts/category/onebhk"
        );
        if (response.status !== 200) {
          throw new Error("Card not found");
        }

        setPosts(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);
  if (isLoading) {
    return (
      <div className="bg-[red] font-bold flex align-center justify-center text-4xl w-full h-[auto] mt-[70px]">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[red] font-bold flex align-center justify-center text-4xl w-full h-[auto] mt-[70px]">
        Error: {error}
      </div>
    );
  }
  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-0 mt-[80px]">
      {posts.map((item, key) => (
        <Link
          to={`/home/cards/${item._id}`}
          key={key}
          className="hover:text-black hover:font-semibold transition-all duration-500 overflow-hidden"
        >
          <div
            className="w-full max-w-md shadow-md bg-[aliceblue] mx-auto"
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              className="object-cover object-center rounded-t-xl w-full h-48 hover:scale-95 transition-all duration-500 overflow-hidden"
              src={"http://localhost:5000/" + item.image[0]}
              alt=""
              style={{
                minHeight: "150px",
                minWidth: "50px",
                borderRadius: "10px 10px 0 0",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
              }}
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600 truncate">
                <ion-icon name="person-outline"></ion-icon>
                {item.username}
              </h4>
              <h4 className="text-xl font-semibold text-green-600 truncate">
                <ion-icon name="location-outline"></ion-icon>
                {item.location}
              </h4>
              <p
                className="flex items-center mt-2 font-semibold text-gray-700"
                style={{ textTransform: "uppercase" }}
              >
                <ion-icon name="copy-outline"></ion-icon>
                {item.category}
              </p>
              <p
                className="flex items-center mt-2 font-semibold text-gray-700"
                style={{ textTransform: "uppercase" }}
              >
                <ion-icon name="call-outline"></ion-icon>
                {item.contactno}
              </p>
              <div
                className="mb-2 leading-normal text-auto overflow-hidden"
                style={{
                  maxHeight: "1.5em",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{ whiteSpace: "nowrap" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      item.description.length > 20
                        ? `${item.description.slice(0, 40)} ...`
                        : item.description,
                  }}
                />
              </div>
              <button className="px-4 py-2 text-sm text-white bg-red-500 rounded shadow">
                Read more
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OneBHK;
