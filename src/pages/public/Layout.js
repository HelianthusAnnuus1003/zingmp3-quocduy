import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Player } from "../../components";
import background from "../../assets/background.jpg";

const Layout = () => {
    return (
        <div
            className="w-full min-heght-screen flex flex-col object-cover bg-main-300"
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1920px auto',
            }}
        >
            <div className="w-full h-full flex">
                <div className="w-[240px] flex-none relative z-[100]">
                    <Sidebar />
                </div>
                <div className="flex-auto">
                    <Outlet />
                </div>
            </div>
            <div className="h-[90px]">
                <Player />
            </div>
        </div>
    );
};

export default Layout;
