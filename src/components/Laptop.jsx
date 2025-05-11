export default function Laptop({src}) {
  return (
    <>
    <style>{`
        .outer-container {
          display: inline-block;
          width: 250px;
        }

        .laptop {
          position: relative;
          max-width: 30rem;
        }

        .laptop__screen {
          position: relative;
          z-index: 1;
          padding: 3%;
          border-radius: 1rem;
          background: #ecf1f7;
          background-image: linear-gradient(to bottom, #333, #111);
          box-shadow: 0 .1rem 0 #cfcfcf;
          border: 2px solid #ccc;
        }

        .laptop__screen img {
          display: block;
          max-width: 100%;
          height: auto;
          background: #000;
          aspect-ratio: 1600 / 1000;
        }

        .laptop__bottom {
          position: relative;
          z-index: 1;
          margin-right: -7%;
          margin-left: -7%;
          height: .7rem;
          background: #e9eff5;
          background-image: linear-gradient(to right, #d2dde9 0%, #f9fcff 15%, #e5ebf2 40%, #e5ebf2 60%, #f9fcff 85%, #d2dde9 100%);
        }

        .laptop__bottom::before {
          display: block;
          margin: 0 auto;
          width: 20%;
          height: .7rem;
          border-radius: 0 0 .2rem .2rem;
          background: #f6f9fc;
          background-image: linear-gradient(to right, #c3cfdb 0%, #f6f9fc 10%, #f6f9fc 90%, #c3cfdb 100%);
          content: " ";
        }

        .laptop__under {
          position: absolute;
          top: 100%;
          left: 25%;
          display: block;
          width: 50%;
          height: 0.75rem;
          background: #e2e8f0;
          background-image: linear-gradient(to bottom, #e2e8f0, #bec7d1);
        }

        .laptop__under::after,
        .laptop__under::before {
          position: absolute;
          top: 0%;
          bottom: 0;
          display: block;
          width: 50%;
          background: inherit;
          content: " ";
        }

        .laptop__under::before {
          right: 100%;
          border-bottom-left-radius: 100%;
        }

        .laptop__under::after {
          left: 100%;
          border-bottom-right-radius: 100%;
          border-bottom-left-radius: 0;
        }

        .laptop__shadow {
          position: absolute;
          right: -10%;
          bottom: -2.5rem;
          left: -10%;
          z-index: 0;
          height: 2rem;
          background: radial-gradient(ellipse closest-side, #000, transparent);
          opacity: 0.5;
        }
      `}</style>
      
      <div className="outer-container">
        <div className="laptop">
          <div className="laptop__screen">
            <img
              src={src}
              width="1600"
              height="1000"
              alt="Screen"
            />
          </div>
          <div className="laptop__bottom">
            <div className="laptop__under"></div>
          </div>
          <div className="laptop__shadow"></div>
        </div>
      </div>
    </>
  );
};
