import { useState } from "react";
import Input from "./input";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
    const [inputText, setInputText] = useState("");


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputText(e.target.value);

    return (
        <>
            <div className="w-96 mx-auto mt-8">
                <Input inputText={inputText} onChangeHandler={onChangeHandler} />
            </div>

        </>
    );
};

export default SearchBar;
