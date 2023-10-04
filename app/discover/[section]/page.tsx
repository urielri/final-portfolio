import Content from "pages/discover/section";
export async function generateStaticParams() {
  const sections = ["projects", "aboutme", "ideas"];
  return sections.map((el: string) => ({
    section: el,
  }));
}
type Params = { params: { section: string } };
function Page({ params }: Params) {
  const { section } = params;
  return (
    <div>
      <span>{section}</span>
      <Content />
    </div>
  );
}
export default Page;
