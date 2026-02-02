import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fake Store Web" },
    { name: "description", content: "Welcome to Fake Store Web!" },
  ];
}

const HomePage = () => {
  return <div>Home page</div>;
};

export default HomePage;
