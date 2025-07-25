"use client";

import React, { useState } from "react";

const PostModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setPostContent("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Post submitted:", postContent);
    handleClose();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Post
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">New Post</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="What's on your mind?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="w-full border p-2 mb-4 rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;
