const Footer = () => {
  return (
    <footer className="footer	 p-10 bg-black text-base-content">
      <div>
       <img className="w-14 h-14 " src="https://i.ibb.co/GTcXwv3/a6a99e988fb4de345d5943a5160fe2378c1b0a6e-1024-1023.jpg" alt="" />
        <p className="text-white">
          Toys Cars Industries Ltd.
        </p>
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
