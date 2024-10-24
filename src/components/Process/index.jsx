import "../../assets/css/About.css";
import ProcessCenter from "./ProcessCenter";
import ProcessHeader from "./ProcessHeader";

const ProcessIndex = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000); // Simulating async load delay
    AOS.init({ duration: 2000 });
    return () => clearTimeout(timer); // Cleanup timer

    setLoading(false);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };
  if (loading) {
    return <Loader />; // Show loader while loading
  }
  return (
    <>
      <ProcessHeader />
      <ProcessCenter />
    </>
  );
};
export default ProcessIndex;
