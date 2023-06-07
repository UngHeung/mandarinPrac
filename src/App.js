import Home from "./pages/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Main from "./pages/main/Main";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/login" element={<Login />} />
                <Route path="/user" element={<Signup />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
