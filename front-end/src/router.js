import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";

import Blocknumber from "@/pages/Blocknumber.vue";
import Home from "@/pages/Home.vue";
import Events from "@/pages/Events.vue";
import Upload from "@/pages/Upload.vue";
import Scan from "@/pages/Scan.vue"
import login from "@/pages/login.vue";
import  DistributersLogin from "@/pages/DistributersLogin.vue"


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "home",
    children: [

      {
            
        path: "DistributersLogin",
        name: "DistributersLogin",
        component:DistributersLogin,
      },
      {
            
        path: '/',
    name: 'login',
component:login,

      },
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
