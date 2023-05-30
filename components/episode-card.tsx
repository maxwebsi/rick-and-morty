import Link from "next/link";
import Image from "next/image";

const EpisodeCard = (props) => {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-md shadow-black/500 border border-gray-700">
            <h3 className="text-white leading-tight text-2xl font-bold mb-2"><span
                className="text-blue-500">EP {props.idEpisode}</span> {props.title}</h3>
            <p className="text-gray-400 text-base font-normal mb-3">{props.date}</p>
            <Link href={`/episode/${props.idEpisode}`}>
                <button className="bg-blue-700 outline-0 rounded py-2 px-3 text-white flex flex-row items-center gap-2">
                    <span>Watch now</span>
                    <Image
                        src="/icons/arrow-narrow-right-white.svg"
                        alt="Freccia destra"
                        width={16}
                        height={16}
                        className="fill-white stroke-white"
                    />
                </button>
            </Link>
        </div>

    )
}

export default EpisodeCard;