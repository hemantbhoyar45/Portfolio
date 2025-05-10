export default function TechBox({ src }) {
    return (
        <div className="text-center pt-3" style={{ height: "100px", width: "200px", border: "2px solid white", borderRadius: "5px" }}>
            <img src={src} alt="image" className="h-75" />
        </div>
    );
}
