import Laptop from './Laptop.jsx'

export default function Project({title, src, description, codeUrl, demoUrl}) {
    return (
        <div>
            <h3 className="text-center mt-4">{title}</h3>
            <div className="d-flex align-items-center justify-content-center p-5">
                <Laptop src={src} />
            </div>
            <div className="p-2">
                {description}
            </div>
            <div className="d-flex justify-content-center gap-5 p-2 mb-4">
                <a href={codeUrl} target='_blank' rel="noopener noreferrer" className="btn text-white" style={{backgroundColor: "blueviolet"}}>Code</a>
                <a href={demoUrl} target='_blank' rel="noopener noreferrer" className="btn text-white" style={{backgroundColor: "blueviolet"}}>Demo</a>
            </div>
        </div>
    );
};
