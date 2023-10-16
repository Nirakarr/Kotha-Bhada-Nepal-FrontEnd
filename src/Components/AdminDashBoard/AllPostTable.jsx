import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import THInfoTable from "./THInfoTable";

const AllPostTable = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/post/get-blog-posts"
      );
      console.log(response.data.data);
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use "auto" for instant scroll
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-grey-500">
                <THInfoTable />
                <tbody className="bg-red-100 divide-y divide-gray-500">
                  {posts.map((post, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          to={`/admin/viewinfo/${post._id}`}
                          onClick={scrollToTop}
                        >
                          <div className="text-sm font-medium overflow-x-auto">
                            {post.location}
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          to={`/admin/viewinfo/${post._id}`}
                          onClick={scrollToTop}
                        >
                          <div className="text-sm font-medium overflow-x-auto">
                            {post.contactno}
                          </div>
                        </Link>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <Link
                          to={`/admin/viewinfo/${post._id}`}
                          onClick={scrollToTop}
                        >
                          <div
                            style={{ whiteSpace: "nowrap" }}
                            dangerouslySetInnerHTML={{
                              __html:
                                post.description.length > 20
                                  ? `${post.description.slice(0, 40)} ...`
                                  : post.description,
                            }}
                          />
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-sm">
                          {new Date(
                            post.updatedDate || post.date
                          ).toDateString()}
                        </div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap hidden md:table-cell"
                        style={{ textTransform: "uppercase" }}
                      >
                        <div className="text-sm font-medium">
                          {post.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <Link
                          to={`/admin/viewinfo/${post._id}`}
                          onClick={scrollToTop}
                        >
                          <img
                            className="h-[50px] w-[50px]"
                            src={"http://localhost:5000/" + post.image[0]}
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="whitespace-nowrap text-right text-sm font-bold">
                        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end items-center">
                          <Link
                            to={`/viewinfo/${post._id}`}
                            onClick={scrollToTop}
                          >
                            <button
                              className="text-green-600 ml-2 px-4 py-2 mt-1 hover:bg-blue-500 hover:text-white"
                              style={{
                                border: "0.5px solid",
                                borderRadius: "10px",
                              }}
                            >
                              <ion-icon
                                name="eye-outline"
                                className="icon-large"
                              ></ion-icon>
                              View
                            </button>
                          </Link>
                          <Link
                            to={`/updateinfo/${post._id}`}
                            onClick={scrollToTop}
                          >
                            <button
                              className="text-blue-600 hover:text-blue-900 ml-2 rounded-lg px-4 py-2 mt-1 hover:bg-green-500"
                              style={{
                                border: "0.5px solid",
                                borderRadius: "10px",
                              }}
                            >
                              <ion-icon name="create-outline"></ion-icon>
                              Update
                            </button>
                          </Link>
                          <Link to={`/deleteinfo/${post._id}`}>
                            <button
                              className="text-red-600 hover:text-black ml-2 px-4 py-2 border-indigo-600 mt-1 hover:bg-red-500"
                              style={{
                                border: "0.5px solid",
                                borderRadius: "10px",
                              }}
                              onClick={scrollToTop}
                            >
                              <ion-icon name="trash-outline"></ion-icon>
                              Delete
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPostTable;
