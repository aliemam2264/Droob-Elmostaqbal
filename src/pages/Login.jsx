import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for routing
import logoBlack from "../assets/logo-black.png";

const Login = () => {
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string()
      .min(8, "يجب أن تكون كلمة المرور 8 أحرف على الأقل")
      .required("كلمة المرور مطلوبة"),
  });

  // Form submission handler
  const handleSubmit = (values) => {
    console.log(values);
    // You can handle form submission here (e.g., API request)
    // After successful login, redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div
      className="max-w-lg mx-5 md:mx-auto  bg-[#EDF4FF] shadow-lg rounded-lg p-6 my-20"
      dir="rtl"
    >
      <div className="flex flex-col gap-3 justify-center items-start">
        <img className="w-80" src={logoBlack} alt="" />
        <h2 className="text-2xl text-right text-[#0B236B] mb-4">
          تسجيل الدخول
        </h2>
        <p className="text-right text-[#616161] mb-6">
          من فضلك أدخل بيانات تسجيل الدخول الخاصة بك
        </p>
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-5">
            {/* Email Field */}
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

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-right mb-3 text-[#2C2C2C]"
              >
                كلمة المرور
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1 text-right"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-[#0055D2] hover:underline"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0055D2] text-white p-3 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              تسجيل الدخول
            </button>
          </Form>
        )}
      </Formik>

      {/* Register Link */}
      <div className="text-center mt-4">
        <p className="text-sm ml-3 text-[#616161]">
          ليس لديك حساب؟
          <Link
            to="/register"
            className="text-[#0055D2] font-bold hover:underline mr-3"
          >
            أنشئ حساب الآن
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
