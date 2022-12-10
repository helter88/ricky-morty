import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCharacter = (name: string | null) => {
    return Axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`).then(
        (resp) => resp.data
    );
};


export const useSearchCharacter = (search: string | null) => {

    const {
        data: character,
        isError,
        isLoading,
    } = useQuery([`${search}`], async () => fetchCharacter(search));

    return { character, isError, isLoading };
};

export default useSearchCharacter;