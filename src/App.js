import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="w-full">
          <NavBar />
        </header>

        <main className="flex-auto">
          <Routes>
            <Route path="/" element={ <Home/>}/>
          </Routes>
        </main>

        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
