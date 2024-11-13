import FAQs2 from "../components/FAQs2";
import img from "../assets/test.png";

const Test = () => {
  return (
    <div className="w-[70%]">
      <div className="bg-gray-100 p-6 md:p-8 shadow rounded-lg w-full ">
        {/* Video Section */}
        <div className="relative bg-gray-300 rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
          {/* Replace this div with an <iframe> or <img> element for the video */}
          <img
            src={img}
            alt="Course Video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button className="text-white text-4xl">▶</button>
          </div>
        </div>

        {/* Course Information */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            تعرف على الكورس
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            ماذا ستتعلم؟
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>HTML و CSS: بناء هيكل وتصميم صفحات ويب متكاملة.</li>
            <li>JavaScript: نظام البرمجة لإضافة تفاعلية إلى صفحات الويب.</li>
            <li>React.js: بناء واجهات متقدمة وتفاعلية.</li>
            <li>
              أدوات المطورين: Git لإدارة المشاريع و Webpack لتنسيق بيئة التطوير.
            </li>
          </ul>

          <p className="mt-4 text-gray-600">
            بنهاية الدورة، ستكون قادراً على تصميم وبناء مواقع ويب تفاعلية
            باستخدام أحدث التقنيات.
          </p>
        </div>

        {/* Skills Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            Git
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            GitHub
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            API
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            State Management
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            React.js
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            JavaScript
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            HTML
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            CSS
          </span>
        </div>
      </div>
      <FAQs2 />
      <div className="bg-[#F9F9F9] p-6 shadow rounded-lg  w-full ">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          المدرب لهذا الكورس
        </h2>
        <div className="flex items-center">
          {/* Instructor Image Placeholder */}
          <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>

          {/* Instructor Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">محمد علي</h3>
            <p className="text-gray-600">
              خبير تطوير الواجهة الأمامية ومدرب معتمد في مجال البرمجة
            </p>
          </div>
        </div>

        {/* Instructor Bio */}
        <p className="text-gray-700 mt-4 leading-relaxed">
          محمد عبد الرحمن هو مطور ويب محترف يتمتع بخبرة تزيد عن 8 سنوات في مجال
          تطوير الواجهة الأمامية (Front-End Development). عمل مع العديد من
          الشركات الكبرى في بناء مواقع وتطبيقات ويب متقدمة، مما أكسبه خبرة واسعة
          في استخدام التقنيات الحديثة مثل JavaScript, HTML5, CSS3, React.js.
        </p>
      </div>
      <FAQs2 />
    </div>
  );
};

export default Test;
