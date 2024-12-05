import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import common components
import Header from "./Componet/Header";
import Footer from "./Componet/Footer";
//import NotFound from "./Component/NotFound"; // Ensure you have a 404 Not Found page component

// Lazy load page components
const Home = React.lazy(() => import("./Landing/HomePage/Home"));
const ContactPage = React.lazy(() =>
  import("./Landing/ContactPage/ContactPage")
);

const Analysis = React.lazy(() => import("./Landing/FuturesPage/Analysis"));
const LongShort = React.lazy(() => import("./Landing/FuturesPage/LongShort"));

const Oianalysis = React.lazy(() => import("./Landing/OptionsPage/Oianalysis"));
const CallPutOi = React.lazy(() => import("./Landing/OptionsPage/CallPutOi"));
const TreadingOistrik = React.lazy(() =>
  import("./Landing/OptionsPage/TreadingOistrik")
);
const AdvancedOption = React.lazy(() =>
  import("./Landing/OptionsPage/AdvancedOption")
);
const OptionChain = React.lazy(() =>
  import("./Landing/OptionsPage/OptionChain")
);
const ATMPremium = React.lazy(() => import("./Landing/OptionsPage/ATMPremium"));
const PriceOI = React.lazy(() => import("./Landing/OptionsPage/PriceOI"));
const LongShortData = React.lazy(() =>
  import("./Landing/OptionsPage/LongShortData")
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Futures Pages */}
          <Route path="/futures-analysis" element={<Analysis />} />
          <Route path="/long-vs-short" element={<LongShort />} />

          {/* Options Pages */}
          <Route path="/oi-analysis" element={<Oianalysis />} />
          <Route path="/call-vs-put-oi" element={<CallPutOi />} />
          <Route path="/advanced-option-chain" element={<AdvancedOption />} />
          <Route path="/option-chain" element={<OptionChain />} />
          <Route path="/put-call-ratio" element={<TreadingOistrik />} />
          <Route path="/atm-premium" element={<ATMPremium />} />
          <Route path="/price-vs-oi" element={<PriceOI />} />
          <Route path="/long-and-short" element={<LongShortData />} />

          {/* Catch-all for undefined routes */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
