import React from "react";

const Contact = () => {
  return (
    <div className="w-screen 2xl:mt-20  h-screen flex items-center flex-col p-40" >
      <div className="bg-gradient-to-r from-cyan-900 to-blue-600 p-5 rounded-md shadow-2xl ">
      <h2 className="font-semibold text-[40px] text-white ">Contact</h2>
      <form
        action="https://getform.io/f/f75f43a7-1d34-4628-8ed9-4a76acbd2e5d"
        method="POST"
        className="flex flex-col items-center justify-center pt-10 "
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-slate-800 mt-6  2xl:w-[400px] sm:w-[300px] rounded"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border border-slate-800 mt-6  2xl:w-[400px]  sm:w-[300px] rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          id=""
          resize="none"
          className="border border-slate-800 mt-6   2xl:w-[400px]  sm:w-[300px] rounded  "
        ></textarea>
        <button
          type="submit"
          className=" rounded border border-slate-800 bg-gradient-to-r from-slate-800 to-gray-800 mt-8 2xl:w-[300px] sm:w-[120px] p-2 text-white "
        >
          Enviar
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;