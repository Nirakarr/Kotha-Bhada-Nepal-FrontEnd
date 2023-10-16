import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";

const UpdateInfoTable = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const [contactno, setContactNo] = useState("");
  const [username, setName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  const updatePost = async () => {
    const formData = new FormData();
    formData.append("name", username);
    formData.append("contactno", contactno);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("image", image);

    try {
      const result = await fetch(
        `http://localhost:5000/post/update-blogById/${id}`,
        {
          method: "PUT",
          body: formData,
          headers: {},
        }
      );
      if (result.status === 200) {
        setIsPosted(true); // Set the state to indicate successful posting
      } else {
        console.log("Server responded with a non-200 status code.");
        // Handle the error appropriately, e.g., show an error message to the user.
      }
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  // Update state variables as the user interacts with the form
  const handleContactChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle CKEditor content changes
  const handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  // Handle CKEditor content changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="md:max-w-[1000] sm:max-w-[auto] max-w-md mx-auto md:mt-[100px] mt-[180px] p-4 bg-white shadow-lg rounded-lg ">
        <h2 className="md:text-xl text-l font-semibold">Update Room Post</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="string"
            id="name"
            name="name"
            value={username}
            onChange={handleNameChange}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Contact Number
          </label>
          <input
            type="string"
            id="number"
            name="number"
            value={contactno}
            onChange={handleContactChange}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={handleLocationChange}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full p-2 border rounded focus:border-blue-500"
          >
            <option>Select a category</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="onebhk">1BHK Room</option>
            <option value="twobhk">2BHK Room</option>
            <option value="others">Other Rooms</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-1">
            Featured Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <CKEditor
            editor={ClassicEditor}
            id="description"
            name="description"
            data={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={updatePost}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            Update Room Post
          </button>
        </div>
        {isPosted && (
          <div className="text-green-600 mt-2">
            Room post updated successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateInfoTable;
