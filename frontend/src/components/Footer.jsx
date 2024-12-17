import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="h-full bg-slate-800" id="contact">
        <div className=" mt-20 p-20 grid grid-col-3 grid-cols-[55%_15%_20%] gap-16">
          <div className="flex flex-col gap-y-8">
            <img src={assets.logo} className="w-64" />
            <p className="text-white pr-8 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur perferendis voluptate,<br/> expedita labore mollitia
              accusamus accusantium similique ratione doloremque dolor maxime<br/>
              suscipit eum deleniti, laborum molestias neque quaerat laudantium
              incidunt.
            </p>
            <div className="flex flex-row gap-3">
              <img src={assets.facebook_icon} />
              <img src={assets.linkedin_icon} />
              <img src={assets.twitter_icon} />
            </div>
            {/* <img src={assets.play_store} /> */}
          </div>
          <div className="text-white">
            <span className="text-[40px] font-bold">COMPANY</span>
            <ul className="flex flex-col gap-2 mt-8 text-[20px]">
              <li>Home</li>
              <li>Delivery Policy</li>
              <li>Privacy</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="text-white">
            <span className="text-[40px] font-bold">GET IN TOUCH</span>
            <ul className="flex flex-col gap-2 mt-8 text-[20px]">
              <li>+91-7325999469</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-400 border-t-2 border-b-0 pb-8 mx-20" />
        <p className="text-white text-[14px] pl-20 pb-20">
          Copyrights 2024 © Tomato.com - All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
