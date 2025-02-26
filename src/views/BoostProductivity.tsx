import Container from "@/components/layouts/Container"
import Section from "@/components/layouts/Section"
import { ImageBoostProductivity } from "@/utils/images"
import Image from "next/image"

const BoostProductivity = () => {
    return (
        <Section className="py-[65px]">
            <Container className="max-w-[1130px]">
                <div className="flex flex-col lg:flex-row items-center gap-[70px]">
                    <figure className="shrink-0">
                        <Image src={ImageBoostProductivity.teamMeeting} alt="Team collaboration in a business meeting" width={634} height={450} />
                    </figure>
                    <div className="flex flex-col items-center lg:items-start gap-[6px] text-center md:text-start">
                        <strong className="text-base text-redOrange font-bold">SAVE MORE TIME</strong>
                        <h2 className="text-[28px] md:text-4xl font-bold text-primary mb-[14px]">And Boost Productivity</h2>
                        <p className="text-gray text-base font-normal mb-[34px] lg:w-full max-w-[386px]">Your employees can bring any success into your
                        business, so we need to take care of them</p>
                        <form className="bg-whiteGray rounded-full w-full flex flex-col md:flex-row items-center justify-between">
                            <label htmlFor="">
                                <input type="email" placeholder="Email Address" className="bg-transparent py-3 px-6 w-full h-full outline-none" />
                            </label>
                            <button className="bg-blue rounded-full w-full md:max-w-[180px] text-white text-base font-semibold py-3 px-6">Get Started</button>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default BoostProductivity