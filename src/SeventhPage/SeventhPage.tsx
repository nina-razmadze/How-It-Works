import Footer from "../Layout/Footer/Footer";
import footerimg from "../assets/images/Group 43733.png";

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
