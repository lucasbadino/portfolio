export const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-white text-2xl font-bold">Your Company</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};