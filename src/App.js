import { useContext, useEffect } from "react";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import { AppContext } from "./Context/AppContext";
import './App.css'

export default function App() {

  const{fetchBlogs} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogs();
    // eslint-disable-next-line
  },[])

  return (
    
    <div className="flex flex-col items-center">
      <h1 className=" w-full fixed top-0 bg-white text-center uppercase font-bold text-3xl py-4 shadow-md border-b-2 border-slate-300">
        Shiva Blogs
      </h1>

      <Blogs/>

      <Footer/>
    </div>


  );
}
