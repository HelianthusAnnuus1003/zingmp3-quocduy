import { React, useEffect } from "react";
import { Header, Slider } from "../../components";
import * as apis from "../../apis";

const Home = () => {
    useEffect(() => {
        const fetchDataHome = async () => {
        }

        fetchDataHome()
    }, [])

    return (
        <div className="overflow-hidden">
            <div className="px-[59px] flex items-center h-[70px]">
                <Header />
            </div>
            <Slider />
        </div>
    );
};

export default Home;
