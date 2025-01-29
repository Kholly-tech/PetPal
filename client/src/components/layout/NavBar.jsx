import React from "react";
import logo from "@assets/icons/petPal-rbg.png";
import Button from "@components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import ImageHolder from "../UI/ImageHolder";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { currentUser } = useSelector(state => state.auth);
  const navigate = useNavigate();

  return (
    //#00897B
    <nav className="w-full bg-primary h-14 flex items-center justify-between px-4">
      <Link to={'/'}>
        <div className="flex items-center gap-2">
          <img src={logo} width={48} alt="Logo" />
          <h1 className="text-secondary text-2xl font-semibold">
            PetPal
          </h1>
        </div>
      </Link>

      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex items-center gap-16 text-white">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/gallery"}>Gallery</Link>
          <Link to={"/adoption"}>Adoption Process</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>

      <div className="hidden md:flex gap-3 cursor-pointer">
          {/* <Button
            title={"Adopt"}
            className={
              "bg-secondary text-primary rounded-xl px-6 font-medium"
            }
            loading={false}
            onClick={() => {window.open('https://wa.me/2349076889241', '_blank');}}
          /> */}
          <Link to='/profile' className="-space-y-1">
              <div className="w-9 h-9 mt-1.5 cursor-pointer mx-auto">
                <ImageHolder image={'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba'} />
              </div>
              <p className="font-medium text-white capitalize">{currentUser?.username}</p>
          </Link>
        </div>

        {/* Mobile Menu */}
      <div className="flex gap-2 md:hidden">
        <Link to='/profile' className="-space-y-1">
              <div className="w-9 h-9 mt-1.5 cursor-pointer mx-auto">
                <ImageHolder image={'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba'} />
              </div>
              <p className="font-medium text-white capitalize">{currentUser?.username}</p>
          </Link>
          <div className=" w-12 h-10 mt-2.5"
            onClick={() => setIsOpen(!isOpen)}>
            <Button
              title={<Icon icon={"fa:navicon"} className="text-secondary" width={46} height={34} />}
              className={"items-center justify-center mx-auto"}
            />
          </div>
      </div>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-primary w-full sm:hidden">
          <div className="flex flex-col items-center gap-4 text-white">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/gallery"}>Gallery</Link>
            <Link to={"/adoption"}>Adoption Process</Link>
            <Link to={"/contact"}>Contact</Link>
            <Button
              title={"Adopt"}
              className={
                "bg-secondary text-primary rounded-xl px-6 font-medium mb-2"
              }
              loading={false}
              onClick={() => {window.open('https://wa.me/2349076889241', '_blank');}}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
