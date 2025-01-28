import AboutMe from "../_components/aboutMe";
import BgGradient from "../_components/bgGradient";
import TopBar from "../_components/topBar";
import Warning from "../_components/warning";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div className="font-lexend w-full h-full bg-slate-950">
      <Warning lang={lang} />
      <BgGradient />
      <div className="z-20 relative text-foreground">
        <TopBar lang={lang} />
        <AboutMe lang={lang} />
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
        <div className="h-64">fill</div>
      </div>
    </div>
  );
}
