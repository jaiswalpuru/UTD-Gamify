import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import logo from "./logo.svg"
import "./App.css";

import Login from "./components/Login";
import Home from "./components/Home";
import Location from "./components/Location";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/index")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{data}</p>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark header-bg p-2">
        <span className="container">
          <span className="navbar-brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-joystick" viewBox="0 0 16 16">
              <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
              <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
            </svg>
            Gamify
          </span>
        </span>
      </nav>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/location" exact element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
