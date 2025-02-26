import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { dataCompanies } from "@/types/images.type";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Section className="py-[65px]">
      <Container className="max-w-[1130px] h-full">
        <div className="flex items-center h-full lg:gap-[32px] w-full mb-16">
          <div className=" w-full lg:max-w-[442px] text-start md:text-center lg:text-start flex flex-col items-start md:items-center lg:items-start gap-5">
            <h1 className="font-bold text-[38px] md:text-[52px] lg:w-full w-full md:w-1/2 leading-tight text-primary">
              Manage Payroll Like an Expert
            </h1>
            <p className="text-gray text-base font-normal lg:w-full w-full sm:w-[64%] md:w-[44%]  mb-[10px]">
              Payna is helping you to setting up the payroll without required
              any finance skills or knowledge before
            </p>
            <Link
              href={"/"}
              className="bg-blue text-base font-semibold text-white rounded-full py-3 px-6"
            >
              Get Started
            </Link>
          </div>
          <div className="w-[685px] relative h-[400px] shrink-0 hidden lg:block">
            <Image
              src={"/banner.png"}
              alt="paynafinance-banner"
              fill
              sizes="(max-width: 1024px) 100vw, 685px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[30px] lg:flex-row items-start md:items-center justify-between w-full">
          <h2 className="lg:max-w-40 text-base font-semibold">Trusted by Global Companies</h2>
          <article className="grid grid-cols-3 md:grid-cols-5 gap-10 lg:w-2/3">
          {dataCompanies.map((company) => (
            <article key={company.id} className="flex items-center h-full shrink-0">
              <Image src={company.url} alt={company.title} width={100} height={30} className="w-full h-7 shrink-0" />
            </article>
          ))}
          </article>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
