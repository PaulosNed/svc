import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {

  const [ selectedPage, setSelectedPage] = useState('home')

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="w-full z-40 fixed top-0 h-40">
          <NavBar selectedPage={selectedPage} setSelectedPage = {setSelectedPage}/>
        </header>

        <main className="flex-auto">
          <Routes>
            <Route path="/" element={ <Home/>}/>
          </Routes>
        </main>

        <footer className="w-full bg-black py-10 px-24">
          <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
