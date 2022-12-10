
interface CardType {
    name: string,
    imageURL: string
}

const Card: React.FC<CardType> = ({ name, imageURL }) => {
    return (
        <div className="bg-zinc-600 flex flex-col items-center px-12 py-7 gap-4">
            <p className=" text-white text-lg font-medium">{name}</p>
            <img className="w-full" src={imageURL} alt="character-imag" />
        </div>
    );
};

export default Card;
