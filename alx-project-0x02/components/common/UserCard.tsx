import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-md shadow">
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="text-sm text-gray-700">{email}</p>
      <p className="text-sm text-gray-600">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
