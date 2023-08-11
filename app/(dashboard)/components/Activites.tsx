import Image from "next/image";
import React from "react";
import ClientCard from "./ClientCard";

const Activites = () => {
  return (
    <div className="w-full h-max p-4 border border-gray-700 lg:w-[70%] space-y-4 rounded-md">
      <div>
        <h1 className="text-xl font-semibold">Recent invoices</h1>
        <p className="text-sm text-gray-300">You made 65 sales this month.</p>
      </div>
      <div>
        <ClientCard
          src={
            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          }
          name={"John Leo"}
          email={"johnleo@gmail.com"}
          amount={3000}
        />
        <ClientCard
          src={
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          }
          name={"Rafeal Luma"}
          email={"rafealluma@gmail.com"}
          amount={5200}
        />
        <ClientCard
          src={
            "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80"
          }
          name={"Alicia Mayor"}
          email={"aliciamayor@gmail.com"}
          amount={3500}
        />
        <ClientCard
          src={
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          name={"Elvis Martinez"}
          email={"elvismartinez@gmail.com"}
          amount={7000}
        />
      </div>
    </div>
  );
};

export default Activites;
