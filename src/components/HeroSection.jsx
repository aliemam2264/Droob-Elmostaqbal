import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { NavbarContext } from "../contexts/NavBarContext";
import logoWhite from "../assets/logo-white.png";
import menu from "../assets/menu.png";
import chevronDown from "../assets/chevron-down.png";
import img01 from "../assets/01.png";
import img02 from "../assets/02.png";
import img03 from "../assets/03.png";
import { Axios } from "../utils/apiHandler";

const HeroSection = () => {
  // state to control responsiive navbar
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
  const [data, setData] = useState({});
  // console.log("🚀 ~ HeroSection ~ data:", data);
  const nav = useNavigate(); // React router navigation

  useEffect(() => {
    Axios.get("/landing/home").then((res) => {
      setData(res.data.data.items);
    });
  }, []);

  const headText = data.head ? data.head.split("&nbsp;") : ["", ""];

  return (
    <div className="bg-[url('assets/hero-mask.png')] bg-repeat-y bg-[#0B236B]">
      <nav className=" relative z-50 flex flex-row-reverse justify-between items-center text-[#CCCCDD] px-6 py-4 md:px-16">
        <img
          onClick={() => nav(`/`)}
          src={logoWhite}
          alt=""
          className="w-72 md:w-80 cursor-pointer"
        />

        {/* navigation links for medium and above screens*/}

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
            <div className="h-0.5 bg-white mt-1 hidden"></div>
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
            <div className="h-0.5 bg-white mt-1 hidden"></div>
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
            <div className="h-0.5 bg-white mt-1 hidden"></div>
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
              <div className="absolute mt-2 bg-[#0B236B] shadow-lg rounded-lg py-4 px-6 right-0 w-64 text-right">
                <ul className="space-y-2 mt-2 flex flex-col">
                  {courses.map((item, index) => {
                    return (
                      <NavLink
                        to="/study-courses"
                        className={`cursor-pointer ${
                          selectedOption === item
                            ? "font-bold text-blue-600"
                            : "text-[#CCCCDD]"
                        } hover:text-white`}
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
            <div className="h-0.5 bg-white mt-1 hidden"></div>
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
            <div className="h-0.5 bg-white mt-1 hidden"></div>
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

        <ul className="hidden lg:flex flex-row-reverse items-center text-white gap-5">
          <Link to="register">
            <button
              onClick={() => {
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className="items-center"
            >
              انضم كمدرب
            </button>
          </Link>

          <Link to="login">
            {" "}
            <button
              onClick={() => {
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className="items-center text-blue-800 bg-white font-semibold border rounded-lg py-2 px-5"
            >
              تسجيل دخول
            </button>
          </Link>
        </ul>

        {/* navigation links for below medium screens*/}

        <div
          className={`fixed inset-0 z-50 py-8 transition-all duration-300 ease-in-out bg-[#0B236B] ${
            show
              ? "w-full opacity-100 pointer-events-auto"
              : "w-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-10">
            <img
              className="absolute rotate-90 left-10 border-2 border-white rounded-lg p-2 cursor-pointer"
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
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
            <NavLink
              to="/who-we-are"
              onClick={() => {
                setShow(false);
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className=" items-center"
            >
              <h2>من نحن</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
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
              <div className="h-0.5 bg-white mt-1 hidden"></div>
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
                <div className="absolute mt-2 bg-[#0B236B] shadow-lg rounded-lg py-4 px-6 right-0 w-64 text-right">
                  <ul className="space-y-2 mt-2 flex flex-col">
                    {courses.map((item, index) => {
                      return (
                        <NavLink
                          to="/study-courses"
                          className={`cursor-pointer ${
                            selectedOption === item
                              ? "font-bold text-blue-600"
                              : "text-[#CCCCDD]"
                          } hover:text-white`}
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
              className=" items-center"
            >
              <h2>الدعم و التواصل</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => {
                setShow(false);
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className=" items-center"
            >
              <h2>المدونة</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
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
              {" "}
              <button
                onClick={() => {
                  setShow(false);
                  setShowDropdown(false);
                  setSelectedOption("");
                }}
                className="items-center text-blue-800 bg-white font-semibold border rounded-lg py-2 px-5"
              >
                تسجيل دخول
              </button>
            </Link>
          </ul>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row-reverse justify-between  text-white px-8 md:px-20">
        <div className="flex flex-col items-end pt-32 mb-8 lg:mb-0 ">
          {/* <h1>{data?.head}</h1> */}
          <h1 className="text-right text-xl lg:text-3xl font-bold mb-4 ">
            {headText[0]}
          </h1>
          <h1 className="text-right text-xl lg:text-3xl font-bold mb-4 ">
            {headText[1]}
          </h1>
          <p className="text-right text-[8px] lg:text-[12px]">{data.per}</p>

          <div className="flex flex-row-reverse gap-8 pt-4">
            <button
              onClick={() => nav("/study-courses")}
              className="text-[#0B236B] bg-white font-semibold border rounded-lg py-2 px-8"
            >
              ابدأ الآن
            </button>
            <button
              onClick={() => nav("/support-and-communication")}
              className=" text-white font-semibold rounded"
            >
              احجز استشارة
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="relative">
          {/* Blue Semi-Circle */}
          {/* <div className="absolute w-[450px] h-[450px] bg-[#1a2b6b] rounded-full top-[-50px] left-[-150px] lg:top-[-100px] lg:left-[-200px] z-0"></div> */}

          {/* Images */}
          <img
            src={data?.image}
            alt="Person"
            className="md:w-[730px] md:bottom-[-1px] lg:w-[680px] xl:w-[550px] lg:bottom-[0px] xl:lg:bottom-0 relative z-10"
          />

          <img
            src={img01}
            alt="01"
            className="w-[140px] md:w-[170px] absolute top-[235px] left-[-35px] md:top-[310px] md:left-[-15px] lg:top-[315px] lg:left-[-15px] xl:top-[365px] xl:left-[-15px] z-20"
          />

          <img
            src={img03}
            alt="03"
            className="w-[160px] md:w-[190px] absolute top-[100px] left-[-45px] md:top-[150px] md:left-[-35px] lg:top-[165px] lg:left-[-35px] xl:top-[150px] xl:left-[-30px] z-20"
          />

          <img
            src={img02}
            alt="02"
            className="w-[100px] md:w-[130px] absolute top-[90px] left-[190px] md:top-[130px] md:left-[255px] lg:top-[130px] lg:left-[280px] xl:top-[130px] xl:left-[280px] z-5"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
