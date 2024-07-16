import React from "react";
import appstore from "../assets/images/appstore.svg";
import googleplay from "../assets/images/googleplay.svg";
import youtube from "../assets/images/youtube.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import world from "../assets/images/world.svg";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-8 px-10 md:px-20">
      <div className="container mx-auto grid gap-12 md:gap-8 md:grid-cols-4 text-center md:text-left">
        <div className="grid gap-6">
          <h3 className="font-bold text-white">Product</h3>
          <a href="#" className="hover:text-gray-400">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-400">
            Overview
          </a>
          <a href="#" className="hover:text-gray-400">
            Browse
          </a>
          <a href="#" className="hover:text-gray-400">
            Accessibility
          </a>
          <a href="#" className="hover:text-gray-400">
            Five
          </a>
        </div>
        <div className="grid gap-6">
          <h3 className="font-bold text-white">Solutions</h3>
          <a href="#" className="hover:text-gray-400">
            Brainstorming
          </a>
          <a href="#" className="hover:text-gray-400">
            Ideation
          </a>
          <a href="#" className="hover:text-gray-400">
            Wireframing
          </a>
          <a href="#" className="hover:text-gray-400">
            Research
          </a>
          <a href="#" className="hover:text-gray-400">
            Design
          </a>
        </div>
        <div className="grid gap-6">
          <h3 className="font-bold text-white">Support</h3>
          <a href="#" className="hover:text-gray-400">
            Contact Us
          </a>
          <a href="#" className="hover:text-gray-400">
            Developers
          </a>
          <a href="#" className="hover:text-gray-400">
            Documentation
          </a>
          <a href="#" className="hover:text-gray-400">
            Integrations
          </a>
          <a href="#" className="hover:text-gray-400">
            Reports
          </a>
        </div>
        <div className="flex flex-col justify-between items-center md:items-start">
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-white">Get the App</h3>
            <a href="#" className="block">
              <img src={appstore} alt="Download on the App Store" />
            </a>
            <a href="#" className="block">
              <img src={googleplay} alt="Get it on Google Play" />
            </a>
          </div>
          <div className="grid gap-6 mt-8 md:mt-0">
            <h3 className="font-bold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-white">
                <img src={youtube} alt="YouTube" />
              </a>
              <a href="#" className="hover:text-white">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" className="hover:text-white">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="#" className="hover:text-white">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#" className="hover:text-white">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-700 my-8" />
      <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between mt-4 text-center md:text-left">
        <p className="text-sm">Collers @ 2023. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
          <a href="#" className="flex items-center hover:text-white">
            <img className="mr-2" src={world} alt="Language" />
            EN
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
