import Image from "next/image";
import { AvailableLocalesType } from "../utils";

interface AboutMeProps {
  lang: string;
}
export default async function Header(props: AboutMeProps) {
  const { lang } = await props;
  const dict = getDictionary(lang);
  return (
    <div className="flex lg:flex-row flex-col-reverse xl:px-64 px-32 pt-32 font-outfit">
      <div className="flex flex-col lg:w-1/3 items-center lg:items-start w-full animate-fade-right animate-once animate-ease-in-out animate-alternate">
        <p className="text-8xl mb-2 font-thin text-center lg:text-start">
          Piotr Stępień
        </p>
        <p className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent text-2xl pt-8">
          Fullstack Developer
        </p>
        <p className="text-lg pt-2">{dict.withExp}</p>
      </div>
      <div className="flex justify-center lg:justify-end items-center lg:w-2/3 w-full ">
        <Image
          className="object-cover rounded-full z-100 animate-fade-left animate-once animate-ease-in-out animate-alternate"
          width={343}
          height={343}
          src={"/profile_pic.png"}
          alt=""
        />
      </div>
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
