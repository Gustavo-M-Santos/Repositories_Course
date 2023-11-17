import { Router } from "./router.js";

const router = new Router();

router.add("/Projets/Conc_adved_JS_SPA/", "/Projets/Conc_adved_JS_SPA/pages/home.html")
router.add("/Projets/Conc_adved_JS_SPA/pages/about.html", "/Projets/Conc_adved_JS_SPA/pages/about.html")
router.add("/Projets/Conc_adved_JS_SPA/pages/contact.html", "/Projets/Conc_adved_JS_SPA/pages/contact.html")
router.add(404, "/Projets/Conc_adved_JS_SPA/pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()


