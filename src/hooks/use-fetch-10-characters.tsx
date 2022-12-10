import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCharacters = () => {
    return Axios.get("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]").then(
        (resp) => resp.data
    );
};

const useFetch10Characters = () => {
    const {
        data: characters,
        isError,
        isLoading,
    } = useQuery(["characters"], fetchCharacters);

    return { characters, isError, isLoading };
};

export default useFetch10Characters;