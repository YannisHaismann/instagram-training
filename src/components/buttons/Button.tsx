import Image from "next/image";
import React from "react";

interface PropsType {
  title: string;
  action: () => void;
  logo?: string;
}

export default function Button({ title, action, logo }: PropsType) {
  return (
    <div
      className="flex cursor-pointer gap-3 rounded-lg border bg-blue-200 p-3 hover:bg-blue-300 "
      onClick={action}
    >
      {logo && <Image width={24} height={24} alt="logo-img" src={logo} />}
      <span>{title}</span>
    </div>
  );
}
