import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-black via-blue-950 to-purple-950 text-white min-h-[100vh] px-10">
      <div className="py-10">
        <h1 className="text-6xl title-text font-bold ">Contact Us</h1>
        <p className="primary-text pl-5 text-xl">Will Concrete your dream.</p>
      </div>
      <div className="grid md:grid-cols-2">
        <div className=" primary-text">
          <h3 className="text-3xl title-text">Get in touch</h3>
          <p>location: Elegant Shopping Mall</p>
          <p>skydream@gmail.com</p>
        </div>
        <div>
          <label className="relative w-[80%]">
            <input
              type="text"
              name="name"
              id="name"
              className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
            />
            <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
              Your name
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;
