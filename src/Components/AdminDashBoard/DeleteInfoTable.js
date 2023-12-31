import React, { useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DeleteInfoTable = () => {
  const { id } = useParams(); // Get the card ID from the URL parameter
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      // Make an API request to delete the card by its ID
      await axios.delete(`http://localhost:5000/post/delete-blogById/${id}`);

      // Set the isDeleted state to true to indicate successful deletion
      setIsDeleted(true);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <div className="mt-[100px]">
      {!isDeleted ? (
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to delete this post?
            </p>
            <p className="text-gray-600 mb-4">Post ID: {id}</p>
            <div className="flex justify-end">
              <Link
                to={`/viewallpost`}
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded mr-2"
              >
                Cancel
              </Link>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-green-600 text-center">
          Post with ID:{id} has been successfully deleted.
        </div>
      )}
    </div>
  );
};

export default DeleteInfoTable;
