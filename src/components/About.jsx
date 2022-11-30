import johnImg from "../assets/john-doe.png";

export const About = () => {
  return (
    <div id="about" className="about bg-[#F8F8F8] m-auto px-4 pt-32 pb-0">
      <div className="container w-[1240px] m-auto grid grid-cols-2">
        <img src={johnImg} alt="" />
        <div className="col-2 flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold">About</h2>
          <span className="line"></span>
          <p className="my-8 mx-0">
            Intense is an International Financial Planning company with offices
            i n multiple jurisdictions over the world. Working with Intense
            gives me the ability to advise internat ional expatriates living in
            the middle east from where I live in USA.
          </p>
          <p className="text-[1.6rem] italic font-semibold">
            I am John Doe, a senior advisor for an independently owned financial
            planning company called Intense.
          </p>
          <button className="button mt-4 text-[#333]">Explore More</button>
        </div>
      </div>
    </div>
  );
};
