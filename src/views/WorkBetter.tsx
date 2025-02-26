import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { dataWorkBetter } from "@/types/workbetter.type";
import Image from "next/image";

const WorkBetter = () => {
  return (
    <Section className="py-[65px]">
      <Container className="max-w-[1130px]">
        <div className="flex flex-col items-center justify-center gap-1 text-center mb-[70px]">
          <strong className="text-redOrange text-base font-bold">WORK BETTER</strong>
          <h2 className="text-4xl font-bold mb-4 text-primary">For Your Business</h2>
          <p className="max-w-[333px] md:max-w-[46%] lg:max-w-[36%] text-base text-gray">
            We did research what your company needs and here we are providing
            all of them just for you
          </p>
        </div>
        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-[93px]">
          {dataWorkBetter?.map(work => (
            <article key={work.id} className="flex gap-6 items-start">
              <Image src={work.image} alt={work.title} width={60} height={60} />
              <div className="flex items-start gap-3 flex-col">
                <h3 className="font-semibold text-xl text-primary">{work.title}</h3>
                <p className="text-gray text-base font-normal">{work.desc}</p>
              </div>
            </article>
          ))}
        </article>
      </Container>
    </Section>
  );
};

export default WorkBetter;
