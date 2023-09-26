import React from "react";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
// import animation from "../../assets/json/TestAnimation.json";

const LottieAnimation = ({ animation, time = 5000 }) => {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const interval = setTimeout(() => {
      setAnimate(false);
    }, time);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="w-full p-20 pt-0 h-full flex flex-col justify-center items-center">
      <div className="w-96 h-72">
        <Lottie play={animate} animationData={animation} loop />
      </div>
      {/* <div className="text-center w-full">
        <p className="text-lg text-red-500 font-semibold">
          Test Animation Completed!
        </p>
        <p className=" text-center">we can create more now!.</p>
      </div> */}
    </div>
  );
};

export default LottieAnimation;
