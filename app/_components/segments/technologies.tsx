import { AvailableLocalesType } from "@/app/utils";
import EnterAnimation from "@/app/_components/enterAnimation";

interface TechnologiesProps {
  lang: string;
}
export default function Technologies(props: TechnologiesProps) {
  const dict = getDictionary(props.lang);
  return (
    <div className="font-lexend text-foreground flex flex-col items-center mt-32 px-32 xl:px-64">
      <EnterAnimation isDefault>
        <h1 className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent text-4xl pt-16">
          {dict.tech}
        </h1>
      </EnterAnimation>
    </div>
  );
}

const getDictionary = (locale: string) => {
  const dictionaries = {
    "pl-PL": {
      tech: "Moje technologie",
    },
    "en-US": {
      tech: "My Stack",
    },
  };
  return dictionaries[locale as AvailableLocalesType] ?? dictionaries["en-US"];
};
