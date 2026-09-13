import { Suspense } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Technologies from "./components/Technologies/Technologies";
import type { Technology } from "./type/type";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// data fetching
const technologiesFetch = async (): Promise<Technology[]> => {
  const res = await fetch("data/data.json");
  const data = await res.json();
  return data;
};


function App() {
  const technologiePromise = technologiesFetch()
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h2>Loading technologies...</h2>}>

      <Technologies technologiePromise={technologiePromise}/>
      </Suspense>
      <Footer/>
      <ToastContainer/>
    </>
  );
}

export default App;
