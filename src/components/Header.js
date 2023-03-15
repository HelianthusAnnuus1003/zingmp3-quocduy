import React from "react";
import icons from "../ultils/icons";
import avatar from "../assets/avatar.jpg";

const {
    BsArrowLeft,
    BsArrowRight,
    IoIosSearch,
    GoDesktopDownload,
    RiVipDiamondLine,
    FiSettings,
} = icons;

const Header = () => {
    return (
        <div className="flex justify-between w-full sticky z-[100] bg-[hsla(0,0%,100%,0.8)]">
            <div className="header-left flex items-center">
                <div className="header-left__btns flex items-center mr-5">
                    <button className="text-[24px] mr-5">
                        <BsArrowLeft />
                    </button>
                    <button className="text-[24px]">
                        <BsArrowRight />
                    </button>
                </div>
                <form className="header-left__search w-[440px]">
                    <div className="w-full h-10 flex items-center px-3 rounded-[20px] bg-bg-color">
                        <button className="text-[24px] text-[#757575] mr-3">
                            <IoIosSearch />
                        </button>
                        <input
                            type="text"
                            className="w-[85%] py-[5px] text-[15px] text-[#282828] font-semibold bg-transparent outline-none"
                            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                        />
                    </div>
                </form>
            </div>
            <div className="header-right flex items-center">
                <div className="download-desktop text-primary-color h-10 flex items-center px-6 py-[10px] rounded-[20px] bg-bg-color">
                    <GoDesktopDownload className="text-[16px] mr-2" />
                    <span className="text-[15px] font-bold">
                        Tải bản Windows
                    </span>
                </div>
                <div className="p-[5px] w-[40px] h-[40px] flex items-center justify-center mx-3 text-[#495057] rounded-[100%] bg-bg-color">
                    <RiVipDiamondLine className="text-[18px]" />
                </div>
                <div className="p-[5px] w-[40px] h-[40px] flex items-center justify-center mr-3 text-[#495057] rounded-[100%] bg-bg-color">
                    <FiSettings className="text-[18px]" />
                </div>
                <img
                    className="w-[40px] h-[40px] rounded-[100%] object-cover"
                    src={avatar}
                    alt="Avatar"
                />
            </div>
        </div>
    );
};

export default Header;
