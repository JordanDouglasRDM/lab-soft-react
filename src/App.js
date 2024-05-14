import './App.css';

import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyRoutes from "./MyRoutes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <MyRoutes />
        </div>

    );
}

export default App;
