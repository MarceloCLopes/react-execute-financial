import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";

export const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials w-full">
      <div className="container w-[1240px] my-16 mx-auto py-16 px-0">
        <h2 className="text-5xl text-center font-bold">Testimonials</h2>
        <span className="line"></span>
        <div className="content grid grid-cols-3 gap-5 my-16 mx-0">
          <div className="card border border-solid border-[#EEEEEE] shadow-[0_3px_10px_rgba(0,0,0,0.2)] p-4">
            <img className="rounded-[50px] -mt-8" src={user1} alt="user1" />
            <p className="text-[#787878] text-lg m-3">
              It is not every day that you come across a passionate and
              trustworthy financial advisor. John Doe is true professional who
              does his work really well. Thanks John!
            </p>
            <p className="text-[#787878] text-lg m-3">
              <span className="text-primary-color text-base font-bold">
                Johnson.M.J.
              </span>
            </p>
            <p className="text-[#787878] text-lg m-3">
              Director of "Financial Times"
            </p>
          </div>

          <div className="card border border-solid border-[#EEEEEE] shadow-[0_3px_10px_rgba(0,0,0,0.2)] p-4">
            <img className="rounded-[50px] -mt-8" src={user2} alt="user2" />
            <p className="text-[#787878] text-lg m-3">
              In just 2 very short meetings with John he managed to find the
              solution personally catered to my situation and expectations.
              Punctual, well informed and very reliable.
            </p>
            <p className="text-[#787878] text-lg m-3">
              <span className="text-primary-color text-base font-bold">
                Carol Harper
              </span>
            </p>
            <p className="text-[#787878] text-lg m-3">
              Director at Risktec Solutions Ltd
            </p>
          </div>

          <div className="card border border-solid border-[#EEEEEE] shadow-[0_3px_10px_rgba(0,0,0,0.2)] p-4">
            <img className="rounded-[50px] -mt-8" src={user3} alt="user3" />
            <p className="text-[#787878] text-lg m-3">
              A very professional financial advisor, who is true to his word.
              John has demonstrated a high amount of integrity in the time I
              have known him, and he is fast to respond to my concerns.
            </p>
            <p className="text-[#787878] text-lg m-3">
              <span className="text-primary-color text-base font-bold">
                Snow.J.R.
              </span>
            </p>
            <p className="text-[#787878] text-lg m-3">
              Managing Director of BPW Global
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
