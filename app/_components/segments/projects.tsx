import { AvailableLocalesType } from "@/app/utils";
import EnterAnimation from "@/app/_components/enterAnimation";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkIcon } from "lucide-react";

interface ProjectsProps {
  lang: string;
}
export default function Projects(props: ProjectsProps) {
  const dict = getDictionary(props.lang);
  return (
    <div className="font-lexend text-foreground flex flex-col items-center py-32 px-8 md:px-32 xl:px-64">
      <EnterAnimation isDefault>
        <h1 className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent text-4xl pt-16">
          {dict.projects}
        </h1>
      </EnterAnimation>
      <div className="flex w-full flex-col items-center gap-16 mt-8">
        {Array.from(Array(5).keys()).map((i) => (
          <div
            key={i}
            className="w-full flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <EnterAnimation
              horizontal={i % 2 == 0 ? "toRight" : "toLeft"}
              className="md:h-40 md:w-64 w-full flex items-center justify-center"
            >
              <Image
                width={640}
                height={400}
                src={`/projects/p${i + 1}.png`}
                className="rounded-lg"
                alt=""
              />
            </EnterAnimation>
            <EnterAnimation
              horizontal={i % 2 == 0 ? "toRight" : "toLeft"}
              className="w-full"
            >
              <div className="flex gap-4 flex-col md:flex-row items-center justify-center md:justify-start">
                <p className="text-lg">
                  {dict[`project${i + 1}` as keyof typeof dict]}
                </p>
                {dict[`link${i + 1}` as keyof typeof dict] && (
                  <Link
                    href={dict[`link${i + 1}` as keyof typeof dict]}
                    className="flex items-center gap-1 hover:scale-105 duration-500 transition underline"
                  >
                    <p className="font-light">Link</p>
                    <LinkIcon className="w-4 h-4" />
                  </Link>
                )}
                {dict[`github${i + 1}` as keyof typeof dict] && (
                  <Link
                    href={dict[`github${i + 1}` as keyof typeof dict]}
                    className="flex items-center gap-1 hover:scale-105 duration-500 transition underline"
                  >
                    <p className="font-light">Github</p>
                    <GithubIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>
              <p className="font-thin py-2 text-center md:text-start">
                {dict[`desc${i + 1}` as keyof typeof dict]}
              </p>
              <div className="text-xs font-light justify-center md:justify-start flex flex-wrap gap-2">
                {dict[`stack${i + 1}` as keyof typeof dict]
                  ?.split(", ")
                  .map((tech, i) => (
                    <div
                      key={`${tech}${i}`}
                      className="border border-transparent bg-gradient-to-r from-cyan-500 to-slate-300 rounded-lg"
                    >
                      <div className="bg-slate-950 p-1 rounded-lg"> {tech}</div>
                    </div>
                  ))}
              </div>
            </EnterAnimation>
          </div>
        ))}
      </div>
    </div>
  );
}

const getDictionary = (locale: string) => {
  const dictionaries = {
    "pl-PL": {
      projects: "Moje projekty",
      project1: "System bankowy",
      desc1:
        "Dołączyłem do projektu Business Zone w 2024 roku. System oferuje szeroką gamę usług bankowych, w tym zarządzanie kontami, planowanie budżetu, zarządzanie dostawcami, przetwarzanie zamówień i zarządzanie zasobami ludzkimi. System jest przeznaczony do użytku przez klientów korporacyjnych.",
      stack1: "Outsystems, SQL, JavaScript",
      project2: "System zarządzania pracownikami",
      desc2:
        "Rozpocząłem projekt Time Booster w 2021 roku. System jest zaprojektowany do zarządzania pracownikami, ich czasem pracy i ich wydajnością. Zawiera wiele funkcji, takich jak śledzenie czasu pracy, zarządzanie urlopami, tablica kanban i raporty.",
      stack2:
        "React, Next.js, Material-UI, Typescript, Node.js, CSS, HTML, JavaScript, Git",
      project3: "Portfolio grafika",
      desc3:
        "Projekt na zlecenie z 2024 roku. Strona internetowa ma na celu prezentację prac grafika. Zawiera galerię projektów z formularzem kontaktowym.",
      stack3:
        "React, Next.js, Tailwind CSS, Typescript, Next.js, CSS, HTML, JavaScript, Git",
      project4: "Zarządzanie notatkami RPG",
      desc4:
        "Aplikacja stworzona przez dwie osoby, która powstała w projekcie rozwojowym. Aplikacja ma pomóc graczom w zarządzaniu notatkami i postaciami w grach RPG. Projekt jest obecnie wstrzymany.",
      stack4: "T3C Stack, Nextjs, Drizzle, NextAuth, OAuth, Git",
      project5: "Gazetowe portfolio",
      desc5:
        "Wyzwanie css grid, które ewoluowało w projekt portfolio. Strona internetowa była poprzednią wersją mojego portfolio, która zachowała stylizację starej gazety.",
      stack5:
        "React, Tailwind CSS, Typescript, Next.js, CSS, HTML, JavaScript, Git",
      link1: "https://business-zone.eu/",
      link2: "https://timebooster.pl/",
      link3: "https://karolina-albrzykowska.vercel.app/pl-PL",
      link4: "https://thotl.vercel.app/",
      link5: "https://piotr-stepien-newspaper.vercel.app/pl-PL",
      github1: "",
      github2: "",
      github3: "https://github.com/Stempelowaty/karolina-albrzykowska",
      github4: "",
      github5: "https://github.com/Stempelowaty/piotr-stepien-newspaper",
    },
    "en-US": {
      projects: "My projects",
      project1: "International Banking System",
      desc1:
        "Joined the Business Zone project in 2024. The system features a wide range of banking services, including account management, budget plannig, supplier management, order processing and HR management. The system is designed to be used by corporate clients.",
      stack1: "Outsystems, SQL, JavaScript",
      project2: "Employee Management System",
      desc2:
        "Started with Time Booster project in 2021. The system is designed to manage employees, their work time, and their performance. Includes vaiety of features like work time tracking, holiday management, kanban board and reports.",
      stack2:
        "React, Next.js, Material-UI, Typescript, Node.js, CSS, HTML, JavaScript, Git",
      project3: "Graphic Designers Portfolio",
      desc3:
        "Freelance project from 2024. The website is designed to showcase the work of a graphic designer. It includes a gallery of projects with a contact form.",
      stack3:
        "React, Next.js, Tailwind CSS, Typescript, Next.js, CSS, HTML, JavaScript, Git",

      project4: "RPG notes management",
      desc4:
        "Two person created app that originated in the developement project. The app is designed to help players manage their notes and characters in RPG games. The project is currently on hold",
      stack4: "T3C Stack, Nextjs, Drizzle, NextAuth, OAuth, Git",

      project5: "Newspaper Website",
      desc5:
        "A css grid challenge that evolved into a portfolio project. The website was a previous version of my portfolio, that kept the styling of an old school newspaper.",
      stack5:
        "React, Tailwind CSS, Typescript, Next.js, CSS, HTML, JavaScript, Git",
      link1: "https://business-zone.eu/",
      link2: "https://timebooster.pl/",
      link3: "https://karolina-albrzykowska.vercel.app/en-US",
      link4: "https://thotl.vercel.app/",
      link5: "https://piotr-stepien-newspaper.vercel.app/en-US",
      github1: "",
      github2: "",
      github3: "https://github.com/Stempelowaty/karolina-albrzykowska",
      github4: "",
      github5: "https://github.com/Stempelowaty/piotr-stepien-newspaper",
    },
  };
  return dictionaries[locale as AvailableLocalesType] ?? dictionaries["en-US"];
};
