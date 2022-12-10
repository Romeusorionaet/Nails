import {Router} from './route.js';

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/nails", "/pages/nails.html");
router.add(404, "/pages/404.html");

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()