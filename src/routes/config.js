import DefaultLayout from "../Layouts/DefaultLayout";

import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import ServicePage from "../pages/Service";
import RevolutionPage from "../pages/Revolution";

export const PAGE_CONFIG = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  {
    path: "/service",
    component: ServicePage,
    layout: DefaultLayout,
  },
  {
    path: "/revolution",
    component: RevolutionPage,
    layout: DefaultLayout,
  },
  {
    path: "/about",
    component: AboutPage,
    layout: DefaultLayout,
  },
  {
    path: "/contact",
    component: ContactPage,
    layout: DefaultLayout,
  },
];
