import React from "react";
import Breadcrumb from "@/components/breadcrumb";
import {EpisodeType} from "@/types/episode";
import Image from "next/image";
import Link from "next/link";
import CharacterList from "@/components/character-list";

const getEpisode = async (episodeId: number) => {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`);

    if (!res.ok) {
        throw new Error('Could not retrive episode');
    }

    return res.json();
}

const SingleEpisode = async ({params}) => {
    const episode: EpisodeType = await getEpisode(params.episodeId);
    let charactersId = [];
    episode.characters.map((character: string) => {
        let arrChar = character.split('/');
        charactersId.push(arrChar.pop());
    })
    return (
        <>
            <div className="bg-single-episode w-full absolute z-0 flex justify-center">
                <div className="w-full pt-36 px-8 max-w-[1400px]">
                    <Breadcrumb title={episode.name}/>
                    <h1 className="text-gray-50 text-7xl font-bold leading-normal my-4">
                        <span className="text-blue-300">EP {episode.id}</span>&nbsp;
                        {episode.name}</h1>
                    <div className="flex items-center gap-6 mb-14">
                        <span className="text-base font-normal text-white">{episode.air_date}</span>
                        <button className="text-white bg-blue-700 rounded-lg px-3 py-6 flex items-center gap-2">
                            <Image
                                src="/icons/fire.svg"
                                alt="Icona fiamma"
                                width={14}
                                height={16}
                            />
                            Watch now
                            <Image
                                src="/icons/fire.svg"
                                alt="Icona fiamma"
                                width={14}
                                height={16}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <CharacterList charactersId={charactersId}/>
        </>
    )
}

export default SingleEpisode;