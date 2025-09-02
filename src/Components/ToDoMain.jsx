import React from "react";

const ToDoMain = ({ onOpen }) => {
  return (
    <>
      <div className="flex md:justify-start items-center flex-col w-[100%] h-[100%] bg-gradient-to-bl to-[#3f87a6] from-[#ebf8e1] rounded-xl shadow-2xl rounded-br-4xl rounded-tl-4xl shadow-blue-400 p-5">
        <div className="absolute right-7 top-6 md:right-10 md:top-5">
          <button onClick={onOpen}>Back</button>
        </div>
        <div className="bg-white/30 backdrop-blur-md rounded-xl px-5 py-1 mb-5 mt-5 sm:mt-0">
          <h1>Work List</h1>
          <p>Plan it. Do it. Mark it off.</p>
        </div>
        <div className="w-[110%] md:w-[100%] border border-gray-400 rounded-2xl flex justify-center items-center bg-white/10 backdrop-blur-3xl pb-5 p-">
          <div className="w-[95%] flex justify-between items-center px-3 py-1 bg-white/30 backdrop-blur-md rounded-lg mt-5 mb-3">
            <input type="text" className="p-1 w-50 sm:w-100" placeholder="Your Task" />
            <button className="pr-2 p-2 ">Add</button>
          </div>
          <ul></ul>
        </div>
      </div>
    </>
  );
};

export default ToDoMain;
