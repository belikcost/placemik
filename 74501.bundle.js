"use strict";(self.webpackChunkplacemik_beta=self.webpackChunkplacemik_beta||[]).push([[74501],{44507:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,r.default)(2,arguments);var u=(0,n.default)(e,a),o=(0,n.default)(t,a);return u.getTime()===o.getTime()};var n=u(a(69209)),r=u(a(68734));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},68734:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},69209:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var a=t||{},o=a.locale,l=o&&o.options&&o.options.weekStartsOn,f=null==l?0:(0,n.default)(l),s=null==a.weekStartsOn?f:(0,n.default)(a.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var i=(0,r.default)(e),d=i.getUTCDay(),c=(d<s?7:0)+d-s;return i.setUTCDate(i.getUTCDate()-c),i.setUTCHours(0,0,0,0),i};var n=o(a(82084)),r=o(a(71171)),u=o(a(68734));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},82084:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},74501:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){var r=l[e];return"function"==typeof r?r(t,a,n):r};var n,r=(n=a(44507))&&n.__esModule?n:{default:n},u=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function o(e){return"'"+u[e]+" alle' p"}var l={lastWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?o(n):function(e){switch(e){case 0:return"'domenica scorsa alle' p";default:return"'"+u[e]+" scorso alle' p"}}(n)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?o(n):function(e){switch(e){case 0:return"'domenica prossima alle' p";default:return"'"+u[e]+" prossimo alle' p"}}(n)},other:"P"};e.exports=t.default},71171:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var n,r=(n=a(68734))&&n.__esModule?n:{default:n};e.exports=t.default}}]);