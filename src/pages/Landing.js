import React, { useState } from "react";
import rectbig from "../assets/images/rectbig.svg";
import sneaker from "../assets/images/sneaker.svg";
import watchdemo from "../assets/images/watchdemo.svg";
import trophy from "../assets/images/trophy.svg";
import tunnel from "../assets/images/tunnel.svg";
import tv from "../assets/images/tv.svg";
import cart from "../assets/images/cart.svg";
import sneaker1 from "../assets/images/sneaker1.svg";
import sneaker2 from "../assets/images/sneaker2.svg";
import sneaker3 from "../assets/images/sneaker3.svg";
import rectpink from "../assets/images/rectpink.svg";
import rectsky from "../assets/images/rectsky.svg";
import rectamber from "../assets/images/rectamber.svg";
import rectgreen from "../assets/images/rectgreen.svg";
import rectfuchsia from "../assets/images/rectfuchsia.svg";
import video from "../assets/images/video.svg";
import tick from "../assets/images/tick.svg";
import arrowright from "../assets/images/arrowright.svg";
import arrowleft from "../assets/images/arrowleft.svg";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";
import logo3 from "../assets/images/logo3.svg";
import logo4 from "../assets/images/logo4.svg";
import user1 from "../assets/images/user1.svg";
import user2 from "../assets/images/user2.svg";
import user3 from "../assets/images/user3.svg";
import user4 from "../assets/images/user4.svg";
import arrow from "../assets/images/arrow.svg";
import search from "../assets/images/search.svg";
import shield from "../assets/images/shield.svg";
import rocket from "../assets/images/rocket.svg";
import screen from "../assets/images/screen.svg";
import podcast from "../assets/images/podcast.svg";
import settings from "../assets/images/settings.svg";
import pictures from "../assets/images/pictures.svg";
import waves from "../assets/images/waves.svg";
import chart from "../assets/images/chart.svg";
import sneakercollect from "../assets/images/sneakercollect.svg";

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      logo: logo1,
      text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      userImage: user1,
      userName: "Ralph Edwards",
      userTitle: "Product Designer",
    },
    {
      id: 2,
      logo: logo2,
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      userImage: user2,
      userName: "Hellen Jummy",
      userTitle: "Team Lead",
    },
    {
      id: 3,
      logo: logo3,
      text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      userImage: user3,
      userName: "Hellena John",
      userTitle: "Co-founder",
    },
    {
      id: 4,
      logo: logo4,
      text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      userImage: user4,
      userName: "David Oshodi",
      userTitle: "Manager",
    },
    {
      id: 5,
      logo: logo1,
      text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      userImage: user1,
      userName: "Charolette Hanlin",
      userTitle: "CEO",
    },
  ];

  const cardWidth = 384;
  const gap = 24;
  const cardsPerView = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - cardsPerView : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - cardsPerView ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-gradient-to-b from-amber-50 to-white text-slate-900 font-sans overflow-hidden">
      <img src={rectbig} className="absolute md:top-36 top-96 z-0" alt="" />
      <section className="sticky md:p-20 px-4 py-12 flex flex-col md:flex-row gap-8 items-center self-stretch z-20">
        <div className="md:w-1/2 text-center flex flex-col gap-8 md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Collectible Sneakers
          </h1>
          <p>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div className="flex justify-center gap-4 text-amber-900">
            <button className="border-2 border-amber-900 w-44 h-14 px-8 py-4 rounded-lg whitespace-nowrap hover:bg-amber-900 hover:text-white transition duration-300">
              Sign up now
            </button>
            <button className="flex p-4 gap-2 w-44 h-14 text-base rounded-lg whitespace-nowrap">
              <img src={watchdemo} alt="" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <img
            src={sneaker}
            alt="Sneakers"
            className="relative z-10 max-w-full h-auto"
          />
        </div>
      </section>
      <section className="sticky z-30 md:bg-inherit bg-amber-100 self-stretch md:p-20 px-4 py-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
            <img src={trophy} className="" alt="" />
            <h2 className="text-xl font-bold mb-2">Nibh viverra</h2>
            <p>
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
            <img src={tunnel} className="" alt="" />
            <h2 className="text-xl font-bold mb-2">Cursus amet</h2>
            <p>
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
            <img src={tv} className="" alt="" />
            <h2 className="text-xl font-bold mb-2">Ipsum fermentum</h2>
            <p>
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </section>
      <section className="sticky bg-slate-900 px-4 py-12 md:p-20 md:gap-20 gap-8 text-white flex flex-col">
        <div className="flex md:flex-row flex-col justify-between gap-8 items-center">
          <h1 className="md:text-6xl sm:text-4xl text-3xl font-extrabold text-white">
            The best of the best
          </h1>
          <button className="flex justify-center items-center px-12 py-5 w-56 h-16 border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition duration-300">
            Sign up now
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-8">
          <div className="relative flex flex-col items-center rounded-lg bg-slate-900 border border-slate-900 shadow-2xl shadow-white/25 max-w-full">
            <img
              src={rectpink}
              className="absolute md:bottom-6 md:-left-5 -bottom-8 left-5 -z-10"
              alt=""
            />
            <img src={sneaker1} className="rounded-t-lg w-full" alt="" />
            <div className="flex flex-col p-8 gap-4 w-full">
              <h2 className="text-xl font-bold text-white">Title</h2>
              <p className="text-gray-400">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
              <button className="flex justify-center items-center mt-4 gap-4 h-14 p-4 border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition duration-300">
                <img src={cart} alt="Cart" />
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative flex flex-col items-center rounded-lg bg-slate-900 border border-slate-900 shadow-2xl shadow-white/25 max-w-full">
            <img
              src={rectsky}
              className="absolute md:-top-8 md:-left-5 md:w-40 md:h-40 top-32 -right-4 -z-10"
              alt=""
            />
            <img
              src={rectamber}
              className="absolute bottom-12 -right-3 -z-10 hidden md:block"
              alt=""
            />
            <img src={sneaker2} className="rounded-t-lg w-full" alt="" />
            <div className="flex flex-col p-8 gap-4">
              <h2 className="text-xl font-bold text-white">Title</h2>
              <p className="text-gray-400">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
              <button className="flex justify-center items-center mt-4 gap-4 h-14 border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition duration-300">
                <img src={cart} alt="Cart" />
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative flex flex-col items-center rounded-lg bg-slate-900 border border-slate-900 shadow-2xl shadow-white/25 max-w-full">
            <img
              src={rectgreen}
              className="absolute top-8 -right-11 -z-10 hidden md:block"
              alt=""
            />
            <img
              src={rectfuchsia}
              className="absolute md:-bottom-6 md:top-auto md:left-auto top-14 -left-4 -z-10"
              alt=""
            />
            <img src={sneaker3} className="rounded-t-lg w-full" alt="" />
            <div className="flex flex-col p-8 gap-4">
              <h2 className="text-xl font-bold text-white">Title</h2>
              <p className="text-gray-400">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
              <button className="flex justify-center items-center mt-4 gap-4 h-14 border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition duration-300">
                <img src={cart} alt="Cart" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="sticky z-30 md:px-20 md:py-40 px-4 py-8 self-stretch">
        <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 bg-white items-center rounded-[30px] shadow-2xl md:px-20 md:py-28 px-4 py-8">
          <div className="flex flex-col md:items-start items-center text-start gap-6 z-10">
            <h2 className="md:text-6xl text-3xl font-bold text-slate-900">
              Why join us
            </h2>
            <div className="flex flex-col text-xl leading-9">
              <span className="flex gap-2">
                <img src={tick} className="" alt="" />
                Est et in pharetra magna adipiscing ornare aliquam.
              </span>
              <span className="flex gap-2">
                <img src={tick} className="" alt="" />
                Tellus arcu sed consequat ac velit ut eu blandit.
              </span>
              <span className="flex gap-2">
                <img src={tick} className="" alt="" />
                Ullamcorper ornare in et egestas dolor orci.
              </span>
            </div>
            <button className="border-2 border-amber-900 p-4 w-44 h-14 rounded-lg hover:bg-amber-900 hover:text-white transition duration-300">
              Sign up now
            </button>
          </div>
          <img
            src={video}
            className="absolute md:right-12 -right-2 max-md:bottom-2 md:w-1/2"
            alt=""
          />
        </div>
      </section>
      <section className="md:py-20 py-12 flex flex-col gap-20">
        <div className="flex md:px-20 justify-between items-center md:flex-row flex-col text-center md:text-left">
          <h2 className="md:text-6xl text-3xl font-bold text-slate-900">
            Because they love us
          </h2>
          <span className=" gap-6 md:flex hidden">
            <button
              onClick={prevSlide}
              className="rounded-full border w-12 h-12 p-3 border-amber-900"
            >
              <img src={arrowleft} alt="Previous" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full border w-12 h-12 p-3 border-amber-900"
            >
              <img src={arrowright} alt="Next" />
            </button>
          </span>
        </div>
        <div className="relative flex flex-row items-start justify-center text-black overflow-x-auto no-scrollbar">
          <div className="absolute bg-amber-200 w-[90%] h-[421px] -top-10"></div>
          <div
            className="flex transition-transform duration-300 gap-6"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
            }}
          >
            {cards.map((card) => (
              <div key={card.id} className="flex-shrink-0">
                <div className="flex flex-col p-8 text-2xl leading-9 w-[384px] h-[430px] items-start text-start justify-between rounded-3xl border border-slate-200 bg-white shadow-lg z-0">
                  <div className="py-4">
                    <img src={card.logo} alt="Logo" className="w-full" />
                  </div>
                  <p className="">{card.text}</p>
                  <div className="flex flex-row gap-4 mt-4 px-4">
                    <img
                      src={card.userImage}
                      alt="User"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <span className="text-lg">{card.userName}</span>
                      <span className="block text-base text-slate-600">
                        {card.userTitle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative  ">
        <img src={waves} className="absolute -bottom-1" alt="" />
        <div className="md:p-20 px-4 py-12 flex flex-col md:gap-20 gap-8">
          <div className="gap-8 flex flex-col md:text-start text-center z-10">
            <h2 className="md:text-6xl text-3xl md:font-extrabold font-bold text-slate-900">
              Grow your collection
            </h2>
            <p className="text-lg ">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
          </div>
          <div class="relative pb-56 flex justify-center gap-4">
            <img
              src={pictures}
              class="absolute md:-right-12 md:bottom-4 -bottom-16 md:w-4/5 w-96 h-full"
              alt=""
            />
            <div class="w-full overflow-x-scroll no-scrollbar flex md:flex-col space-x-4 p-4">
              <div class="w-64 h-14 p-4 flex-shrink-0 flex justify-between items-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src={search} alt="" class="w-6 h-6" />
                <h3 class="text-xl">Bibendum tellus</h3>
                <img src={arrow} alt="" class="w-6 h-6" />
              </div>
              <div class="w-64 h-14 p-4 flex-shrink-0 flex justify-between items-center rounded-lg group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src={shield} alt="" class="w-6 h-6" />
                <h3 class="text-xl">Cras eget</h3>
                <img
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6"
                  src={arrow}
                  alt="arrow"
                />
              </div>
              <div class="w-64 h-14 p-4 flex-shrink-0 flex justify-between items-center rounded-lg group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src={rocket} alt="" class="w-6 h-6" />
                <h3 class="text-xl">Dolor pharetra</h3>
                <img
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6"
                  src={arrow}
                  alt=""
                />
              </div>
              <div class="w-64 h-14 p-4 flex-shrink-0 flex justify-between items-center rounded-lg group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src={screen} alt="" class="w-6 h-6" />
                <h3 class="text-xl">Amet, fringilla</h3>
                <img
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6"
                  src={arrow}
                  alt=""
                />
              </div>
              <div class="w-64 h-14 p-4 flex-shrink-0 flex justify-between items-center rounded-lg group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src={podcast} alt="" class="w-6 h-6" />
                <h3 class="text-xl">Amet nibh</h3>
                <img
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6"
                  src={arrow}
                  alt=""
                />
              </div>
              <div class="w-64 h-14 p-4 flex-shrink-0 flex justify-between items-center rounded-lg group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src={settings} alt="" class="w-6 h-6" />
                <h3 class="text-xl">Sed velit</h3>
                <img
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6"
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-amber-900 flex md:px-48 py-10 h-[750px]">
        <img src={chart} className="absolute  w-[1049px] h-[644px]" alt="" />
        <img
          src={sneakercollect}
          className="absolute top-4 md:left-48 sm:left-28 left-16"
          alt=""
        />
        <div className="text-amber-50 mx-auto flex flex-col items-center justify-center z-20">
          <h2 className="md:text-8xl text-5xl font-extrabold">11,658,467</h2>
          <h2 className="md:text-6xl text-3xl font-bold">Shoes Collected</h2>
        </div>
      </section>
    </div>
  );
};

export default Landing;
