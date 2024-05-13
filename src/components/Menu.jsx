import React, { useState } from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="p-8 h-svh max-w-5xl m-auto">
            <div className="relative">
                <button
                    className="bg-none border text-white font-bold py-2 px-4 rounded-xl items-center hover:bg-blue-700 cursor-pointer transition-all"
                    onClick={toggleMenu}
                >
                    Menu
                </button>
                {isOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                        <ul>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                                Item 1
                            </li>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                                Item 2
                            </li>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                                Item 3
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </section>
    );
};

export default DropdownMenu;