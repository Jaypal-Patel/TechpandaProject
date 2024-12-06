import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Componet/Header";
import Footer from "./Componet/Footer";

import Home from "./Landing/HomePage/Home";
import ContactPage from "./Landing/ContactPage/ContactPage";

import Analysis from "./Landing/FuturesPage/Analysis";
import LongShort from "./Landing/FuturesPage/LongShort";
import PriceVsOI from "./Landing/FuturesPage/PriceVsOI";

import Oianalysis from "./Landing/OptionsPage/Oianalysis";
import CallPutOi from "./Landing/OptionsPage/CallPutOi";
import TreadingOistrik from "./Landing/OptionsPage/TreadingOistrik";
import AdvancedOption from "./Landing/OptionsPage/AdvancedOption";
import OptionChain from "./Landing/OptionsPage/OptionChain";
import ATMPremium from "./Landing/OptionsPage/ATMPremium";
import PriceOI from "./Landing/OptionsPage/PriceOI";
import LongShortData from "./Landing/OptionsPage/LongShortData";

import StraddleStrangle from "./Landing/StrategyPage/StraddleStrangle";
import MultipleStrikes from "./Landing/StrategyPage/MultipleStrikes";
import StraddleSnapshot from "./Landing/StrategyPage/StraddleSnapshot";

import Login from "./Componet/Login";
import SignUp from "./Componet/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/futures-analysis" element={<Analysis />} />
        <Route path="/long-vs-short" element={<LongShort />} />
        <Route path="/price-vs-oi" element={<PriceVsOI />} />

        <Route path="/oi-analysis" element={<Oianalysis />} />
        <Route path="/call-vs-put-oi" element={<CallPutOi />} />
        <Route path="/advanced-option-chain" element={<AdvancedOption />} />
        <Route path="/option-chain" element={<OptionChain />} />
        <Route path="/put-call-ratio" element={<TreadingOistrik />} />
        <Route path="/atm-premium" element={<ATMPremium />} />
        <Route path="/price-vs-oi" element={<PriceOI />} />
        <Route path="/long-&-short" element={<LongShortData />} />

        <Route path="/straddle-strangle" element={<StraddleStrangle />} />
        <Route path="/multi-strike-straddle" element={<MultipleStrikes />} />
        <Route path="/straddle-snapshot" element={<StraddleSnapshot />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
