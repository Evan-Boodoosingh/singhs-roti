import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Press from "./components/Press";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import { getMenu } from "../sanity/lib/getMenu";

export const revalidate = 60;

export default async function HomePage() {
  const categories = await getMenu();

  return (
    <>
      <main>
        <Hero />
        <Story />
        <div id="menu">
          <Menu categories={categories} />
        </div>
        <Press />
        <Locations />
      </main>
      <Footer />
    </>
  );
}