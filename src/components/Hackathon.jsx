import Lottie from 'lottie-react';
import animationData from '../assets/Team.json';

export default function Hackathon() {
    return (
        <div>
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
}
