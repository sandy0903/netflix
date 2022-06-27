import React from "react";

const Card = ({ title, text, media, flex }) => {

  return (
    <div className="w-full h-auto relative top-[-90px] border-b-8 border-slate-800  px-[30px] sm:px-[45px] py-[70px]">
      <div
        className={flex ? "flex flex-col lg:flex-row-reverse items-center max-w-[1100px] mx-auto" : "flex flex-col lg:flex-row items-center max-w-[1100px] mx-auto"}
      >
        <div className=" text-center lg:text-left w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold lg:w-[90%] md:w-full md:leading-[4rem] leading-[2rem]">
            {title}
          </h1>
          <p className="text-2xl my-4 lg:w-[90%] md:w-full">{text}</p>
          <a className="text-2xl" href={media.img}>
            Tải ứng dụng
          </a>
        </div>
        <div className="w-[100%] mx-auto lg:text-left text-center  ">
          <div className="relative overflow-hidden w-100% mx-auto">
            <img src={media.img} className={`object-cover inline lg:block`} />
            {media.video && <div className="absolute w-full h-full max-w-[73%] max-h-[54%] top-[21%] left-[13%]">
                <video src={media.video} autoPlay
          loop
          muted className="w-full h-full"/></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
