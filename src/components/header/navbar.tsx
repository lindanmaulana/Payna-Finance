import Link from "next/link"

interface NavbarList {
    id: number
    title: string
    url: string
}

const Navbar = () => {
    const dataNavbarList: NavbarList[] = [
        {
            id: 1,
            title: "Home",
            url: "/"
        },
        {
            id: 2,
            title: "Features",
            url: "/features"
        },
        {
            id: 3,
            title: "Showcase",
            url: "/showcase"
        },
        {
            id: 4,
            title: "Pricing",
            url: "/pricing"
        },
    ]
    return (
        <>
        {dataNavbarList?.map((nav) => (
            <li key={nav.id}>
                <Link href={nav.url}>{nav.title}</Link>
            </li>
        ))}
        </>
    )
}

export default Navbar