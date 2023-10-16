import React from "react";

const CardDetailsBreak2 = () => {
  return (
    <>
      <div className="flex justify-center space-x-4">
        <div className="like p-2 cursor text-xl">
          <i className="fa fa-thumbs-o-up"></i>
          <span className="ml-1 text-lg">Like</span>
        </div>
        <div className="like p-2 cursor text-xl">
          <i className="fa fa-commenting-o"></i>
          <span className="ml-1 text-lg">Comment</span>
        </div>
        <div className="like p-2 cursor text-xl">
          <i className="fa fa-share"></i>
          <span className="ml-1 text-lg">Share</span>
        </div>
      </div>
      <h4 className="mb4 text-uppercase font-500 color-blue-100">
        Post a comment
      </h4>
      <form role="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="john@doe.com"
          />
        </div>
        <div className="form-group">
          <label>Comment</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Comment"
          ></textarea>
        </div>
        <div className="clearfix float-right">
          <button
            type="button"
            className="btn btn-primary btn-lg bg-blue-700 hover:bg-green-700"
          >
            Submit
          </button>
          <button
            className="btn btn-outline-primary btn-lg ml-1 shadow-none"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default CardDetailsBreak2;
