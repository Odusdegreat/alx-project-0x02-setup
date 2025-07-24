// pages/home.tsx

import React from "react";
import Card from "@/components/common/Card";

const Home = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
      <Card
        title="Introduction to EduChain"
        content="EduChain is a decentralized student management system built for transparency and security."
      />
    </main>
  );
};

export default Home;
