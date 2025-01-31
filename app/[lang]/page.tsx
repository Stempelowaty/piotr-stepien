import Header from "../_components/segments/header";
import BgGradient from "../_components/bgGradient";
import TopBar from "../_components/segments/topBar";
// import Warning from "../_components/warning";
import AboutMe from "../_components/segments/aboutMe";
import Technologies from "../_components/segments/technologies";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div className="font-lexend w-full h-full bg-slate-950">
      {/* <Warning lang={lang} /> */}
      <BgGradient />
      <div className="z-20 relative text-foreground">
        <TopBar lang={lang} />
        <Header lang={lang} />
        <AboutMe lang={lang} />
        <Technologies lang={lang} />
      </div>
    </div>
  );
}
