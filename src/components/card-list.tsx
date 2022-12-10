import useFetch10Characters from "../hooks/use-fetch-10-characters";
import Card from "./card";
import { useSearchParams } from "react-router-dom";
import useSearchCharacter from "../hooks/use-search-character";


export interface CharacterType {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}





const CardList = () => {
    const [searchParams] = useSearchParams();
    const searchNameFromURL = searchParams.get("search");
    const { character, isError: characterError } = useSearchCharacter(searchNameFromURL);
    const { characters, isError: charactersError } = useFetch10Characters();


    const CardSearchList = character === undefined ? null :
        character?.results?.map((character: any) =>
            <Card key={character.id} name={character.name} imageURL={character.image} />
        )





    const CardListMain = characters?.map((character: CharacterType) =>
        <Card key={character.id} name={character.name} imageURL={character.image} />
    )

    return (
        <div className="mt-10 grid grid-cols-3 gap-10 bg-slate-800 p-10">
            {CardSearchList ?? CardListMain}
        </div>
    );
};

export default CardList;