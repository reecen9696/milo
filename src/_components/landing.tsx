import meetmilo from "../assets/meetmilo.png";
import boiz from "../assets/boiz.png";
import loop from "../assets/loop.mp4";
import Spinning from "./Spinning"; // Replace with your image

const Landing = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Spinning />
      </div>
      {/* Meet Milo Section */}
      <div className="min-h-screen w-full flex items-center justify-center">
        <img
          src={meetmilo}
          alt="Meet Milo"
          className="max-w-full max-h-full object-contain lg:w-[55%]"
        />
      </div>

      {/* Text & Video Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-64 py-12 lg:py-24">
        {/* Text Section (Left) */}
        <div className="lg:w-[40%] text-center lg:text-left">
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
            Experience the <br /> Future.
          </h1>
          <p className="text-white text-lg lg:text-2xl mt-4">
            Watch and see what's coming next. Watch and see what's coming next.
            Watch and see what's coming next. Watch and see what's coming next.
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
      {/* Boiz Section with Text Overlay */}
      <div className="relative min-h-screen w-full flex justify-center ">
        {/* Background Image */}
        <img src={boiz} alt="Boiz" className="w-full h-auto object-cover" />

        {/* Overlay Text (Manually Controlled Height) */}
        <div
          className="absolute text-center px-4"
          style={{ top: "20%" }} // Adjust this value manually
        >
          <h1 className="text-white text-4xl lg:text-4xl font-bold leading-tight">
            Welcome to the Milo's
          </h1>
          <p className="text-white text-lg lg:text-2xl mt-4 leading-[1.2]">
            Experience innovation like never before. Etc etc <br /> Experience
            innovation like never before. <br /> Experience innovation like
            ergreer never before. <br /> Experience innovation like never
            before.
          </p>
        </div>
      </div>
      {/* Meet Milo Section */}
      <div className="min-h-screen w-full flex items-center justify-center bg-rblue px-4 lg:px-16 flex-col">
        <h1 className="text-white text-3xl lg:text-5xl font-bold pb-24">
          Get to Know Milo
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Box 1 - Orange */}

          <div className="bg-dblue p-8 rounded-custom flex flex-col items-center">
            <p className="text-orange1 text-5xl font-bold w-full mb-4">01</p>
            <h2 className="text-orange1 text-2xl w-full font-semibold">
              Heading 1
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Subtext about the project goes here. Explain the key feature.
              Subtext about the project goes here. Explain the key feature.
              Subtext about the project goes here. Explain the key feature.
            </p>
          </div>

          {/* Box 2 - Green */}
          <div className="bg-dblue p-8 rounded-custom flex flex-col items-center">
            <p className="text-green1 text-5xl font-bold w-full mb-4">02</p>
            <h2 className="text-green1 text-2xl w-full font-semibold">
              Heading 2
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Another key aspect of the project is described here.Another key
              aspect of the project is described here.Another key aspect of the
              project is described here.Another key aspect of the project is
              described here.
            </p>
          </div>

          {/* Box 3 - Blue */}
          <div className="bg-dblue p-8 rounded-custom  flex flex-col items-center">
            <p className="text-blue1 w-full text-5xl font-bold mb-4">03</p>
            <h2 className="text-blue1 w-full text-2xl font-semibold">
              Heading 3
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              More project details in this section, highlighting another
              feature. More project details in this section, highlighting
              another feature. More project details in this section,
              highlighting another feature. More project details in this
              section, highlighting another feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
