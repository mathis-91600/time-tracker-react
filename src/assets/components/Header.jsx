import AddButton from "./AddButton";

const Header = () => {
    return (
        <header className="flex py-3 justify-between my-0 mx-auto mt-10 w-3/4 border-b-2 border-white items-end">
            <p className="text-white font-sans font-bold text-xl">
                Tâche en cours
            </p>
            <AddButton />
        </header>
    );
};

export default Header;
