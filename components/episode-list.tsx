import React from "react";
import {ResponseEpisodeType} from "@/types/episode-type";
import EpisodeCard from "@/components/episode-card";


const getEpisodes = async(): Promise<ResponseEpisodeType[]> => {
    const res = await fetch('https://rickandmortyapi.com/api/episode?episode=s01');

    if (!res.ok) {
        throw new Error('Could not retrive episodes');
    }

    return res.json();
}

const EpisodeList: React.FC<ResponseEpisodeType> = async () => {
    const episodes = await getEpisodes();

    return (
        <div className="p-[50px] w-full">
            <h2 className="text-white font-bold leading-normal text-4xl">EpisodeType List</h2>
            <div className="flex justify-between items-center my-6">
                <h3 className="text-2xl font-bold text-blue-500 tracking-[-0.01em]">Season 1</h3>
                <h4 className="text-white leading-none text-sm font-medium">{episodes.info.count} Episodes</h4>
            </div>
                <div className="grid grid-cols-3 gap-[30px]">
                {episodes.results.map((episode, index) => (
                    <EpisodeCard title={episode.name} date={episode.air_date} idEpisode={episode.id} key={index} />
                ))
                }
                </div>
        </div>
    )
}

export default EpisodeList;

