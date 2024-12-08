import React, { useState, useEffect } from "react";
import "../../assets/css/Process.css";
import Loader from "../Loader";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load the components
const ProcessHeader = React.lazy(() => import("./ProcessHeader.jsx"));
const ProcessCenter = React.lazy(() => import("./ProcessCenter.jsx"));

const Process = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS animations

    // Set loading state to false once the page is fully loaded
    const handlePageLoad = () => {
      setLoading(false); // Page is fully loaded
    };

    // If the page is already loaded, set loading state to false
    if (document.readyState === "complete") {
      handlePageLoad(); // If already loaded
    } else {
      window.addEventListener("load", handlePageLoad); // Wait for load event
    }

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader /> {/* Display loader while loading */}
      </div>
    );
  }

  return (
    <>
      <ProcessHeader />

      <ProcessCenter />
    </>
  );
};

export default Process;
