import {CharacterType} from "@/types/character-type";
import CharacterCard from "@/components/character-card";

const getCharacters = async (charactersId: Array<string>) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${charactersId.toString()}`);

    if (!res.ok) {
        throw new Error('Could not retrive characters');
    }

    return res.json();
}

const CharacterList = async (props) => {
    const characters: Array<CharacterType> = await getCharacters(props.charactersId);
    console.debug(characters);
    return (
        <div className="w-full px-8 max-w-[1400px]">
            <div className="flex flex-row items-center justify-between mt-12 mb-8">
                <h3 className="text-white text-xl font-bold">All Characters</h3>
                <span className="text-blue-200 text-sm font-medium">{characters.length} Characters</span>
            </div>
            <hr className="border-t-gray-700 mb-4"/>
            <div className="grid grid-cols-3 gap-x-6 gap-y-10">
                {characters.map((character, index) => {
                    return(
                        <CharacterCard character={character} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default CharacterList;