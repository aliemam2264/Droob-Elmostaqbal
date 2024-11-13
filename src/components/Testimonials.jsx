import { useEffect, useState } from "react";
import CardTestimonials from "./CardTestimonials.jsx";
import { Axios } from "../utils/apiHandler";

const Testimonials = () => {
  const [data, setData] = useState({
    head: "",
    per: "",
    items: [],
  });

  useEffect(() => {
    Axios.get("/landing/follow-up").then((res) => {
      const apiData = res.data.data.items;
      setData({
        head: apiData.head,
        per: apiData.per,
        items: apiData.items,
      });
    });
  }, []);

  return (
    <div
      dir="rtl"
      className="bg-[#F0F0F0] py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] lg:pt-[330px]"
    >
      <div className="text-center mb-10">
        <h5 className="text-[#0055D2] text-xl font-bold mb-6">{data.head}</h5>
        <h3 className="text-2xl font-bold mb-10 leading-10 tracking-wider">
          {data.per}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {data.items.map((item) => (
          <CardTestimonials
            key={item.id}
            title={item.desc} 
            name={item.head} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
