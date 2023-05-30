import BannerHome from "@/components/banner-homer";
import React from "react";
import {EpisodeType} from "@/types/episode";
import EpisodeList from "@/components/episode-list";
import Pagination from "@/components/pagination";

const getEpisodes = async(): Promise<EpisodeType[]> => {
    const res = await fetch('https://rickandmortyapi.com/api/episode?episode=s01');

    if (!res.ok) {
        throw new Error('Could not retrive episodes');
    }

    return res.json();
}


const Home = async () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between container max-w-[1400px]">
            <BannerHome/>
            <EpisodeList/>
            <Pagination/>
        </main>
    )
}

export default Home;