import React from 'react'
import Input from './Input'

const Hero = ({text,borderBottom}) => {
  return (
    <div className={borderBottom ? "w-full h-[80vh] sm:h-screen overlay-shadow relative top-[-90px] z-[5] border-b-8 border-slate-800  " : "w-full h-[150vh] overlay-shadow relative top-[-90px] z-[5] " }>
        <div className="w-full h-full absolute top-0 z-[-5] ">
          <img
            src="https://i.ibb.co/vXqDmnh/background.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full w-full bg-black opacity-60  "></div>
        <div className="text-center absolute top-[30%] z-[100] right-0 left-0 w-full">
            {
                text ? <div>

                <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold sm:w-[80%] mx-auto ">
                  Chương trình truyền hình,  phim không giới hạn và nhiều nội dung
                  khác.
                </h1>
                <p className="text-md sm:text-[1.7rem] my-4">
                  Xem ở mọi nơi. Hủy bất kỳ lúc nào.
                </p>

                <Input/>
                  </div>
                  :
<h1>Form for sign in</h1>
            }

        </div>
      </div>
  )
}

export default Hero