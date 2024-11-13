import "../App.css";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { NavbarContext } from "../contexts/NavBarContext";
import chevronDown from "../assets/chevron-down.png";
import logoBlack from "../assets/logo-black.png";
import menu from "../assets/menu.png";

const NavBar = () => {
  const {
    show,
    setShow,
    showDropdown,
    setShowDropdown,
    selectedOption,
    setSelectedOption,
    handleOptionClick,
    courses,
  } = useContext(NavbarContext); // Accessing the context
  const nav = useNavigate(); // React router navigation

  return (
    <nav className="relative z-50 flex flex-row-reverse justify-between items-center text-[#0B236B] bg-white px-6 py-4 md:px-16">
      <img
        onClick={() => nav(`/`)}
        src={logoBlack}
        alt=""
        className="w-72 md:w-80 cursor-pointer"
      />

      {/* Navigation links for medium and above screens */}
      <ul className="hidden lg:flex flex-row-reverse gap-5">
        <NavLink
          onClick={() => {
            setShowDropdown(false);
            setSelectedOption("");
          }}
          to="/"
          className="items-center"
        >
          <h2>الرئيسية</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink>
        <NavLink
          onClick={() => {
            setShowDropdown(false);
            setSelectedOption("");
          }}
          to="/who-we-are"
          className="items-center"
        >
          <h2>من نحن</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink>

        <NavLink
          onClick={() => {
            setShowDropdown(false);
            setSelectedOption("");
          }}
          to="/study-programs"
          className="items-center"
        >
          <h2>البرامج الدراسية</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink>

        {/* Trigger for the dropdown menu */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex flex-row-reverse gap-1 items-center focus:outline-none"
          >
            <h2>الدورات التدريبية</h2>
            <img src={chevronDown} alt="dropdown" />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg py-4 px-6 right-0 w-64 text-right">
              <ul className="space-y-2 mt-2 flex flex-col">
                {courses.map((item, index) => {
                  return (
                    <NavLink
                      to="/study-courses"
                      className={`cursor-pointer ${
                        selectedOption === item
                          ? "font-bold text-blue-600"
                          : "text-gray-600"
                      } hover:text-blue-600`}
                      onClick={() => {
                        handleOptionClick(item);
                        setShowDropdown(false);
                      }}
                      key={index}
                    >
                      {item}
                    </NavLink>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <NavLink
          onClick={() => {
            setShowDropdown(false);
            setSelectedOption("");
          }}
          to="/support-and-communication"
          className="items-center"
        >
          <h2>الدعم و التواصل</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink>
        <NavLink
          onClick={() => {
            setShowDropdown(false);
            setSelectedOption("");
          }}
          to="/blog"
          className="items-center"
        >
          <h2>المدونة</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink>
      </ul>

      <div className="flex items-center">
        <img
          src={menu}
          alt=""
          className="lg:hidden w-10 cursor-pointer"
          onClick={() => setShow(true)}
        />
      </div>

      <ul className="hidden lg:flex flex-row-reverse items-center text-[#0055D2] gap-5">
        <Link to="register">
          <button
            className="items-center"
            onClick={() => {
              setShowDropdown(false);
              setSelectedOption("");
            }}
          >
            انضم كمدرب
          </button>
        </Link>

        <Link to="login">
          <button
            className="items-center bg-[#0055D2] text-white font-semibold border rounded-lg py-2 px-5"
            onClick={() => {
              setShowDropdown(false);
              setSelectedOption("");
            }}
          >
            تسجيل دخول
          </button>
        </Link>
      </ul>

      {/* Navigation links for below medium screens */}
      <div
        className={`fixed inset-0 z-50 py-8 transition-all duration-300 ease-in-out bg-white ${
          show
            ? "w-full opacity-100 pointer-events-auto"
            : "w-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-10">
          <img
            className="absolute rotate-90 left-10 border-2 border-[#0055D2] rounded-lg p-2 cursor-pointer"
            src={chevronDown}
            alt=""
            onClick={() => {
              setShow(false);
              setShowDropdown(false);
            }}
          />
          <NavLink
            to="/"
            onClick={() => {
              setShow(false);
              setShowDropdown(false);
              setSelectedOption("");
            }}
            className="items-center"
          >
            <h2>الرئيسية</h2>
            <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
          </NavLink>
          <NavLink
            to="/who-we-are"
            onClick={() => {
              setShow(false);
              setShowDropdown(false);
              setSelectedOption("");
            }}
            className="items-center"
          >
            <h2>من نحن</h2>
            <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
          </NavLink>
          <NavLink
            to="/study-programs"
            onClick={() => {
              setShow(false);
              setShowDropdown(false);
              setSelectedOption("");
            }}
            className="items-center"
          >
            <h2>البرامج الدراسية</h2>
            <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
          </NavLink>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex flex-row-reverse gap-1 items-center focus:outline-none"
            >
              <h2>الدورات التدريبية</h2>
              <img src={chevronDown} alt="dropdown" />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-lg py-4 px-6 right-0 w-64 text-right">
                <ul className="space-y-2 mt-2 flex flex-col">
                  {courses.map((item, index) => {
                    return (
                      <NavLink
                        to="/study-courses"
                        className={`cursor-pointer ${
                          selectedOption === item
                            ? "font-bold text-blue-600"
                            : "text-gray-600"
                        } hover:text-blue-600`}
                        onClick={() => {
                          handleOptionClick(item);
                          setShowDropdown(false);
                          setShow(false);
                        }}
                        key={index}
                      >
                        {item}
                      </NavLink>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <NavLink
            to="/support-and-communication"
            onClick={() => {
              setShow(false);
              setShowDropdown(false);
              setSelectedOption("");
            }}
            className="items-center"
          >
            <h2>الدعم و التواصل</h2>
            <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => {
              setShow(false);
              setShowDropdown(false);
              setSelectedOption("");
            }}
            className="items-center"
          >
            <h2>المدونة</h2>
            <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
          </NavLink>
        </ul>

        <ul className="flex flex-col justify-center items-center py-10 my-5 gap-5 md:hidden">
          <Link to="register">
            <button
              onClick={() => {
                setShow(false);
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className="items-center"
            >
              انضم كشريك
            </button>
          </Link>

          <Link to="login">
            <button
              onClick={() => {
                setShow(false);
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className="items-center text-white bg-[#0055D2] font-semibold border rounded-lg py-2 px-5"
            >
              تسجيل دخول
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
