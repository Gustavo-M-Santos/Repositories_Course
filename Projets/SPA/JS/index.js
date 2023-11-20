import { Router } from "./routes.js";

const router = new Router();

router.add('/Projets/SPA/index.html','./pages/home.html')
router.add('/Projets/SPA/universe','./pages/universe.html')
router.add('/Projets/SPA/exploration','./pages/exploration.html')




router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
