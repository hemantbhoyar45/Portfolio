import Lottie from 'lottie-react';
import animationData from '../assets/Contact.json';

export default function ContactAnimation() {
    return (
        <div>
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
}
