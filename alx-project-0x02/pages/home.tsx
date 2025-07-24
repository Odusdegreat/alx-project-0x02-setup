import React from "react";
import Header from "@/components/layout/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p>This is the homepage of our project.</p>
      </main>
    </>
  );
};

export default HomePage;
