import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _18025b4d = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _145cb828 = () => import('../pages/error-page/403.vue' /* webpackChunkName: "pages/error-page/403" */).then(m => m.default || m)
const _39a2fe1a = () => import('../pages/tables/editable-table.vue' /* webpackChunkName: "pages/tables/editable-table" */).then(m => m.default || m)
const _ce91b4aa = () => import('../pages/form/work-flow.vue' /* webpackChunkName: "pages/form/work-flow" */).then(m => m.default || m)
const _46a7768e = () => import('../pages/form/article-publish.vue' /* webpackChunkName: "pages/form/article-publish" */).then(m => m.default || m)
const _4918ace6 = () => import('../pages/error-page/500.vue' /* webpackChunkName: "pages/error-page/500" */).then(m => m.default || m)
const _299922c6 = () => import('../pages/tables/dragable-table.vue' /* webpackChunkName: "pages/tables/dragable-table" */).then(m => m.default || m)
const _146acfa9 = () => import('../pages/error-page/404.vue' /* webpackChunkName: "pages/error-page/404" */).then(m => m.default || m)
const _82f5ac5a = () => import('../pages/error-page/error-page.vue' /* webpackChunkName: "pages/error-page/error-page" */).then(m => m.default || m)
const _64c56249 = () => import('../pages/form/preview.vue' /* webpackChunkName: "pages/form/preview" */).then(m => m.default || m)
const _4e5ab836 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/login",
			component: _18025b4d,
			name: "login"
		},
		{
			path: "/error-page/403",
			component: _145cb828,
			name: "error-page-403"
		},
		{
			path: "/tables/editable-table",
			component: _39a2fe1a,
			name: "tables-editable-table"
		},
		{
			path: "/form/work-flow",
			component: _ce91b4aa,
			name: "form-work-flow"
		},
		{
			path: "/form/article-publish",
			component: _46a7768e,
			name: "form-article-publish"
		},
		{
			path: "/error-page/500",
			component: _4918ace6,
			name: "error-page-500"
		},
		{
			path: "/tables/dragable-table",
			component: _299922c6,
			name: "tables-dragable-table"
		},
		{
			path: "/error-page/404",
			component: _146acfa9,
			name: "error-page-404"
		},
		{
			path: "/error-page/error-page",
			component: _82f5ac5a,
			name: "error-page-error-page"
		},
		{
			path: "/form/preview",
			component: _64c56249,
			name: "form-preview"
		},
		{
			path: "/",
			component: _4e5ab836,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
