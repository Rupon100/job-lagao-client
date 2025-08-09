import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Header = () => {
  const { loading, user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
  }

  return (
    <header>
      <nav className="flex justify-between items-center px-6 py-4 bg-slate-300">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer"
          >
            {open ? (
              <IoMdClose className="h-6 w-6" />
            ) : (
              <IoMdMenu className="h-6 w-6" />
            )}
          </button>
          <h2 className="text-xl font-semibold">Job Lagao</h2>
        </div>
        <div
          className={`
              flex flex-col gap-4 p-6 bg-slate-300 transition-all duration-300 
              fixed top-16 left-0 w-64 h-full z-50
              ${open ? "translate-x-0" : "-translate-x-full"} 
              md:translate-x-0 md:relative md:flex-row md:items-center md:gap-6 
              md:bg-transparent md:p-0 md:h-auto md:w-auto md:top-0
            `}
        >
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/jobs"}>
            Find Jobs
          </Link>
          <Link className="link" to={"/career"}>
            Career Advice
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {
            loading ? (<p className="btn shadow" >Loading..</p>) 
            : user ? (
            <button onClick={handleLogOut} className="btn shadow" >LogOut</button>
          ) : (
            <Link to={"login"}>
              <button className="px-4 py-2 border border-gray-400 rounded btn">
                Login
              </button>
            </Link>
          )} 
        </div>
      </nav>
    </header>
  );
};

export default Header;
