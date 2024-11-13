import footer1 from "../assets/footer1.png";
import footer3 from "../assets/footer3.png";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";
import { Axios } from "../utils/apiHandler.js";
import { useEffect, useState } from "react";
const Footer = () => {
  const [data,setData]=useState({})
  const scrollWindow = () => {
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
  };
  useEffect(()=>{
    Axios.get('https://droob.medicalvisionarabia.com/api/landing/footer').then((res)=>{
      setData(res.data.data.item)
    })
  },[])
  return (
    <>
      {/* Top Section with Statistics */}
      <div
        dir="rtl"
        style={{
          backgroundImage: `url(${footer1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "130px",
        }}
        className="hidden sm:flex py-5 text-white justify-around items-center"
      >
        <div className="flex flex-col gap-1 items-center text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest">
            <sup>+</sup> 985{" "}
          </h2>
          <p className="text-sm">إجماليات الطلاب</p>
        </div>
        <div className="flex flex-col gap-1 items-center text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest">
            <sup>+</sup> 36{" "}
          </h2>
          <p className="text-sm">عضو مؤسسة</p>
        </div>
        <div className="flex flex-col gap-1 items-center text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest">
            <sup>+</sup> 500{" "}
          </h2>
          <p className="text-sm">دورة تدريبية</p>
        </div>
        <div className="flex flex-col gap-1 items-center text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest">
            <sup>+</sup> 35{" "}
          </h2>
          <p className="text-sm">مدرب</p>
        </div>
      </div>

      {/* Footer Links and Contact Information */}
      <div dir="rtl" className="bg-[#0B236B]">
        <div className="bg-[#0B236B] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start py-14 text-white gap-x-8 gap-y-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center gap-8 text-center sm:text-right">
            <img src={data.logo} alt="" className="w-[70%]" />
            <p className="text-sm leading-7">
              {data.per}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-right cursor-pointer">
            <h1 className="mb-5 text-xl">ارتباطات سريعة</h1>
            <div className="flex gap-2 mb-3 text-sm" onClick={scrollWindow}>
              <ArrowBackIosRoundedIcon />
              <Link to="/">
                <p>الرئيسية</p>
              </Link>
            </div>
            <div className="flex gap-2 mb-3 text-sm" onClick={scrollWindow}>
              <ArrowBackIosRoundedIcon />
              <Link to="who-we-are">
                <p>عن المركز</p>
              </Link>
            </div>
            <div className="flex gap-2 mb-3 text-sm" onClick={scrollWindow}>
              <ArrowBackIosRoundedIcon />
              <Link to="study-courses">
                <p>الدورات التدريبية</p>
              </Link>
            </div>
            <div className="flex gap-2 mb-3 text-sm" onClick={scrollWindow}>
              <ArrowBackIosRoundedIcon />
              <Link to="support-and-communication">
                <p>تواصل معنا</p>{" "}
              </Link>
            </div>
            <div className="flex gap-2 text-sm">
              <ArrowBackIosRoundedIcon />
              <p>الوظائف</p>
            </div>
          </div>

          {/* Site Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-right cursor-pointer">
            <h1 className="mb-5 text-xl">ارتباطات الموقع</h1>
            <div className="flex gap-2 mb-4 text-sm">
              <ArrowBackIosRoundedIcon />
              <p>سياسة الخصوصية</p>
            </div>
            <div className="flex gap-2 mb-4 text-sm">
              <ArrowBackIosRoundedIcon />
              <p>إخلاء المسؤولية</p>
            </div>
            <div className="flex gap-2 mb-4 text-sm">
              <ArrowBackIosRoundedIcon />
              <p>شروط وأوضاع</p>
            </div>
            <div className="flex gap-2 mb-4 text-sm">
              <ArrowBackIosRoundedIcon />
              <p className="text-nowrap">ملفات تعريف الارتباط المستخدمة</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-right cursor-pointer">
            <h1 className="mb-5 text-xl">تواصل معنا</h1>
            <div className="flex gap-2 mb-4 text-sm">
              <img src={footer3} />
              <p className="text-nowrap">المملكة العربية السعودية، الطائف</p>
            </div>
            <div className="flex gap-2 mb-4 text-sm">
              <EmailIcon />
              <p>{data.email}</p>
            </div>
            <div className="flex gap-2 mb-4 text-sm">
              <ContactsIcon />
              <p>{data.phone}</p>
            </div>
            <div className="flex gap-2 items-center relative">
              <p>تابعنا:</p>
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>

        {/* Scroll to Top Section */}
        <div className="relative flex items-center justify-center ">
          <hr className="h-[2px] w-full bg-[#616161] mx-16 mb-6 border-none" />
          <ArrowUpwardIcon
            onClick={scrollWindow}
            style={{ fontSize: "40px" }}
            className="bg-[#0055D2] text-white absolute left-[12%] transform -translate-x-[50%] bottom-1 p-2 rounded-full cursor-pointer"
          />
        </div>

        {/* Footer Copyright Text */}
        <div className="text-center pb-5 text-[#ffffff] text-sm ">
          جميع الحقوق محفوظة لصالح مركز دروب المستقبل للتدريب و الإستشارات{" "}
        </div>
      </div>
    </>
  );
};

export default Footer;
