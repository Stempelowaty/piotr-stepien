import Image from "next/image";
import { AvailableLocalesType } from "@/app/utils";
import EnterAnimation from "../enterAnimation";

interface AboutMeProps {
  lang: string;
}
export default async function Header(props: AboutMeProps) {
  const { lang } = await props;
  const dict = getDictionary(lang);
  return (
    <div className="flex lg:flex-row flex-col-reverse px-32 pt-32 font-outfit">
      <div className="flex flex-col lg:w-1/2 py-32 items-center lg:items-start w-full">
        <EnterAnimation
          initial={{ opacity: 0, x: -100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.25 }}
        >
          <p className="text-8xl mb-2 font-thin text-center lg:text-start">
            Piotr
          </p>
          <p className="text-8xl mb-2 font-thin text-center lg:text-start">
            Stępień
          </p>
        </EnterAnimation>
        <EnterAnimation
          initial={{ opacity: 0, x: -100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.5 }}
        >
          <p className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent text-2xl pt-8 lg:text-start text-center">
            Fullstack Developer
          </p>
        </EnterAnimation>
        <EnterAnimation
          initial={{ opacity: 0, x: -100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.75 }}
        >
          <p className="text-lg pt-2 lg:text-start text-center">
            {dict.withExp}
          </p>
        </EnterAnimation>
      </div>
      <EnterAnimation
        initial={{ opacity: 0, x: 100, y: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
        className="flex justify-center items-center lg:w-1/2 w-full"
      >
        <div className="aspect-square w-full max-w-[600px] rounded-full p-1 bg-gradient-to-br from-cyan-500 via-cyan-200 to-slate-300">
          <Image
            className="rounded-full z-100 w-full "
            width={343}
            height={343}
            src={"/profile_pic.png"}
            alt=""
          />
        </div>
      </EnterAnimation>
    </div>
  );
}

const getDictionary = (locale: string) => {
  const dictionaries = {
    "pl-PL": {
      withExp: "Z ponad trzyletnim doświadczeniem.",
    },
    "en-US": {
      withExp: "With over three years of experience.",
    },
  };
  return dictionaries[locale as AvailableLocalesType] ?? dictionaries["en-US"];
};
