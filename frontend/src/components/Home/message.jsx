import React from "react";
import Animation from "../Animation";

function Message({ message, title, slogan }) {
  return (
    <section className="py-16">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-3xl font-bold text-center text-black">{title}</h2>
        <p className="text-primary font-bold font-notoSansJP">{slogan}</p>
      </div>

      <Animation>
        <div className="space-y-16">
          {message.map((msg, index) => (
            <div
              key={index}
              className="flex w-full flex-col lg:flex-row h-auto lg:h-[500px]"
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2 h-full flex flex-col items-center lg:pl-10 bg-white">
                <p className="text-lg text-gray-700 font-notoSansJP p-4">
                  {msg.quote}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-full flex flex-col items-center">
                <img
                  src={msg.image}
                  alt={msg.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="text-center w-full flex flex-col justify-between items-center mt-4">
                  <span className="block text-3xl font-notoSansJP font-bold text-black mb-1">
                    {msg.name}
                  </span>
                  <span className="text-gray-500 font-notoSansJP">
                    {msg.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Animation>
    </section>
  );
}

export default Message;
