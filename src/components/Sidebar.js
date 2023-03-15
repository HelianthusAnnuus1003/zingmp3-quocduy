import React from "react";
import logo from "../assets/logo.svg";
import { sideBarMenus, sideBarOverFlowMenus } from "../ultils/menus";
import { NavLink } from "react-router-dom";
import icons from "../ultils/icons";
const { GrAdd } = icons;
const NotActiveStyle =
    "py-2 px-[25px] text-text-primary text-[14px] font-bold flex items-center";
const ActiveStyle =
    "py-2 px-[25px] text-primary-color text-[14px] font-bold flex items-center";

const Sidebar = () => {
    return (
        <div className="sidebar-container h-[calc(100vh_-_var(--player-height))] bg-bg-color overflow-hidden relative">
            <div className="sidebar-logo w-full h-[70px] pl-7 pr-[25px] py-[15px] flex items-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-[120px] object-contain"
                />
            </div>
            <div className="sidebar-menus h-[210px] flex flex-col pb-3">
                {sideBarMenus.map((item) => (
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? ActiveStyle : NotActiveStyle
                        }
                        key={item.path}
                        end={item.end}
                    >
                        <div className="mr-[10px]">{item.icon}</div>
                        <span>{item.text}</span>
                    </NavLink>
                ))}
                <div class="sidebar-divide relative h-[1px]"></div>
            </div>
            <div className="sidebar-overflow h-[190px] flex flex-col overflow-x-hidden overflow-y-scroll absolute mt-3">
                <div className="sidebar-overflow__container">
                    {sideBarOverFlowMenus.map((item) => (
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? ActiveStyle : NotActiveStyle
                            }
                            key={item.path}
                            end={item.end}
                        >
                            <div className="mr-[10px]">{item.icon}</div>
                            <span>{item.text}</span>
                        </NavLink>
                    ))}
                </div>
                <div className="sidebar-banner py-4 px-2 my-[10px] mx-5 rounded-lg text-center">
                    <p className="text-white text-[14px] font-bold mb-3">
                        Nghe nhạc không quảng cáo cùng kho nhạc VIP
                    </p>
                    <a
                        href="/"
                        className="py-[6px] px-[35px] text-[12px] font-bold bg-[#ffdb00] rounded"
                    >
                        Nâng cấp VIP
                    </a>
                </div>
            </div>
            <div className="sidebar-addplaylists flex items-center py-3 pl-7 text-text-primary text-[14px] font-bold h-[54px] absolute bottom-0 w-full">
                <GrAdd className="mr-[12px] text-text-primary w-5 h-5 font-bold" />
                <a href="/">Tạo playlist mới</a>
            </div>
        </div>
    );
};

export default Sidebar;
