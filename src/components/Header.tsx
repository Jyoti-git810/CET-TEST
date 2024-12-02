import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between py-3 px-20 bg-bluebg">
      <div>Header</div>
      <div>
        <Link href="/" className="p-5">
          Home
        </Link>
        <Link href="/mocktest" className="p-5">
          Mock online exam
        </Link>
      </div>
    </div>
  );
};

export default Header;
