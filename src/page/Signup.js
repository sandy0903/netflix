import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import logo from "../images/netflix_PNG32.png";
import { questions } from "../data";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Input from "../components/Input";
import {Link, Outlet} from "react-router-dom";

const Signup = () => {
  const [listQuestions, setQuestions] = useState(questions);
  // listQuestions.map(item=>console.log(item))
  const handleOpen = (id) => {
    const newList = listQuestions.map((item) => {
      if (item.id == id) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return { ...item, isOpen: false };
      }
      return item;
    });

    setQuestions(newList);
  };

  return (
    <>
    <Outlet/>
    <div className="text-white bg-black overflow-hidden ">
      {/* navbar menu */}
      <nav className="container mx-auto flex items-center justify-between h-[90px]  ">

        <div className="w-[130px] sm:w-[200px] z-[100] ">
          <Link to="/"><img src={logo} className="" /></Link>
        </div>
        <div className="z-[100]">
          <button className="border border-white bg-transparent py-1 px-3 sm:px-5 rounded-sm">
            Tiếng Việt
          </button>
          <button className="bg-red-600	py-1 px-3 sm:px-5 rounded-md ml-4 sm:mr-0 mr-5">
            <Link to="login">Đăng nhập</Link>
          </button>
        </div>
      </nav>
      {/* hero section */}
      <Hero text={true} borderBottom={true}/>
      {/* information of app  */}
      <Card
        title="Thưởng thức trên TV của bạn."
        text="Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác."
        media={{
          img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
          video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
        }}
        flex={false}
      />
      <Card
        title="Tải xuống nội dung để xem ngoại tuyến."
        text="Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem."
        media={{
          img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
          video: null,
        }}
        flex={true}
      />
      <Card
        title="Xem ở mọi nơi."
        text="Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV."
        media={{
          img: null,
          video: null,
        }}
        flex={false}
      />

      <Card
        title="Tạo hồ sơ cho trẻ em."
        text="Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn."
        media={{
          img: "https://occ-0-395-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbtRHxTEgmwtFXR4vBnwSO9UzWSascscH0PRpGcXYVkyVez31FciwrQ4bmD41KIrsypJG4Bf54yOJL82SDLL54SGCIdZov0ySklR.png?r=df6",
          video: null,
        }}
        flex={true}
      />
      <Card
        title="Bạn có điện thoại Android? Hãy thử gói dịch vụ miễn phí mới của
            chúng tôi!"
        text="Xem các bộ phim và chương trình truyền hình mới được tuyển chọn mà
            không cần cung cấp thông tin thanh toán!"
        media={{
          img: "https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg",
          video: null,
        }}
        flex={false}
      />
      {/* usually asked questions */}
      <div className="relative top-[-90px] text-center border-b-8 border-slate-800 pb-[4rem]">
        <h1 className="text-3xl sm:text-5xl my-[4rem] font-bold">Câu hỏi thường gặp</h1>
        <div className="sm:w-[80%]  mx-auto">
          {listQuestions?.map((question, index) => (
            <Question
              question={question}
              handleOpen={handleOpen}
              id={index}
              key={index}
            />
          ))}
        </div>

        <Input/>
      </div>

      <footer className="relative top-[-90px]">
        <Footer />
      </footer>
    </div>

    </>
  );
};

export default Signup;
