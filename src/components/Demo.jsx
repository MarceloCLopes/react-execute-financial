export const Demo = () => {
  return (
    <div id="demo" className="demo my-20 mx-auto p-4 w-full">
      <div className="container w-[1240px] m-auto grid grid-cols-2">
        <div className="col-1 p-4 flex flex-col">
          <p className="text-3xl italic">More Than 100 Financial Planners</p>
          <p className="text-5xl font-semibold my-2 mx-0">One Philosophy</p>
          <p className="text-xl mb-4">
            Every single one of our financial advisors receives rigorous
            training according to John Doe’s philosophy based on academic
            research (including that of a Nobel laureate in Economics) and
            Behavioral Finance.
          </p>
          <button className="button text-[#333]">
            Get your free financial analysis
          </button>
        </div>

        <div className="col-2 m-auto">
          <iframe
            width="430"
            height="300"
            src="https://www.youtube.com/embed/oeqP5JtihMA"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
