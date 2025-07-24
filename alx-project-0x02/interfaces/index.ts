import React from "react";

type CardProps = {
  title: string;
  content: string;
} & React.HTMLAttributes<HTMLDivElement>; // ✅ allows ...rest

const Card: React.FC<CardProps> = ({ title, content, ...rest }) => {
  return (
    <div {...rest}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
