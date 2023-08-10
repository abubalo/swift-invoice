import Image from "next/image";
import React from "react";

type Props = {
    src: string;
    name: string;
    email: string;
    amount: number;
};

const ClientCard = ({src, name, email, amount}: Props) => {
  return (
    <div id="client-profie" className="flex gap-3 p-4 border-y border-gray-800">
      <div className="w-[50px] h-[50px] overflow-hidden aspect-square rounded-full object-cover">
        <Image
          src={src}
          alt=""
          width={50}
          height={50}
          className="object-cover"
        />
      </div>
      <div className="w-full flex justify-between">
        <div>
          <h1 className="text-lg font-medium">{name}</h1>
          <p>{email}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">+${amount}</h3>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
