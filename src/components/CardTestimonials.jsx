import PropTypes from "prop-types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const CardTestimonials = ({ title, name, desc }) => {
  return (
    <div
      dir="rtl"
      className=" py-6 px-5 flex flex-col gap-5 bg-white text-[#2C2C2C] cursor-pointer"
    >
      <p>{title}</p>
      <div className="flex gap-3 items-center">
        <AccountCircleIcon className="text-[#0055D2] text-4xl" />
        <div className="flex flex-col gap-2">
          <h3> {name} </h3>
          <p className="text-[#616161]">{desc}</p>
        </div>
      </div>
    </div>
  );
};
CardTestimonials.PropTypes = {
  title: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
};
export default CardTestimonials;
