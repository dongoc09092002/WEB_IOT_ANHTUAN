import Home from "../pages/Home/Home";
import Camera from "../pages/Camera/Camera";
import Manager from "../pages/Manager/Manage";

const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/camera", Component: Camera },
  { path: "/manager", Component: Manager },
];

export { publicRoutes };
