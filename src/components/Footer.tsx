import React from "react";

const LINKS = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "API",
  "Privacy",
  "Terms",
  "Top Accounts",
  "Locations",
  "Instagram Lite",
  "Contact Uploading & Non-Users",
  "Digital Collectibles Privacy Notice",
  "Meta Verified",
];

export default function Footer() {
  return (
    <div className="mb-8 flex flex-col gap-4 font-Segoe text-sm font-normal text-gray-500">
      <div className="flex flex-wrap justify-center gap-2 px-10">
        {LINKS.map((link) => (
          <span key={link}>{link}</span>
        ))}
      </div>
      <div className="flex justify-center gap-5">
        <span>English</span>
        <span>© 2023 Instagram from Meta</span>
      </div>
    </div>
  );
}
