import React from "react";
import Link from "next/link";
import appRoutes from "@contracts/appRoutes";

const Nav: React.FC = () => {
  return (
    <div className="py-2 flex justify-end bg-white">
      <div className="flex w-1/2 sm:w-1/3 md:w-1/6 justify-around text-lg">
        <Link href={appRoutes.root.index}>
          <a>Home</a>
        </Link>
        <Link href={appRoutes.root.login}>
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
