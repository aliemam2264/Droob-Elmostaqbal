import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import business_course from "../assets/study courses/business_course.png";
import Rating from "../assets/study courses/Rating.png";
import accounting from "../assets/study courses/accounting_course.png";
import mobile from "../assets/study courses/mobile-course.png";
import english from "../assets/study courses/english_course.png";
import studying from "../assets/studying.png";
import HeaderImage from "../components/HeaderImage";
import { Axios } from "../utils/apiHandler";

const StudyCourses = () => {
  const courses = [
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

  const [data, setData] = useState([]);
  console.log("🚀 ~ HeroSection ~ data:", data);

  useEffect(() => {
    Axios.get("/landing/courses").then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div className="bg-[#F8FBFB]" dir="rtl">
      <HeaderImage
        img={studying}
        title="برامج الدبلوم"
        subTitle="/ الدورات التدريبية"
      />

      <div className="flex flex-col items-center justify-center mt-20  md:mx-10 gap-3">
        <h1 className="text-[#2C2C2C] text-4xl font-bold">
          أحدث الدورات التدريبية
        </h1>
        <p className="text-center text-[#616161] p-3">
          نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
          المطابع ودور النشر. كان لوريم إيبسوم{" "}
        </p>
      </div>

      {/* Cards Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 md:p-16">
        {courses.concat(courses).map((item, index) => (
          <Card
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
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 md:p-16">
        {data.map((item, index) => (
          <Card
            key={index}
            icon={item?.image}
            name={item?.name}
            desc={item?.desc}
            price="60 رس"
            button="عرض البرنامج"
            img={Rating}
            date={item?.start_date}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between md:mx-16 pb-10 ">
        <button className="px-4 py-2 border bg-[#F8FBFB] text-[#0055D2] rounded mx-2">
          &lt;&lt; التالي
        </button>

        <div className="bg-white border rounded-lg w-[100px]]">
          <button className="hidden md:inline px-4 py-2 text-[#0055D2] font-semibold rounded mx-2">
            4
          </button>

          <button className="px-4 py-2 text-[#0055D2] font-semibold rounded mx-2">
            3
          </button>

          <button className="px-4 py-2 text-[#0055D2] font-semibold rounded mx-2">
            2
          </button>

          <button className="px-4 py-2 text-white bg-[#0055D2] font-semibold rounded">
            1
          </button>
        </div>

        <button className="px-4 py-2 border bg-[#F8FBFB] text-[#0055D2] rounded mx-2">
          السابق&gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default StudyCourses;
