import localFont from "next/font/local"

const Poppins = localFont({
    src: [
        {
            path: "../assets/fonts/Poppins-Regular.ttf",
            style: "normal",
            weight: "400"
        },
        {
            path: "../assets/fonts/Poppins-Regular.woff",
            style: "normal",
            weight: "400"
        },
        {
            path: "../assets/fonts/Poppins-Regular.woff2",
            style: "normal",
            weight: "400"
        },
        {
            path: "../assets/fonts/Poppins-Medium.ttf",
            style: "normal",
            weight: "500"
        },
        {
            path: "../assets/fonts/Poppins-Medium.woff",
            style: "normal",
            weight: "500"
        },
        {
            path: "../assets/fonts/Poppins-Medium.woff2",
            style: "normal",
            weight: "500"
        },
        {
            path: "../assets/fonts/Poppins-SemiBold.ttf",
            style: "normal",
            weight: "600"
        },
        {
            path: "../assets/fonts/Poppins-SemiBold.woff",
            style: "normal",
            weight: "600"
        },
        {
            path: "../assets/fonts/Poppins-SemiBold.woff2",
            style: "normal",
            weight: "600"
        },
    ],
    display: "swap",
    variable: "--font-poppins"
})

export {
    Poppins
}