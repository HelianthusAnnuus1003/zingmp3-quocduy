import icons from "./icons";

const {
    MdOutlineLibraryMusic,
    HiOutlineChartPie,
    TbChartArcs,
    MdOutlineFeed,
    FiRadio,
    FiMusic,
    BiCategoryAlt,
    BsStar,
    BiMoviePlay,
} = icons;

export const sideBarMenus = [
    {
        path: "mymusic",
        text: "Cá Nhân",
        icon: <MdOutlineLibraryMusic size={24} />,
    },
    {
        path: "",
        text: "Khám Phá",
        icon: <TbChartArcs size={24} />,
        end: true,
    },
    {
        path: "zingchart",
        text: "#zingchart",
        icon: <HiOutlineChartPie size={24} />,
    },
    {
        path: "radio",
        text: "Radio",
        icon: <FiRadio size={24} />,
    },
    {
        path: "follow",
        text: "Theo Dõi",
        icon: <MdOutlineFeed size={24} />,
    },
];

export const sideBarOverFlowMenus = [
    {
        path: "moi-phat-hanh",
        text: "Nhạc mới",
        icon: <FiMusic size={24} />,
    },
    {
        path: "hub",
        text: "Thể loại",
        icon: <BiCategoryAlt size={24} />,
        end: true,
    },
    {
        path: "top100",
        text: "Top 100",
        icon: <BsStar size={24} />,
    },
    {
        path: "the-loai-video",
        text: "MV",
        icon: <BiMoviePlay size={24} />,
    },
];
