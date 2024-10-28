/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import "../../assets/css/Process.css";
import ProcessCenter from "./ProcessCenter.jsx";
import ProcessHeader from "./ProcessHeader.jsx";
import Loader from "../Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const Process = () => {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => setLoading(false), 3000); // Simulating async load delay
  //   AOS.init({ duration: 2000 });
  //   return () => clearTimeout(timer); // Cleanup timer

  //   setLoading(false);
  // }, []);

  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         height: "100vh",
  //         backgroundColor: "#000000",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Loader />
  //     </div>
  //   ); // Show loader while loading
  // }
  return (
    <>
      <ProcessHeader />
      <ProcessCenter />
    </>
  );
};
export default Process;
