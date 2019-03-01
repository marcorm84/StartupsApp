import Vue from 'nativescript-vue';
import Login from './components/Login';
import List from './components/List';
import RadChartPlugin from 'nativescript-ui-chart/vue';
import VueDevtools from 'nativescript-vue-devtools';
import './app.scss';
require( "nativescript-localstorage" );

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
Vue.use(RadChartPlugin);
Vue.registerElement("Gradient", () => require("nativescript-gradient").Gradient);
Vue.registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh)
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  render: h => h('frame', [h(List)])
}).$start()
