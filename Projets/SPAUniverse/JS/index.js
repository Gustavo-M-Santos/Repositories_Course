import { Router } from "./routes.js";

const router = new Router();

router.add('/Projets/SPAUniverse/','./pages/home.html')
router.add('/Projets/SPAUniverse/index.html','./pages/home.html')
router.add('/Projets/SPAUniverse/universe','./pages/universe.html')
router.add('/Projets/SPAUniverse/exploration','./pages/exploration.html')




router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
