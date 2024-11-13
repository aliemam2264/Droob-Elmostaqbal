import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import contactHero from "../assets/contactHero.png";

const ContactUs1 = () => {
  const validationSchema = Yup.object({
    customerType: Yup.string().required("يرجى اختيار نوع العميل"),
    programName: Yup.string().required("يرجى اختيار اسم البرنامج"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صحيح")
      .required("يرجى إدخال البريد الإلكتروني"),
    phoneNumber: Yup.string().required("يرجى إدخال رقم الهاتف"),
    country: Yup.string().required("يرجى إدخال الدولة"),
    purpose: Yup.string().required("يرجى اختيار الغرض من الرسالة"),
    message: Yup.string().required("يرجى إدخال الرسالة"),
  });

  const formik = useFormik({
    initialValues: {
      customerType: "",
      programName: "",
      email: "",
      phoneNumber: "",
      country: "",
      purpose: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted data:", values);
    },
  });
  return (
    <div dir="rtl">
      {/* Contact2 Hero */}
      <div className=" relative">
        {/* Image */}
        <img src={contactHero} alt="about" className="w-full h-auto" />

        {/* Text on top of the image */}
        <div className="absolute inset-0 px-28 flex items-center justify-between ">
          <h1 className="text-white text-2xl md:text-6xl font-bold">
            تواصل معنا{" "}
            <p className="text-white text-xs md:text-lg font-thin mt-6">
              <NavLink to="/">
                <span className="text-gray-400 cursor-pointer"> الرئيسية</span>
              </NavLink>{" "}
              <NavLink to="/support-and-communication">
                <span className="text-gray-400 cursor-pointer">
                  / الدعم و التواصل
                </span>
              </NavLink>
              / تواصل معنا
            </p>
          </h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-20 bg-gray-50">
        <form
          onSubmit={formik.handleSubmit}
          className="mx-10 px-16 py-16 md:px-28 bg-[#EDF4FF] w-auto"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="customerType" className="block pb-3 font-medium">
                نوع العميل
              </label>
              <select
                id="customerType"
                name="customerType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.customerType}
                className="border border-gray-300 p-3 rounded w-full outline-none"
              >
                <option value="">اختر من القائمة</option>
                <option value="نوع1">نوع1</option>
                <option value="نوع2">نوع2</option>
              </select>
              {formik.touched.customerType && formik.errors.customerType && (
                <p className="text-red-500">{formik.errors.customerType}</p>
              )}
            </div>
            <div>
              <label htmlFor="programName" className="block pb-3 font-medium">
                اسم البرنامج
              </label>
              <select
                id="programName"
                name="programName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.programName}
                className="border border-gray-300 p-3 rounded w-full outline-none"
              >
                <option value="">اختر من القائمة</option>
                <option value="برنامج1">برنامج1</option>
                <option value="برنامج2">برنامج2</option>
              </select>
              {formik.touched.programName && formik.errors.programName && (
                <p className="text-red-500">{formik.errors.programName}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block pb-3 font-medium">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="border border-gray-300 p-2 rounded w-full outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block pb-3 font-medium">
                رقم الهاتف
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="أدخل رقم الهاتف"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className="border border-gray-300 p-2 rounded w-full outline-none"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-red-500">{formik.errors.phoneNumber}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="country" className="block pb-3 font-medium">
                الدولة
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="أدخل الدولة"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                className="border border-gray-300 p-2 rounded w-full outline-none"
              />
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500">{formik.errors.country}</p>
              )}
            </div>
            <div>
              <label htmlFor="purpose" className="block pb-3 font-medium">
                الغرض من الرسالة
              </label>
              <select
                id="purpose"
                name="purpose"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.purpose}
                className="border border-gray-300 p-3 rounded w-full outline-none"
              >
                <option value="">اختر من القائمة</option>
                <option value="الغرض1">الغرض1</option>
                <option value="الغرض2">الغرض2</option>
              </select>
              {formik.touched.purpose && formik.errors.purpose && (
                <p className="text-red-500">{formik.errors.purpose}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block pb-3 font-medium">
              الرسالة
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="border border-gray-300 p-2 rounded w-full outline-none resize-none"
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500">{formik.errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="items-center text-white bg-blue-800 font-semibold border rounded-lg py-3 px-20"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs1;

