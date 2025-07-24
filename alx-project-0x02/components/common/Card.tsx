// components/common/Card.tsx

import { ReactNode } from "react";
import classNames from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "rounded-2xl shadow-md bg-white dark:bg-zinc-900 p-4 transition duration-300 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
