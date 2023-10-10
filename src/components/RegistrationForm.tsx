"use client";
import React, { useState } from "react";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function registerUser(e: any) {
    e.preventDefault();
    //Do something
  }

  return (
    <form
      onSubmit={registerUser}
      className="h-fit flex flex-col gap-10 w-full md:w-[50%] lg:w-[40%] xl:w-[40%] px-[5%] py-20 text-gray-200"
    >
      <h2 className="text-gray-50 text-2xl font-bold text-center md:text-left lg:text-left xl:text-left">
        Sign Up
      </h2>

      <fieldset className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-2">
          <label>Full Name</label>
          <input
            className="text-[#03022D] w-full bg-gray-100 text-center p-2 outline-none rounded-sm"
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            onInvalid={(e) => {
              // e.target.setCustomValidity(
              //     "Please type your first and last name."
              // )
              }
            }
            onInput={(e) => {
              // e.target.setCustomValidity("")
            }
          }
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label>Preferred Username</label>
          <input
            className="text-[#03022D] w-full bg-gray-100 text-center p-2 outline-none rounded-sm"
            type="text"
            name="username"
            placeholder="amazingjohn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            onInvalid={(e) => {
              // e.target.setCustomValidity("Please type your preferred username.")
              }
            }
            onInput={(e) => {
              // e.target.setCustomValidity("")
            }}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label>Email Address</label>
          <input
            className="text-[#03022D] w-full bg-gray-100 text-center p-2 outline-none rounded-sm"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onInvalid={(e) => {
              // e.target.setCustomValidity(
              //     "Please type your active email address."
              // )
            }
            }
            onInput={(e) => {
              // e.target.setCustomValidity("")
            }}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label>Create Password</label>
          <input
            className="text-[#03022D] w-full bg-gray-100 text-center p-2 outline-none rounded-sm"
            type="password"
            name="password"
            placeholder="create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            onInvalid={(e) => {
              // e.target.setCustomValidity("Please type your password.")
              }
            }
            onInput={(e) => {
              // e.target.setCustomValidity("")
            }}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label>Confirm Password</label>
          <input
            className="text-[#03022D] w-full bg-gray-100 text-center p-2 outline-none rounded-sm"
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            onInvalid={(e) => {
              // e.target.setCustomValidity("Please confirm your password.")
              }
            }
            onInput={(e) => {
              // e.target.setCustomValidity("")
            }}
          />
        </fieldset>
        {/* text-[#03022D] */}
        <input
          className="bg-gray-500 text-[#711212] w-fit flex self-center mt-10 py-2 px-[20%] rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200"
          type="submit"
          value="Register"
        />
      </fieldset>
    </form>
  );
};

export default RegistrationForm;
