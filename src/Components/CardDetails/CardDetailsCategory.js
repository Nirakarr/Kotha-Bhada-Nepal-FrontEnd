import React from "react";
import { Link } from "react-router-dom";

const CardDetailsCategory = ({ categoryCard }) => {
  // Check if categoryCard is defined and not an empty array
  if (!categoryCard || categoryCard.length === 0) {
    return null; // Return null or a loading message if there's no data yet
  }

  // Sort the post posts by updated date in descending order
  const sortedCategoryCard = categoryCard.sort((a, b) => {
    const dateA = new Date(a.updatedDate || a.date);
    const dateB = new Date(b.updatedDate || b.date);
    return dateB - dateA;
  });

  // Slice the sorted array to get the latest three posts
  const latestThreePosts = sortedCategoryCard.slice(0, 3);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use "auto" for instant scroll
    });
  };

  return (
    <>
      <div>
        <h4 className="sidebar-title">Room Post of this Categories</h4>
        <ul
          className="list-styled p-8 pl-[33%]"
          style={{
            border: "2px solid red",
            backgroundColor: "#ececec",
            borderRadius: "10px",
          }}
        >
          {latestThreePosts.map((post) => {
            // Exclude the current post
            if (post._id !== categoryCard[0]._id) {
              return (
                <li className="media" key={post.id}>
                  <Link
                    to={`/home/cards/${post._id}`}
                    style={{ textDecoration: "none" }}
                    onClick={scrollToTop}
                  >
                    <img
                      className="d-flex img-fluid w-[50%]"
                      src={`http://localhost:5000/${post.image}`}
                      alt="image1"
                    />
                    <div className="media-body mb-5">
                      <h5
                        className="mt-2 mb-1"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        {post.location}
                      </h5>
                      <small
                        style={{
                          fontSize: "14px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {post.date}
                      </small>
                    </div>
                  </Link>
                </li>
              );
            }
            return null; // Exclude the current post from rendering
          })}
        </ul>
      </div>
    </>
  );
};

export default CardDetailsCategory;
