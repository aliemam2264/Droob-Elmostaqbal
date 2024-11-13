import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoBlack from "../assets/logo-black.png";
import { Axios } from "../utils/apiHandler";

const PartnershipForm = () => {
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    phone: Yup.string().required("رقم الهاتف مطلوب"),
    email: Yup.string()
      .email("يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    linkedin: Yup.string()
      .url("يجب أن يكون رابطًا صالحًا")
      .required("لينكد إن مطلوب"),
  });

  // Form submission handler
  const handleSubmit = async (values) => {
    try {
      await Axios.post("/landing/become-partner", values);
      toast.success("تم إرسال النموذج بنجاح!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      toast.error("حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى.");
    }
  };

  return (
    <div
      className="max-w-lg mx-5 md:mx-auto bg-[#EDF4FF] shadow-lg rounded-lg p-6 my-20"
      dir="rtl"
    >
      <ToastContainer /> {/* Toast container for notifications */}
      <div className="flex flex-col gap-3 justify-center items-start">
        <img className="w-80" src={logoBlack} alt="" />
        <h2 className="text-2xl text-right text-[#0B236B] mb-4">كن مدرب</h2>
        <p className="text-right text-[#616161] mb-6">
          من فضلك أدخل جميع البيانات المطلوبة بشكل صحيح للتواصل معك
        </p>
      </div>
      <Formik
        initialValues={{ name: "", phone: "", email: "", linkedin: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-5">
            {/* Form Fields */}
            <div>
              <label
                htmlFor="name"
                className="block text-right mb-3 text-[#2C2C2C]"
              >
                الاسم رباعي
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1 text-right"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-right mb-3 text-[#2C2C2C]"
              >
                رقم الهاتف
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border text-right border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1 text-right"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-right mb-3 text-[#2C2C2C]"
              >
                البريد الإلكتروني
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1 text-right"
              />
            </div>

            <div>
              <label
                htmlFor="linkedin"
                className="block text-right mb-3 text-[#2C2C2C]"
              >
                الملف الشخصي (LINKEDIN)
              </label>
              <Field
                type="url"
                id="linkedin"
                name="linkedin"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="linkedin"
                component="div"
                className="text-red-500 text-sm mt-1 text-right"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0055D2] text-white p-3 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              إرسال
            </button>
          </Form>
        )}
      </Formik>
      {/* Login Link */}
      <div className="text-center mt-4">
        <p className="text-sm ml-3 text-[#616161]">
          لديك حساب بالفعل؟
          <Link
            to="/login"
            className="text-[#0055D2] mr-3 font-bold hover:underline"
          >
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PartnershipForm;
