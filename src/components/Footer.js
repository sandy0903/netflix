import React from "react";

const Footer = ({bgColor}) => {
  return (
    <div className={` w-full sm:w-[70%]  ${bgColor} mx-auto mt-[4rem] text-slate-500 text-sm font-extralight cursor-pointer`}>
      <p className="hover:underline mb-8">Bạn có câu hỏi? Liên hệ với chúng tôi.</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 ">
        <ul>
          <li className="mb-3">Câu hỏi thường gặp</li>
          <li className="mb-3">Quan hệ với nhà đầu tư</li>
          <li className="mb-3">Quyền riêng tư</li>
          <li className="mb-0 lg:mb-3">Kiểm tra tốc độ</li>
        </ul>
        <ul>
          <li className="mb-3">Trung tâm trợ giúp</li>
          <li className="mb-3">Việc làm</li>
          <li className="mb-3">Tùy chọn cookie</li>
          <li className="mb-0 md:mb-3">Thông báo pháp lý</li>
        </ul>
        <ul>
          <li className="mb-3">Tài khoản</li>
          <li className="mb-3">Các cách xem</li>
          <li className="mb-3">Thông tin doanh nghiệp</li>
          <li className="mb-3">Chỉ có trên Netflix</li>
        </ul>
        <ul>
          <li className="mb-3">Trung tâm đa phương tiện</li>
          <li className="mb-3">Điều khoản sử dụng</li>
          <li className="mb-3">Liên hệ với chúng tôi</li>

        </ul>
      </div>
      <button className="border-[0.1px] border-white bg-transparent py-3 px-7 my-5 ">
            Tiếng Việt
          </button>
          <p>Netflix Việt Nam</p>
    </div>
  );
};

export default Footer;
