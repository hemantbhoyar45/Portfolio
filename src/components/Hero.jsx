import Lottie from "lottie-react";
import animationData from "../assets/Developer.json";

export default function Hero() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Lottie animationData={animationData} loop={true} />
    </div>  
  );
}
