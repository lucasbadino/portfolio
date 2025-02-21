export const Navbar = () => {
    return (
        <nav
            className="bg-gray-800 py-4  top-0 w-full min-h-[15vh] flex items-center justify-center "
            style={{ 
                backgroundColor: "#f9fdd6de",
                opacity: "0.7",
            }}
        >
            <div className="container mx-auto flex items-center justify-center">
                <ul className="flex space-x-4 m-auto rounded-2xl p-2 shadow-lg">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Articles</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
};