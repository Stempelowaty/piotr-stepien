import { AvailableLocalesType } from "@/app/utils";
import Image from "next/image";
import EnterAnimation from "@/app/_components/enterAnimation";

interface TechnologiesProps {
  lang: string;
}
export default function Technologies(props: TechnologiesProps) {
  const dict = getDictionary(props.lang);
  return (
    <div className="font-lexend text-foreground flex flex-col items-center py-32 px-8 md:px-32 xl:px-64">
      <EnterAnimation isDefault>
        <h1 className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent text-4xl pt-16">
          {dict.tech}
        </h1>
      </EnterAnimation>
      <div className="flex flex-row flex-wrap justify-center gap-4 mt-8">
        {Array.from(Array(13).keys()).map((i) => (
          <EnterAnimation
            key={i}
            initial={{ opacity: 0, x: 0, y: 25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: i / 10,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="text-center text-sm p-2 rounded-lg animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out">
              <div className="aspect-square w-24 rounded-lg p-1 bg-slate-700 ">
                <Image
                  className="w-full"
                  width={128}
                  height={128}
                  src={`/techs/${i + 1}.png`}
                  alt=""
                />
              </div>
              {dict[`${i + 1}` as keyof typeof dict]}
            </div>
          </EnterAnimation>
        ))}
      </div>
    </div>
  );
}

const getDictionary = (locale: string) => {
  const dictionaries = {
    "pl-PL": {
      tech: "Moje technologie",
      1: "React",
      2: "Next.js",
      3: "Tailwind CSS",
      4: "Typescript",
      5: "Node.js",
      6: "CSS",
      7: "HTML",
      8: "JavaScript",
      9: "Git",
      10: "I18next",
      11: "MaterialUI",
      12: "Prisma",
      13: "Redux",
    },
    "en-US": {
      tech: "My Stack",
      1: "React",
      2: "Next.js",
      3: "Tailwind CSS",
      4: "Typescript",
      5: "Node.js",
      6: "CSS",
      7: "HTML",
      8: "JavaScript",
      9: "Git",
      10: "I18next",
      11: "MaterialUI",
      12: "Prisma",
      13: "Redux",
    },
  };
  return dictionaries[locale as AvailableLocalesType] ?? dictionaries["en-US"];
};
