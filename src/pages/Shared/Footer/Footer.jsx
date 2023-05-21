import { FaBaby } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer	 p-10 bg-black text-base-content">
      <div className="flex">
      <FaBaby className="h-10 w-10 text-orange-600"></FaBaby>
      <h1 className=" text-[50px] pb-5 pt-3 ml-3   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Toys Cars</h1>
      </div>
      <div>
        <span className="footer-title text-white">Services</span>
        <a className="link link-hover text-white">Branding</a>
        <a className="link link-hover text-white">Design</a>
        <a className="link link-hover text-white">Marketing</a>
        <a className="link link-hover text-white">Advertisement</a>
      </div>
      <div>
        <span className="footer-title text-white">Company</span>
        <a className="link link-hover text-white">About us</a>
        <a className="link link-hover text-white">Contact</a>
        <a className="link link-hover text-white">Jobs</a>
        <a className="link link-hover text-white">Press kit</a>
      </div>
      <div>
        <span className="footer-title text-white">Legal</span>
        <a className="link link-hover text-white">Terms of use</a>
        <a className="link link-hover text-white">Privacy policy</a>
        <a className="link link-hover text-white">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
