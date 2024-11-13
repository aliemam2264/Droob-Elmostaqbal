import React, { useEffect, useState } from "react";
import BlogPostCard from "../components/BlogPostCard";
import { NavLink, useNavigate } from "react-router-dom";
import blogPosts from "../assets/blog posts/blogPosts";
import blogImg from "../assets/blog-img.png";
import HeaderImage from "../components/HeaderImage";
import { Axios } from "../utils/apiHandler";

const Blog = () => {
  const nav = useNavigate();

  const [blogPosts, setBlogPosts] = useState([]);
  console.log("🚀 ~ blogs ~ blogs:", blogPosts);

  useEffect(() => {
    Axios.get("/landing/articles").then((res) => {
      setBlogPosts(res.data.data);
    });
  }, []);

  return (
    <div className="bg-[#F8FBFB]" dir="rtl">
      <HeaderImage img={blogImg} title="المدونة" />

      <h1 className="text-[#2C2C2C] text-3xl mt-20 mb-10 mx-8 md:mx-28">
        أحدث المدونات
      </h1>
      <div className="flex flex-col xl:flex-row justify-between mx-8 md:mx-28 mb-20 gap-10">
        <div className="flex flex-col flex-1 gap-3">
          <img
            src={blogPosts[0]?.image}
            alt=""
            onClick={() => nav(`/blog/${blogPosts[0].id}`)}
          />
          <p className="text-[#0055D2]">البرامج التأهيلية • 1 يناير2024</p>
          <h1 className="text-[#1A1A1A]">
            {/* أحدث الدورات والتخصصات والشهادات المهنية في تصميم تجربة */}
            {blogPosts[0]?.title_ar}
          </h1>

          <p className="text-[#616161] text-wrap">
            {/* في بعض الحالات وفي حال عدم تلقي العلاج بالوقت المناسب، يؤدي تضرر لب
            السن إلى تحلله وبالتالي إعطاء الفرصة للبكتيريا بالنمو والتكاثر مكان
            اللب، وهذه البكتيريا إلى جانب التسوس الموجود بالأصل من شأنهما أن
            يُؤديا إلى الإصابة بالالتهاب أو خراج السن كما ذكرنا سابقًا، وهذا ما
            يجعل استئصال لب السن ضروريًا */}
            {blogPosts[0]?.desc_ar}
            <span
              className="text-[#0055D2] underline cursor-pointer"
              onClick={() => nav(`/blog/${blogPosts[0].id}`)}
            >
              {" "}
              عرض المزيد
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col flex-1 gap-10">
          {blogPosts.slice(1, 4).map((item) => {
            return (
              <div className="flex flex-col lg:flex-row gap-5" key={item.id}>
                <img
                  src={item.img}
                  alt=""
                  onClick={() => nav(`/blog/${item.id}`)}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[#0055D2]">تطوير الذات • 1 يناير2024</p>
                  <h1 className="text-[#1A1A1A]">
                    ماذا يجب أن تكسب: شهادة أم درجة؟
                  </h1>
                  <p className="text-[#616161] text-wrap">
                    في بعض الحالات وفي حال عدم تلقي العلاج بالوقت المناسب، يؤدي
                    تضرر لب السن إلى تحلله{" "}
                    <span
                      className="text-[#0055D2] underline cursor-pointer"
                      onClick={() => nav(`/blog/${item.id}`)}
                    >
                      {" "}
                      عرض المزيد
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className="text-[#2C2C2C] text-3xl mt-20 mb-10 mx-8 md:mx-28">
        المقالات الرئيسية
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 md:mx-28 gap-8 mb-20">
        {blogPosts.slice(4, 10).map((item) => {
          return <BlogPostCard obj={item} key={item.id} img={item.img} />;
        })}
      </div>

      <h1 className="text-[#2C2C2C] text-3xl mt-20 mb-10 mx-8 md:mx-28">
        المقالات الأكثر قراءة
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 md:mx-28 gap-8 pb-20">
        {blogPosts.slice(10).map((item) => {
          return <BlogPostCard obj={item} key={item.id} img={item.img} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
