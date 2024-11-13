import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ icon, name, desc, button, img, price, date }) => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-between items-center bg-white border border-gray-200 rounded-lg shadow-md mb-6 w-[320px]">
      {/* Image */}
      <img
        src={icon}
        alt="Course Image"
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />

      {/* Card Content */}
      <div className="w-full text-right p-5">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{desc}</p>

        {/* Rating */}
        <div className="flex justify-start items-center mb-4">
          <img src={img} alt="Rating" />
          <p className="text-[#616161] mr-1">42/862 تقييم</p>
        </div>

        {/* Course Information */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#0055D2] font-semibold">{price}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center gap-2">
          <button className="bg-white border border-[#0055D2] font-semibold text-[#0055D2] px-4 py-2 rounded flex-1">
            التسجيل
          </button>
          <button
            onClick={() => nav("/test")}
            className="bg-[#0055D2] text-white px-4 py-2 rounded flex-1"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  button: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  // rating: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
};

export default Card;
