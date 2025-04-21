import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="bg-surface-default p-6 sm:p-8 md:p-[60px]">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
