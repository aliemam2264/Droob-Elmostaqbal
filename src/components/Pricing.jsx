// import PricingCard from "./PricingCard.jsx";

// const Pricing = () => {
//   return (
//     <div
//       dir="rtl"
//       className="bg-gradient-to-r from-blue-start to-blue-end py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] lg:h-[600px] "
//     >
//       {/* Text Section */}
//       <div className="text-center text-white mb-10">
//         <h5 className="text-xs sm:text-sm mb-6 text-[#E4E4E4]">
//           قيمة مضاعفة لسعر الإشتراك
//         </h5>
//         <h1 className="text-lg sm:text-2xl font-bold mb-12 leading-7 sm:leading-9">
//           استثمر في مستقبلك بأسعار تنافسية
//           <br />
//           وبدون أي مفاجآت أو تكاليف إضافية.
//         </h1>
//       </div>

//       {/* Pricing Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
//         <PricingCard
//           title={"برنامج التعلم الفردي"}
//           semiTitle={"تعلم موضوعا أو مهارة واحدة واكسب بيانات اعتماد"}
//           pricing={"99"}
//           desc={"إعادة ضمان المال"}
//         />
//         <PricingCard
//           most={"الأكثر شيوعا"}
//           title={"دروب بلس شهريا"}
//           semiTitle={"أكمل دورات متعددة واكسب أوراق اعتماد على المدى القصير"}
//           pricing={"150"}
//           desc={"احصل على شهادة عند الانتهاء بعد انتهاء الفترة التجريبية"}
//         />
//         <PricingCard
//           title={"دروب بلس السنوي"}
//           semiTitle={
//             "الجمع بين المرونة والادخار مع أهداف التعلم على المدى الطويل"
//           }
//           pricing={"200"}
//           desc={"ادخر عندما تدفع مقدما للسنة"}
//         />
//       </div>
//     </div>
//   );
// };

// export default Pricing;

import  { useEffect, useState } from "react";
import PricingCard from "./PricingCard.jsx";
import { Axios } from "../utils/apiHandler.js";

const Pricing = () => {
  const [plans, setPlans] = useState([]);

 
  useEffect(() => {
    Axios
      .get("/landing/plans")
      .then((response) => {
          setPlans(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching pricing plans:", error);
      });
  }, []);

  return (
    <div
      dir="rtl"
      className="bg-gradient-to-r from-blue-start to-blue-end py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] lg:h-[600px]"
    >
      {/* Text Section */}
      <div className="text-center text-white mb-10">
        <h5 className="text-xs sm:text-sm mb-6 text-[#E4E4E4]">
          قيمة مضاعفة لسعر الإشتراك
        </h5>
        <h1 className="text-lg sm:text-2xl font-bold mb-12 leading-7 sm:leading-9">
          استثمر في مستقبلك بأسعار تنافسية
          <br />
          وبدون أي مفاجآت أو تكاليف إضافية.
        </h1>
      </div>

      {/* Pricing Cards Grid */}
      {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center */}
      <div className="">
        {plans.map((plan, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          <PricingCard
            title={plan.name}
            semiTitle={plan.per}
            pricing={plan.price}
            desc={plan.desc}
          />
          <PricingCard
            most={plan.is_common ? "الأكثر شيوعا" : null}
            title={plan.name}
            semiTitle={plan.per}
            pricing={plan.price}
            desc={plan.desc}
          />
          <PricingCard
            title={plan.name}
            semiTitle={plan.per}
            pricing={plan.price}
            desc={plan.desc}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
