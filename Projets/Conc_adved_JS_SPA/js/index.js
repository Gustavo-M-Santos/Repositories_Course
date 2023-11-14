
const routes = {
  "/Projets/Conc_adved_JS_SPA/": "/Projets/Conc_adved_JS_SPA/pages/home.html",
  "/Projets/Conc_adved_JS_SPA/pages/about.html": "/Projets/Conc_adved_JS_SPA/pages/about.html",
  "/Projets/Conc_adved_JS_SPA/pages/contact.html": "/Projets/Conc_adved_JS_SPA/pages/contact.html",
  404: "/Projets/Conc_adved_JS_SPA/pages/404.html",
}

function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const { pathname }  = window.location
  const route = routes[pathname] || routes[404]
  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })
}

handle()

window.onpopstate = () => handle()
window.route = ( ) => route()
