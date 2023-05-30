import Image from "next/image";
import {CharacterType} from "@/types/character-type";

const CharacterCard = (props) => {
    const character:CharacterType = props.character;
    return (
        <div className="bg-gray-800 p-4 rounded-[20px] flex flex-row align-center gap-4">
            <Image
                src={character.image}
                alt={character.name}
                width={150}
                height={150}
                className="rounded-full"
            />
            <div className="text-white">
                <h4 className="mb-1">{character.name}</h4>
                <div className="flex flex-row align-center gap-4">
                    <span className="py-0.5 px-2.5 bg-green-100 text-green-800 text-xs font-medium">{character.status}</span>
                    <span className="py-0.5 px-2.5 text-white text-xs font-medium">{character.species}</span>
                </div>
                <p className="text-gray-600 text-xs font-medium mb-1">Last known location:</p>
                <p className="text-white text-xs font-medium mb-1">{character.location.name}</p>
                <p className="text-gray-600 text-xs font-medium mt-4 mb-1">First seen in:</p>
                <p className="text-white text-xs font-medium mb-1">{character.origin.name}</p>
            </div>
        </div>
    )
}

export default CharacterCard;