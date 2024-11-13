import React, { useEffect, useState } from "react";
import "../index.css";
import longArrowRightW from "../assets/long-arrow-rightW.png";
import longArrowRight from "../assets/long-arrow-right.png";
import correct from "../assets/correct-circle.png";
import aboutImage from "../assets/about-img.png";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderImage from "../components/HeaderImage";
import { Axios } from "../utils/apiHandler";

const WhoWeAre = () => {
  const nav = useNavigate();

  const [data, setData] = useState({});
  const [mission, setMission] = useState({});
  const [team, setTeam] = useState({});
  const [goal, setGoal] = useState({});

  useEffect(() => {
    Axios.get("/landing/what-say").then((res) => {
      setData(res.data.data.item);
    });
    Axios.get("/landing/mission").then((res) => {
      setMission(res.data.data);
    });
    Axios.get("/landing/teams").then((res) => {
      setTeam(res.data.data);
    });
    Axios.get("/landing/goal").then((res) => {
      setGoal(res.data.data);
    });
  }, []);

  return (
    <div dir="rtl">
      {/* About Hero */}
      <HeaderImage img={aboutImage} title="من نحن" />
      {/* Second Part */}
      <div className="flex flex-col md:flex-row gap-16 my-20 justify-evenly">
        <div className="flex flex-col justify-center gap-6 md:w-2/4 p-5">
          <h5 className="text-[#0055D2] text-xl font-bold mb-6">
            عن مركز دروب المستقبل للتدريب والإستشارات
          </h5>
          <h1 className="font-bold text-4xl leading-normal">{data?.head}</h1>
          <p className="text-gray-500">{data?.per}</p>
          <div>
            <NavLink to="">
              <button
                onClick={() => nav("/login")}
                className="flex flex-row-reverse gap-3 border rounded-lg items-center font-semibold py-3 px-10 bg-blue-800 text-white"
              >
                <img src={longArrowRightW} /> إبدأ الآن
              </button>
            </NavLink>
          </div>
        </div>
        <div className="px-4 flex justify-center">
          <img src={data?.image} />
        </div>
      </div>

      {/* Third Part */}
      <div className="flex flex-col md:flex-row gap-6 justify-evenly px-10 py-20 bg-gray-50">
        <div className="flex gap-4 items-center rounded-[16px] p-4 bg-white outline-none">
          <img src={mission.mission?.image} className="w-32" />
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-3xl">{mission.mission?.head}</h1>
            <p className="text-gray-500">{mission.mission?.per}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center rounded-[16px] p-4 bg-white outline-none">
          <img src={mission.visions?.image} className="w-32" />
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-3xl">{mission.visions?.head}</h1>
            <p className="text-gray-500">{mission.visions?.per}</p>
          </div>
        </div>
      </div>

      {/* Forth Part */}
      <div className="flex flex-col gap-11 bg-gray-50 px-10 py-20">
        {/* Title */}
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-bold text-3xl">{team.items?.head}</h1>
          <p className="text-gray-500 text-center">{team.items?.per}</p>
        </div>

        {/* Persons */}
        <div className="flex flex-col gap-10 items-center md:flex-row justify-center">
          <div className=" bg-white w-[380px] h-[400px] rounded-[16px] flex flex-col justify-center items-center gap-4">
            <img src={team.items?.items[0].image} className="w-[344px]" />
            <h1 className="font-bold text-xl">{team.items?.items[0].head}</h1>
            <p className="text-gray-500">{team.items?.items[0].desc}</p>
          </div>
          <div className=" bg-white w-[380px] h-[400px] rounded-[16px] flex flex-col justify-center items-center gap-4">
            <img src={team.items?.items[1].image} className="w-[344px]" />
            <h1 className="font-bold text-xl">{team.items?.items[1].head}</h1>
            <p className="text-gray-500">{team.items?.items[1].desc}</p>
          </div>
          <div className=" bg-white w-[380px] h-[400px] rounded-[16px] flex flex-col justify-center items-center gap-4">
            <img src={team.items?.items[2].image} className="w-[344px]" />
            <h1 className="font-bold text-xl">{team.items?.items[2].head}</h1>
            <p className="text-gray-500">{team.items?.items[2].desc}</p>
          </div>
        </div>
      </div>

      {/* Fifth Part */}
      <div className="flex flex-col-reverse md:flex-row items-center py-20 px-10 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-20">
        {/* Images */}
        <div className="flex items-center justify-center gap-3">
          <img className="w-40 h-70 md:w-60 md:h-80" src={goal.item?.image1} />
          <img className="w-40 h-70 md:w-60 md:h-80" src={goal.item?.image2} />
        </div>

        {/* Info */}
        <div className="w-[60%] flex flex-col gap-6">
          <h5 className="text-[#0055D2] text-xl font-bold mb-6">
            لماذا تختار مركز دروب المستقبل للتدريب و الإستشارات ؟
          </h5>
          <h1 className="font-bold text-4xl leading-normal">
            {goal.item?.head}
          </h1>
          <p className="text-base text-gray-500 mb-4">{goal.item?.per}</p>
          <div className="flex gap-20 md:gap-40">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">{goal.item?.items[0].desc}</p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">{goal.item?.items[2].desc}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">{goal.item?.items[1].desc}</p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">{goal.item?.items[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Part */}
      <div className="flex justify-center items-center py-20 px-5 bg-gray-50">
        <div className="bg-[url('assets/who-we-are-mask.png')] h-[330px] flex items-center justify-center ">
          <div className="flex flex-col gap-6 text-center w-3/4 items-center">
            <h1 className="font-bold text-xl md:text-3xl text-white">
              سجل الآن و إنضم لمجتمع دروب المستقبل و استفد من برامجنا التدريبية
              والاستشارية المصممة خصيصًا لك
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <NavLink to="">
                <button
                  onClick={() => nav("/login")}
                  className="flex flex-row-reverse gap-3 border rounded-lg items-center font-semibold py-3 px-10 bg-white text-blue-800"
                >
                  <img src={longArrowRight} /> إبدأ الآن
                </button>
              </NavLink>
              <button
                onClick={() => nav("/support-and-communication")}
                className=" text-white font-semibold rounded"
              >
                احجز استشارة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
