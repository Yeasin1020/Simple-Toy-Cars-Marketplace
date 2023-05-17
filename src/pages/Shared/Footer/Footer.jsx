const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
       <img className="w-14 h-14 rounded-lg " src="https://i.ibb.co/GTcXwv3/a6a99e988fb4de345d5943a5160fe2378c1b0a6e-1024-1023.jpg" alt="" />
        <p>
          Toys Cars Industries Ltd.
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
