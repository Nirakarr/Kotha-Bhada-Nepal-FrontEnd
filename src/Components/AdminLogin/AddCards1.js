import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddCards1 = () => {
  const [contactno, setContactNo] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [isPosted, setIsPosted] = useState(false);
  const addCards = async () => {
    const formData = new FormData();
    formData.append("contactno", contactno);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("image", image);

    try {
      const result = await fetch("http://localhost:5000/post/add-post", {
        method: "POST",
        body: formData,
      });
      const response = await result.json();
      console.log(response);

      if (result.ok) {
        setIsPosted(true); // Set the state to indicate successful posting
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="md:max-w-[1000] sm:max-w-[auto] max-w-md mx-auto md:mt-[100px] mt-[180px] p-4 bg-white shadow-lg rounded-lg ">
        <h2 className="md:text-xl text-l font-semibold">New Blog Post</h2>
        <div className="mb-4">
          <label htmlFor="contactno" className="block font-medium mb-1">
            Contact No.
          </label>
          <input
            type="text"
            id="contactno"
            name="contactno"
            value={contactno}
            onChange={(e) => setContactNo(e.target.value)}
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
            onChange={(e) => setLocation(e.target.value)}
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
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-500"
          >
            <option>Select a category</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="onebhk">One BHK</option>
            <option value="twobhk">Two BHK</option>
            <option value="others">Others</option>
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
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Room Description:
          </label>
          <CKEditor
            editor={ClassicEditor}
            id="description"
            name="description"
            data={description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={addCards}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            Add Blog Post
          </button>
        </div>
        {isPosted && (
          <div className="text-green-600 mt-2">
            Blog post added successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCards1;
