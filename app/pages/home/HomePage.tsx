import type { Route } from "./+types/HomePage";
import { CategoryGrid } from "./components/CategoryGrid/CategoryGrid";
import { Hero } from "./components/Hero/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fake Store Web | Home" },
    { name: "description", content: "Welcome to Fake Store Web - Your one-stop shop for everything!" },
  ];
}

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryGrid />
    </div>
  );
};

export default HomePage;
