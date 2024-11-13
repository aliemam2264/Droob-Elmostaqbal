import React, { useEffect, useState } from "react";
import blogImg from "../assets/blog-img.png";
import socialMediaIcons from "../assets/Group 1000001715.png";
// import blogPosts from "../assets/blog posts/blogPosts";
import { NavLink, useParams } from "react-router-dom";
import BlogPostCard from "../components/BlogPostCard";
import HeaderImage from "../components/HeaderImage";
import { Axios } from "../utils/apiHandler";

const BlogPost = () => {
  const { id } = useParams();
  console.log("🚀 ~ BlogPost ~ id:", id);
  const [blogPosts, setBlogPosts] = useState([]);
  console.log("🚀 ~ blogs ~ blogs:", blogPosts);
  const [article, setArticle] = useState({});

  useEffect(() => {
    Axios.get("/landing/articles").then((res) => {
      setBlogPosts(res.data.data);
    });
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    if (blogPosts.length > 0) {
      const foundArticle = blogPosts.find((item) => item.id === Number(id));
      if (foundArticle) setArticle(foundArticle);
    }
  }, [blogPosts, id]); // Run this effect when blogPosts or id changes

  console.log("🚀 ~ article:", article);

  return (
    <div className="bg-[#F8FBFB]" dir="rtl">
      <HeaderImage img={blogImg} title="المدونة" />

      <div className="flex flex-col justify-center items-center gap-4 mx-[50px] md:mx-[160px] lg:mx-[310px] mt-20  ">
        <h1 className="text-black font-bold md:text-3xl lg:text-4xl xl:text-5xl text-center text-wrap">
          {article?.title_ar}
        </h1>

        {/* author and date */}
        <div className="flex justify-center items-center mt-10 gap-8">
          <div className="flex gap-2 items-center">
            <img src={article?.authorImg} alt="" />
            <p className="text-[#2C2C2C]">{article?.author}</p>
          </div>
          <p className="text-[#2C2C2C] ">{article?.date}</p>
        </div>

        {/* article image 1 */}
        <div className="flex flex-col justify-center">
          <img className="my-20" src={article?.image} alt="" />
          <p className="text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article?.desc_ar}
          </p>

          <h1 className="mt-14 text-xl md:text-3xl text-[#0055D2]">
            {article?.subTitle1}
          </h1>
          <p className="mt-10 text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article?.subTitleDesc1}
          </p>

          <h1 className="mt-14 text-xl md:text-3xl text-[#0055D2]">
            {article?.subTitle2}
          </h1>
          <p className="mt-10 text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article?.subTitleDesc2}
          </p>
        </div>

        {/* article image 2 */}
        <div className="flex flex-col justify-center">
          <img className="my-20" src={article?.articleImg1B} alt="" />

          <h1 className="mt-14 text-xl md:text-3xl text-[#0055D2]">
            {article?.subTitle3}
          </h1>
          <p className="mt-10 text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article?.subTitleDesc3}
          </p>

          <h1 className="mt-14 text-xl md:text-3xl text-[#0055D2]">
            {article?.subTitle4}
          </h1>
          <p className="mt-10 text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article?.subTitleDesc4}
          </p>

          {/* social media icons */}
          <div className="flex items-center gap-8 my-32">
            <p className="text-[#0055D2] text-xl">شارك المقالة</p>
            <img
              className="w-[180px] md:w-auto"
              src={socialMediaIcons}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* related posts  */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#2C2C2C] text-4xl mt-20 mb-10">مقالات ذات صلة</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-16 md:mx-28 gap-8 mb-20">
          {blogPosts?.slice(10)?.map((item) => {
            return <BlogPostCard obj={item} key={item.id} img={item.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
