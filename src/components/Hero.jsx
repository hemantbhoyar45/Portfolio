import Lottie from "lottie-react";
import animationData from "../assets/Developer.json";

export default function Hero() {
  return (
      <div>
        <Lottie animationData={animationData} loop={true} />
      </div>  
  );
}
