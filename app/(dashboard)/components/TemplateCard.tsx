"use client"

import React from "react";

const TemplateCard = () => {
  return (
    <div className="flex flex-col justify-between bg-primary p-8 rounded-md">
      <div className="space-y-6">
        <p className="w-max py-1 px-3 text-sm text-black bg-white rounded-full">
          New
        </p>
        <h1 className="text-2xl font-medium">We have a new invoice template</h1>
        <p>
          This new template provides more personalize way to help your bussness
          grow
        </p>
      </div>
      <button className="font-semibold p-4 text-lg text-primary bg-white  rounded-lg">Download</button>
    </div>
  );
};

export default TemplateCard;
