import React from "react";
import { ReactTyped } from "react-typed";
import Background from "./Background";

const Body = () => {
  return (
    <>
      <Background />
      <div className="relative z-10 flex flex-col items-center p-4">
        <div className="flex justify-center items-center">
          <img
            src="/public/Photo.jpg"
            alt=""
            className="rounded-full h-[250px] w-[250px] mt-5"
          />
        </div>
        <div className="text-center mt-2 text-2xl leading-relaxed">
          <h1>Hi, my name is</h1>
          <h1 className="text-5xl">Harshit Garg</h1>
        </div>
        <div className="flex justify-center items-center">
          <h1>
            I'm a{" "}
            <ReactTyped
              strings={[
                "Web Developer",
                "Frontend Developer",
                "Mern Stack Developer",
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              showCursor={true}
              style={{ color: "#fa8f21" }}
            />
          </h1>
        </div>
        <div className="flex gap-5 justify-center items-center mt-5">
          <div>
            <a href="https://www.instagram.com/gargharshit377/" target="_blank">
              <img src="/public/instagram.png" alt="Instagram" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/harshit-garg-72528b1bb/"
              target="_blank"
            >
              <img src="/public/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
          <div>
            <a href="https://github.com/Harshitgarg63" target="_blank">
              <img src="/public/github.png" alt="GitHub" />
            </a>
          </div>
          <div>
            <a href="https://x.com/harshitgar77535" target="_blank">
              <img src="/public/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
