import meetmilo from "../assets/meetmilo.png";
import boiz from "../assets/boiz.png";
import loop from "../assets/loop.mp4";
import Spinning from "./Spinning";
import pancakeswap from "../assets/icons/cake.svg";
import telegram from "../assets/icons/telegram.svg";
import x from "../assets/icons/x.svg";

const Landing = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Spinning />
      </div>

      {/* Meet Milo Section */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center text-center pt-4">
        <img
          src={meetmilo}
          alt="Meet Milo"
          className="max-w-full max-h-full object-contain lg:w-[55%]"
        />

        {/* Token Address */}
        <p className="text-white text-lg lg:text-xl mt-4  tracking-wide">
          CA: WEFLNWONWEOINWEOFNWGNOEI32342324
        </p>

        {/* Social Links */}
        <div className="flex space-x-5 mt-4">
          <a
            href="https://pancakeswap.finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={pancakeswap}
              alt="PancakeSwap"
              className="w-8 h-8 hover:opacity-80 transition"
            />
          </a>
          <a href="t.me/MILOonBNB" target="_blank" rel="noopener noreferrer">
            <img
              src={telegram}
              alt="Telegram"
              className="w-8 h-8 hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://x.com/MILOBNB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={x}
              alt="X (Twitter)"
              className="w-8 h-8 hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>

      {/* Text & Video Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-64 py-12 lg:py-24">
        {/* Text Section (Left) */}
        <div className="lg:w-[40%] text-center lg:text-left">
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
            WELCOME TO
            <br /> $MILO.
          </h1>
          <p className="text-white text-lg lg:text-2xl mt-4">
            Welcome to $MILO Wen moon? Wen banana? The answer is NOW! <br />
            Welcome to $MILO, the most bananas token on the BNB Chain! 🍌
          </p>
        </div>

        {/* Video Section (Right) */}
        <div className="lg:w-1/2 flex justify-center -mt-6 lg:mt-0">
          <video
            src={loop}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>

      {/* Boiz Section with Text Overlay */}
      <div className="relative min-h-screen w-full flex justify-center">
        {/* Background Image */}
        <img src={boiz} alt="Boiz" className="w-full h-auto object-cover" />

        {/* Overlay Text (Manually Controlled Height) */}
        <div className="absolute text-center px-4" style={{ top: "20%" }}>
          <h1 className="text-white text-4xl lg:text-4xl font-bold leading-tight">
            TOKEN DETAILS
          </h1>
          <p className="text-white text-lg lg:text-2xl mt-4 leading-[1.2]">
            <b>CA:</b> XXXX Network: BNB Chain (BSC)🔸 <br />
            <b>Symbol:</b> $MILO 🐒 <br />
            <b>Total Supply: </b>1,000,000,000 $MILO 🏦
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
