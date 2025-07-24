import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="border rounded-md p-4 shadow-md mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">User ID: {userId}</p>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
