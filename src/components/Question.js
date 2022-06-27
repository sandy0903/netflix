import React from "react";

const Question = ({question,handleOpen, id}) => {

  return (
    <div className="mb-3 bg-slate-800 px-8 text-md sm:text-lg md:text-3xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-black">
        <h1 className="my-5">{question?.question}</h1>
        {question?.isOpen ? <button onClick={()=>handleOpen(id)} >X</button> : <button  onClick={()=>handleOpen(id)} className="text-2xl">+</button>}
      </div>
      <div  className={
              question?.isOpen
                ? `max-h-[auto] transition translate-y-[0%] text-left`
                : "max-h-0 transition translate-y-[-100%] hidden "
            }>
        {question?.answer.map((item) => (
          <p className="my-7"

          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Question;
