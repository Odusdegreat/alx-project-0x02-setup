import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<Omit<PostProps, "id">> = ({
  title,
  content,
  userId,
}) => {
  return (
    <div className="border p-4 rounded-md shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">User ID: {userId}</p>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default PostCard;
