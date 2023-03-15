import "./App.css";
// useSelector - lay du lieu tu redux
// useDispatch - mang cac actions toi cho redux
// import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/public/Layout";
import Home from "./pages/public/Home";
import Contact from "./pages/public/Contact";
import paths from "./ultils/paths";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path={paths.LAYOUT} element={<Layout />}>
                        <Route path={paths.HOME} element={<Home />} />
                        <Route path={paths.CONTACT} element={<Contact />} />

                        <Route path={paths.STAR} element={<Home />} />
                    </Route>
                </Routes>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
