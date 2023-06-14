import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaTimes,
  FaBars,
  FaAngleRight,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaAngleDown,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export const Navbar = (props) => {
  const [toggleSearchTab, setToggleSearchTab] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState("");
  const [toggleInDropdown, setToggleInDropdown] = useState(false);
  const toggleInDrop = () => {
    toggleInDropdown == true
      ? setToggleInDropdown(false)
      : setToggleInDropdown(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        document.querySelector(".inNavbar").classList.add("inNavbar-active");
      } else {
        document.querySelector(".inNavbar").classList.remove("inNavbar-active");
      }
    })
  }, []);

  const dropdownList = ["Dashboard", "Settings", "Earnings", "Sign out"];

  const dropdownListItems = dropdownList.map((data, index) => (
    <li style={{ marginLeft: 0, marginRight: 0 }} key={index}>
      <a
        href="#"
        className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {data}
      </a>
    </li>
  ));

  return (
    <>
      <nav className="inNavbar">
        <button
          className="toggleSidebar"
          onClick={() => {
            setToggleSidebar("inSidebar-active");
          }}
        >
          {<FaBars />}
        </button>
        <a href="/" className="logo">
          InCoder
        </a>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="#" className="relative">
            <li
              onClick={() => {
                toggleInDrop();
              }}
              className={`${toggleInDropdown == true ? "text-mainColor" : ""}`}
            >
              HTML & CSS <FaAngleDown />
            </li>
            <div
              id="inNavDrop"
              className={`z-[9999] ${
                toggleInDropdown == false ? "opacity-0 pointer-events-none" : ""
              } absolute top-[2.8rem] left-[-10%] bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-40 dark:bg-gray-700 overflow-hidden`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 flex-col"
                aria-labelledby="dropdownDefaultButton"
              >
                {dropdownListItems}
              </ul>
            </div>
          </a>
          <a href="">
            <li>Javascript</li>
          </a>
          <a href="">
            <li>PHP</li>
          </a>
        </ul>
        <div className="flex">
          <div
            className="searchBtn mr-2"
            onClick={() => {
              setToggleSearchTab("active");
            }}
          >
            {<FaSearch />}
          </div>
          <div
            className="searchBtn"
            onClick={() => {
              props.handleThemeToggle();
            }}
          >
            {props.currentTheme == "light" ? <FaMoon /> : <FaSun />}
          </div>
        </div>
        <div className={`wrapper ${toggleSidebar}`}>
          <div className="inSidebar">
            <button
              className="closeSidebarBtn"
              onClick={() => {
                setToggleSidebar("");
              }}
            >
              <FaTimes />
            </button>
            <div className="links">
              <ul>
                <a href="">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li
                    onClick={() => {
                      toggleInDrop();
                    }}
                  >
                    HTML & CSS <FaAngleRight style={{ float: "right" }} />
                  </li>
                  <div
                    id="inNavDrop"
                    className={`z-[9999] ${
                      toggleInDropdown == false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    } absolute top-[5.8rem] left-[102%] bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-[11rem] dark:bg-gray-700 overflow-hidden`}
                  >
                    <ul style={{ marginTop: 0, marginBottom: ".8rem" }}>
                      {dropdownListItems}
                    </ul>
                  </div>
                </a>
                <a href="">
                  <li>Javascript</li>
                </a>
                <a href="">
                  <li>PHP</li>
                </a>
              </ul>
            </div>
            <div className="inSidebar-footer">
              <div className="socialIcons">
                <a href="">
                  <FaFacebook />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaYoutube />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaGithub />
                </a>
              </div>
              <div className="quickLinks">
                <a href="">About</a>
                <a href="">Contact us</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>

        <div className={`searchDialog ${toggleSearchTab}`}>
          <div className="searchDialogWrapper">
            <div className="inputWrapper">
              <input
                type="text"
                className="inSearchInput"
                placeholder="Search here"
              />
              <button
                className="closeDialogBtn"
                onClick={() => {
                  setToggleSearchTab("");
                }}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
