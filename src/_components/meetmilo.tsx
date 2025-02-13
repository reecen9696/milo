const meetmilo = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-rblue px-4 lg:px-16 flex-col">
      <h1 className="text-white text-3xl lg:text-4xl font-bold pb-24">
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
            More project details in this section, highlighting another feature.
            More project details in this section, highlighting another feature.
            More project details in this section, highlighting another feature.
            More project details in this section, highlighting another feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default meetmilo;
