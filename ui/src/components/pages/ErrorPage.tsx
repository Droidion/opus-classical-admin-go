import { Hero } from "react-daisyui";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Hero className="min-h-screen">
      <Hero.Overlay className="bg-opacity-60" />
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oh no!</h1>
          <p className="py-6">Error happened! Sorry!</p>
        </div>
      </Hero.Content>
    </Hero>
  );
}
