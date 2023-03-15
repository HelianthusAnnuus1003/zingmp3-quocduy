import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import background from "../../assets/background.jpg";

const Layout = () => {
    return (
        <div
            className="w-full flex object-cover"
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1920px auto',
            }}
        >
            <div className="w-[240px] flex-none relative z-[100]">
                <Sidebar />
            </div>
            <div className="flex-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
