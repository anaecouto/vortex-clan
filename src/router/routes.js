const routes = [
  {
    path: "/",
    redirect: { name: "Inicio" },
  },
  {
    path: "/home",
    name: "Inicio",
    component: () => import("../components/inicio/InicioPage.vue"),
  },
  {
    path: "/about",
    name: "Sobre",
    component: () => import("../components/sobre/SobrePage.vue"),
  },
  {
    path: "/recruit",
    name: "Recrutamento",
    component: () => import("../components/recrutamento/RecrutamentoPage.vue"),
  },
];

export default routes;
