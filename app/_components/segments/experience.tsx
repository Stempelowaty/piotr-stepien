import { AvailableLocalesType } from "@/app/utils";
import EnterAnimation from "@/app/_components/enterAnimation";

interface ExperienceProps {
  lang: string;
}
export default function Experience(props: ExperienceProps) {
  const dict = getDictionary(props.lang);
  return (
    <div className="font-lexend text-foreground flex flex-col items-center py-32 px-8 md:px-32 xl:px-64">
      <EnterAnimation isDefault>
        <h1 className="bg-gradient-to-r text-center from-cyan-300 to-white bg-clip-text text-transparent text-4xl pt-16">
          {dict.experience}
        </h1>
      </EnterAnimation>
      <div className="flex w-full flex-col items-center gap-16 mt-8">
        <div className="w-full flex md:flex-row flex-col justify-between gap-8">
          <EnterAnimation horizontal="toLeft" className="md:w-1/2 w-full">
            <p className="md:text-end text-center font-thin text-lg">
              {dict.time1}
            </p>
          </EnterAnimation>
          <EnterAnimation horizontal="toRight" className="md:w-1/2 w-full">
            <p className="text-lg text-center md:text-start">{dict.title1}</p>
            <p className="font-light py-2 text-center md:text-start">
              {dict.job1}
            </p>
            <p className="text-xs font-light text-center md:text-start">
              {dict.stack1}
            </p>
          </EnterAnimation>
        </div>
        <div className="w-full flex md:flex-row flex-col justify-between gap-8">
          <EnterAnimation horizontal="toLeft" className="md:w-1/2 w-full">
            <p className="md:text-end text-center font-thin text-lg">
              {dict.time2}
            </p>
          </EnterAnimation>
          <EnterAnimation horizontal="toRight" className="md:w-1/2 w-full">
            <p className="text-lg text-center md:text-start">{dict.title2}</p>
            <p className="font-light py-2 text-center md:text-start">
              {dict.job2}
            </p>
            <p className="text-xs font-light text-center md:text-start">
              {dict.stack2}
            </p>
          </EnterAnimation>
        </div>
      </div>
    </div>
  );
}

const getDictionary = (locale: string) => {
  const dictionaries = {
    "pl-PL": {
      experience: "Moje doświadczenie",
      time1: "Grudzień 2021 - Teraz",
      title1: "Programista full-stack - SKILL AND CHILL",
      stack1:
        "React, Next.js, Tailwind CSS, Typescript, Node.js, CSS, HTML, JavaScript, Git",
      job1: "Dodawałem nowe funkcje, poprawiałem wydajność i dbałem o jakość kodu. Wprowadziłem nowe systemy tłumaczeń, wykresów oraz kolorystyki. Zajmowałem się modułem raportów oraz delegacji. Prowadziłem projekt rozwojowy w next.js.",
      time2: "Lipiec 2021 - Grudzień 2021",
      title2: "Programista gier - freelance",
      stack2: "C#, Java, C++, Libgdx, Godot, SFML, MonoGame",
      job2: "Tworzyłem gry 2D i 3D. Wprowadzałem nowe mechaniki, poprawiałem wydajność i dbałem o jakość kodu. Korzystałem z atlasów, renderowania batchowego oraz własnoręcznie tworzonych maszyn stanów.",
    },
    "en-US": {
      experience: "My experience",
      time1: "December 2021 - Present",
      title1: "Full-stack developer",
      stack1:
        "React, Next.js, Tailwind CSS, Typescript, Node.js, CSS, HTML, JavaScript",
      job1: "I added new features, improved performance, and maintained code quality. I introduced new translations, charts and theme systems. I worked on the reports and delegation module. I led a development project in next.js.",
      time2: "July 2021 - December 2021",
      title2: "Game developer - freelance",
      stack2: "C#, Java, C++, Libgdx, Godot, SFML, MonoGame",
      job2: "I created 2D and 3D games. I introduced new mechanics, improved performance, and maintained code quality. I used atlases, batch rendering, and hand-crafted state machines.",
    },
  };
  return dictionaries[locale as AvailableLocalesType] ?? dictionaries["en-US"];
};
