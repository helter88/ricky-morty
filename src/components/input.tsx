import { useSearchParams } from "react-router-dom";

interface InputType {
    inputText: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({ inputText, onChangeHandler }) => {
    const [, setSearchParams] = useSearchParams();

    const onHandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputText.length > 0) {
            setSearchParams({ search: `${inputText.toLocaleLowerCase()}` });
        }
    };

    const onHandleClick = () => {
        if (inputText.length > 0) {
            setSearchParams({ search: `${inputText.toLocaleLowerCase()}` });
        }

    };

    return (
        <div className="w-full relative">
            <input
                className="bg-zinc-600 placeholder-gray-400 text-white rounded-xl h-11 w-full pl-4 outline-none"
                type="text"
                placeholder="write character name"
                onChange={onChangeHandler}
                value={inputText}
                onKeyDown={onHandleKeyDown}
            />
            <button
                className="bg-slate-800 text-white absolute font-medium text-sm right-0 h-full rounded-xl px-4"
                onClick={onHandleClick}
            >
                Search
            </button>
        </div>
    );
};

export default Input;
