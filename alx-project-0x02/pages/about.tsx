import React from "react";
import Header from "@/components/layouts/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>This is the about page of our ALX project.</p>
      </main>
    </>
  );
};

export default AboutPage;
