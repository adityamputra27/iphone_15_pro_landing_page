import { navLists } from "../contants";
import { appleImg, bagImg, searchImg } from "../utils";

export default function Navbar() {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} alt="" width={14} height={18} />
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav) => (
                        <div
                            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                            key={nav}
                        >
                            {nav}
                        </div>
                    ))}
                </div>
                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} width={18} height={18} alt="" />
                    <img src={bagImg} width={18} height={18} alt="" />
                </div>
            </nav>
        </header>
    );
}
