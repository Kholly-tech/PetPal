import React from "react";
import logo from "../../assets/icons/petpal_logo.svg";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    //#00897B
    <nav className="w-full bg-primary h-12 flex items-center justify-between px-4">
      <div className="flex items-center gap-2 ">
        <img src={logo} width={48} alt="Logo" />
        <h1 className="text-secondary text-2xl font-semibold">
          PetPal
        </h1>
      </div>

      <div className="flex items-center gap-16 text-white">
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/adoption"}>Adoption Process</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>

      <div className="mr-8">
        <Button
          title={"Adopt"}
          className={
            "bg-secondary text-primary rounded-xl px-6 font-medium"
          }
          loading={false}
        />
      </div>
    </nav>
  );
};

export default NavBar;
