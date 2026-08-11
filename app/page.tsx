import Hero from "./components/Hero";
import Menu from "./components/Menu";
import { getMenu } from "../sanity/lib/getMenu";

export const revalidate = 60;

export default async function HomePage() {
  const categories = await getMenu();

  return (
    <main>
      <Hero />
      <div id="menu">
        <Menu categories={categories} />
      </div>
    </main>
  );
}