import Footer from "../Layout/Footer/Footer";
import Layout from "../Layout/Layout";
import footerimg from "../assets/images/Group 43733.png";
import title from "../assets/images/Countdown to start of trading.png";

export default function SeventhPage() {
  return (
    <div className="flex-col justify-center items-center text-black h-screen w-screen bg-white ">
      <div className="flex justify-center">
        <img src={footerimg}></img>
      </div>
      <Footer />
    </div>
  );
}
