export const Hero = () => {
  return (
    <div
      id="hero"
      className="hero bg-overlay text-white h-screen w-full relative before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 before:z-[-1]">
      <div className="content h-full flex flex-col justify-center max-w-[1100px] m-auto p-4">
        <p className="italic text-[0.9rem]">Call us</p>
        <p className="text-[1.9rem]">1-800-123-4567</p>
        <p className="text-[5rem] font-bold">Because Money</p>
        <p className="text-[2.2rem] italic">Doesn't come with instructions</p>
        <button href="/" className="button my-4 mx-0 w-[300px] text-[#333]  ">
          Free Consultation
        </button>
      </div>
    </div>
  );
};
