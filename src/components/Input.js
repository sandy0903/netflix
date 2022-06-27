import React, { useState } from "react";
import { Link } from "react-router-dom";

const Input = () => {



  return (
    <>
      <p className="text-sm sm:text-xl tracking-wider mt-[1rem] sm:mt-[3rem] lg:mt-[4rem] lg:w-[100%]  w-[80%] mx-auto	">
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
        thành viên của bạn.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-3 h-fit overflow-hidden  ">
        <input
          type="email"
          placeholder="Địa chỉ email"

          className="px-2 py-3 sm:py-5 text-black outline-none lg:w-[37%] md:w-[60%] w-[90%] "

        />
        <button
          className="mt-3 lg:mt-0 bg-red-600 text-md md:text-3xl px-[1rem] py-[0.4rem] md:px-[2rem] md:py-[0.9rem] hover:bg-red-700"

        >
          <Link to="signup" >Bắt đầu</Link>
        </button>
      </div>
    </>
  );
};

export default Input;
