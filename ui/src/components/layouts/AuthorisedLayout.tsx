import { Outlet } from "react-router-dom";
import TopMenu from "../partials/TopMenu";

export default function AuthorisedLayout() {
  return (
    <>
      <div className="flex w-full component-preview p-4 pb-4 items-center justify-center gap-2 font-sans">
        <TopMenu />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
