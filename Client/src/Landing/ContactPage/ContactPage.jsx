import React from "react";
import Contact from "../HomePage/Contact";

function ContactPage() {
  return (
    <div className="mt-[55px] md:mt-[70px]">
      <div
        className="relative w-full h-[170px] md:h-[400px] bg-center bg-no-repeat bg-cover object-cover flex items-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg')",
        }}
      >
        <div className="absolute left-4 md:left-20">
          <h2 className="text-white text-3xl md:text-8xl font-extrabold">
            Contact us
          </h2>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default ContactPage;
