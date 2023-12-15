import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed w-full z-10 flex justify-between md:justify-around p-5 mb-5 dark:bg-zinc-900 ">
      <h3 className="font-extrabold text-xl">
        <Link href={"/"}>J</Link>
      </h3>
      <div>
        <ul className="flex gap-9">
          <li>
            <Link href={"/"}> Home</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
