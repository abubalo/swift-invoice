import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="w-max overflow-hidden rounded-full aspect-square">
      <Image
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
        alt="user image"
        width={50}
        height={50}
        className="rounded-full overflow-hidden"
      />
    </div>
  );
};

export default Avatar;
