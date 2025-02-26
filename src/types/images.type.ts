import { ImageCompanies } from "@/utils/images"

interface ImageCompanies {
    id: number,
    title: string,
    url: string
}

export const dataCompanies: ImageCompanies[] = [
    {
        id: 1,
        title: "Apple",
        url: ImageCompanies.apple
    },
    {
        id: 2,
        title: "Adobe",
        url: ImageCompanies.adobe
    },
    {
        id: 3,
        title: "Slack",
        url: ImageCompanies.slack
    },
    {
        id: 4,
        title: "Spotify",
        url: ImageCompanies.spotify
    },
    {
        id: 5,
        title: "Google",
        url: ImageCompanies.google
    },
]