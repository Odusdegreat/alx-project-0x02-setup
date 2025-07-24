// components/common/Card.tsx
import { CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => (
  <div className="p-4 border rounded-lg shadow-md bg-white dark:bg-zinc-900">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700 dark:text-gray-300">{content}</p>
  </div>
);
