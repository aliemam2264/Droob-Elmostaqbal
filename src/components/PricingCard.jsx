import whiteArrow from "../assets/whiteArrow.png";
import PropTypes from "prop-types";
import CheckIcon from "@mui/icons-material/Check";

const PricingCard = ({ most, title, semiTitle, pricing, desc }) => {
  return (
    <div
      className={`py-10 px-6 sm:px-10 bg-[#ffffff] relative ${
        most ? "h-[630px]" : "h-[550px]"
      }`}
    >
      {most && (
        <button className="bg-[#0055D2] absolute top-3 right-3 text-white text-center px-3 py-2 sm:px-5 sm:py-2">
          {most}
        </button>
      )}
      <div className={`text-center ${most ? "mt-12" : ""}`}>
        <h1 className="text-lg sm:text-xl font-bold mb-2">{title}</h1>
        <p className="text-xs sm:text-sm text-[#616161] mb-4">{semiTitle}</p>
        <h1 className="text-[#0055D2] text-xl sm:text-2xl font-bold">
          {pricing} ر.س <sup>/مرة واحدة</sup>
        </h1>
        <hr className="mt-4 text-[#DADADA]" />
      </div>
      <div className="flex flex-col gap-4 mt-5 text-[#2C2C2C]">
        <div className="flex gap-2 items-center">
          <CheckIcon className="text-[#0055D2]" />
          <p className="text-xs sm:text-sm">الوصول إلى 2,000+ الدورات</p>
        </div>
        <div className="flex gap-2 items-center">
          <CheckIcon className="text-[#0055D2]" />
          <p className="text-xs sm:text-sm">احصل على شهادات غير محدودة</p>
        </div>
        <div className="flex gap-2 items-center">
          <CheckIcon className="text-[#0055D2]" />
          <p className="text-xs sm:text-sm">
            الوصول إلى جميع الدورات التدريبية
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <CheckIcon className="text-[#0055D2]" />
          <p className="text-xs sm:text-sm">التدريب الكامل على المجال</p>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <CheckIcon className="text-[#0055D2]" />
          <p className="text-xs sm:text-sm leading-8">{desc}</p>
        </div>
        <hr className="text-[#DADADA] mb-4" />
        <button className="flex gap-3 items-center bg-[#0055D2] py-2 sm:py-3 px-4 sm:px-6 text-white justify-center">
          اشترك الان
          <img src={whiteArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.node.isRequired,
  semiTitle: PropTypes.node.isRequired,
  pricing: PropTypes.node.isRequired,
  most: PropTypes.node,
  desc: PropTypes.node.isRequired,
};

export default PricingCard;
