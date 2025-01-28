import Warning from "../_components/warning";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div>
      <Warning lang={lang} />
    </div>
  );
}
