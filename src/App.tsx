import Layout from "./Layout/Layout";
import SecPage from "./SecPage/SecPage";

import ThirdPage from "./ThirdPage/ThirdPage";
import ForthPage from "./ForthPage/ForthPage";

import SixthPage from "./SixthPage/SixthPage";
import FifthPage from "./FifthPage/FifthPage";

import { Routes, Route } from "react-router-dom";
import SeventhPage from "./SeventhPage/SeventhPage";

import Firstpage from "./FirstPage/Firstpage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/secPage" element={<SecPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
        <Route path="/firstpage" element={<Firstpage />} />
        <Route path="/forthpage" element={<ForthPage />} />
        <Route path="/fifthpage" element={<FifthPage />} />
        <Route path="/seventhpage" element={<SeventhPage />} />
        <Route path="/sixthpage" element={<SixthPage />} />
      </Routes>
    </div>
  );
}
