"use client";

import { apiEndpoint } from "@/app/constants";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: any) {
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        toast.success("Email Sent !", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        reset();
      })
      .catch((err) => {
        reset();
        toast.error("Email Servers are busy having some party!", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
      });
  }

  return (
    <section
      className="md:mt-12 mx-7 mt-20 flex flex-col items-center mb-10"
      id="contact"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-800 px-40 py-24 lg:w-2/4 shadow-2xl shadow-slate-700 rounded-xl"
      >
        <motion.h2
          className="text-5xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
            },
          }}
        >
          Contact
        </motion.h2>
        <div className="mb-5 mt-20">
          <label htmlFor="name" className="mb-3 block text-base text-white">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-cyan-600 focus:shadow-md ${
              errors.name?.message && "border-rose-700 border-2"
            }`}
            {...register("name", { required: true })}
          />
          <p className="text-rose-500 mt-1">{errors.name?.message}</p>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base text-white">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-cyan-600 focus:shadow-md"
            {...register("email", { required: true })}
          />
          <p className="text-rose-500 mt-1">{errors.email?.message}</p>
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block text-base text-white">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-cyan-600 focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
          <p className="text-rose-500 mt-1">{errors.message?.message}</p>
        </div>
        <div>
          <motion.button
            className="mt-10 border p-2 shadow-xl w-44 hover:shadow-slate-700 hover:scale-105"
            whileTap={{ scale: 0.85 }}
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-xl shadow-xl hover:shadow-slate-700 hover:scale-110 mr-2"
            />
            Send Message
          </motion.button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Contact;
