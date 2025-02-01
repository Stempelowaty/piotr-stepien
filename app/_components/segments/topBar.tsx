import LangButton from "@/app/_components/langButton";
interface TopBarProps {
  lang: string;
}
export default function TopBar(props: TopBarProps) {
  const { lang } = props;
  return (
    <div className="w-full pt-16 px-16 flex justify-end z-30">
      <LangButton lang={lang} />
    </div>
  );
}
