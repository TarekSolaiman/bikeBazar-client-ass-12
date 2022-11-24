import React from "react";
import logo from "../assets/bikeLogo.png";

const Footer = () => {
  return (
    <footer className="container mx-auto footer p-10 bg-base-200 text-base-content">
      <div>
        <div className="flex flex-wrap items-center justify-between">
          <img className="w-12 rounded-full mr-2" src={logo} alt="" />
          <span className="self-center text-2xl font-bold text-blue-500 whitespace-nowrap">
            BIKE Bazar
          </span>
        </div>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <p className="link link-hover">Branding</p>
        <p className="link link-hover">Design</p>
        <p className="link link-hover">Marketing</p>
        <p className="link link-hover">Advertisement</p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <p className="link link-hover">About us</p>
        <p className="link link-hover">Contact</p>
        <p className="link link-hover">Jobs</p>
        <p className="link link-hover">Press kit</p>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <p className="link link-hover">Terms of use</p>
        <p className="link link-hover">Privacy policy</p>
        <p className="link link-hover">Cookie policy</p>
      </div>
    </footer>
  );
};

export default Footer;
