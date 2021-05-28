import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";

import Blocknumber from "@/pages/Blocknumber.vue";
import Home from "@/pages/Home.vue";
import Events from "@/pages/Events.vue";
import Upload from "@/pages/Upload.vue";
import Scan from "@/pages/Scan.vue"
;
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "upload",
        name: "Upload",
        component: Upload,
      },
      {
        path: "scan",
        name: "Scan",
        component: Scan,
      },
      {
        path: "blocknumber",
        name: "Block Number",
        component: Blocknumber,
      },
      {
        path: "events",
        name: "Events",
        component: Events,
      },
    ],
  },
];

export default routes;
