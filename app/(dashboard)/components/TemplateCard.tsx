"use client";

import React from "react";

const TemplateCard = () => {
  return (
    <div className="basis-2/5 relative flex flex-col justify-between bg-primary p-8 rounded-md overflow-hidden">
      <div className="space-y-6">
        <p className="w-max py-1 px-3 text-sm text-black bg-white rounded-full">
          New
        </p>
        <h1 className="text-2xl font-medium">Introducing our latest invoice template</h1>
        <p>
        Designed to fuel the growth of your business, this cutting-edge template offers a highly personalized approach that sets the stage for your success.
        </p>
      </div>
      <button className="font-semibold p-4 text-lg text-primary bg-white  rounded-lg z-10">
        Download
      </button>
      <div className="absolute w-[320px] h-[320px] border border-white/80 -bottom-24 -right-8 rounded-tl-[200px] rounded-tr-[60px]"></div>
      <div className="absolute w-[300px] h-[300px] border border-gray-300 -bottom-24 -right-8 rounded-tl-[200px] rounded-tr-[60px]"></div>
      <div className="absolute w-[280px] h-[280px] border border-gray-300 -bottom-24 -right-8 rounded-tl-[200px] rounded-tr-[60px]"></div>
      <div className="absolute w-[240px] h-[240px] border border-gray-300 -bottom-24 -right-8 rounded-tl-[200px] rounded-tr-[60px]"></div>
      <div className="absolute w-[200px] h-[200px] border border-gray-300 -bottom-24 -right-8 rounded-tl-[200px] rounded-tr-[60px]"></div>
    </div>
  );
};

export default TemplateCard;
