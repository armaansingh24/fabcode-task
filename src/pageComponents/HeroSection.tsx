"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const Index: React.FC = () => {
  const [inputs, setInputs] = useState<FormData>({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const validations = () => {
    const { name, email } = inputs;
    const newError = {
      name: "",
      email: "",
    };
    let valid = true;
    if (!name) {
      console.log("isasdas");
      newError.name = "Name is required";
      valid = false;
    }
    if (!email) {
      newError.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newError.email = "Invalid email format";
      valid = false;
    }
    setErrors(newError);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("running");
    if (validations()) {
      localStorage.setItem("userDetails", JSON.stringify(inputs));
      alert("Form submitted successfully!");
      setInputs({ name: "", email: "" });
    }
  };

  return (
    <div className="w-[90%] flex justify-between items-center pb-20 gap-8 mt-4">
      {/* Left section */}
      <div className="w-[50%] h-[90vh]">
        <div className="HeroBackground h-full py-8 flex flex-col justify-center items-center rounded-[40px]">
          <p className="text-secondery font-bold text-[90px] uppercase text-center w-full">
            Let the games begin
          </p>
          <div className="flex text-secondery font-semibold gap-9">
            <button className="bg-primary rounded-[16px] py-4 w-[10rem] uppercase">
              shop now
            </button>
            <button className="bg-primary rounded-[16px] py-4 w-[10rem] uppercase">
              explore
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-[50%] h-[90vh]">
        <div className="w-full h-full flex flex-col items-start justify-between bg-seconderyBackground rounded-[40px] p-6">
          <div className="font-bold text-green uppercase">
            <p>let’s play</p>
          </div>
          <div className="font-bold text-primary uppercase text-[32px]">
            <p>
              WIN POPDARTS <br /> FOR LIFE
            </p>
          </div>
          <div className="text-primary">
            <p>
              Want to get every new Pro Pack for life? <br />
              Enter to win by providing your name, email,
              <br /> and phone number below.
            </p>
          </div>
          <div className="w-full">
            <div className="w-full bg-secondery px-4 py-5 rounded-[20px]">
              <input
                type="text"
                name="name"
                value={inputs.name}
                placeholder="Name"
                onChange={handleInputChange}
                className={`w-full font-bold text-primary  placeholder-primary outline-none
                    ${errors.name !== "" && "text-warning placeholder-warning"}
                  `}
              />
            </div>
            {errors.name !== "" && (
              <p className="text-warning text-sm ml-4 mt-2">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <div className="w-full bg-secondery px-4 py-5 rounded-[20px]">
              <input
                type="email"
                name="email"
                value={inputs.email}
                placeholder="Your Email"
                onChange={handleInputChange}
                className={`w-full font-bold text-primary  placeholder-primary outline-none
                    ${errors.email !== "" && "text-warning placeholder-warning"}
                  `}
              />
            </div>
            {errors.email !== "" && (
              <p className="text-warning text-sm ml-4 mt-2">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary text-white rounded-[16px] py-4 w-full uppercase mt-4"
            onClick={handleSubmit}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export const HeroSection = Index;
