import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0
        ? setStickyClass("fixed top-0 left-0 bg-[#17171A]")
        : setStickyClass("relative bg-transparent");
    }
  };
  return (
    <div>
      {/* pc view */}
      <div
        className={`hidden mb-[-80px] lg:flex p-4 text-white ${stickyClass} z-50 w-full duration-500`}
      >
        <div className="flex-auto flex items-center gap-4">
          <Link to={"/home"}>
            <h1 className="text-3xl font-semibold hover:text-white duration-200">
              Novo
            </h1>
          </Link>
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              isActive
                ? "nav text-orange-500"
                : "nav hover:text-orange-500 duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              isActive
                ? "nav text-orange-500"
                : "nav hover:text-orange-500 duration-300"
            }
          >
            Services
          </NavLink>
          <NavLink
            to={"/blogs"}
            className={({ isActive }) =>
              isActive
                ? "nav text-orange-500"
                : "nav hover:text-orange-500 duration-300"
            }
          >
            Blogs
          </NavLink>
        </div>
        <div className="flex-auto flex justify-end items-center gap-4">
          <NavLink
            to={"/signIn"}
            className={({ isActive }) =>
              isActive
                ? "nav text-orange-500"
                : "nav hover:text-orange-500 duration-300"
            }
          >
            Sign In
          </NavLink>
          <div className="hover:text-red-500 duration-300 btn btn-outline btn-error">
            Sign Out
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="lg:hidden p-4 flex justify-between items-center bg-[#17171A] text-white">
        <div>
          <Link to={"/home"}>
            <h1 className="text-3xl font-semibold">CareerFinderPlus</h1>
          </Link>
        </div>
        <div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1 text-2xl">
              <i class="fa-solid fa-bars"></i>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#17171A] rounded-box w-52 gap-3"
            >
              <li>
                <NavLink
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav text-orange-500 btn btn-ghost"
                      : "nav hover:text-orange-500 duration-300 btn btn-ghost"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/services"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav text-orange-500 btn btn-ghost"
                      : "nav hover:text-orange-500 duration-300 btn btn-ghost"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blogs"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav text-orange-500 btn btn-ghost"
                      : "nav hover:text-orange-500 btn btn-ghost duration-300"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/signIn"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav text-orange-500 btn btn-ghost"
                      : "nav hover:text-orange-500 btn btn-ghost duration-300"
                  }
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/signOut"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-red-500 btn btn-outline btn-error"
                      : " hover:text-red-500 duration-300 btn btn-outline btn-error"
                  }
                >
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
