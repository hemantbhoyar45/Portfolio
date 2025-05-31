import CertificateCard from './CertificateCard';

export default function CertificateList() {
    const certificates = [
        {
            title: "Data Structures and Algorithm Certificate    ",
            image: "/DSA_Certificate.png",
            description: "Completed a course on Data Structures and Algorithm in Java",
            viewLink: "/DSA_Certificate.png"
        },
        {
            title: "Python 3.4.3 Certificate",
            image: "/Python3.4.3_Certificate.png",
            description: "Completed a spoken tutorial training on Python 3.4.3",
            viewLink: "/Python3.4.3_Certificate.png"
        },
        {
            title: "Speakathon Certificate",
            image: "/Speakathon_Certificate.png",
            description: "Participated in India's Largest Speakathon for Limca Book of Records in GHRCE, Nagpur",
            viewLink: "/Speakathon_Certificate.png"
        }
    ];

    return (
        <div className="row">
            {certificates.map((cert, idx) => (
                <CertificateCard
                    key={idx}
                    title={cert.title}
                    image={cert.image}
                    description={cert.description}
                    viewLink={cert.viewLink}
                />
            ))}
        </div>
    );
}
