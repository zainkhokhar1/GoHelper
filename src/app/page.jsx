"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Bolt,
  Car,
  CreditCard,
  Hammer,
  Lock,
  PaintRoller,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  ThumbsUpIcon,
  Timer,
  UserRoundSearch,
  Wrench,
} from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Stars from "./_components/Stars";
import { cards, features, TestimonalsData } from "./data";

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="md:h-fit md:w-screen max-md:h-fit max-md:w-screen flex items-center justify-center">
        <div
          className={`p-2 relative inset-0 max-md:h-fit max-md:w-screen md:w-[95%] md:h-fit bg-cover md:rounded-lg 
              grayscale-25`}
          style={{
            backgroundImage: `url(/hero1mobile.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            ...(window.innerWidth >= 768 && {
              backgroundImage: `url(/Hero1.jpg )`,
            }),
          }}
        >
          <div className="absolute inset-0 z-0 bg-black/70"></div>
          <div className="relative mt-12 mb-10 z-30">
            <h2 className="text-white text-3xl font-semibold text-center">
              Welcome to GoHelp! <br /> The Ultimate Service Finder!
            </h2>
            <div className="px-3">
              <h3 className="text-white text-2xl mb-3 self-start text-start font-semibold mt-5">
                Find Skilled Professionals Instantly
              </h3>
              <p className="break-all text-white/80">
                Need a plumber, electrician or any skilled worker? We’ve got you
                covered! Our platform connects you with trusted professionals
                near you in just a few clicks.
              </p>

              <h4 className="mt-10 text-xl text-white">
                Get Started Now! Find the best workers in your area today.
              </h4>
              <button className="px-5 py-2 my-3 rounded-md bg-white/90 hover:bg-white/95 duration-300 font-semibold text-lg outline-2 outline-black/10 hover:outline-black/30 outline-offset-1">
                Join Now
              </button>
              <button className="px-5 py-2 my-3 rounded-md bg-[#181818] hover:bg-[#181818]/90 ml-5 text-white duration-300 font-semibold text-lg outline-3 outline-white/60 hover:outline-white/90">
                Hire Now
              </button>
            </div>
          </div>
        </div>

        <div>
          {/* fixed to show the content on the smaller screens */}
          {/* <div className='absolute max-md:inset-0 z-10 max-md:top-30'>
                        <h2 className='text-white text-3xl font-semibold text-center'>
                            Welcome to GoHelp! <br /> The Ultimate Service Finder!
                        </h2>
                        <div className='px-3'>
                            <h3 className='text-white text-2xl mb-3 self-start text-start font-semibold mt-5'>
                                Find Skilled Professionals Instantly
                            </h3>
                            <p className='break-all text-white/80'>
                                Need a plumber, electrician or any skilled worker? We’ve got you covered! Our platform connects you with trusted professionals near you in just a few clicks.
                            </p>

                            <h4 className='mt-10 text-xl text-white'>
                                Get Started Now! Find the best workers in your area today.
                            </h4>
                            <button className='px-5 py-2 my-3 rounded-md bg-white/90 hover:bg-white/95 duration-300 font-semibold text-lg outline-2 outline-black/10 hover:outline-black/30 outline-offset-1'>
                                Join Now
                            </button>
                            <button className='px-5 py-2 my-3 rounded-md bg-[#181818] hover:bg-[#181818]/90 ml-5 text-white duration-300 font-semibold text-lg outline-3 outline-white/60 hover:outline-white/90'>
                                Hire Now
                            </button>
                        </div>
                    </div> */}
        </div>
      </div>

      {/*Service Categories section*/}
      <div className="flex max-md:flex-col py-14 max-md:items-center h-fit pt-4 w-full md:grid-cols-2 bg-[#181818] text-[#8c8c8c]">
        <h2 className="text-3xl font-semibold text-center my-6 text-white">
          Service Categories
        </h2>
        {/* card */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {cards.map((oneCard, index) => {
            return (
              <div
                key={oneCard.title + index}
                className={`max-md:mb-5 bg-[rgb(41, 41, 41)] cursor-pointer max-md:w-70 max-md:align-top rounded-lg h-72 justify-between pb-1 flex max-md:flex-col md:flex-row max-md:gap-1 border items-center border-white/30 bg-gradient-to-t from-10% from-indigo-300/10 to-100% ${oneCard?.colorOnly} hover:scale-105 duration-200`}
              >
                <span
                  className={`border w-fit h-fit p-3 backdrop-blur-2xl my-6 rounded-lg text-white ${oneCard?.color}`}
                >
                  {oneCard?.icon}
                </span>

                <div className="flex flex-col gap-3 p-1">
                  <h1 className="text-2xl font-semibold pl-2 tracking-wide text-start text-white">
                    {oneCard?.title}
                  </h1>
                  <p className="tracking-wide pl-2 text-white break-all">
                    {oneCard?.description}
                  </p>
                  <button className="px-3 py-2 mx-2 rounded-md border duration-300 cusor-pointer hover:bg-black/20 hover:text-white active:outline-purple-400/30 border-white/30">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why choose us section */}
      <div className="max-md:h-fit w-full mb-7">
        <h1 className="text-3xl text-center pt-6 pb-3 font-semibold">
          Why Choose Us
        </h1>
        <p className="text-[#6F6F6F]/95 font-medium px-3 break-all">
          We connect you with skilled professionals for all your home and
          commercial service needs. From expert plumbers to reliable
          electricians, we ensure quality, efficiency, and customer
          satisfaction—making your life easier, one service at a time.
        </p>

        {/* again cards here*/}
        {/* #2A2A2A #F5F5F5  para color #DEDEDE*/}
        <div className="flex flex-wrap items-center justify-center">
          {features.map((one, index) => {
            return (
              <div
                key={one?.title + index}
                className="h-fit px-4 w-80 flex items-start flex-col my-4 py-2 rounded-lg"
              >
                {/* div to show the icon */}
                <div
                  className={`rounded-xl ${one?.bgColor} h-40 w-70 flex items-center justify-center`}
                >
                  {one?.icon}
                </div>
                <h4 className="text-xl font-medium text-black/90 py-3">
                  {one?.title}
                </h4>
                <p className="text-gray-700 text-sm break-all">
                  {one?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* How It Works */}
      <div className="py-4">
        <h2 className="text-start pb-1 pl-7 flex flex-col font-semibold text-black/90">
          <span className="text-3xl">How It Works</span>
          <span className="text-sm py-2 text-purple-900/90">
            Step by Step Guide
          </span>
        </h2>

        <div className="flex max-md:flex-col items-center md:flex-row gap-2">
          {/* small cards to show the steps */}

          {/* one card */}
          <div className="flex flex-col justify-center gap-4 items-center p-2 h-52 w-80">
            <div className="bg-[#9672FF] shadow-lg shadow-[#9672FF]/20 w-18 h-18 rounded-xl flex items-center justify-center">
              <Search className="invert" size={40} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl  font-semibold">Search for a Service</h3>
              <p className="text-[#333333] font-medium">
                Enter your location and select the service you need.
              </p>
            </div>
          </div>
          <Image
            className="self-center rotate-90 my-12"
            src={"/purpletocyanline.png"}
            alt="arrow"
            width={120}
            height={120}
          />

          {/* 2nd card */}
          <div className="flex flex-col justify-center gap-4 items-center p-2 h-52 w-80">
            <div className="bg-[#4DDFFD] shadow-lg shadow-[#4DDFFD]/20 w-18 h-18 rounded-xl flex items-center justify-center">
              <UserRoundSearch color="#ffffff" size={40} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl  font-semibold">Compare & Choose</h3>
              <p className="text-[#333333] font-medium">
                Browse verified professionals, check ratings & reviews, and pick
                the best one.
              </p>
            </div>
          </div>

          <Image
            className="self-center rotate-90 my-12"
            src={"/cyantopurple.png"}
            alt="arrow"
            width={120}
            height={120}
          />

          {/* 3rd card */}
          <div className="flex flex-col justify-center gap-4 items-center p-2 h-52 w-80">
            <div className="bg-[#F2B8EC] shadow-lg shadow-[#F2B8EC]/20 w-18 h-18 rounded-xl flex items-center justify-center">
              <Lock color="#ffffff" size={40} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl  font-semibold">Book & Pay Securely</h3>
              <p className="text-[#333333] font-medium">
                Select a convenient date & time, then pay safely online or in
                person.
              </p>
            </div>
          </div>

          <Image
            className="self-center rotate-90 my-12"
            src={"/purpletocyanline.png"}
            alt="arrow"
            width={120}
            height={120}
          />

          {/* 4th card */}
          <div className="flex flex-col justify-center gap-4 items-center p-2 h-52 w-80">
            <div className="bg-[#9672FF] shadow-lg shadow-[#9672FF]/20 w-18 h-18 rounded-xl flex items-center justify-center">
              <ThumbsUpIcon className="invert" size={40} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl  font-semibold">Get the Job Done!</h3>
              <p className="text-[#333333] font-medium">
                Your chosen professional arrives on time and completes the
                service.
              </p>
            </div>
          </div>
          <Image
            className="self-center rotate-90 my-12"
            src={"/cyantopurple.png"}
            alt="arrow"
            width={120}
            height={120}
          />

          {/* 5th card */}
          <div className="flex flex-col justify-center gap-4 items-center p-2 h-52 w-80">
            <div className="bg-[#4DDFFD] shadow-lg shadow-[#4DDFFD]/20 w-18 h-18 rounded-xl flex items-center justify-center">
              <Star color="#ffffff" size={40} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl  font-semibold">Rate & Review</h3>
              <p className="text-[#333333] font-medium">
                Share your experience to help others find the best
                professionals!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonals */}
      <div className="space-y-3">
        <div className="flex flex-col items-start px-3">
          <h2 className="text-3xl font-semibold">Testimonials</h2>
          <p className="text-xs text-purple-700">
            Real customer reviews & ratings
          </p>
        </div>
        {/* first card */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
        >
          {
            // stars to show and also option to check the post or the person who got the review
            TestimonalsData.map((oneTestimonal) => {
              return (
                <SwiperSlide>
                  <div className="mx-auto flex items-start h-fit w-[300px] my-3 border border-[#E9ECF2] rounded-xl">
                    <div className="relative min-w-3/6 max-w-3/6 min-h-full h-45">
                      <Image
                        src="/profileImg.jfif"
                        alt="profileImage"
                        layout="fill"
                        className="rounded-xl"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-2 flex flex-col items-start justify-between min-h-full h-44 gap-1">
                      <div className="flex flex-col items-start">
                        <h3 className="text-lg font-medium">
                          {oneTestimonal.name}
                        </h3>
                        <p className="text-xs text-slate-600/60 line-clamp-4">
                          {oneTestimonal.review}
                        </p>
                        <span>
                          {
                            <Stars
                              className="border border-gray-300"
                              rating={oneTestimonal.rating}
                            />
                          }
                        </span>
                      </div>
                      <button className="text-xs py-[7px] text-white px-2 rounded-lg broder border-gray-300 bg-[#131313]">
                        Contact Worker
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </div>

      {/* CTA Section */}
      <div className="flex mt-4">
        <div className="flex flex-col items-center gap-5 py-12 px-1 text-center bg-[#131313]/90 text-white h-fit ">
          <h2 className="text-2xl font-semibold">Need a Skilled Professional? Get Help Instantly!</h2>
          <p className="text-sm text-white/90">
            Finding a trusted plumber, electrician, or handyman has never been
            easier! GoHelper connects you with verified professionals in your
            area – fast, reliable, and hassle-free.
          </p>
          <button className="px-8 bg-white/95 py-3 rounded-lg font-medium hover:bg-white duration-200 active:bg-white text-black/95">Find a Professional</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
