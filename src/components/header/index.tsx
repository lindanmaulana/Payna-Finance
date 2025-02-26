import Image from "next/image"
import Navbar from "./navbar"

const Header = () => {
    return (
        <header className="container flex items-center justify-between max-w-[1130px] py-6 px-4 xl:px-0 w-full">
            <Image src={'/paynafinance.svg'} alt="paynafinance" width={150} height={42} />
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-10 text-base font-semibold">
                    <Navbar></Navbar>
                </ul>
            </nav>
            <button className=" hidden sm:block">Signin</button>
        </header>
    )
}

export default Header