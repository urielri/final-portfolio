import { FC } from "react";

export async function generateStaticParams  ()  {
  const sections = ["projects", "aboutme", "ideas"];
  return sections.map((el: string) => ({
    section: el
  }));
};
const Page: FC<{ params: { section: string } }> = ({ params }) => {
  const { section } = params;
  return (
    <div>
      <span>{section}</span>
    </div>
  );
};
export default Page;
