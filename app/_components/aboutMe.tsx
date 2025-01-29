import { AvailableLocalesType } from "../utils";
import ShowOnScroll from "./showOnScroll";

interface AboutMeProps {
  lang: string;
}
export default function AboutMe(props: AboutMeProps) {
  const dict = getDictionary(props.lang);

  return (
    <div className="font-lexend text-foreground flex flex-col items-center mt-96 px-32 xl:px-64">
      <ShowOnScroll>
        <h1 className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent text-4xl pt-16">
          {dict.about}
        </h1>
        <h2 className="text-2xl font-thin">{dict.chapterTitle}</h2>
        <div className="text-center flex flex-col items-center">
          <p>{dict.chapterOne}</p>
          <p>{dict.chapterTwo}</p>
        </div>
      </ShowOnScroll>
    </div>
  );
}

const getDictionary = (locale: string) => {
  const dictionaries = {
    "pl-PL": {
      about: "O mnie",
      chapterTitle: "Kim jest ten czarujący typek?",
      chapterOne:
        "Nie wiem czy czarujący, ale na zdjęciu jestem ja. Zawsze fascynowały mnie gry. Po modyfikowaniu gry Skyrim dwukrotnie dłużej niż w nią grałem i rozłożeniu pierwszych gier z serii Doom na czynniki pierwsze, postanowiłem zostać programistą. Podczas studiów inżynierskich, rozwijałem wiele projektów gier, korzystając z różnych frameworków.",
      chapterTwo:
        "Moja pasja poszerzyła się o nowe technologie i po pewnym czasie zdobyłem moją pierwszą pracę jako programista full-stack. Tam nauczyłem się korzystać z Reacta i innych trudnych słów, które brzmią jak nazwy dla Pokemonów.",
    },
    "en-US": {
      about: "About me",
      chapterTitle: "Who is this charming fellow?",
      chapterOne:
        "I don't know if charming is the right word, but that's me over to the right. I have always been fascinated by video games. After modding Skyrim for twice as long as I've played it and dissecting the first Doom games, I decided to become a software developer. While studying for my engineering degree, I developed a variety of game projects using various frameworks.",
      chapterTwo:
        "My passion for programming expanded into other technologies, and after a while, I landed my first job as a full-stack developer. There, I learned about React and other quirky terms that sound like names for Pokémon.",
    },
  };
  return dictionaries[locale as AvailableLocalesType] ?? dictionaries["en-US"];
};
