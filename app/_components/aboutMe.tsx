import Image from "next/image";
import { AvailableLocalesType } from "../utils";

interface AboutMeProps {
  lang: string;
}
export default function AboutMe(props: AboutMeProps) {
  const { lang } = props;
  const dict = getDictionary(lang);
  return (
    <div className="flex lg:flex-row flex-col-reverse px-32 pt-64 font-lexend">
      <div className="flex flex-col lg:w-1/2 w-full">
        <p className="text-7xl pb-2 font-extralight">Piotr Stępień</p>
        <p className="text-xl">{dict.chapterTitle}</p>
        <p>{dict.chapterOne}</p>
        <p>{dict.chapterTwo}</p>
      </div>
      <div className="flex justify-center items-center lg:w-1/2 w-full">
        <Image
          className=" w-128 h-128 object-cover rounded-full z-100"
          width={343}
          height={343}
          src={"/profile_pic.png"}
          alt=""
        />
      </div>
    </div>
  );
}

const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];

const dictionaries = {
  "pl-PL": {
    chapterTitle: "Kim jest ten czarujący typek?",
    chapterOne:
      "Nie wiem czy czarujący, ale na zdjęciu jestem ja. Zawsze fascynowały mnie gry. Po modyfikowaniu gry Skyrim dwukrotnie dłużej niż w nią grałem i rozłożeniu pierwszych gier z serii Doom na czynniki pierwsze, postanowiłem zostać programistą. Podczas studiów inżynierskich, rozwijałem wiele projektów gier, korzystając z różnych frameworków.",
    chapterTwo:
      "Moja pasja poszerzyła się o nowe technologie i po pewnym czasie zdobyłem moją pierwszą pracę jako programista full-stack. Tam nauczyłem się korzystać z Reacta i innych trudnych słów, które brzmią jak nazwy dla Pokemonów.",
  },
  "en-US": {
    chapterTitle: "Who is this charming fellow?",
    chapterOne:
      "I don't know if charming is the right word, but that's me over to the right. I have always been fascinated by video games. After modding Skyrim for twice as long as I've played it and dissecting the first Doom games, I decided to become a software developer. While studying for my engineering degree, I developed a variety of game projects using various frameworks.",
    chapterTwo:
      "My passion for programming expanded into other technologies, and after a while, I landed my first job as a full-stack developer. There, I learned about React and other quirky terms that sound like names for Pokémon.",
  },
};
