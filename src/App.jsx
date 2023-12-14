import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Strength from "./pages/Strength";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import PageNav from "./components/PageNav";
import { useEffect, useState } from "react";


function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function fetchData () {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1700);
    };

    fetchData();

    return () => {
      clearTimeout(); 
    };
  }, []);

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage isLoading={isLoading} />} />
        <Route path="pagenav" element={<PageNav />} />
        <Route path="about" element={<About isLoading={isLoading} />} />
        <Route path="strength" element={<Strength isLoading={isLoading} />} />
        <Route path="contact" element={<Contact isLoading={isLoading} />} />
        <Route path="portfolio" element={<Portfolio isLoading={isLoading} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//<Route path="about"  element={<About />}/>
//<Route path="portfolio"  element={<Portfolio />}/>
//
//<Route path="*"  element={<PageNotFound />}/>
