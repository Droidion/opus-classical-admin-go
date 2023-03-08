import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function UnauthorisedLayout() {
  const location = useLocation();
  return location.pathname === "/" ? (
    <Navigate to="/auth" replace={true} />
  ) : (
    <main>
      <Outlet />
    </main>
  );
}
