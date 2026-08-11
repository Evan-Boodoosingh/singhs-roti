import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Press from "./components/Press";
import Reviews from "./components/Reviews";
import Catering from "./components/Catering";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import { getMenu } from "../sanity/lib/getMenu";
import { getReviews } from "../sanity/lib/getReviews";

export const revalidate = 60;

export default async function HomePage() {
  const [categories, reviews] = await Promise.all([getMenu(), getReviews()]);

  return (
    <>
      <main>
        <Hero />
        <Story />
        <div id="menu">
          <Menu categories={categories} />
        </div>
        <Press />
        <Reviews reviews={reviews} />
        <Catering />
        <Locations />
      </main>
      <Footer />
    </>
  );
}