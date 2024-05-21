import './App.css';

import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyRoutes from "./MyRoutes";

function App() {
const body = document.querySelector('body');
body.setAttribute('data-bs-theme', 'dark');
    return (
        <div className="App">
            <Navbar />
            <MyRoutes />
        </div>

    );
}

export default App;
