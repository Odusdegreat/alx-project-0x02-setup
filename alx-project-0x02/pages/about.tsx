import React from "react";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <div className="flex gap-4">
        <Button label="Small Rounded" size="small" shape="rounded-sm" />
        <Button label="Medium Rounder" size="medium" shape="rounded-md" />
        <Button label="Large Pill" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;
