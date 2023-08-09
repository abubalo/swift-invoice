"use client";

import React, { ReactNode } from "react";

type Props = {
  title: string;
  content: string;
  icon: ReactNode;
  stats: string;
};
const Card = ({ title, content, icon, stats }: Props) => {
  return (
    <div className=" flex-wrap  p-8 space-y-4 border border-gray-700 rounded-md ">
      <div className="flex justify-between">
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-lg text-gray-500">{icon}</p>
      </div>
      <div>
        <div className="space-y-2">
          <h1 className=" text-4xl text-gray-300 font-semibold">{content}</h1>
          <p className="text-sm font-medium text-gray-700  ">{stats}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
