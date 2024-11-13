import business_course from "../assets/study courses/business_course.png";
import Rating from "../assets/study courses/Rating.png";
import accounting from "../assets/study courses/accounting_course.png";
import mobile from "../assets/study courses/mobile-course.png";
import english from "../assets/study courses/english_course.png";
import Slider from "react-slick";
// import studying from "../assets/studying.png";

import CardCourses from "./CardCourses.jsx";

// Import Slick CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const nav = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index
  const details = [
    {
      icon: business_course,
      name: "دورة إدارة الأعمال",
      desc: " نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم .",
      button: "عرض البرنامج",
      price: "60 رس",
      img: Rating,
      date: "يبدأ اليوم في 09.30 -12.00",
    },
    {
      icon: english,
      name: "دورة اللغة الإنجليزية من الصفر",
      desc: " نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم .",
      button: "عرض البرنامج",
      price: "60 رس",
      img: Rating,
      date: "يبدأ اليوم في 09.30 -12.00",
    },
    {
      icon: mobile,
      name: "دورة تطوير تطبيقات الهاتف",
      desc: " نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم .",
      button: "عرض البرنامج",
      price: "60 رس",
      img: Rating,
      date: "يبدأ اليوم في 09.30 -12.00",
    },
    {
      icon: accounting,
      name: "دورة المحاسبة المالية",
      desc: " نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم .",
      button: "عرض البرنامج",
      price: "60 رس",
      img: Rating,
      date: "يبدأ اليوم في 09.30 -12.00",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
    // rtl: true, // Enable RTL
    customPaging: (i) => (
      <div
        style={{
          marginTop: "10px",
          backgroundColor: i === activeIndex ? "#0055D2" : "#EEEEEE",
          width: "20px",
          height: "5px",
          borderRadius: "5px",
        }}
      />
    ),
    dotsClass: "slick-dots", // Add custom class for slick dots
    responsive: [
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Desktop screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 1440, // Large Desktop
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //   }
      // },
    ],
  };

  return (
    <div
      dir="rtl"
      className="bg-[#F8FBFB] py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
    >
      <div className="text-center">
        <h1 className="font-bold mt-5 text-2xl sm:text-3xl">
          {" "}
          أحدث الدورات التدريبية{" "}
        </h1>
        <p className="text-[#616161] text-sm mt-3">
          نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
          المطابع ودور النشر. كان لوريم إيبسوم
        </p>
      </div>

      <Slider {...settings} className="mt-14">
        {details.map((item, index) => (
          <CardCourses
            key={index}
            icon={item.icon}
            name={item.name}
            desc={item.desc}
            price={item.price}
            button={item.button}
            img={item.img}
            date={item.date}
          />
        ))}
      </Slider>

      <div className="text-center mt-10">
        <button
          onClick={() => nav("/study-courses")}
          className="bg-[#0055D2] p-2 px-6 rounded-3xl text-white"
        >
          عرض جميع الكورسات
        </button>
      </div>
    </div>
  );
};

export default Courses;
