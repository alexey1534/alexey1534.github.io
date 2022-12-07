// https://github.com/Olical/EventEmitter
(function(){"use strict";function t(){}function i(t, n){for(var e=t.length; e--;)if(t[e].listener===n)return e;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var e=t.prototype,r=this,s=r.EventEmitter;e.getListeners=function(n){var r,e,t=this._getEvents();if(n instanceof RegExp){r={};for(e in t)t.hasOwnProperty(e)&&n.test(e)&&(r[e]=t[e])}else r=t[n]||(t[n]=[]);return r},e.flattenListeners=function(t){var e,n=[];for(e=0; e<t.length; e+=1)n.push(t[e].listener);return n},e.getListenersAsObject=function(n){var e,t=this.getListeners(n);return t instanceof Array&&(e={},e[n]=t),e||t},e.addListener=function(r,e){var t,n=this.getListenersAsObject(r),s="object"==typeof e;for(t in n)n.hasOwnProperty(t)&&-1===i(n[t],e)&&n[t].push(s?e:{listener:e,once:!1});return this},e.on=n("addListener"),e.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},e.once=n("addOnceListener"),e.defineEvent=function(e){return this.getListeners(e),this},e.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},e.removeListener=function(r,s){var n,e,t=this.getListenersAsObject(r);for(e in t)t.hasOwnProperty(e)&&(n=i(t[e],s),-1!==n&&t[e].splice(n,1));return this},e.off=n("removeListener"),e.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},e.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},e.manipulateListeners=function(r,t,i){var e,n,s=r?this.removeListener:this.addListener,o=r?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(e=i.length;e--;)s.call(this,t,i[e]);else for(e in t)t.hasOwnProperty(e)&&(n=t[e])&&("function"==typeof n?s.call(this,e,n):o.call(this,e,n));return this},e.removeEvent=function(e){var t,r=typeof e,n=this._getEvents();if("string"===r)delete n[e];else if(e instanceof RegExp)for(t in n)n.hasOwnProperty(t)&&e.test(t)&&delete n[t];else delete this._events;return this},e.removeAllListeners=n("removeEvent"),e.emitEvent=function(r,o){var e,i,t,s,n=this.getListenersAsObject(r);for(t in n)if(n.hasOwnProperty(t))for(i=n[t].length;i--;)e=n[t][i],e.once===!0&&this.removeListener(r,e.listener),s=e.listener.apply(this,o||[]),s===this._getOnceReturnValue()&&this.removeListener(r,e.listener);return this},e.trigger=n("emitEvent"),e.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},e.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},e._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},e._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return r.EventEmitter=s,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:r.EventEmitter=t}).call(this);

window.__debugMode = true; // Don't turn it off

var parseJSON = function (obj) {
  try { return JSON.parse(obj); } catch (e) {
    topError('<b>parseJSON:</b> ' + e.message, {dt: -1, type: 5, answer: obj});
    return {};
  }
}

var cur = {destroy: [], nav: []}; // Current page variables and navigation map.
var _ua = navigator.userAgent.toLowerCase();
var browser = {
  version: (_ua.match( /.+(?:me|ox|on|rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
  opera: /opera/i.test(_ua),
  msie: (/msie/i.test(_ua) && !/opera/i.test(_ua)),
  msie6: (/msie 6/i.test(_ua) && !/opera/i.test(_ua)),
  msie7: (/msie 7/i.test(_ua) && !/opera/i.test(_ua)),
  msie8: (/msie 8/i.test(_ua) && !/opera/i.test(_ua)),
  msie9: (/msie 9/i.test(_ua) && !/opera/i.test(_ua)),
  mozilla: /firefox/i.test(_ua),
  yabrowser: /yabrowser/i.test(_ua),
  chrome: /chrome/i.test(_ua),
  safari: (!(/chrome/i.test(_ua)) && /webkit|safari|khtml/i.test(_ua)),
  iphone: /iphone/i.test(_ua),
  ipod: /ipod/i.test(_ua),
  iphone4: /iphone.*OS 4/i.test(_ua),
  ipod4: /ipod.*OS 4/i.test(_ua),
  ipad: /ipad/i.test(_ua),
  safari_mobile: /iphone|ipod|ipad/i.test(_ua),
  android: /android/i.test(_ua),
  opera_mobile: /opera mini|opera mobi/i.test(_ua),
  mobile: /iphone|ipod|ipad|opera mini|opera mobi|mobile/i.test(_ua),
  mac: /mac/i.test(_ua),
  smart_tv: /smart-tv|smarttv/i.test(_ua)
};
var mobPlatforms = {1:1,2:1,3:1,4:1,5:1};

var browserFeatures = {
  // Detect wheel event
  wheelEvent: 'onwheel' in ce('div') ? 'wheel' : (document.onmousewheel !== void 0 ? 'mousewheel' : (browser.mozilla ? 'MozMousePixelScroll' : 'DOMMouseScroll')),
  hasBoundingClientRect: 'getBoundingClientRect' in ce('div'),
  cmaEnabled: navigator.credentials && navigator.credentials.preventSilentAccess && vk.cma
};

if (!window.vk) window.vk = {
  loginscheme: 'http',
  ip_h: '',
};

window.vk.started = vkNow();

function jsc(name) {
  return 'dist/' + name;
}

(function() {
  var flash = [0, 0, 0], axon = 'ShockwaveFlash.ShockwaveFlash';
  var wrapType = 'embed', wrapParam = 'type="application/x-shockwave-flash" ';
  var escapeAttr = function(v) {
    return v.toString().replace('&', '&amp;').replace('"', '&quot;');
  }
  if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
    var x = navigator.plugins['Shockwave Flash'];
    if (x && x.description) {
      var ver = x.description.replace(/([a-zA-Z]|\s)+/, '').replace(/(\s+r|\s+b[0-9]+)/, '.').split('.');
      for (var i = 0; i < 3; ++i) flash[i] = ver[i] || 0;
    }
  } else {
    if (_ua.indexOf('Windows CE') >= 0) {
      var axo = true, ver = 6;
      while (axo) {
        try {
          ++ver;
          axo = new ActiveXObject(axon + '.' + ver);
          flash[0] = ver;
        } catch(e) {}
      }
    } else {
      try {
        var axo = new ActiveXObject(axon + '.7');
        flash = axo.GetVariable('$version').split(' ')[1].split(',');
      } catch (e) {}
    }
    wrapType = 'object';
    wrapParam = 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
  }
  browser.flashwrap = (wrapType == 'embed') ? function(opts, params) {
    params = extend({
      id: opts.id,
      name: opts.id,
      width: opts.width,
      height: opts.height,
      style: opts.style,
      preventhide: opts.preventhide
    }, params);
    if (browser.flash >= opts.version) {
      params.src = opts.url;
    } else {
      params.src = opts.express;
    }
    var paramsStr = [];
    for (var i in params) {
      var p = params[i];
      if (p !== undefined && p !== null) {
        paramsStr.push(i + '="' + escapeAttr(p) + '" ');
      }
    }
    return '<embed ' + wrapParam + paramsStr.join('') + '/>';
  } : function(opts, params) {
    if (browser.flash >= opts.version) {
      params.movie = opts.url;
    } else {
      params.movie = opts.express;
    }
    var attr = {
      id: opts.id,
      width: opts.width,
      height: opts.height,
      style: opts.style,
      preventhide: opts.preventhide
    }
    var attrStr = [];
    for (var i in attr) {
      var p = attr[i];
      if (p !== undefined && p !== null) {
        attrStr.push(i + '="' + escapeAttr(p) + '" ');
      }
    }
    var paramsStr = [];
    for (var i in params) {
      var p = params[i];
      if (p !== undefined && p !== null) {
        paramsStr.push('<param name="' + i + '" value="' + escapeAttr(p) + '" />');
      }
    }
    return '<object ' + wrapParam + attrStr.join('') +'>' + paramsStr.join('') + '</object>';
  }
  if (flash[0] < 7) flash = [0, 0, 0];
  browser.flash = intval(flash[0]);
  browser.flashfull = {
    major: browser.flash,
    minor: intval(flash[1]),
    rev: intval(flash[2])
  }
})();

window.locHost = location.host;
window.locProtocol = location.protocol;
window.__dev = /[a-z0-9_\-]+\.[a-z0-9_\-]+\.[a-z0-9_\-]+\.[a-z0-9_\-]+/i.test(locHost);
if (!__dev) __debugMode = false;
window.locHash = location.hash.replace('#/', '').replace('#!', '');
window.locDomain = locHost.toString().match(/[a-zA-Z]+\.[a-zA-Z]+\.?$/)[0];
window.locBase = location.toString().replace(/#.+$/, '');
if (!vk.nodomain) {
  if (!browser.msie6 || document.domain != locDomain) {
    try {
      document.domain = locDomain;
    } catch (error) {
      debugLog(error);
    }
  }
}

window.__qlTimer = null;
window.__qlClear = function() { clearTimeout(__qlTimer); setTimeout(function() { clearTimeout(__qlTimer); }, 2000); }
window.onLoginDone = function () {
  __qlClear();
  nav.reload({force: true, from: 6});
}
window.onLogout = function() {
  __qlClear();
}

function onLoginFailed(code, opts) {
  __qlClear();
}
function onLoginCaptcha(sid, dif) {
  __qlClear();
}

/* Debug */

window._logTimer = (new Date()).getTime();
function debugLog(msg) {
  try {
    var t = '[' + (((new Date()).getTime() - _logTimer) / 1000) + '] ';
    if (ge('debuglog')) {
      if (msg === null) {
        msg = '[NULL]';
      } else if (msg === undefined) {
        msg = '[UNDEFINED]';
      }
      ge('debuglog').innerHTML += t + msg.toString().replace('<', '&lt;').replace('>', '&gt;')+'<br/>';
    }
    if (window.console && console.log) {
      Array.prototype.unshift.call(arguments, t);
      console.log.apply(console, arguments);
    }
  } catch (e) {
  }
}

function partConfigEnabled(key) {
  var partEnabled = (window.vk || {}).pe || {};
  return !!partEnabled[key];
}

/* Utils */

function isRetina() {
  return window.devicePixelRatio >= 2;
}

function onlinePlatformClass(platform) {
  var cls = '';
  if (platform) {
    cls += 'online ';
  }

  if (mobPlatforms[platform]) {
    cls += 'mobile';
  }

  return cls;
}

function toggleOnline(obj, platform) {
  removeClass(obj, 'online');
  removeClass(obj, 'mobile');
  addClass(obj, onlinePlatformClass(platform));
}

function updateOnlineText() {}
function updateAriaElements() {}
function updateAriaCheckboxes() {}

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
  var result;
  if (color && isArray(color) && color.length == 3)
    return color;
  if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
    return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];
  if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
    return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];
  if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
    return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];
  if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
    return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];
}

function formatTime(t) {
  var res, sec, min, hour;

  t = Math.max(t, 0);
  sec = Math.floor(t % 60);
  res = (sec < 10) ? '0'+sec : sec;
  t = Math.floor(t / 60);
  min = t % 60;
  res = min+':'+res;
  t = Math.floor(t / 60);

  if (t > 0) {
    if (min < 10) res = '0' + res;
    res = t+':'+res;
  }

  return res;
}

function isToday(date) {
  var now = new Date();
  return date.getFullYear() === now.getFullYear()
    && date.getMonth() === now.getMonth()
    && date.getDate() === now.getDate();
}

function isYesterday(date) {
  var yesterday = new Date(date.getTime() + 86400 * 1000);
  return isToday(yesterday);
}

function getServerTime() {
  return (vk.ts + Math.floor((new Date().getTime() - vk.started) / 1000));
}

function vkNow() {
  return +new Date;
}

Function.prototype.pbind = function() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift(window);
  return this.bind.apply(this, args);
};

if (!Function.prototype.bind) {
  Function.prototype.bind = function() {
    var func = this, args = Array.prototype.slice.call(arguments);
    var obj = args.shift();
    return function() {
      var curArgs = Array.prototype.slice.call(arguments);
      return func.apply(obj, args.concat(curArgs));
    }
  }
}

function rand(mi, ma) {
  return Math.random() * (ma - mi + 1) + mi;
}

function irand(mi, ma) {
  return Math.floor(rand(mi, ma));
}

function isUndefined(obj) {
  return typeof obj === 'undefined'
};

function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}

function isString(obj) {
  return typeof obj === 'string';
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]' && !(browser.msie8 && obj && obj.item !== 'undefined' && obj.namedItem !== 'undefined');
}

function isEmpty(o) {
  if(Object.prototype.toString.call(o) !== '[object Object]') {return false;} for(var i in o){ if(o.hasOwnProperty(i)){return false;} } return true;
}

function isNumeric(value) {
  return !isNaN(value);
}

function vkImage() {
  return window.Image ? (new Image()) : ce('img'); // IE8 workaround
}

function intval(value) {
  if (value === true) return 1;
  return parseInt(value) || 0;
}

function floatval(value) {
  if (value === true) return 1;
  return parseFloat(value) || 0;
}

function positive(value) {
  value = intval(value);
  return value < 0 ? 0 : value;
}

function replaceEntities(str) {
  return se('<textarea>' + ((str || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')) + '</textarea>').value;
}

function clean(str) {
  return str ? (str+'').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
}

function unclean(str) {
  return replaceEntities((str+'').replace(/\t/g, "\n"));
}

function each(object, callback) {
  if (!isObject(object) && typeof object.length !== 'undefined') {
    for (var i = 0, length = object.length; i < length; i++) {
      var value = object[i];
      if (callback.call(value, i, value) === false) break;
    }
  } else {
    for (var name in object) {
      if (!Object.prototype.hasOwnProperty.call(object, name)) continue;
      if (callback.call(object[name], name, object[name]) === false)
        break;
    }
  }

  return object;
}

function indexOf(arr, value, from) {
  for (var i = from || 0, l = (arr || []).length; i < l; i++) {
    if (arr[i] == value) return i;
  }
  return -1;
}

function inArray(value, arr) {
  return indexOf(arr, value) != -1;
}

function clone(obj, req) {
  var newObj = !isObject(obj) && typeof obj.length !== 'undefined' ? [] : {};
  for (var i in obj) {
    if (/webkit/i.test(_ua) && (i == 'layerX' || i == 'layerY' || i == 'webkitMovementX' || i == 'webkitMovementY')) continue;
    if (req && typeof(obj[i]) === 'object' && i !== 'prototype' && obj[i] !== null) {
      newObj[i] = clone(obj[i]);
    } else {
      newObj[i] = obj[i];
    }

  }
  return newObj;
}

// Computes the difference of arrays by keys and values
function arrayKeyDiff(a) {
  var arr_dif = {}, i = 1, argc = arguments.length, argv = arguments, key, found;
  for (key in a){
    found = false;
    for (i = 1; i < argc; i++){
      if (argv[i][key] && (argv[i][key] == a[key])){
        found = true;
      }
    }
    if (!found) {
      arr_dif[key] = a[key];
    }
  }
  return arr_dif;
}

function extend() {
  var a = arguments, target = a[0] || {}, i = 1, l = a.length, deep = false, options;

  if (typeof target === 'boolean') {
    deep = target;
    target = a[1] || {};
    i = 2;
  }

  if (typeof target !== 'object' && !isFunction(target)) target = {};

  for (; i < l; ++i) {
    if ((options = a[i]) != null) {
      for (var name in options) {
        var src = target[name], copy = options[name];

        if (target === copy) continue;

        if (deep && copy && typeof copy === 'object' && !copy.nodeType) {
          target[name] = extend(deep, src || (copy.length != null ? [] : {}), copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
}

function cleanObj(data) {
  if (isObject(data)) {
    var dataCleaned = {};
    for(var i in data) {
      dataCleaned[i.replace(/[^a-zA-Z0-9_\-]/g, '')] = cleanObj(data[i]);
    }
  } else if (isArray(data)) {
    var dataCleaned = [];
    for(var i in data) {
      dataCleaned.push(cleanObj(data[i]));
    }
  } else {
    var type = typeof(data);
    if (type == 'number' || type == 'boolean' || type == 'function') {
      var dataCleaned = data;
    } else {
      var dataCleaned = clean(data);
    }
  }
  return dataCleaned;
}

if (!Object.keys) {
  Object.keys = function(o) {
    var a = [];
    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        a.push(i);
      }
    }
    return a;
  }
}

function hashCode(str) {
  var hash = 0;

  if (str.length === 0) {
    return hash;
  }

  for (var i = 0, len = str.length; i < len; i++) {
    var chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }

  return hash;
}

/* Store data connected to element */

window.vkExpand = 'VK' + vkNow();
window.vkUUID = 0;
window.vkCache = {};

function data(elem, name, data) {
  var id = elem[vkExpand], undefined;
  if (!id) {
    id = elem[vkExpand] = ++vkUUID;
  }

  if (name && !vkCache[id]) {
    vkCache[id] = {};
    if (__debugMode) vkCache[id].__elem = elem;
  }

  if (data !== undefined) {
    vkCache[id][name] = data;
  }

  return name ? vkCache[id][name] : id;
}

function attr(el, attrName, value) {
  el = ge(el);
  if (typeof value == 'undefined') {
    return el.getAttribute(attrName);
  } else {
    el.setAttribute(attrName, value);
    return value;
  }
}

function removeAttr(el) {
  for (var i = 0; i < arguments.length; ++i) {
    var n = arguments[i];
    if (el[n] === undefined) continue;
    try {
      delete el[n];
    } catch(e) {
      try {
        el.removeAttribute(n);
      } catch(e) {}
    }
  }
}

function removeData(elem, name) {
  var id = elem ? elem[vkExpand] : false;
  if (!id) return;

  if (name) {
    if (vkCache[id]) {
      delete vkCache[id][name];
      name = '';
      for (name in vkCache[id]) {
        break;
      }

      if (!name) {
        removeData(elem);
      }
    }
  } else {
    removeEvent(elem);
    removeAttr(elem, vkExpand);
    delete vkCache[id];
  }
}

function cleanElems() {
  var a = arguments;
  for (var i = 0; i < a.length; ++i) {
    var el = ge(a[i]);
    if (el) {
      removeData(el);
      removeAttr(el, 'btnevents');
    }
  }
}

/* Lang */

function trim(text) {
  return (text || '').replace(/^\s+|\s+$/g, '');
}

function stripHTML(text) {
  return text ? text.replace(/<(?:.|\s)*?>/g, '') : '';
}

function escapeRE(s) {
  return s ? s.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1') : '';
}

function langWordNumeric(num, words, arr) {
  if (isArray(words) && num < words.length) {
    return words[num];
  }
  return langNumeric(num, arr);
}

function langNumeric(count, vars, formatNum) {
  if (!vars || !window.langConfig) { return count; }
  var res;
  if (!isArray(vars)) {
    res = vars;
  } else {
    res = vars[1];
    if(count != Math.floor(count)) {
      res = vars[langConfig.numRules['float']];
    } else {
      each(langConfig.numRules['int'], function(i,v){
        if (v[0] == '*') { res = vars[v[2]]; return false; }
        var c = v[0] ? count % v[0] : count;
        if(indexOf(v[1], c) != -1) { res = vars[v[2]]; return false; }
      });
    }
  }
  if (formatNum) {
    var n = count.toString().split('.'), c = [];
    for(var i = n[0].length - 3; i > -3; i -= 3) {
      c.unshift(n[0].slice(i > 0 ? i : 0, i + 3));
    }
    n[0] = c.join(langConfig.numDel);
    count = n.join(langConfig.numDec);
  }
  res = (res || '%s').replace('%s', count);
  return res;
}

function langSex(sex, vars) {
  if (!isArray(vars)) return vars;
  var res = vars[1];
  if (!window.langConfig) return res;
  each(langConfig.sexRules, function(i,v){
    if (v[0] == '*') { res = vars[v[1]]; return false; }
    if (sex == v[0] && vars[v[1]]) { res = vars[v[1]]; return false; }
  });
  return res;
}

function langStr(vars) {
  var res = vars + '', args = arguments, args_count = args.length;
  for (var i = 1; i < args_count; i += 2) {
    var token = args[i][0] == '%' ? args[i] : '{' + args[i] + '}';
    res = res.replace(token, args[i + 1]);
  }
  return res;
}

function getLang() {
  try {
    var args = Array.prototype.slice.call(arguments);
    var key = args.shift();
    if (!key) return '...';
    var val = (window.cur.lang && window.cur.lang[key]) || (window.lang && window.lang[key]) || (window.langpack && window.langpack[key]) || window[key];
    if (!val) {
      var res = key.split('_');
      res.shift();
      return res.join(' ');
    }
    if (isFunction(val)) {
      return val.apply(null, args);
    } else if ((args[0] !== undefined || isArray(val)) && args[0] !== 'raw') {
      return langNumeric(args[0], val, args[1]);
    } else {
      return val;
    }
  } catch(e) {
    debugLog('lang error:' + e.message + '(' + Array.prototype.slice.call(arguments).join(', ') + ')');
  }
}

function checkTextLength(maxLen, inp, warn, nobr, cut, force, utf) {
  var value = (inp.getValue) ? inp.getValue() : inp.value,
      lastLen = inp.lastLen || 0;
  if (inp.lastLen === value.length && !force) return;
  inp.lastLen = value.length;
  var spec = {'&':5,'<':4,'>':4,'"':6,"\n":(nobr?1:4),"\r":0,'!':5,"'":5,'$':6,'\\':6},
      good = {0x490:1,0x491:1,0x2013:1,0x2014:1,0x2018:1,0x2019:1,0x201a:1,0x2026:1,0x2030:1,0x2039:1,0x203a:1,0x20ac:1,0x2116:1,0x2122:1,0xfffd:1},
      bad = {0x40d:1,0x450:1,0x45d:1};
  if (cut) spec[','] = 5;
  var countRealLen = function(text, nobr) {
    var res = 0;
    for (var i = 0, l = text.length; i < l; i++) {
      var k = spec[text.charAt(i)], c = text.charCodeAt(i);
      if (k !== undefined) {
        res += k;
      } else if (!utf && c >= 0x80 && (c < 0x401 || bad[c] || c > 0x45f) && !good[c] && (c < 0x201c || c > 0x201e) && (c < 0x2020 || c > 0x2022)) {
        res += ('&#' + c + ';').length;
      } else {
        res += 1;
      }
    }
    return res;
  };
  var realCut = function(text, len) {
    var curLen = 0, res = '';
    for (var i = 0, l = text.length; i < l; i++) {
      var symbol = text.charAt(i), k = spec[symbol], c = text.charCodeAt(i);
      if (k !== undefined) {
        curLen += k;
      } else if (!utf && c >= 0x80 && (c < 0x401 || bad[c] || c > 0x45f) && !good[c] && (c < 0x201c || c > 0x201e) && (c < 0x2020 || c > 0x2022)) {
        curLen += ('&#' + c + ';').length;
      } else {
        curLen += 1;
      }
      if (curLen > len) break;
      res += symbol;
    }
    return res;
  }
  var realLen = countRealLen(value, nobr);
  warn = ge(warn);
  if (realLen > maxLen - 100) {
    show(warn);
    if (realLen > maxLen) {
      if (cut) {
        var cutVal = val(inp, realCut(value, Math.min(maxLen, lastLen)));
        inp.lastLen = cutVal.length;
        warn.innerHTML = getLang('text_N_symbols_remain', 0);
      } else {
        warn.innerHTML = getLang('text_exceeds_symbol_limit', realLen - maxLen);
      }
    } else {
      warn.innerHTML = getLang('text_N_symbols_remain', maxLen - realLen);
    }
  } else {
    hide(warn);
  }
}

function winToUtf(text) {
  return text.replace(/&#(\d\d+);/g, function(s, c) {
    c = intval(c);
    return (c >= 32) ? String.fromCharCode(c) : s;
  }).replace(/&quot;/gi, '"').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&amp;/gi, '&');
}

function parseLatin(text) {
  var outtext = text;
  var lat1 = ['yo','zh','kh','ts','ch','sch','shch','sh','eh','yu','ya','YO','ZH','KH','TS','CH','SCH','SHCH','SH','EH','YU','YA',"'"];
  var rus1 = ['�', '�', '�', '�', '�', '�',  '�',   '�', '�', '�', '�', '�', '�', '�', '�', '�', '�',  '�',   '�', '�', '�', '�', '�'];
  for (var i = 0; i < lat1.length; i++) {
    outtext = outtext.split(lat1[i]).join(rus1[i]);
  }
  var lat2 = 'abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCY¸¨';
  var rus2 = '������������������������������������������������';
  for (var i = 0; i < lat2.length; i++) {
    outtext = outtext.split(lat2.charAt(i)).join(rus2.charAt(i));
  }
  return (outtext == text) ? null : outtext;
}

function addLangKeys(keys, global) {
  var obj = global ? window : window.cur;
  if (!obj.lang) {
    obj.lang = keys;
  } else {
    extend(obj.lang, keys);
  }
}

function parseLatin(text){
  var outtext = text;
  var lat1 = ['yo','zh','kh','ts','ch','sch','shch','sh','eh','yu','ya','YO','ZH','KH','TS','CH','SCH','SHCH','SH','EH','YU','YA',"'"];
  var rus1 = ['�', '�', '�', '�', '�', '�',  '�',   '�', '�', '�', '�', '�', '�', '�', '�', '�', '�',  '�',   '�', '�', '�', '�', '�'];
  for (var i = 0, l = lat1.length; i < l; i++) {
    outtext = outtext.split(lat1[i]).join(rus1[i]);
  }
  var lat2 = 'abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCY��';
  var rus2 = '������������������������������������������������';
  for (var i = 0, l = lat2.length; i < l; i++) {
    outtext = outtext.split(lat2.charAt(i)).join(rus2.charAt(i));
  }
  return (outtext == text) ? null : outtext;
}

function parseCyr(text) {
  var outtext = text, i,
      lat1 = ['yo','zh','kh','ts','ch','sch','shch','sh','eh','yu','ya','YO','ZH','KH','TS','CH','SCH','SHCH','SH','EH','YU','YA',"'"],
      rus1 = ['�', '�', '�', '�', '�', '�',  '�',   '�', '�', '�', '�', '�', '�', '�', '�', '�', '�',  '�',   '�', '�', '�', '�', '�'],
      lat2 = 'abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCY��',
      rus2 = '������������������������������������������������';
  for (i = 0; i < rus1.length; i++) {
    outtext = outtext.split(rus1[i]).join(lat1[i]);
  }
  for (i = 0; i < rus2.length; i++) {
    outtext = outtext.split(rus2.charAt(i)).join(lat2.charAt(i));
  }
  return (outtext == text) ? null : outtext;
}

function parseLatKeys(text) {
  var outtext = text, i;
      lat = "qwertyuiop[]asdfghjkl;'zxcvbnm,./`",
      rus = "��������������������������������.�";
  for (i = 0; i < lat.length; i++) {
    outtext = outtext.split(lat.charAt(i)).join(rus.charAt(i));
  }
  return (outtext == text) ? null : outtext;
}

/* Misc */

window._postsSeen = {};
window._postsSaved = {};
window._postsSaveTimer;
window._postsSendTimer;
window._postsCleanTimer;
window.ls = {
  checkVersion: function() {
    return false;
  },
  set: function(k, v) {
    return false;
  },
  get: function(k) {
    return false;
  },
  remove: function(k) {
    return false;
  }
};

function aquireLock(name, fn, noretry) {
  var lockKey = 'lockkk_' + name;
  if (ls.get(lockKey) !== true) {
    ls.set(lockKey, true);
    try {
      fn();
    } catch(e) {}
    ls.set(lockKey, false);
    return;
  }
  if (ls.checkVersion()) {
    if (!noretry) {
      setTimeout(aquireLock.pbind(name, fn, true), 100);
    }
  } else {
    fn();
  }
}

function statlogsValueEvent(statName, value, key1, key2, key3) {
  if (typeof(statName) === 'undefined' || typeof(value) === 'undefined') {
    return;
  }
  var stats,
      cookieName = 'remixsts',
      keys = [].slice.apply(arguments, [2, 5]);
  aquireLock('stats_cookie_lock', function() {
    try {
      stats = JSON.parse(getCookie(cookieName));
      stats = stats.data;
    } catch(e) {
      stats = [];
    }
    stats.push([
      Math.round(Date.now()/1000),
      statName,
      value
    ].concat(keys));
    while (stats.length > 100) {
      stats.shift();
    }
    var uniqueId = Math.round(rand(0, 1000000000)); // unique id
    setCookie(cookieName, JSON.stringify({data: stats, uniqueId: uniqueId, source: 'lite'}), 0.01)
  });
}

function onLoaded(fn) {
  if (vk.loaded) {
    fn();
  } else {
    addEvent(window, 'load', fn);
  }
}

/* Ajax */

function serializeForm(form) {
  if (typeof(form) != 'object') {
    return false;
  }
  var result = {};
  var g = function(n) {
    return geByTag(n, form);
  };
  var nv = function(i, e){
    if (!e.name) return;
    if (e.type == 'text' || !e.type) {
      result[e.name] = val(e);
    } else {
      result[e.name] = (browser.msie && !e.value && form[e.name]) ? form[e.name].value : e.value;
    }
  };
  each(g('input'), function(i, e) {
    if ((e.type != 'radio' && e.type != 'checkbox') || e.checked) return nv(i, e);
  });
  each(g('select'), nv);
  each(g('textarea'), nv);

  return result;
}

function ajx2q(qa) {
  var query = [], enc = function (str) {
    try {
      return encodeURIComponent(str);
    } catch (e) { return '';}
  };

  for (var key in qa) {
    if (qa[key] == null || isFunction(qa[key])) continue;
    if (isArray(qa[key])) {
      for (var i = 0, c = 0; i < qa[key].length; ++i) {
        if (qa[key][i] == null || isFunction(qa[key][i])) {
          continue;
        }
        query.push(enc(key) + '[' + c + ']=' + enc(qa[key][i]));
        ++c;
      }
    } else {
      query.push(enc(key) + '=' + enc(qa[key]));
    }
  }
  query.sort();
  return query.join('&');
}

function q2ajx(qa) {
  if (!qa) return {};
  var query = {}, dec = function (str) {
    try {
      return decodeURIComponent(str);
    } catch (e) { return str;}
  };
  qa = qa.split('&');
  each(qa, function(i, a) {
    var t = a.split('=');
    if (t[0]) {
      var v = dec(t[1] + '');
      if (t[0].substr(t.length - 2) == '[]') {
        var k = dec(t[0].substr(0, t.length - 2));
        if (!query[k]) {
          query[k] = [];
        }
        query[k].push(v);
      } else {
        query[dec(t[0])] = v;
      }
    }
  });
  return query;
}

window.AjaxConvert = { // TODO: use #shared/lib/convert
  toQueryString: ajx2q,
  fromQueryString: q2ajx
};

(function staticManagerDefinition() {
  "use strict";
  function loadStyle(src) {
    return new Promise(function (resolve, reject) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = src;

      link.onload = function () {
        return resolve(link);
      };

      link.onerror = function () {
        return reject(new Error("Stylesheet load error for " + src));
      };

      document.head.appendChild(link);
    });
  }
  function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;

    script.onload = function () {
      return callback(null, script);
    };

    script.onerror = function () {
      return callback(new Error("Script load error for " + src));
    };

    document.head.appendChild(script);
  }
  var queue = {};
  var WAIT_JS_LOAD_TIMEOUT = 120000;

  function reCalculateWaitJsLoadTimeout() {
    if (__debugMode) {
      WAIT_JS_LOAD_TIMEOUT = 3000;
      return;
    }
  }

  var jsc = function jsc(name) {
    return 'dist/' + name;
  };

  var isJsFile = function isJsFile(fileName) {
    return /\.js$/.test(fileName);
  };

  var isCssFile = function isCssFile(fileName) {
    return /\.css$/.test(fileName);
  };
  function getJsPath(fileName) {
    var path = '/js/';

    if (stTypes.fromLib[fileName]) {
      path = '/js/lib/';
    } else if (stTypes.fromCompiled && stTypes.fromCompiled[fileName]) {
      path = '/' + jsc('web/');
    } else if (!/^lang\d/i.test(fileName) && !stTypes.fromRoot[fileName] && fileName.indexOf('/') === -1) {
      path = '/js/al/';
    } else if (fileName.indexOf('dist') === 0) {
      path = '/';
    }

    return path;
  }

  function hasCompiledPath(filename) {
    var _window = window,
      _window$stDeps = _window.stDeps,
      stDeps = _window$stDeps === void 0 ? [] : _window$stDeps;
    return !!stDeps[getJsPath(filename) + filename];
  }
  function getCompiledPath(filename) {
    var _window2 = window,
      _window2$stDeps = _window2.stDeps,
      stDeps = _window2$stDeps === void 0 ? [] : _window2$stDeps;
    var deps = stDeps[getJsPath(filename) + filename];
    return deps[deps.length - 1];
  }

  function isInternal(filename) {
    return !!~filename.indexOf('dist/internal/');
  }

  function reportFileLoadingErrorAndResolveLoading(fileName, err, stack) {
    topMsg("Some problems with loading <b>" + fileName + "</b>...", 5);

    if (queue[fileName]) {
      queue[fileName]();
    }
  }
  function getSrcPrefix(fileName) {
      return '';
  }
  function getCssPath(fileName) {
    if (stTypes.fromRoot[fileName] || fileName.includes('/') || fileName.match(/^[\w_-]+\.[0-9a-f]{20}\.css$/)) {
      return '';
    }
    return 'al/';
  }
  function addCssFile(_ref) {
    var fileName = _ref.fileName,
      fileFullName = _ref.fileFullName,
      domainPrefix = _ref.domainPrefix;
    var path = getCssPath(fileName);
    if (path.startsWith('dist/')) {
      path = '/' + path;
    } else {
      path = '/css/' + path;
    }
    var src = domainPrefix + path + fileFullName;
    var stack = new Error().stack;
    var loadingPromise = loadStyle(src).catch(function (err) {
      return reportFileLoadingErrorAndResolveLoading(fileName, err, stack);
    });
    StaticFiles[fileName].t = 'css';
    StaticFiles[fileName].isLoading = loadingPromise;
    StaticFiles[fileName].src = src;
    return loadingPromise;
  }
  function addJsFile(_ref2) {
    var fileName = _ref2.fileName,
      fileFullName = _ref2.fileFullName,
      domainPrefix = _ref2.domainPrefix;
    var path = getJsPath(fileName);
    StaticFiles[fileName].t = 'js';
    var stack = new Error().stack;

    if (fileName === jsc('web/common_web.js')) {
      setTimeout(function () {
        return stManager.done(jsc('web/common_web.js'));
      }, 0);
    } else {
      var src = domainPrefix + path + fileFullName;
      StaticFiles[fileName].src = src;
      var loadingPromise = new Promise(function (resolve, reject) {
        loadScript(src, function (err) {
          if (err) {
            StaticFiles[fileName] = null;
            reject(err);
          }
        });

        if (src.includes('dist/bundles/')) {
          resolve();
        } else {
          var timeout = setTimeout(function () {
            return reportFileLoadingErrorAndResolveLoading(fileName, new Error("timeout error of loading " + fileName), stack);
          }, WAIT_JS_LOAD_TIMEOUT);

          queue[fileName] = function () {
            clearTimeout(timeout);
            resolve();
            queue[fileName] = null;
          };
        }
      });
      var wrappedLoadingPromise = loadingPromise.catch(function (err) {
        reportFileLoadingErrorAndResolveLoading(fileName, err, stack);
        return Promise.resolve();
      });
      StaticFiles[fileName].isLoading = wrappedLoadingPromise;
      return wrappedLoadingPromise;
    }
  }
  var stManager = {
    emitter: new EventEmitter(),
    _addCss: function _addCss(text, beforeNode) {
      var elem = ce('style', {
        type: 'text/css',
        media: 'screen'
      });
      var nextNode = domNS(beforeNode);

      if (nextNode) {
        headNode.insertBefore(elem, nextNode);
      } else {
        headNode.appendChild(elem);
      }

      if (elem.sheet) {
        elem.sheet.insertRule(text, 0);
      } else if (elem.styleSheet) {
        elem.styleSheet.cssText = text;
      }

      return elem;
    },
    // TODO: used in photoview
    _srcPrefix: getSrcPrefix,
    _add: function _add(fileName) {
      if (StaticFiles[fileName] && StaticFiles[fileName].isLoading) {
        return StaticFiles[fileName].isLoading;
      }

      var name = fileName.replace(/[\/\.]/g, '_');
      var fileVersion = stVersions[fileName];
      var fileFullName = fileName + '?' + fileVersion;
      var domainPrefix = getSrcPrefix(fileName, fileVersion);
      StaticFiles[fileName] = {
        v: fileVersion,
        n: name,
        l: 0,
        c: 0
      };

      if (isJsFile(fileName)) {
        return addJsFile({
          fileName: fileName,
          fileFullName: fileFullName,
          domainPrefix: domainPrefix
        });
      } else if (isCssFile(fileName)) {
        return addCssFile({
          fileName: fileName,
          fileFullName: fileFullName,
          domainPrefix: domainPrefix
        });
      }
    },
    add: function add(files, callback) {
      var waitingList = [];

      if (!isArray(files)) {
        files = [files];
      }

      for (var i in files) {
        if (!files.hasOwnProperty(i)) {
          continue;
        }

        var file = files[i];

        if (!file) {
          continue;
        }

        if (file.includes('?')) {
          file = file.split('?')[0];
        }

        var path = '';

        if (isJsFile(file)) {
          path = getJsPath(file);
        } else if (isCssFile(file)) {
          path = getCssPath(file);
        }

        if (/^lang\d/i.test(file)) {
          stVersions[file] = stVersions['lang'];
        } else if (!stVersions[path + file]) {
          stVersions[path + file] = 1;
        }

        var hasDeps = false;

        if (window.stDeps) {
          var fullPathJs = path + file;
          var fullPathCss = '/css/' + path + file;
          var fullPath = '';

          if (window.stDeps[fullPathJs]) {
            fullPath = fullPathJs;
          } else if (window.stDeps[fullPathCss]) {
            fullPath = fullPathCss;
          }

          if (fullPath) {
            hasDeps = true;
            window.stDeps[fullPath].forEach(function(asset) {
              waitingList.push(stManager._add(asset));
            });
          }
        }

        if (__debugMode && !(browser.iphone || browser.ipad) && file !== jsc('web/common_web.js') && file !== 'common.css' && stVersions[file] > 0 && stVersions[file] < 1000000000) {
          stVersions[file] += irand(1000000000, 2000000000);
        }

        if (!hasDeps) {
          var old = StaticFiles[file];

          if (!old || old.v != stVersions[file]) {
            waitingList.push(stManager._add(file, old));
          } else {
            waitingList.push(old.isLoading);
          }
        }
      }

      return Promise.all(waitingList).then(function (res) {
        if (isFunction(callback)) {
          callback(res);
        }

        return res;
      });
    },
    done: function done(fileName) {
      var realFilePath = fileName;

      if (hasCompiledPath(fileName)) {
        realFilePath = getCompiledPath(fileName);
      } else if (isInternal(fileName)) {
        // fallback for internal compiled files
        if (!StaticFiles[realFilePath] || StaticFiles[realFilePath].l === 1) {
          // fix for helpdesk.js and same
          var pathPattern = new RegExp(realFilePath.replace(/.js$/, '\.[0-9a-f]{20}\.js'));
          var newStyleInternalPath = false;
          Object.keys(StaticFiles).forEach(function (path) {
            if (pathPattern.test(path) && !StaticFiles[path].l) {
              newStyleInternalPath = path;
            }
          });

          if (newStyleInternalPath) {
            realFilePath = newStyleInternalPath;
          }
        }
      }

      if (queue[realFilePath]) {
        queue[realFilePath]();
      }

      if (StaticFiles[realFilePath]) {
        StaticFiles[realFilePath].l = 1;
      }

      stManager.emitter.emitEvent('update', [realFilePath, StaticFiles[realFilePath]]);
    }
  };

  function registerPreloadedScripts() {
    for (var _i = 0, _Object$values = Object.values(window.StaticFiles); _i < _Object$values.length; _i++) {
      var record = _Object$values[_i];
      record.isLoading = Promise.resolve();
    }
  }

  function initStaticManager() {
    window.addEventListener('load', reCalculateWaitJsLoadTimeout);
    window.jsc = jsc;
    window.stQueue = queue;

    if (!window.stVersions) {
      window.stVersions = {};
      window.stTypes = {
        fromLib: {},
        fromRoot: {}
      };
      window.navMap = {};
    }

    if (!window.StaticFiles) {
      window.StaticFiles = {};
    }

    registerPreloadedScripts();

    if (!window.stManager) {
      window.stManager = stManager;
      window.__stm = stManager;
    }
  }

  initStaticManager();
})();

///////////////////////////////////////////////////////////////////////////////////////////////
// Ajax layout start

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/ 		if(installedModules[moduleId]) {
      /******/ 			return installedModules[moduleId].exports;
      /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
      /******/ 			i: moduleId,
      /******/ 			l: false,
      /******/ 			exports: {}
      /******/ 		};
    /******/
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/ 		module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
    /******/ 		if(!__webpack_require__.o(exports, name)) {
      /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/ 		}
    /******/ 	};
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function(exports) {
    /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/ 		}
    /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 	};
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/ 	__webpack_require__.t = function(value, mode) {
    /******/ 		if(mode & 1) value = __webpack_require__(value);
    /******/ 		if(mode & 8) return value;
    /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/ 		var ns = Object.create(null);
    /******/ 		__webpack_require__.r(ns);
    /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    /******/ 		return ns;
    /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
    /******/ 		var getter = module && module.__esModule ?
      /******/ 			function getDefault() { return module['default']; } :
      /******/ 			function getModuleExports() { return module; };
    /******/ 		__webpack_require__.d(getter, 'a', getter);
    /******/ 		return getter;
    /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 0);
  /******/ })
/************************************************************************/
/******/ ({

  /***/ "./static/js/mobile/modules/entries/ajax.js":
  /*!**************************************************!*\
    !*** ./static/js/mobile/modules/entries/ajax.js ***!
    \**************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var _request = __webpack_require__(/*! #web/lib/ajax/request */ "./static/js/modules/web/lib/ajax/request.js");

    window.ajax = _request.ajax;
    window.ajaxCache = {};
    window.globalAjaxCache = {};

    /***/ }),

  /***/ "./static/js/modules/shared/lib/crc32.js":
  /*!***********************************************!*\
    !*** ./static/js/modules/shared/lib/crc32.js ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.crc32 = crc32;
// Pre-generate crc32 polynomial lookup table
// http://wiki.osdev.org/CRC32#Building_the_Lookup_Table
    var table = new Uint32Array(256);

    for (var i = 256; i--;) {
      var tmp = i;

      for (var k = 8; k--;) {
        tmp = tmp & 1 ? 3988292384 ^ tmp >>> 1 : tmp >>> 1;
      }

      table[i] = tmp;
    } // crc32b
// Example input        : [97, 98, 99, 100, 101] (Uint8Array)
// Example output       : 2240272485 (Uint32)


    function crc32(data) {
      var crc = -1; // Begin with all bits set ( 0xffffffff )

      for (var _i = 0, l = data.length; _i < l; _i++) {
        crc = crc >>> 8 ^ table[crc & 255 ^ data[_i]];
      }

      return (crc ^ -1) >>> 0; // Apply binary NOT
    }

    /***/ }),

  /***/ "./static/js/modules/web/lib/ajax/cache.js":
  /*!*************************************************!*\
    !*** ./static/js/modules/web/lib/ajax/cache.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AjaxCacheClient = void 0;

    var AjaxCacheClient =
      /*#__PURE__*/
      function () {
        _createClass(AjaxCacheClient, null, [{
          key: "getInstance",
          value: function getInstance(url, query) {
            var cacheKey = AjaxCacheClient.makeCacheKey(url, query);

            if (!AjaxCacheClient._instances[cacheKey]) {
              AjaxCacheClient._instances[cacheKey] = new AjaxCacheClient(cacheKey);
            }

            return AjaxCacheClient._instances[cacheKey];
          }
        }]);

        function AjaxCacheClient(cacheKey) {
          _classCallCheck(this, AjaxCacheClient);

          AjaxCacheClient.ensureCachesInitialized();
          this._cacheKey = cacheKey;
        }

        _createClass(AjaxCacheClient, [{
          key: "getFromCache",
          value: function getFromCache(onResponseReady, onGlobalCachedResponseReady, _ref) {
            var _ref$cacheLevel = _ref.cacheLevel,
              cacheLevel = _ref$cacheLevel === void 0 ? 0 : _ref$cacheLevel,
              _ref$forceGlobalCache = _ref.forceGlobalCache,
              forceGlobalCache = _ref$forceGlobalCache === void 0 ? false : _ref$forceGlobalCache,
              _ref$onAnswerProcesse = _ref.onAnswerProcessed,
              onAnswerProcessed = _ref$onAnswerProcesse === void 0 ? function () {} : _ref$onAnswerProcesse;

            if (cacheLevel > 0 || forceGlobalCache) {
              var answer = window.ajaxCache[this._cacheKey];

              if (answer && answer._loading) {
                answer._callbacks.push(onResponseReady);

                return false;
              } else {
                if (answer && !forceGlobalCache) {
                  onResponseReady(0, answer);

                  if (cacheLevel === 3) {
                    delete window.ajaxCache[this._cacheKey];
                  }

                  return false;
                }

                answer = window.globalAjaxCache[this._cacheKey];

                if (answer) {
                  if (answer === -1 || isFunction(answer)) {
                    window.globalAjaxCache[this._cacheKey] = onGlobalCachedResponseReady;
                  } else {
                    onGlobalCachedResponseReady.apply(window, answer);
                  }

                  if (onAnswerProcessed) {
                    onAnswerProcessed();
                  }

                  return false;
                }
              }
            }

            window.ajaxCache[this._cacheKey] = {
              _loading: 1,
              _callbacks: []
            };
            return true;
          }
        }, {
          key: "processExistingCache",
          value: function processExistingCache(code, newAnswer) {
            var answer = window.ajaxCache[this._cacheKey];

            if (answer && answer._loading) {
              setTimeout(function () {
                for (var i in answer._callbacks) {
                  if (answer._callbacks.hasOwnProperty(i)) {
                    answer._callbacks[i](code, newAnswer);
                  }
                }
              }, 0);
              delete window.ajaxCache[this._cacheKey];
            }
          }
        }, {
          key: "cacheResponse",
          value: function cacheResponse(answer) {
            window.ajaxCache[this._cacheKey] = answer;
          }
        }], [{
          key: "ensureCachesInitialized",
          value: function ensureCachesInitialized() {
            if (!window.ajaxCache) {
              window.ajaxCache = {};
            }

            if (!window.globalAjaxCache) {
              window.globalAjaxCache = {};
            }
          }
          /**
           * Make cache key for ajax cache
           *
           * @param {string} url
           * @param {object} _query
           * @return {string}
           */

        }, {
          key: "makeCacheKey",
          value: function makeCacheKey(url, _query) {
            var query = _extends({}, _query);

            ['al', 'al_ad', 'ads_section', 'ads_showed', 'captcha_sid', 'captcha_key', '_smt', '_preload'].forEach(function (key) {
              return delete query[key];
            });
            return url + '#' + AjaxConvert.toQueryString(query);
          }
          /**
           * Set value to ajax cache
           *
           * @param {string} url
           * @param {object} query
           * @param {object} data
           */

        }, {
          key: "preload",
          value: function preload(url, query, data) {
            AjaxCacheClient.ensureCachesInitialized();

            if (url.substr(0, 1) !== '/') {
              url = '/' + url;
            }

            window.ajaxCache[AjaxCacheClient.makeCacheKey(url, query)] = data;
          }
          /**
           * Delete value from ajax cache
           *
           * @param {string} url
           * @param {object} query
           */

        }, {
          key: "invalidate",
          value: function invalidate(url, query) {
            AjaxCacheClient.ensureCachesInitialized();

            if (url === undefined) {
              window.ajaxCache = {};
            } else {
              delete window.ajaxCache[AjaxCacheClient.make(url, query)];
            }
          }
        }]);

        return AjaxCacheClient;
      }();

    exports.AjaxCacheClient = AjaxCacheClient;
    AjaxCacheClient._instances = {};

    /***/ }),

  /***/ "./static/js/modules/web/lib/ajax/frame_transport.js":
  /*!***********************************************************!*\
    !*** ./static/js/modules/web/lib/ajax/frame_transport.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FrameTransport = void 0;

    var _queueStartMarker = {
      'type': 'start'
    };
    var _queueEndMarker = {
      'type': 'end'
    };

    var FrameTransport =
      /*#__PURE__*/
      function () {
        /**
         * Init transport
         */
        function FrameTransport() {
          _classCallCheck(this, FrameTransport);

          this.frameDataQueue = [];
          this.frameTimeout = null;
          this.frame = null;
          this.queueReady = false;
          this.fulfilled = false;

          this._debug = function () {};
        }
        /**
         * @param {function} onEnd  called when all frame blocks are processed and module is finalized.
         * @param {function} onModuleEvaluated  called when js code of a certain module finished evaliuating.
         * @param {function} debug called on every subsystem call
         */


        _createClass(FrameTransport, [{
          key: "setHandlers",
          value: function setHandlers() {
            var onEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
            var onModuleEvaluated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
            this._onEnd = onEnd;
            this._onModuleEvaluated = onModuleEvaluated;
            this._debug = debug;
          }
          /**
           * Run request in iframe
           *
           * @param {string} frameUrl
           * @param {function} onReady
           * @return {FrameTransport}
           */

        }, {
          key: "run",
          value: function run(frameUrl, onReady) {
            this._debug('Run ', frameUrl, this.frameDataQueue);

            this.frameUrl = frameUrl;
            this.onReady = onReady;
            this.fulfilled = false;
            this.queueReady = false;
            this.frameDataQueue = [_queueStartMarker]; // TODO: really need these markers?

            clearTimeout(this.frameTimeout);
            this.frameTimeout = false;

            if (this.frame) {
              this._cleanup();
            }

            this.frame = ce('div', {
              innerHTML: '<iframe></iframe>'
            });
            utilsNode.appendChild(this.frame);
            this.frame.firstChild.src = this.frameUrl; // This runs request

            return this;
          }
          /**
           * Called when meta came from server: nav version lang id etc...
           *
           * External functional handler to be used inside frame document.
           * Should not be called manually; used in al.lib.php
           *
           * @param {object} meta
           */

        }, {
          key: "useMeta",
          value: function useMeta(meta) {
            this._debug('Metainfo: ', meta);

            this.onReady(meta);
          }
          /**
           * Called when ajax block came from server: html js additional static modules etc...
           *
           * External functional handler to be used inside frame document.
           * Should not be called manually; used in al.lib.php
           *
           * @param {string} container
           * @param {string} html
           * @param {string} js
           */

        }, {
          key: "useAjaxBlock",
          value: function useAjaxBlock(container, html, js) {
            this._debug('Ajax block: ', container, html, js, this.fulfilled, this.frameDataQueue);

            if (this.fulfilled) {
              // Something came after end of queue?
              return;
            }

            this.frameDataQueue.push(FrameTransport._makeQueueBlock(container, html, js));

            if (this.frameDataQueue.length === 1) {
              // TODO: why??
              this._nextQueueItem();
            }
          }
          /**
           * Called when final js code for current module received from server.
           * Should always be called strictly BEFORE any queue handlers
           *
           * External functional handler to be used inside frame document.
           * Should not be called manually; used in al.lib.php
           *
           * @param {string|undefined} jsData
           * @param {object|undefined} params
           */

        }, {
          key: "finalize",
          value: function finalize(jsData, params) {
            this._debug('Finalize: ', jsData);

            this._cleanup();

            if (jsData) {
              this.frameDataQueue.push(FrameTransport._makeQueueBlock(false, false, jsData, params));
            }

            this.queueReady = true;
            this.frameDataQueue.push(_queueEndMarker);

            if (window.cur.onFrameBlocksDone) {
              window.cur.onFrameBlocksDone();
            }

            this._onEnd && this._onEnd(new Date().getTime());
          }
          /**
           * Get next item from queue and plan its handling in next tick
           */

        }, {
          key: "_nextQueueItem",
          value: function _nextQueueItem() {
            var _this = this;

            if (this.frameTimeout) {
              clearTimeout(this.frameTimeout); // probably bad idea to bind to same timer
            }

            if (!this.queueReady) {
              this.frameTimeout = setTimeout(function () {
                return _this._nextQueueItem();
              }, 100);
              return;
            }

            this._debug('Next queue item: ', this.fulfilled, this.frameDataQueue);

            if (this.fulfilled || this.frameDataQueue.length === 0) {
              this.frameTimeout = false;
              return;
            }

            var dataItem = this.frameDataQueue.shift();

            switch (dataItem.type) {
              case _queueStartMarker.type:
                // Starting point; proceed to next item.
                this._nextQueueItem();

                break;

              case _queueEndMarker.type:
                this.fulfilled = true;
                break;

              default:
                this.frameTimeout = setTimeout(function () {
                  return _this._onReceived(dataItem);
                }, 0);
            }
          }
          /**
           * Queue item handler:
           * - Inserts html into container if there is any;
           * - Runs js code for module if there is any;
           * - Triggers next queue item handler
           *
           * @param {object} queueItem
           */

        }, {
          key: "_onReceived",
          value: function _onReceived(queueItem) {
            var _this2 = this;

            var onError = function onError(e, script) {
              topError(e, {
                dt: 15,
                type: 8,
                url: _this2.frameUrl,
                js: script,
                answer: JSON.stringify(queueItem)
              });
              logEvalError(e, script);
            };

            var container = queueItem.container && ge(queueItem.container);

            if (container && queueItem.html) {
              if (!container.firstChild) {
                val(container, queueItem.html);
              } else {
                container.appendChild(createFragment(queueItem.html));
              }
            }

            if (queueItem.js) {
              _runJs(queueItem.js, onError);

              this._onModuleEvaluated && this._onModuleEvaluated(cur.module);
            }

            if (queueItem.params && 'leftads' in queueItem.params) {
              window.__adsSet && __adsSet(queueItem.params.leftads, queueItem.params.ads_section || '', queueItem.params.ads_can_show, queueItem.params.ads_showed);
            }

            this._nextQueueItem();
          }
          /**
           * Clean frame element from utils node
           */

        }, {
          key: "_cleanup",
          value: function _cleanup() {
            this._debug('Cleanup: ', this.frameDataQueue);

            if (!this.frame) {
              return;
            }

            this.frame.innerHTML = '';
            utilsNode.removeChild(this.frame);
            this.frame = null;
          }
          /**
           * @deprecated
           */

        }, {
          key: "abort",
          value: function abort() {
            clearTimeout(this.frameTimeout);
            this.frameTimeout = false;

            this._cleanup();
          }
          /**
           * Frame transport singleton getter
           * @return {FrameTransport}
           */

        }], [{
          key: "request",

          /**
           * Frame transport request entry point
           *
           * @param {string} url
           * @param {object} query
           * @param {function} onReady
           * @param {object} options
           * @return {FrameTransport}
           */
          value: function request(url, query, onReady, options) {
            return FrameTransport.frame.run(FrameTransport.makeUrl(url, query, !(options && options.noSort)), onReady);
          }
        }, {
          key: "_makeQueueBlock",
          value: function _makeQueueBlock(container, html, js, params) {
            return {
              'type': 'block',
              'container': container,
              'html': html,
              'js': js,
              'params': params
            };
          }
          /**
           * Make full url for iframe transport
           *
           * @param {string} url
           * @param {object} query
           * @param {boolean} sortQueryParams
           * @return {string}
           */

        }, {
          key: "makeUrl",
          value: function makeUrl(url, query) {
            var sortQueryParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var params = query;

            if (typeof query == 'string') {
              params = AjaxConvert.fromQueryString(query);
            }

            params = AjaxConvert.toQueryString(_extends({}, params, {
              '_rndVer': irand(0, 99999)
            }), !sortQueryParams);
            return url + '?' + params;
          }
        }, {
          key: "frame",
          get: function get() {
            if (!FrameTransport.__frame) {
              FrameTransport.__frame = new FrameTransport();
            }

            return FrameTransport.__frame;
          }
        }]);

        return FrameTransport;
      }();
    /**
     * Evaluate js code for module
     *
     * @param {string} js
     * @param {function} onError
     */


    exports.FrameTransport = FrameTransport;

    function _runJs(js, onError) {
      var script = '(function(){' + js + ';})()';

      if (__debugMode) {
        // eslint-disable-next-line no-eval
        eval(script);
      } else {
        try {
          // eslint-disable-next-line no-eval
          eval(script);
        } catch (e) {
          onError && onError(e, script);
        }
      }
    }

    /***/ }),

  /***/ "./static/js/modules/web/lib/ajax/modal_box.js":
  /*!*****************************************************!*\
    !*** ./static/js/modules/web/lib/ajax/modal_box.js ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.requestBox = requestBox;
    exports.activateMobileBox = activateMobileBox;
    exports.validateMobileBox = validateMobileBox;
    exports.validatePassBox = validatePassBox;

    function requestBox(box, onDone, onFail) {
      box.setOptions({
        onDestroy: onFail
      });

      box.onDone = function () {
        if (onDone) {
          onDone.apply(null, arguments);
        }
      };

      return box;
    }

    function activateMobileBox(opts) {
      return requestBox(showBox('activation.php', {
        act: 'activate_mobile_box',
        hash: opts.hash
      }), function () {
        vk.nophone = 0;
        opts.onDone();
      }, opts.onFail);
    }

    function validateMobileBox(opts) {
      return requestBox(showBox('activation.php', {
        act: 'validate_box',
        captcha: opts.acceptCaptcha ? 1 : '',
        skip_push: opts.skip_push ? opts.skip_push : '',
        from: opts.from || '',
        hash: opts.hash,
        ahash: opts.ahash
      }, {
        stat: ['uncommon.css']
      }), opts.onDone, opts.onFail);
    }

    function validatePassBox(opts) {
      return requestBox(showBox('activation.php', {
        act: 'pass_validate_box',
        hash: opts.hash
      }, {
        stat: ['uncommon.css']
      }), opts.onDone, opts.onFail);
    }

    ;

    /***/ }),

  /***/ "./static/js/modules/web/lib/ajax/proto/json.js":
  /*!******************************************************!*\
    !*** ./static/js/modules/web/lib/ajax/proto/json.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AjaxProtoJson = void 0;

    var AjaxProtoJson =
      /*#__PURE__*/
      function () {
        function AjaxProtoJson() {
          _classCallCheck(this, AjaxProtoJson);
        }

        _createClass(AjaxProtoJson, [{
          key: "parseResponse",
          value: function parseResponse(text) {
            var response = this.parseStaticPayload(text);
            return {
              navVersion: intval(response['loaderVersion']),
              newStatic: response['static'],
              langId: intval(response['langPack']),
              langVer: intval(response['langVersion']),
              code: intval(response['payload'][0]),
              payload: response['payload'][1],
              debugLog: response['debugLog']
            };
          }
        }, {
          key: "parseStaticPayload",
          value: function parseStaticPayload(payload, _reqid) {
            var pl = payload;

            if (payload && typeof payload === 'string') {
              pl = JSON.parse(payload);
            }

            if (pl['payload'] && pl['payload'][0] > 0) {
              // response code > 0, decode once more because of al.lib.php:reformatArgs
              pl['payload'][1] = pl['payload'][1].map(function (item) {
                return typeof item === 'string' ? JSON.parse(item) : item;
              });
            }

            return pl;
          }
        }]);

        return AjaxProtoJson;
      }();

    exports.AjaxProtoJson = AjaxProtoJson;

    /***/ }),

  /***/ "./static/js/modules/web/lib/ajax/request.js":
  /*!***************************************************!*\
    !*** ./static/js/modules/web/lib/ajax/request.js ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ajax = void 0;

    var _frame_transport = __webpack_require__(/*! ./frame_transport */ "./static/js/modules/web/lib/ajax/frame_transport.js");

    var _cache = __webpack_require__(/*! ./cache */ "./static/js/modules/web/lib/ajax/cache.js");

    var _xhr_transport = __webpack_require__(/*! ./xhr_transport */ "./static/js/modules/web/lib/ajax/xhr_transport.js");

    var _response_handlers = __webpack_require__(/*! ./response_handlers */ "./static/js/modules/web/lib/ajax/response_handlers.js");

    var _adapter = __webpack_require__(/*! ./json */ "./static/js/modules/web/lib/ajax/proto/json.js");

    var AjaxRequest =
      /*#__PURE__*/
      function () {
        _createClass(AjaxRequest, null, [{
          key: "post",

          /**
           * Primary entry point for all requests
           *
           * @param {string} url
           * @param {object} _query
           * @param {object} _options
           * @return {FrameTransport|XMLHttpRequest}
           */
          value: function post(url, _query, _options) {
            AjaxRequest._protoAdapter = new _adapter.AjaxProtoJson();

            if (url.substr(0, 1) !== '/' && url.substr(0, 4) !== 'http') {
              url = '/' + url;
            }

            var options = _extends({}, _options || {}, {
              _captcha: false,
              _box: false,
              no_ads_params: false
            });

            var query = _extends({}, _query, {
              al: options.frame ? -1 : 1
            });

            var now = vkNow();
            var timeSpent = vk.spentLastSendTS ? Math.round((now - vk.spentLastSendTS) / 1000) : 0;

            if (vk.sampleUser >= 0 && window.cur && cur.module && timeSpent >= 1) {
              if (window.curNotifier && curNotifier.idle_manager && !curNotifier.idle_manager.is_idle) {
                query._smt = cur.module + ':' + timeSpent;
              }

              vk.spentLastSendTS = now;
            } // TODO: this should not be in ajax layer


            if (options.progress) {
              if (!options.showProgress) {
                options.showProgress = function () {
                  var progressElement = ge(options.progress);

                  if (hasClass(progressElement, 'pr')) {
                    setStyle(progressElement, 'opacity', 1);
                  }

                  show(progressElement);
                };
              }

              if (!options.hideProgress) {
                options.hideProgress = function () {
                  var progressElement = ge(options.progress);

                  if (hasClass(progressElement, 'pr')) {
                    setStyle(progressElement, 'opacity', 0);
                  }

                  hide(progressElement);
                };
              }
            } // TODO: this should not be in ajax layer


            if (options.loader) {
              var boxLayerWrapWasVisible = isVisible(window.boxLayerWrap);

              options.showProgress = function () {
                boxRefreshCoords(window.boxLoader);
                show(window.boxLoader);

                if (!boxLayerWrapWasVisible) {
                  show(window.boxLayerWrap);
                }
              };

              options.hideProgress = function () {
                hide(window.boxLoader);

                if (!boxLayerWrapWasVisible) {
                  hide(window.boxLayerWrap);
                }
              };
            }

            return new AjaxRequest(url, query, options)._post(); // TODO: return something more relevant...
          }
          /**
           * Request constructor does not run the request automatically.
           * In general you should not use constructor in favor of static post() method.
           *
           * @param {string} url
           * @param {object} query
           * @param {object} options
           */

        }]);

        function AjaxRequest(url, query, options) {
          _classCallCheck(this, AjaxRequest);

          this._url = url;
          this._options = _extends({}, options); // Should not mutate original options

          this._query = query;
          this._additionalStaticLoader = null; // When loaded module needs to load some specific static files, use this func

          this._cacheClient = null;

          if (options.local) {
            this.onDone = vkLocal(this.onDone);
            this.onFail = vkLocal(this.onFail);
            this.processResponse = vkLocal(this.processResponse);
          }

          if (this._options.cache) {
            this._cacheClient = _cache.AjaxCacheClient.getInstance(this._url, this._query);
          }

          this.onDone = this.onDone.bind(this);
          this.onFail = this.onFail.bind(this);
          this.processResponse = this.processResponse.bind(this);
        }
        /**
         * Run the request
         *
         * @return {FrameTransport|XMLHttpRequest}
         */


        _createClass(AjaxRequest, [{
          key: "_post",
          value: function _post() {
            var _this = this;

            if (!this._query.captcha_sid && this._options.showProgress) {
              this._options.showProgress();
            }

            if (window.__adsGetAjaxParams && !this._options.no_ads_params) {
              this._query = _extends({}, this._query, window.__adsGetAjaxParams(this._query, this._options));
            } // Load additional static files


            if (this._options.stat) {
              // TODO: rename this options key, it's confusing
              this._additionalStaticLoader = null;
              stManager.add(this._options.stat, function () {
                if (_this._additionalStaticLoader) {
                  _this._additionalStaticLoader();
                }

                _this._options.stat = false;
              });
            }

            if (this._cacheClient && !this._cacheClient.getFromCache(this.processResponse, this._options.onDone, {
              cacheLevel: this._options.cache,
              forceGlobalCache: this._options.forceGlobalCache,
              onAnswerProcessed: this._options.hideProgress
            })) {
              return;
            } // Used in response handlers to make another request;


            this._options.resend = function (newQuery, newOptions) {
              return new AjaxRequest(_this._url, newQuery, newOptions)._post();
            };

            if (window.debuglogSent) {
              this._reqid = window.debuglogSent(this._url + (this._query ? ': ' + AjaxConvert.toQueryString(this._query, this._options.noSort).replace(/&/g, '&amp;') : ''));

              if (this._options.frame) {
                window._lfrid = this._reqid;
              }
            } else {
              this._reqid = 0;
            }

            var xhrOptions = {};

            if (this._options.timeout) {
              xhrOptions.timeout = this._options.timeout;
            }

            return this._options.frame ? _frame_transport.FrameTransport.request(this._url, this._query, this.onDone, this._options) : (0, _xhr_transport.plainpost)(this._url, this._query, this.onDone, this.onFail, false, xhrOptions, this._options, false, null);
          }
          /**
           * Handle the response according to it's code and request options.
           *
           * @param {any} code
           * @param {any} answer
           */

        }, {
          key: "processResponse",
          value: function processResponse(code, answer) {
            if (this._options.customProcessResponse) {
              return this._options.customProcessResponse(code, answer);
            }

            if (this._options.cache && this._cacheClient) {
              this._cacheClient.processExistingCache(code, answer);
            }

            if (this._options.stat) {
              this._options.stat = false;
              this._additionalStaticLoader = this.processResponse.pbind(code, answer);
              return;
            }

            if (this._options.cache && !this._options.forceGlobalCache && !code && this._cacheClient) {
              this._cacheClient.cacheResponse(answer);
            }

            if (this._options.hideProgress) {
              this._options.hideProgress();
            }

            if (code !== 2) {
              if (this._options._captcha) {
                if (this._options._suggest) {
                  cleanElems(this._options._suggest);
                }

                this._options._captcha = hideBoxes(this._options._captcha);
                this._options._suggest = this._options._captcha;
              }

              this._options._box = hideBoxes(this._options._box);
            }

            getHandlerByCode(code)(this._options, answer, this._query, this._url);

            if (window.LazyLoad) {
              window.LazyLoad.scanDelayed();
            }
          }
          /**
           * Called when request has failed or any handler threw an exception
           *
           * @param {any} text
           * @param {any} req
           */

        }, {
          key: "onFail",
          value: function onFail(text, req) {
            if (this._options.hideProgress) {
              this._options.hideProgress();
            }

            if (this._options._suggest) {
              cleanElems(this._options._suggest);
            } // TODO: remove this when old code is eliminated


            var status = req instanceof XMLHttpRequest ? req.status : req;
            this._options._box = hideBoxes(this._options._captcha, this._options._box);
            this._options._captcha = this._options._box;
            this._options._suggest = this._options._captcha;

            if (typeof text === 'string' && text.indexOf('The page is temporarily unavailable') !== -1 && __dev && inArray(vk.id, [100])) {
              this._post();

              return;
            }

            if (!this._options.onFail || this._options.onFail(text) !== true) {
              var errorText = JSON.stringify(text).substr(0, 300);
              var act = this._query.act;
              var query = this._query && AjaxConvert.toQueryString(this._query, this._options.noSort);
              var url = this._url;
              var breadcrumb = {
                message: 'Uncaught ajax error',
                status: status,
                data: {
                  url: url,
                  query: query
                }
              };

              if (__debugMode) {
                console.error('Uncaught Ajax request error:', errorText, breadcrumb);
              } else {
                console.log('Uncaught Ajax request error:', errorText, breadcrumb);
              }
            }
          }
          /**
           * Force page reload from ajax
           *
           * @param {any} source
           */

        }, {
          key: "doReload",
          value: function doReload(source) {
            nav.reload({
              force: true,
              from: source,
              url: this._url,
              query: this._query && AjaxConvert.toQueryString(this._query)
            });
          }
          /**
           * Called when request completed successfully
           *
           * @param {any} text
           * @param {XMLHttpRequest} req
           */

        }, {
          key: "onDone",
          value: function onDone(text, req) {
            var _this2 = this;

            if (this._options.bench) {
              tDone = new Date().getTime();
            }

            var status = req instanceof XMLHttpRequest ? req.status : req;
            var answer;

            try {
              answer = AjaxRequest._protoAdapter.parseResponse(text);
            } catch (e) {
              this.onFail(text, status);
              return;
            }

            var _answer = answer,
              navVersion = _answer.navVersion,
              newStatic = _answer.newStatic,
              langId = _answer.langId,
              langVer = _answer.langVer,
              code = _answer.code,
              payload = _answer.payload,
              debugLog = _answer.debugLog;

            if (!navVersion) {
              this.onFail("<pre>".concat(text, "</pre>"), {
                status: -1
              });
              return;
            } // First strict check for index.php reloading, in vk.al == 1 mode.


            if (vk.version && vk.version !== navVersion) {
              if (navVersion && payload.length > 4) {
                // TODO: suspicious .length check. When there may be more than 4 arguments in wrap*() ?
                this.doReload(2);
              } else {
                if (nav.strLoc) {
                  location.replace(locBase);
                } else {
                  topError('Server error.', {
                    type: 100
                  });
                }
              }

              return;
            }

            vk.version = false;
            var ans;

            if (this._options.frame) {
              ans = payload;
            }

            if (vk.lang !== langId && this._options.canReload) {
              // Lang changed
              this.doReload(3);
              return;
            }

            _updateStaticFiles(navVersion, newStatic, langId, langVer, function () {
              if (!_this2._options.frame) {
                try {
                  ans = AjaxRequest._protoAdapter.parseStaticPayload(payload, _this2._reqid);

                  if (debugLog) {
                    _debugLog(debugLog, _this2._reqid);
                  }
                } catch (e) {
                  topError('<b>JSON Error:</b> ' + e.message, {
                    type: 5,
                    answer: payload,
                    url: _this2._url,
                    query: _this2._query && AjaxConvert.toQueryString(_this2._query)
                  });
                }
              }

              _this2.processResponse(code, ans);
            });
          }
        }]);

        return AjaxRequest;
      }();


    var tStart;
    var tDone;
    var tProcess;
    var tRender;
    var tModule;
    var tOver;

    _frame_transport.FrameTransport.frame.setHandlers(function (endTime) {
      return tOver = endTime;
    }, function (mod) {
      return tModule = mod;
    }, function () {});
    /**
     * Update static files if nav/loader version came from server does not match the current one
     *
     * @param {int} navVersion
     * @param {string} newStatic
     * @param {int} langId
     * @param {int} langVer
     * @param {function} onStaticReady
     */


    function _updateStaticFiles(navVersion, newStatic, langId, langVer, onStaticReady) {
      if (!window.stVersions) {
        onStaticReady();
        return;
      }

      var _waitForNavLoad = function _waitForNavLoad() {
        if (navVersion === window.stVersions['nav']) {
          return waitResponseStatic(newStatic, langId, langVer, onStaticReady);
        }

        setTimeout(_waitForNavLoad, 100);
      };

      if (navVersion !== window.stVersions['nav']) {
        headNode.appendChild(ce('script', {
          type: 'text/javascript',
          src: "/js/loader_nav".concat(vk.navPostfix || '').concat(navVersion, "_").concat(vk.lang, ".js")
        }));
      }

      setTimeout(_waitForNavLoad, 0);
    }
    /**
     * Queue static files in static manager and wait for them to be completely loaded
     *
     * @param {string} newStatic
     * @param {int} _langId
     * @param {int} langVer
     * @param {function} onFinish
     */


    function waitResponseStatic(newStatic, _langId, langVer, onFinish) {
      var st = ['common.css'];

      if (newStatic) {
        newStatic = newStatic.split(',');

        for (var i = 0, l = newStatic.length; i < l; ++i) {
          st.push(newStatic[i]);
        }
      }

      if (stVersions['lang'] < langVer) {
        stVersions['lang'] = langVer;

        for (var _i in StaticFiles) {
          if (!StaticFiles.hasOwnProperty(_i)) {
            continue;
          }

          if (/^lang\d/i.test(_i)) {
            st.push(_i);
          }
        }
      }

      stManager.add(st, onFinish, true);
    }
    /**
     * Pass message to debug log
     *
     * @param {string} text
     */


    function _debugLog(text) {
      window._updateDebug = function() {
        var dlw = ge('debuglogwrap');
        if (dlw) {
          dlw.innerHTML = text;
          window._updateDebug = false;
        }
      }
    }
    /**
     * Hide boxes passed in params
     * TODO: this should not be in ajax layer
     *
     * @param {array} ...boxes
     * @return {boolean}
     */


    function hideBoxes() {
      for (var i = 0, l = arguments.length; i < l; ++i) {
        var box = arguments[i];

        if (box && box.isVisible()) {
          box.setOptions({
            onHide: false,
            onDestroy: false
          });
          box.hide();
        }
      }

      return false;
    }
    /**
     * Select proper handler by code from server.
     * See also al.lib.php:wrapResult for list of codes
     *
     * @param {int} code
     * @return {any}
     */


    function getHandlerByCode(code) {
      switch (code) {
        case 1:
          return _response_handlers.emailNotConfirmed;

        case 2:
          return _response_handlers.showCaptcha;

        case 3:
          return _response_handlers.authFailed;

        case 4:
          return _response_handlers.makeRedirect;

        case 5:
          return _response_handlers.reload;

        case 6:
          return _response_handlers.mobileActivationRequired;

        case 7:
          return _response_handlers.showMessage;

        case 8:
          return _response_handlers.showError;

        case 9:
          return _response_handlers.votesPayment;

        case 10:
          return _response_handlers.zeroZone;

        case 11: // explicit passthrough

        case 12:
          return (0, _response_handlers.mobileValidationRequired)(code);

        default:
          return (0, _response_handlers.defaultHandler)(code);
      }
    }
    /**
     * Prepare timings report data
     *
     * @return {string}
     */


    function tGetParam() {
      if (!tStart || !tModule) {
        return;
      }

      var done = tDone - tStart;
      var process = tProcess - tDone;
      var render = tRender - tProcess;
      var over = tOver - tStart;
      var res = [done, process, render, over, tModule];

      for (var i in res) {
        if (!res.hasOwnProperty(i)) {
          continue;
        }

        if (res[i] < 0) {
          return false;
        }

        if (!res[i] && res[i] !== 0) {
          return false;
        }
      }

      tStart = false;
      return res.join(',');
    }

    var ajax = {
      enabled: function () {
        try {
          var req = new XMLHttpRequest();
          return !!req;
        } catch (e) {
          return false;
        }
      }(),

      set tStart(st) {
        tStart = st;
      },

      set tProcess(pr) {
        tProcess = pr;
      },

      /** @deprecated */
      plainpost: _xhr_transport.plainpost,
      post: AjaxRequest.post,

      /**
       * @deprecated
       * @param {string} url
       * @param {object} query
       * @param {function} onReady
       * @param {object} options
       * @return {*}
       */
      framepost: _frame_transport.FrameTransport.request,

      /**
       * @deprecated
       * @return {XMLHttpRequest}
       */
      _getreq: function _getreq() {
        return new XMLHttpRequest();
      },
      request: _xhr_transport.request,

      /**
       * @deprecated
       * Use AjaxCacheClient.preload instead
       */
      preload: _cache.AjaxCacheClient.preload,

      /**
       * @deprecated
       * Use AjaxCacheClient.invalidate instead
       */
      invalidate: _cache.AjaxCacheClient.invalidate,
      tGetParam: tGetParam,
      AjaxRequest: AjaxRequest,
      AjaxCancellationToken: _xhr_transport.AjaxCancellationToken,
      frame: _frame_transport.FrameTransport.frame,

      /**
       * @deprecated
       * @return {void}
       */
      _framenext: function _framenext() {
        return _frame_transport.FrameTransport.frame._nextQueueItem();
      },

      /**
       * @deprecated
       * @param {string} c
       * @param {string} h
       * @param {string} j
       * @return {void}
       */
      framegot: function framegot(c, h, j) {
        return _frame_transport.FrameTransport.frame.useAjaxBlock(c, h, j);
      },

      /**
       * @deprecated
       * @param {string} j
       * @param {object} p
       * @return {void}
       */
      _frameover: function _frameover(j, p) {
        return _frame_transport.FrameTransport.frame.finalize(j, p);
      },

      /**
       * @deprecated
       * @param {string} meta
       * @param {any} resp
       * @return {any}
       */
      _framedone: function _framedone(meta, resp) {
        return _frame_transport.FrameTransport.frame.onReady([meta, resp]);
      },

      /**
       * @deprecated
       */
      _debugLog: _debugLog
    };
    exports.ajax = ajax;

    /***/ }),

  /***/ "./static/js/modules/web/lib/ajax/response_handlers.js":
  /*!*************************************************************!*\
    !*** ./static/js/modules/web/lib/ajax/response_handlers.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.emailNotConfirmed = emailNotConfirmed;
    exports.showCaptcha = showCaptcha;
    exports.authFailed = authFailed;
    exports.makeRedirect = makeRedirect;
    exports.reload = reload;
    exports.mobileActivationRequired = mobileActivationRequired;
    exports.showMessage = showMessage;
    exports.showError = showError;
    exports.votesPayment = votesPayment;
    exports.zeroZone = zeroZone;
    exports.defaultHandler = exports.mobileValidationRequired = void 0;

    var _modal_box = __webpack_require__(/*! ./modal_box */ "./static/js/modules/web/lib/ajax/modal_box.js");

    function resetOptionsCache(options) {
      return options.cache ? _extends({}, options, {
        cache: -1
      }) : options;
    }

    function emailNotConfirmed(options, answer
                               /* , _query, _url*/
    ) {
      showFastBox({
        width: 520,
        title: answer[0],
        onDestroy: options.onFail
      }, answer[1]);
    }

    function showCaptcha(options, answer, query
                         /* , _url*/
    ) {
      if (intval(answer[1]) === 2) {
        options._captcha = showReCaptchaBox(answer[0], answer[2], options._captcha, {
          onSubmit: function onSubmit(response) {
            var newQuery = _extends({}, query, {
              recaptcha: response,
              captcha_sid: null,
              captcha_key: null
            });

            options.resend(newQuery, resetOptionsCache(options));
          },
          onDestroy: function onDestroy() {
            if (options.onFail) {
              options.onFail();
            }
          }
        });
      } else {
        options._captcha = showCaptchaBox(answer[0], intval(answer[1]), options._captcha, {
          onSubmit: function onSubmit(sid, key) {
            var newQuery = _extends({}, query, {
              captcha_sid: sid,
              captcha_key: key
            });

            options.resend(newQuery, resetOptionsCache(options));
          },
          onDestroy: function onDestroy() {
            if (options.onFail) {
              options.onFail();
            }
          }
        });
      }

      options._suggest = geByClass1('phone_validation_link', options._captcha.bodyNode);

      if (options._suggest) {
        addEvent(options._suggest, 'click', function () {
          options._box = (0, _modal_box.validateMobileBox)({
            onDone: options._captcha.submit
          });
        });
      }
    }

    var mobileValidationRequired = function mobileValidationRequired(code) {
      return function (options, answer, query
                       /* , _url*/
      ) {
        options._box = (0, _modal_box.validateMobileBox)({
          acceptCaptcha: code === 11,
          onDone: function onDone(sid, key) {
            vk.nophone = 0;

            if (sid) {
              options._captcha = curBox();
            }

            var newQuery = sid ? _extends({}, query, {
              captcha_sid: sid,
              captcha_key: key
            }) : query;
            options.resend(newQuery, resetOptionsCache(options));
          },
          onFail: options.onFail,
          hash: answer[0],
          ahash: answer[1]
        });
      };
    };

    exports.mobileValidationRequired = mobileValidationRequired;

    function authFailed(options, answer, query
                        /* , _url */
    ) {
      window.onReLoginDone = function () {
        return options.resend(query, resetOptionsCache(options));
      };

      window.onReLoginFailed = function (toRoot, toUrl) {
        if (toUrl) {
          nav.go(toUrl);
        } else if (toRoot === -1) {
          location.href = location.href.replace(/^http:/, 'https:');
        } else if (toRoot) {
          nav.go('/');
        } else {
          window.onReLoginDone();
        }
      };

      window.utilsNode.appendChild(ce('iframe', {
        src: window.vk.loginDomain + '?' + AjaxConvert.toQueryString({
          role: 'al_frame',
          _origin: window.locProtocol + '//' + window.locHost,
          ip_h: answer[0] || window.vk.ip_h,
          to: answer[1] || ''
        })
      }));
    }

    function makeRedirect(options, answer
                          /* , _query, _url */
    ) {
      if (intval(answer[1])) {
        // ajax layout redirect
        nav.go(answer[0], false, {
          nocur: answer[1] === '2',
          noback: answer[1] === true,
          showProgress: options.showProgress,
          hideProgress: options.hideProgress
        });
      } else {
        hab.stop();
        location.href = answer[0];
      }
    }

    function reload(options, answer, query, url) {
      nav.reload({
        force: intval(answer[0]),
        from: 1,
        url: url,
        query: query && AjaxConvert.toQueryString(query)
      }); // force reload
    }

    function mobileActivationRequired(options, answer, query
                                      /* , _url */
    ) {
      options._box = (0, _modal_box.activateMobileBox)({
        onDone: options.resend(query, resetOptionsCache(options)),
        onFail: options.onFail,
        hash: answer[0]
      });
    }

    function showMessage(options, answer
                         /* , _query, _url */
    ) {
      if (options.onFail) {
        options.onFail();
      }

      topMsg(answer[0], 10);
    }

    function showError(options, answer, query, url) {
      if (options.onFail) {
        if (options.onFail(answer[0])) {
          return;
        }
      }

      topError(answer[0] + (answer[2] ? ' #' + answer[2] : ''), {
        dt: answer[1] ? 0 : 10,
        type: 4,
        url: url,
        query: query && AjaxConvert.toQueryString(query)
      });
    }

    function votesPayment(options, answer, query
                          /* , _url */
    ) {
      if (options.fromBox || options.forceDone) {
        if (options.onDone) {
          // page, box or other
          options.onDone.apply(window, answer);
        }

        if (options.fromBox) {
          return;
        }
      }

      options._box = showFastBox({
        title: trim(answer[0])
      }, answer[1]);

      if (answer[3] && answer[3].countries && !cur.votesBoxOptions) {
        cur.votesBoxOptions = answer[3];
      }
      if (cur.votesBoxOptions) {
        window.Gifts.processBoxOptions(options._box, cur.votesBoxOptions);
        cur.votesBoxOptions = null;
      }

      var newOptions = extend(clone(options), {
        showProgress: options._box.showProgress,
        hideProgress: options._box.hideProgress
      });

      if (options.cache) {
        newOptions.cache = -1;
      }

      options._box = (0, _modal_box.requestBox)(options._box, function (params) {
        if (isVisible(options._box.progress)) {
          return;
        }

        if (!params) {
          params = {
            _votes_ok: 1
          };
        }

        options.resend(extend(query, params), newOptions);
      }, options.onFail);

      options._box.evalBox(answer[2]);
    }

    function zeroZone(options, answer, query
                      /* , _url */
    ) {
      options._box = showFastBox({
        title: answer[0] || getLang('global_charged_zone_title'),
        onHide: options.onFail
      }, answer[1], getLang('global_charged_zone_continue'), function () {
        options.resend(_extends({}, query, {
          charged_confirm: answer[3]
        }), options);
      }, getLang('global_cancel'));
    }

    var defaultHandler = function defaultHandler(code) {
      return function (options, answer
                       /* , query, _url*/
      ) {
        if (code === -1 || code === -2 || code === -3) {
          var adsShowed = answer.pop();
          var adsCanShow = answer.pop();
          var adsHtml = answer.pop();
          var adsProps;

          if (code === -3) {
            adsProps = answer.pop();
          }

          window.__adsSet && __adsSet(adsHtml, null, adsCanShow, adsShowed, null, adsProps);
        }

        if (options.onDone) {
          // page, box or other
          options.onDone.apply(window, answer);
        }
      };
    };

    exports.defaultHandler = defaultHandler;

    /***/ }),

  /***/ "./static/js/modules/web/lib/ajax/xhr_transport.js":
  /*!*********************************************************!*\
    !*** ./static/js/modules/web/lib/ajax/xhr_transport.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.plainpost = plainpost;
    exports.request = request;
    exports.AjaxCancellationToken = void 0;

    var _crc = __webpack_require__(/*! #shared/lib/crc32 */ "./static/js/modules/shared/lib/crc32.js");

    /**
     * Simple cancellation token implementation.
     * Pass newly created token in request options and use .cancel() when required.
     */
    var AjaxCancellationToken =
      /*#__PURE__*/
      function () {
        function AjaxCancellationToken() {
          _classCallCheck(this, AjaxCancellationToken);
        }

        _createClass(AjaxCancellationToken, [{
          key: "_setCancelCb",
          value: function _setCancelCb(cb) {
            this._cancel = cb;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this._cancel && this._cancel();
          }
        }]);

        return AjaxCancellationToken;
      }();
    /**
     * Simple XHR request with no bindings and wrappings
     *
     * @deprecated Use request() in new code!
     * @param {string} url
     * @param {string|object} query
     * @param {function} onDone
     * @param {function} onFail
     * @param {boolean} urlOnly
     * @param {object} options
     * @param {object} o
     * @param {boolean} noExtraHeaders
     * @param {function} logger
     * @return {XMLHttpRequest|boolean}
     */


    exports.AjaxCancellationToken = AjaxCancellationToken;

    function plainpost(url, query, onDone, onFail, urlOnly, options, o) {
      var noExtraHeaders = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
      var logger = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
      var promise = request(url, query, {
        xhrOptions: options,
        sortQueryStringParams: o && !o.noSort,
        // TODO: remove/rename noSort property
        noExtraHeaders: noExtraHeaders,
        urlOnly: urlOnly,
        cancellationToken: o && o.cancellationToken,
        logger: logger
      });

      var rawXhr = promise._getXhr(); // TODO: remove in future


      promise.then(function (args) {
        return onDone && onDone(args.data, rawXhr.status);
      })["catch"](function (args) {
        return onFail && onFail(args, rawXhr.status);
      });
      return rawXhr;
    }
    /**
     * Promise-based ajax request.
     * Passes data to fulfill/reject handlers with http code received;
     * Code can be -1 if any exception occurred. Data will contain exception object in this case.
     * Request can be cancelled with cancellationToken passed in options:
     *   let token = new AjaxCancellationToken();
     *   request(..., { cancellationToken: token });
     *   // And when we need to abort request:
     *   token.cancel();
     * Though cancellation token may be used for many requests, only last request will be aborted.
     *
     * @param {string} url
     * @param {string|object} query
     * @param {object?} xhrExtraOptions
     * @param {boolean} urlOnly
     * @param {boolean} sortQueryStringParams
     * @param {boolean} noExtraHeaders
     * @param {AjaxCancellationToken} cancellationToken
     * @param {function} logger
     * @return {Promise<{data, code}>}
     */


    function request(url, query, _ref) {
      var xhrExtraOptions = _ref.xhrOptions,
        _ref$urlOnly = _ref.urlOnly,
        urlOnly = _ref$urlOnly === void 0 ? false : _ref$urlOnly,
        _ref$sortQueryStringP = _ref.sortQueryStringParams,
        sortQueryStringParams = _ref$sortQueryStringP === void 0 ? true : _ref$sortQueryStringP,
        _ref$noExtraHeaders = _ref.noExtraHeaders,
        noExtraHeaders = _ref$noExtraHeaders === void 0 ? false : _ref$noExtraHeaders,
        _ref$cancellationToke = _ref.cancellationToken,
        cancellationToken = _ref$cancellationToke === void 0 ? null : _ref$cancellationToke,
        _ref$logger = _ref.logger,
        logger = _ref$logger === void 0 ? null : _ref$logger;
      var reqId;

      if (logger) {
        reqId = (0, _crc.crc32)(url + JSON.stringify(query));
        logger("Initialized request #".concat(reqId, " with URL ").concat(url, " and query ").concat(JSON.stringify(query)));
      }

      var request = new XMLHttpRequest();

      if (cancellationToken) {
        cancellationToken._setCancelCb(function () {
          logger && logger("Aborting request #".concat(reqId));
          request.abort();
        });
      }

      var reqPromise = new Promise(function (resolve, reject) {
        var preparedQuery = typeof query !== 'string' ? AjaxConvert.toQueryString(query, !sortQueryStringParams) : query;

        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
            logger && logger("Request readyState -> DONE with status ".concat(request.status, " #").concat(reqId));

            if (request.status >= 200 && request.status < 300) {
              try {
                resolve({
                  data: request.responseText,
                  code: request.status
                });
                logger && logger("Success handler finished for request #".concat(reqId));
              } catch (e) {
                logger && logger("Success handler failed for request #".concat(reqId));
                reject({
                  data: request.responseText,
                  code: -1
                });
                logger && logger("Failure handler finished for request #".concat(reqId, " [1]"));
              }
            } else {
              // e.g sleep
              reject({
                data: request.responseText,
                code: request.status
              });
              logger && logger("Failure handler finished for request #".concat(reqId, " [2]"));
            }
          }
        };

        try {
          logger && logger("Starting request #".concat(reqId));
          request.open('POST', url, true);
        } catch (e) {
          logger && logger("Request #".concat(reqId, " failed"));
          reject({
            data: e,
            code: -1
          });
          logger && logger("Failure handler finished for request #".concat(reqId, " [3]"));
        }

        if (xhrExtraOptions) {
          each(xhrExtraOptions, function (key, value) {
            request[key] = value;
          });
        }

        if (!urlOnly) {
          request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

          if (!noExtraHeaders) {
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          }
        }

        logger && logger("Sending data for request #".concat(reqId));
        request.send(preparedQuery);
      });
      /**
       * @deprecated to be removed
       * Use options.cancellationToken to cancel requests with AjaxCancellationToken
       * @return {function}
       */

      reqPromise._getXhr = function () {
        return request;
      }; // TODO: remove this in future;


      return reqPromise;
    }

    /***/ }),

  /***/ 0:
  /*!********************************************************!*\
    !*** multi ./static/js/mobile/modules/entries/ajax.js ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(/*! ./static/js/mobile/modules/entries/ajax.js */"./static/js/mobile/modules/entries/ajax.js");


    /***/ })

  /******/ });

// Ajax layout end
///////////////////////////////////////////////////////////////////////////////////////////////

/* Nav */

function HistoryAndBookmarks(params) {
  // strict check for cool hash display in ff.
  var fixEncode = function(loc) {
    var h = loc.split('#');
    var l = h[0].split('?');
    return l[0] + (l[1] ? ('?' + ajx2q(q2ajx(l[1]))) : '') + (h[1] ? ('#' + h[1]) : '');
  }

  var frame = null, withFrame = browser.msie6 || browser.msie7;
  var frameDoc = function() {
    return frame.contentDocument || (frame.contentWindow ? frame.contentWindow.document : frame.document);
  }

  var options = extend({onLocChange: function() {}}, params);

  var getLoc = function(skipFrame) {
    var loc = '';
    if (vk.al == 3) {
      loc = (location.pathname || '') + (location.search || '') + (location.hash || '');
    } else {
      if (withFrame && !skipFrame) {
        try {
          loc = frameDoc().getElementById('loc').innerHTML.replace(/&lt;/ig, '<').replace(/&gt;/ig, '>').replace(/&quot;/ig, '"').replace(/&amp;/ig, '&');
        } catch(e) {
          loc = curLoc;
        }
      } else {
        loc = browser.msie6 ? ((location.toString().match(/#(.*)/) || {})[1] || '') : location.hash.replace(/^#/, '');
        if (loc.substr(0, 1) != vk.navPrefix) {
          loc = (location.pathname || '') + (location.search || '') + (location.hash || '');
        }
      }
    }
    if (!loc && vk.al > 1) {
      loc = (location.pathname || '') + (location.search || '');
    }
    return fixEncode(loc.replace(/^(\/|!)/, ''));
  }

  var curLoc = getLoc(true);

  var setFrameContent = function(loc) {
    try {
      var d = frameDoc();
      d.open();

      d.write('<div id="loc">' +
          loc.replace('&', '&amp;').replace('"', '&quot;').replace('>', '&gt;').replace('<', '&lt;') +
        '</div>'
      );

      d.close();
    } catch(e) {}
  }

  var setLoc = function(loc) {
    //curLoc = fixEncode(loc.replace(/#(\/|!)?/, ''));
    curLoc = fixEncode(loc);
    var l = (location.toString().match(/#(.*)/) || {})[1] || '';
    if (!l && vk.al > 1) {
      l = (location.pathname || '') + (location.search || '');
    }
    l = fixEncode(l);
    if (l.replace(/^(\/|!)/, '') != curLoc) {
      if (vk.al == 3) {
        try {
          history.pushState({}, '', '/' + curLoc);
          return;
        } catch(e) {}
      }
      window.chHashFlag = true;
      location.hash = '#' + vk.navPrefix + curLoc;
      if (withFrame && getLoc() != curLoc) {
        setFrameContent(curLoc);
      }
    }
  }

  var locChecker = function() {
    var loc = getLoc(true);
    if (loc != curLoc) {
      setFrameContent(loc);
    }
  }

  var checker = function(force) {
    var l = getLoc();
    if (l == curLoc && force !== true) {
      return;
    }

    options.onLocChange(l);

    curLoc = l;
    if (withFrame && location.hash.replace('#' + vk.navPrefix, '') != l) {
      location.hash = '#' + vk.navPrefix + l;
    }
  }
  var checkTimer;
  var frameChecker = function() {
    try {
      if (frame.contentWindow.document.readyState != 'complete') {
        return;
      }
    } catch(e) {
      return;
    }
    checker();
  }
  var init = function() {
    if (vk.al == 1) {
      checker(true);
    }
    if (vk.al < 3) {
      if (withFrame) {
        frame = document.createElement('iframe');
        frame.id = 'hab_frame';
        frame.attachEvent('onreadystatechange', frameChecker);
        frame.src = 'al_loader.php?act=hab_frame&loc=' + encodeURIComponent(curLoc) + '&domain=' + encodeURIComponent(locDomain);

        utilsNode.appendChild(frame);

        checkTimer = setInterval(locChecker, 200);
      } else {
        if ('onhashchange' in window) {
          addEvent(window, 'hashchange', function() {
            if (window.chHashFlag) {
              window.chHashFlag = false;
            } else {
              checker();
            }
          });
        } else {
          checkTimer = setInterval(checker, 200);
        }
      }
    } else if (vk.al == 3) {
      addEvent(window, 'popstate', checker);
    }
  }

  return {
    setLoc: setLoc,
    getLoc: getLoc,
    init: init,
    setOptions: function(params) {
      options = extend(options, params);
    },
    checker: checker,
    stop: function() {
      if (vk.al < 3) {
        clearInterval(checkTimer);
        if (withFrame) {
          frame.detachEvent('onreadystatechange', frameChecker);
        }
      } else if (vk.al == 3) {
        removeEvent(window, 'popstate', checker);
      }
    }
  }
}

window.hab = new HistoryAndBookmarks({onLocChange: function(loc) {
  nav.go('/' + loc, undefined, {back: true});
}});

window.nav = {
  getData: function(loc) {
    if (loc.length) {
      for (var i in navMap) {
        if (i[0] == '<') continue;
        var m = loc.match(new RegExp('^' + i, 'i'));
        if (m) {
          return {url: navMap[i][0], files: navMap[i][1]};
        }
      }
      var m = loc.match(/^[a-z0-9\-_]+\.php$/i);
      if (m) {
        return {url: loc};
      }
      return {url: navMap['<other>'][0], files: navMap['<other>'][1]};
    }
    return {url: navMap['<void>'][0], files: navMap['<void>'][1]};
  },

  reload: function(opts) {
    opts = opts || {};
    if (opts.force) {
      hab.stop();
      location.href = '/' + nav.strLoc;
    } else {
      nav.go('/' + nav.strLoc, undefined, extend({nocur: true}, opts));
    }
  },

  go: function(loc, ev, opts) {
    if (checkEvent(ev) || cur.noAjaxNav) return;
    opts = opts || {};
    if (loc.tagName && loc.tagName.toLowerCase() == 'a') {
      if (loc.target == '_blank' || nav.baseBlank) {
        return;
      }
      var _params = loc.getAttribute('hrefparams');
      if (_params) {
        opts.params = extend(opts.params || {}, q2ajx(_params));
      }
      loc = loc.href || '';
      if (ev && !(loc || '').match(new RegExp('^' + locProtocol + '//' + locHost, 'i'))) {
        return;
      }
    }
    var strLoc = '', objLoc = {}, changed = {};
    if (typeof(loc) == 'string') {
      loc = loc.replace(new RegExp('^(' + locProtocol + '//' + locHost + ')?/?', 'i'), '');
      strLoc = loc;
      objLoc = nav.fromStr(loc);
    } else {
      if (!loc[0]) loc[0] = '';
      strLoc = nav.toStr(loc);
      objLoc = loc;
    }

    if (!opts.nocur) {
      changed = clone(objLoc);
      for (var i in nav.objLoc) {
        if (nav.objLoc[i] == changed[i]) {
          delete(changed[i]);
        } else if (changed[i] === undefined) {
          changed[i] = false;
        }
      }
    }

    if (!opts.nocur && (vk.loaded || !changed['0'])) {
      var curnav = cur.nav || [];
      for (var i = curnav.length - 1; i >= 0; i--) {
        var oldUrl = document.URL;
        if (curnav[i](clone(changed), nav.objLoc, objLoc, opts) === false) {
          var currentURL = locProtocol+'//'+location.host+'/'+strLoc,
              referrer = (oldUrl == currentURL) ? '' : oldUrl;
          return false;
        }
      }
    }

    // other code is not needed for widgets
  },

  setLoc: function(loc) {
    if (typeof(loc) == 'string') {
      nav.strLoc = loc;
      nav.objLoc = nav.fromStr(loc);
    } else {
      nav.strLoc = nav.toStr(loc);
      nav.objLoc = loc;
    }
    hab.setLoc(nav.strLoc);
  },

  change: function(loc, ev, opts) {
    var params = clone(nav.objLoc);
    each(loc, function(i,v) {
      if (v === false) {
        delete params[i];
      } else {
        params[i] = v;
      }
    });
    return nav.go(params, ev, opts);
  },

  fromStr: function(str) {
    str = str.split('#');
    var res = str[0].split('?');
    var param = {'0': res[0] || ''}
    if (str[1]) {
      param['#'] = str[1];
    }
    return extend(q2ajx(res[1] || ''), param);
  },

  toStr: function(obj) {
    obj = clone(obj);
    var hash = obj['#'] || '';
    var res = obj[0] || '';
    delete(obj[0]);
    delete(obj['#']);
    var str = ajx2q(obj);
    return (str ? (res + '?' + str) : res) + (hash ? ('#' + hash) : '');
  },

  init: function() {
    nav.strLoc = hab.getLoc();
    nav.objLoc = nav.fromStr(nav.strLoc);
  }
}

nav.init();

function goAway(lnk, prms, e) {
  return true;
}

function processDestroy(c) {
  if (c._back && c._back.hide && c == cur) {
    for (var i in c._back.hide) {
      try {c._back.hide[i]();}catch(e){}
    }
  }
  if (!c.destroy || !c.destroy.length) return;
  for (var i in c.destroy) {
    try {c.destroy[i](c);}catch(e){}
  }
}

window.onLogout = window.onLoginDone = nav.reload;

/* Events */

window.KEY = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DEL: 8,
  TAB: 9,
  RETURN: 13,
  ENTER: 13,
  ESC: 27,
  PAGEUP: 33,
  PAGEDOWN: 34,
  SPACE: 32,
  CTRL: 17,
  ALT: 18
};

function addEvent(elem, types, handler, custom, context) {
  elem = ge(elem);
  if (!elem || elem.nodeType == 3 || elem.nodeType == 8)
    return;

  var realHandler = context ? function (e) {
    var prevData = e.data;
    e.data = context;
    var ret = handler.apply(this, [e]);
    e.data = prevData;
    return ret;
  } : handler;

  // For IE
  if (elem.setInterval && elem != window) elem = window;

  var events = data(elem, 'events') || data(elem, 'events', []),
      handle = data(elem, 'handle') || data(elem, 'handle', function() {
        _eventHandle.apply(arguments.callee.elem, arguments);
      });
  // to prevent a memory leak
  handle.elem = elem;

  each(types.split(/\s+/), function(index, type) {
    if (!events[type]) {
      events[type] = [];
      if (!custom && elem.addEventListener) {
        elem.addEventListener(type, handle, false);
      } else if (!custom && elem.attachEvent) {
        elem.attachEvent('on' + type, handle);
      }
    }
    events[type].push(realHandler);
  });

  elem = null;
}

function removeEvent(elem, types, handler) {
  elem = ge(elem);
  if (!elem) return;
  var events = data(elem, 'events');
  if (!events) return;
  if (typeof(types) != 'string') {
    for (var i in events) {
      removeEvent(elem, i);
    }
    return;
  }
  each(types.split(/\s+/), function(index, type) {
    if (!isArray(events[type])) return;
    if (isFunction(handler)) {
      for (var i = 0; i < events[type].length; i++) {
        if (events[type][i] == handler) {
          for (var j = i + 1; j < events[type].length; j++) {
            events[type][j - 1] = events[type][j];
          }
          events[type].pop();
          break;
        }
      }
    } else {
      for (var i = 0; i < events[type].length; i++) {
        delete events[type][i];
      }
    }
    if (!events[type].length) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, data(elem, 'handle'), false);
      } else if (elem.detachEvent) {
        elem.detachEvent('on' + type, data(elem, 'handle'));
      }
      delete events[type];
    }
  });
}

function triggerEvent(elem, type, ev) {
  var handle = data(elem, 'handle');
  if (handle) {
    setTimeout(function() {
      handle.call(elem, extend((ev || {}), {type: type, target: elem}))
    }, 0);
  }
}

function cancelEvent(event) {
  event = (event || window.event);
  if (!event) return false;
  event = (event.originalEvent || event);
  if (event.preventDefault) event.preventDefault();
  if (event.stopPropagation) event.stopPropagation();
  event.cancelBubble = true;
  event.returnValue = false;
  return false;
}

function stopEvent(event) {
  event = (event || window.event);
  if (!event) return false;
  while (event.originalEvent) {
    event = event.originalEvent;
  }
  if (event.stopPropagation) event.stopPropagation();
  event.cancelBubble = true;
  return false;
}

function _eventHandle(event) {
  event = event || window.event;

  var originalEvent = event;
  event = clone(originalEvent);
  event.originalEvent = originalEvent;

  if (!event.target) {
    event.target = event.srcElement || document;
  }

  // check if target is a textnode (safari)
  if (event.target.nodeType == 3) {
    event.target = event.target.parentNode;
  }

  if (!event.relatedTarget && event.fromElement) {
    event.relatedTarget = event.fromElement == event.target;
  }

  if (event.pageX == null && event.clientX != null) {
    var doc = document.documentElement, body = bodyNode || document.body;
    event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0);
    event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0);
  }

  if (!event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode)) {
    event.which = event.charCode || event.keyCode;
  }

  if (!event.metaKey && event.ctrlKey) {
    event.metaKey = event.ctrlKey;
  }

  // click: 1 == left; 2 == middle; 3 == right
  if (!event.which && event.button) {
    event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
  }

  var handlers = data(this, 'events');
  if (!handlers || typeof(event.type) != 'string' || !handlers[event.type] || !handlers[event.type].length) {
    return;
  }

  for (var i in (handlers[event.type] || [])) {
    if (event.type == 'mouseover' || event.type == 'mouseout') {
      var parent = event.relatedElement;
      while (parent && parent != this) {
        try { parent = parent.parentNode; }
        catch(e) { parent = this; }
      }
      if (parent == this) {
        continue
      }
    }
    var ret = handlers[event.type][i].apply(this, arguments);
    if (ret === false) {
      cancelEvent(event);
    }
  }
}

function normEvent(event) {
  event = event || window.event;

  var originalEvent = event;
  event = clone(originalEvent);
  event.originalEvent = originalEvent;

  if (!event.target) {
    event.target = event.srcElement || document;
  }

  // check if target is a textnode (safari)
  if (event.target.nodeType == 3) {
    event.target = event.target.parentNode;
  }

  if (!event.relatedTarget && event.fromElement) {
    event.relatedTarget = event.fromElement == event.target;
  }

  if (event.pageX == null && event.clientX != null) {
    var doc = document.documentElement, body = bodyNode;
    event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0);
    event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0);
  }

  if (!event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode)) {
    event.which = event.charCode || event.keyCode;
  }

  if (!event.metaKey && event.ctrlKey) {
    event.metaKey = event.ctrlKey;
  } else if (!event.ctrlKey && event.metaKey && browser.mac) {
    event.ctrlKey = event.metaKey;
  }

  // click: 1 == left; 2 == middle; 3 == right
  if (!event.which && event.button) {
    event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
  }

  return event;
}

addEvent(window, 'unload', function() { // Prevent memory leaks in IE
  for (var id in vkCache) {
    if (vkCache[id].handle && vkCache[id].handle.elem != window) {
      removeEvent(vkCache[id].handle.elem);
    }
  }
});

function onCtrlEnter(ev, handler) {
  ev = ev || window.event;
  if (ev.keyCode == 10 || ev.ctrlKey && ev.keyCode == 13) {
    handler();
  }
}

var layoutWidth = 791;

function domStarted() {
  window.headNode = geByTag1('head');
  var bl = ge('box_layer_bg'), blw = bl.nextSibling;
  extend(window, {
    icoNode:  geByTag1('link', headNode),
    bodyNode: geByTag1('body'),
    htmlNode: geByTag1('html'),
    utilsNode: ge('utils'),
    layerBG: null,
    boxLayerBG: bl,
    boxLayerWrap: blw,
    boxLayer: blw.firstChild,
    boxLoader: blw.firstChild.firstChild,
    __afterFocus: false,
    __needBlur: false
  });
  if (!utilsNode) return;

  addEvent(boxLayerWrap, 'click', __bq.hideLastCheck);

  extend(layers, {
    boxshow: layers._show.pbind(bl, blw),
    boxhide: layers._hide.pbind(bl, blw)
  });

  hab.init();
}

function domReady() {
  if (!utilsNode) return;


  extend(window, {
    pageNode: document.body
  });

  window.scrollNode = browser.msie6 ? pageNode : ((browser.chrome || browser.safari) ? bodyNode : htmlNode);

  onBodyResize();

  var scrolledNode = browser.msie6 ? pageNode : window;
}

function onDomReady(f) {
  f();
}

function checkEvent(e) {
  return ((e = (e || window.event)) && (e.type == 'click' || e.type == 'mousedown' || e.type == 'mouseup') && (e.which > 1 || e.button > 1 || e.ctrlKey || e.shiftKey || browser.mac && e.metaKey)) || false;
}

function checkKeyboardEvent(e) {
  e = normEvent(e);
  if (!e || !e.target) return false;
  if (!e.screenX) return true;

  var size = getSize(e.target), xy = getXY(e.target);
  var offsetX = e.pageX - xy[0];
  var offsetY = e.pageY - xy[1];

  if (offsetX < 0 || offsetX > size[0] || offsetY < 0 || offsetY > size[1]) return true;
  return (Math.abs(e.pageX - xy[0] - size[0] / 2) < 1 && Math.abs(e.pageY - xy[1] - size[1] / 2) < 1);
}

function setWorkerTimeout(cb, delay) {
  if (window.Worker && window.Blob) {
    var scriptBlob = new Blob([" \
      var timeout; \
      onmessage = function(e) { \
        clearTimeout(timeout); \
        if (e.data == 'start') { \
          timeout = setTimeout(function() { postMessage({}); }, " + delay + "); \
        } \
      } \
    "]);

    try {
      var worker = new Worker(window.URL.createObjectURL(scriptBlob));

      worker.onmessage = function() {
        worker.terminate();
        cb();
      }
      worker.postMessage('start');
    } catch (e) {
      worker = false;
    }

    return worker;
  } else {
    return setTimeout(cb, delay)
  }
}

function clearWorkerTimeout(worker) {
  if (!worker) {
    return false
  }

  if (isNumeric(worker)) {
    clearTimeout(worker);
  } else {
    worker.terminate();
  }
}

/* Templates */

function addTemplates(tpls) {
  window.templates = window.templates || {};
  extend(window.templates, tpls);
}

function getTemplate(tplName, state) {
  var tpls = window.templates = window.templates || {},
      tpl = tpls[tplName];

  if (typeof tpl === 'function') {  // function that returns actual template string
    tpl = tpl();
  }
  if (tpl && state) {
    return rs(tpl, state);
  }

  return tpl || '';
}

/* Cookie */

window._cookies;

function _initCookies() {
  _cookies = {};
  var ca = document.cookie.split(';');
  var re = /^[\s]*([^\s]+?)$/i;
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].split('=');
    if (c.length == 2) {
     _cookies[c[0].match(re)[1]] = unescape(c[1].match(re) ? c[1].match(re)[1] : '');
    }
  }
}

function getCookie(name) {
  _initCookies();
  return _cookies[name];
}

function setCookie(name, value, days, secure) {
  function isSupportsSameSite() {
    return browser.chrome && parseInt(browser.version) >= 71;
  }
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = '; expires='+date.toGMTString();
  }
  var isHttps = location.protocol === 'https:';
  var domain = locDomain;
  var secureValue = !!secure;
  if (partConfigEnabled('cookie_secure_default_true')) {
    secureValue = secure !== false;
  }
  var secureFlag = ( isHttps && secureValue ? '; secure' : '');

  var sameSite = secureValue && isSupportsSameSite() && partConfigEnabled('cookie_class_samesite') ? '; SameSite=None' : '';
  document.cookie = name + '='+escape(value) + expires + '; path=/' + (domain ? '; domain=.' + domain : '') + sameSite + secureFlag;
}

/* DOM */

function domClosestOverflowHidden(startEl, ignoreFirefoxScrollFixWrap) {
  startEl = ge(startEl);
  var el = startEl, position, overflow, transform, lastPosition;

  while (el && el.tagName && el !== bodyNode) {
    position = getStyle(el, 'position');
    overflow = getStyle(el, 'overflow');
    transform = getStyle(el, 'transform');

    if (ignoreFirefoxScrollFixWrap && browser.mozilla) { // for mozilla browser
      if (el.id != 'page_wrap' &&
        el !== startEl &&
        overflow !== 'visible' &&
        (position === 'static' ? (!lastPosition || lastPosition === 'relative') : lastPosition !== 'fixed')) {
        break;
      }
    } else if (el !== startEl && // for other browser
      overflow !== 'visible' &&
      (position === 'static' ? (!lastPosition || lastPosition === 'relative') : lastPosition !== 'fixed')) {
      break;
    }

    if (transform !== 'none') {
      lastPosition = void 0;
    } else if (position !== 'static' && lastPosition !== 'fixed') {
      lastPosition = position;
    }

    el = domPN(el);
  }

  return el;
}

function nodeUpdated(elem, delay) {
  setStyle(elem, {backgroundColor: '#F5F7FA'});
  animate(elem, {backgroundColor: '#FFF'}, delay || 6000, function(el) {
    setStyle(el, {backgroundColor: null});
  });
}

function getColor(elem, attr) {
  var color;
  do {
    color = getStyle(elem, attr);
    if (!color.indexOf('rgba')) color = '';
    if (color != '' && color != 'transparent' || elem.nodeName.toLowerCase() == 'body') {
      break;
    }
    attr = 'backgroundColor';
  } while (elem = elem.parentNode);
  return getRGB(color);
}

function scrollToTop(speed) {
  if (speed == undefined) speed = 400;
  if (speed) {
    if (browser.msie6) {
      animate(pageNode, {scrollTop: 0}, speed);
    } else {
      animate(htmlNode, {scrollTop: 0}, speed);
      animate(bodyNode, {scrollTop: 0}, speed);
    }
  } else {
    window.scroll(0, 0);
    if (browser.msie6) {
      pageNode.scrollTop = 0;
    }
  }
}

function scrollGetX() {
  return window.pageXOffset || scrollNode.scrollLeft || document.documentElement.scrollLeft;
}

function scrollGetY() {
  return window.pageYOffset || scrollNode.scrollTop || document.documentElement.scrollTop;
}

function ge(el) {
  return (typeof el == 'string' || typeof el == 'number') ? document.getElementById(el) : el;
}

function geByTag(searchTag, node) {
  node = ge(node) || document;
  return node.getElementsByTagName(searchTag);
}

function geByTag1(searchTag, node) {
  node = ge(node) || document;
  return node.querySelector && node.querySelector(searchTag) || geByTag(searchTag, node)[0];
}

function geByClass(searchClass, node, tag) {
  node = ge(node) || document;
  tag = tag || '*';
  var classElements = [];

  if (!browser.msie8 && node.querySelectorAll && tag != '*') {
    return node.querySelectorAll(tag + '.' + searchClass);
  }
  if (node.getElementsByClassName) {
    var nodes = node.getElementsByClassName(searchClass);
    if (tag != '*') {
      tag = tag.toUpperCase();
      for (var i = 0, l = nodes.length; i < l; ++i) {
        if (nodes[i].tagName.toUpperCase() == tag) {
          classElements.push(nodes[i]);
        }
      }
    } else {
      classElements = Array.prototype.slice.call(nodes);
    }
    return classElements;
  }

  var els = geByTag(tag, node);
  var pattern = new RegExp('(^|\\s)' + searchClass + '(\\s|$)');
  for (var i = 0, l = els.length; i < l; ++i) {
    if (pattern.test(els[i].className)) {
      classElements.push(els[i]);
    }
  }
  return classElements;
}

function geByClass1(searchClass, node, tag) {
  node = ge(node) || document;
  tag = tag || '*';
  return !browser.msie8 && node.querySelector && node.querySelector(tag + '.' + searchClass) || geByClass(searchClass, node, tag)[0];
}

function gpeByClass(className, elem, stopElement) {
  elem = ge(elem);
  if (!elem) return null;
  while (stopElement !== elem && (elem = elem.parentNode)) {
    if (hasClass(elem, className)) return elem;
  }
  return null;
}

function domClosest(className, elem) {
  if (hasClass(elem, className)) return elem;
  return gpeByClass(className, elem);
}

function ce(tagName, attr, style) {
  var el = document.createElement(tagName);
  if (attr) extend(el, attr);
  if (style) setStyle(el, style);
  return el;
}

window.cf = (function(doc) {
  var frag = doc.createDocumentFragment(),
      elem = doc.createElement('div'),
      range = doc.createRange && doc.createRange();
  frag.appendChild(elem);
  range && range.selectNodeContents(elem);

  return range && range.createContextualFragment ?
    function (html) {
      if (!html) return doc.createDocumentFragment();
      return range.createContextualFragment(html);
    } :
    function (html) {
      if (!html) return doc.createDocumentFragment();
      elem.innerHTML = html;
      var frag = doc.createDocumentFragment();
      while (elem.firstChild) {
        frag.appendChild(elem.firstChild);
      }
      return frag;
    };
})(document);

function re(el) {
  el = ge(el);
  if (el && el.parentNode) el.parentNode.removeChild(el);
  return el;
}

function se(html) {
  return domFC(ce('div', {innerHTML: html}));
}

function sech(html) {
  return domChildren(ce('div', {innerHTML: html}));
}

function rs(html, repl) {
  each (repl, function(k, v) {
    html = html.replace(new RegExp('%' + k + '%', 'g'), v);
  });
  return html;
}

function psr(html) {
  if (locProtocol != 'https:') return html;
  html = html.replace(/http:\/\/(cs(\d+)\.vk\.me\/c(\d+)\/)/gi, 'https://$1');
  html = html.replace(/http:\/\/cs(\d+)\.(userapi\.com|vk\.com|vk\.me|vkontakte\.ru)\/c(\d+)\/(v\d+\/|[a-z0-9\/_:\-]+\.jpg)/gi, 'https://pp.vk.me/c$3/$4');
  html = html.replace(/http:\/\/cs(\d+)\.(userapi\.com|vk\.com|vk\.me|vkontakte\.ru)\/([a-z0-9\/_:\-]+\.jpg)/gi, 'https://pp.vk.me/c$1/$3');
  html = html.replace(/http:\/\/cs(\d+)\.(userapi\.com|vk\.com|vk\.me|vkontakte\.ru)\//gi, 'https://ps.vk.me/c$1/');
  html = html.replace(/http:\/\/video(\d+)\.vkadre\.ru\//gi, 'https://ps.vk.me/v$1/');
  return html;
}

function domEL(el, p) {
  p = p ? 'previousSibling' : 'nextSibling';
  while (el && !el.tagName) el = el[p];
  return el;
}

function domNS(el) {
  return domEL((el || {}).nextSibling);
}

function domPS(el) {
  return domEL((el || {}).previousSibling, 1);
}

function domFC(el) {
  return domEL((el || {}).firstChild);
}

function domLC(el) {
  return domEL((el || {}).lastChild, 1);
}

function domPN(el) {
  return (el || {}).parentNode;
}

function domChildren(el) {
  var chidlren = [];
  var nodes = el.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].tagName) {
      chidlren.push(nodes[i]);
    }
  }
  return chidlren;
}

function domInsertBefore(el, before) {
  var parent = domPN(before);
  return parent && parent.insertBefore(el, before);
}

function domInsertAfter(el, after) {
  var parent = domPN(after);
  return parent && parent.insertBefore(el, domNS(after));
}

function domByClass(el, searchClass) {
  if (!el) return el;
  return geByClass1(searchClass, el);
}

function domData(el, name, value) {
  if (!el) {
    return null;
  }

  if (typeof value != 'undefined') {
    if (value === null) {
      el.removeAttribute('data-' + name);
    } else {
      el.setAttribute('data-' + name, value);
    }

    return value;
  } else {
    return el.getAttribute('data-' + name);
  }
}

function matchesSelector(el, selector) {
  el = ge(el);
  if (!el || el == document) return false;

  var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || function(selector) {
    var nodes = (this.parentNode || this.document || this.ownerDocument).querySelectorAll(selector);
    for (var i = nodes.length; --i >= 0 && nodes[i] !== this; ) ;
    return i > -1;
  };

  return matches.call(el, selector);
}

function isHover(el) {
  return matchesSelector(el, ':hover');
}

function isAncestor(el, ancestor) {
  var current = ge(el);
  ancestor = ge(ancestor);
  if (!el || !ancestor) {
    return false;
  }
  while (current = current.parentNode) {
    if (current == ancestor) {
      return true;
    }
  }
  return false;
}

function domQuery(selectors, parent) {
  return (parent || document).querySelectorAll(selectors);
}
function domQuery1(selector, parent) {
  return (parent || document).querySelector(selector);
}
function domReplaceEl(oldEl, newEl) {
  if (isString(newEl)) {
    newEl = se(newEl);
  }
  domPN(oldEl).replaceChild(newEl, oldEl);
  return newEl;
}
function domChildIndex(child) {
  var i = 0;
  while ((child = domPS(child)) != null) {
    i++;
  }
  return i;
}

function domClosestPositioned(el, opts) {
  opts = opts || {};
  var parent = opts.fromEl || domPN(el),
      positions = opts.positions || ['relative', 'absolute', 'fixed'];
  while (parent && parent != bodyNode) {
    var elPos = getStyle(parent, 'position');

    if (inArray(elPos, positions) && (!opts.noOverflow || getStyle(parent, 'overflow') != 'hidden')) {
      break;
    }

    parent = domPN(parent);
  }

  return parent;
}

function show(elem) {
  var l = arguments.length;
  if (l > 1) {
    for (var i = 0; i < l; i++) {
      show(arguments[i]);
    }
    return;
  }

  elem = ge(elem);
  if (!elem || !elem.style) return;

  var old = elem.olddisplay;
  var newStyle = 'block';
  var tag = elem.tagName.toLowerCase();
  elem.style.display = old || '';

  if (getStyle(elem, 'display') !== 'none') {
    return;
  }

  if (hasClass(elem, 'inline') || hasClass(elem, '_inline')) {
    newStyle = 'inline';
  } else if (hasClass(elem, '_inline_block')) {
    newStyle = 'inline-block';
  } else if (tag === 'tr' && !browser.msie) {
    newStyle = 'table-row';
  } else if (tag === 'table' && !browser.msie) {
    newStyle = 'table';
  } else {
    newStyle = 'block';
  }
  elem.style.display = elem.olddisplay = newStyle;
}

function hide(elem) {
  var l = arguments.length;
  if (l > 1) {
    for (var i = 0; i < l; i++) {
      hide(arguments[i]);
    }
    return;
  }

  elem = ge(elem);
  if (!elem || !elem.style) return;

  var display = getStyle(elem, 'display');
  elem.olddisplay = ((display != 'none') ? display : '');
  elem.style.display = 'none';
}

function isVisible(elem) {
  elem = ge(elem);
  if (!elem || !elem.style) return false;
  return getStyle(elem, 'display') != 'none';
}

function clientHeight() {
  return window.innerHeight || docEl.clientHeight || bodyNode.clientHeight;
}

function getClientRectOffsetY(elem, part, offset) {
  elem = ge(elem);
  offset = offset || 0;
  var ey = getXY(elem)[1],
      eh = getSize(elem)[1],
      w = window, de = document.documentElement,
      ch = Math.max(intval(w.innerHeight), intval(de.clientHeight)),
      fixed_head = ge('page_header_cont'),
      hh = getSize(fixed_head)[1],
      st = (de.scrollTop || bodyNode.scrollTop || window.scrollY || 0);
  if (!part) {
    if (ey < st + hh + offset) return (ey - st + hh - offset);
    if (ey + eh > st + ch - offset) return (ey + eh - st - ch + offset);
  } else {
    if (ey + eh < st + hh + offset) return (ey + eh - st - hh - offset);
    if (ey > st + ch - offset) return (ey - st - ch + offset);
  }
  return 0;
}

function toggle(elem, v) {
  if (v === undefined) {
    v = !isVisible(elem);
  }
  if (v) {
    show(elem);
  } else {
    hide(elem);
  }
  return v;
}

window.hfTimeout = 0;

function toggleFlash(show, timeout) {
  //if (/mac/i.test(navigator.userAgent)) return;
  clearTimeout(hfTimeout);
  if (timeout > 0) {
    hfTimeout = setTimeout(function() {toggleFlash(show, 0)}, timeout);
    return;
  }

  var vis = show ? 'visible' : 'hidden';

  triggerEvent(document, show ? 'unblock' : 'block');

  var f = function() {
    if (this.getAttribute('preventhide')) {
      return;
    } else if (this.id == 'flash_app' && browser.msie) {

      show ? setStyle(this, {position: 'static', top: 0}) : setStyle(this, {position: 'absolute', top: '-5000px'});
    } else {
      this.style.visibility = vis;
    }
  };
  each(geByTag('embed'), f);
  each(geByTag('object'), f);
}

function boundingRectEnabled(obj) {
  return (typeof obj.getBoundingClientRect !== 'undefined');
}

function getXYRect(obj, notBounding) {
  var rect;
  if (notBounding && getStyle(obj, 'display') == 'inline') {
    var rects = obj.getClientRects();
    rect = rects && rects[0] || obj.getBoundingClientRect();
  } else {
    rect = obj.getBoundingClientRect();
  }

  return rect;
}

function getXY(obj, forFixed) {
  obj = ge(obj);
  if (!obj) return [0,0];

  var docElem, win,
      rect = {top: 0, left: 0},
      doc = obj.ownerDocument;
  if (!doc) {
    return [0, 0];
  }
  docElem = doc.documentElement;

  if (boundingRectEnabled(obj)) {
    rect = getXYRect(obj, true);
  }
  win = doc == doc.window ? doc : (doc.nodeType === 9 ? doc.defaultView || doc.parentWindow : false);
  return [
    rect.left + (!forFixed ? win.pageXOffset || docElem.scrollLeft : 0) - (docElem.clientLeft || 0),
    rect.top + (!forFixed ? win.pageYOffset || docElem.scrollTop : 0) - (docElem.clientTop || 0)
  ];
}

function isWindow(el) {
  return el != null && el === el.window;
}

var DISPLAY_SWAP_RGX = /^(none|table(?!-c[ea]).+)/;

function getSize(elem, withoutBounds, notBounding) {
  elem = ge(elem);
  var s = [0, 0], de = document.documentElement, rect;
  if (withoutBounds && getStyle(elem, 'boxSizing') === 'border-box') {
    withoutBounds = false;
  }
  if (elem == document) {
    s = [Math.max(
        de.clientWidth,
        bodyNode.scrollWidth, de.scrollWidth,
        bodyNode.offsetWidth, de.offsetWidth
      ), Math.max(
        de.clientHeight,
        bodyNode.scrollHeight, de.scrollHeight,
        bodyNode.offsetHeight, de.offsetHeight
      )];
  } else if (elem){
    function getWH() {
      if (boundingRectEnabled(elem) && (rect = getXYRect(elem, notBounding)) && rect.width !== undefined) {
        s = [rect.width, rect.height];
      } else {
        s = [elem.offsetWidth, elem.offsetHeight];
      }
      if (!withoutBounds) return;
      var padding = 0, border = 0;
      each(s, function(i, v) {
        var which = i ? ['Top', 'Bottom'] : ['Left', 'Right'];
        each(which, function(){
          s[i] -= parseFloat(getStyle(elem, 'padding' + this)) || 0;
          s[i] -= parseFloat(getStyle(elem, 'border' + this + 'Width')) || 0;
        });
      });
    }
    if (!isVisible(elem)) {
      var props = {position: 'absolute', visibility: 'hidden', display: 'block'};
      var old = {}, old_cssText = false;
      if (elem.style.cssText.indexOf('!important') > -1) {
        old_cssText = elem.style.cssText;
      }
      each(props, function(i, v) {
        old[i] = elem.style[i];
        elem.style[i] = v;
      });
      getWH();
      each(props, function(i, v) {
        elem.style[i] = old[i];
      });
      if (old_cssText) {
        elem.style.cssText = old_cssText;
      }
    } else getWH();

  }
  return s;
}

function getW(el) {
  return getSize(el)[0];
}

function getH(el) {
  return getSize(el)[1];
}

// deprecated
function _getSize(elem, withoutBounds, notBounding) {
  elem = ge(elem);
  var s = [0, 0], de = document.documentElement, rect;
  if (withoutBounds && getStyle(elem, 'boxSizing') === 'border-box') {
    withoutBounds = false;
  }
  if (elem == document) {
    s = [Math.max(
        de.clientWidth,
        bodyNode.scrollWidth, de.scrollWidth,
        bodyNode.offsetWidth, de.offsetWidth
      ), Math.max(
        de.clientHeight,
        bodyNode.scrollHeight, de.scrollHeight,
        bodyNode.offsetHeight, de.offsetHeight
      )];
  } else if (elem){
    function getWH() {
      if (boundingRectEnabled(elem) && (rect = getXYRect(elem, notBounding)) && rect.width !== undefined) {
        s = [rect.width, rect.height];
      } else {
        s = [elem.offsetWidth, elem.offsetHeight];
      }
      if (!withoutBounds) return;
      var padding = 0, border = 0;
      each(s, function(i, v) {
        var which = i ? ['Top', 'Bottom'] : ['Left', 'Right'];
        each(which, function(){
          s[i] -= parseFloat(getStyle(elem, 'padding' + this)) || 0;
          s[i] -= parseFloat(getStyle(elem, 'border' + this + 'Width')) || 0;
        });
      });
    }
    if (!isVisible(elem)) {
      var props = {position: 'absolute', visibility: 'hidden', display: 'block'};
      var old = {}, old_cssText = false;
      if (elem.style.cssText.indexOf('!important') > -1) {
        old_cssText = elem.style.cssText;
      }
      each(props, function(i, v) {
        old[i] = elem.style[i];
        elem.style[i] = v;
      });
      getWH();
      each(props, function(i, v) {
        elem.style[i] = old[i];
      });
      if (old_cssText) {
        elem.style.cssText = old_cssText;
      }
    } else getWH();

  }
  return s;
}

function getZoom() {
  var r1 = ge('zoom_test_1') || document.body.appendChild(ce('div', {id: 'zoom_test_1'}, {left: '10%', position: 'absolute', visibility: 'hidden'})),
      r2 = ge('zoom_test_2') || document.body.appendChild(ce('div', {id: 'zoom_test_2'}, {left: r1.offsetLeft + 'px', position: 'absolute', visibility: 'hidden'}));
  return r2.offsetLeft / r1.offsetLeft;
}

function imagesLoader(cont, options) {
  var default_options = {
        top_load: 0,
        bottom_load: 2,
        load_limit: 10,
        need_load_class: '__need_load',
        skip_process_load: false,
        use_iframe: false
      },
      loading_times = [],
      loading_cnt = 0,
      loading_to = null,
      opts = extend(default_options, options)
      obj = {};

  function giftLoaded(src, no_force) {
    if (loading_times[src]) {
      --loading_cnt;
      delete loading_times[src];
    }
    if (!no_force) {
      obj.processLoad();
    }
  }

  function getImgY(img) {
    var top = 0, obj = img;
    if (obj && obj.offsetParent) {
      do {
        top += obj.offsetTop;
        if (cont && obj.offsetParent === cont) break;
      } while (obj = obj.offsetParent);
    }
    return top;
  }

  obj.processLoad = function() {
    for (var src in loading_times) {
      var arr = loading_times[src], loading_time = arr[0], img = arr[1];
      if (img.width || img.height || vkNow() - loading_time > 20000) {
        if (loading_times[src]) {
          giftLoaded.call(img, src, true);
        }
      }
    }
    clearTimeout(loading_to);
    if (loading_cnt) {
      loading_to = setTimeout(obj.processLoad, 500);
    }
    if (loading_cnt >= opts.load_limit) return;

    var images = geByClass(opts.need_load_class, cont || bodyNode),
        changed_images = [];
    if (cont) {
      var cont_h = cont.offsetHeight,
          cont_top = cont.scrollTop - cont_h * opts.top_load,
          cont_bottom = cont.scrollTop + cont_h * opts.bottom_load;
    }
    for (var i = 0, l = images.length; i < l && loading_cnt < opts.load_limit; i++) {
      var img = images[i];
      if (img.tagName != 'IMG') continue;

      var src = img.getAttribute('data-src');
      if (src) {
        if (cont) {
          var imgY = getImgY(img);
          var imgB = imgY + img.parentNode.offsetHeight;
          if (imgY > cont_bottom) continue;
          if (imgB < cont_top) continue;
        }

        changed_images.push([img, src]);
      }
    }

    each(changed_images, function() {
      var img = this[0], src = this[1];
      obj.iloader && obj.iloader.add(src, giftLoaded, img);
      img.src = src;
      img.removeAttribute('data-src');
      removeClass(img, opts.need_load_class);
      if (!loading_times[src]) {
        ++loading_cnt;
        loading_times[src] = [vkNow(), img];
      }
    });

    clearTimeout(loading_to);
    if (loading_cnt) {
      loading_to = setTimeout(obj.processLoad, 500);
    }
  }

  obj.destroy = function() {
    loading_times = [];
    loading_cnt = 0;
    clearTimeout(loading_to);
  }

  if (opts.use_iframe && window.IframeLoader) {
    obj.iloader = new IframeLoader();
  }
  if (!opts.skip_process_load) {
    obj.processLoad();
  }
  return obj;
}

function IframeLoader() {
  var iframe, doc, body, index, sources, aborted_sources;

  function iframeDoc(i) {
    try {
      if (i.contentDocument) return i.contentDocument;
      if (i.contentWindow && i.contentWindow.document) return i.contentWindow.document;
      return i.document;
    } catch (e) {};
    return false;
  }
  function getImgHtml(i) {
    if (doc && doc.body) return '<img id="___img' + i + '" />';
    else return '<img class="___img' + i + '" />';
  }
  function getImg(i) {
    if (doc && doc.body) return doc.getElementById('___img' + i);
    else return geByClass1('___img' + i, body);
  }
  function init() {
    iframe = utilsNode.appendChild(ce('iframe'));
    doc = iframeDoc(iframe);
    if (doc && doc.body) {
      body = doc.body;
    } else {
      body = utilsNode.appendChild(ce('div', {}, {display: 'none'}));
    }
    index = 0;
    sources = [];
  }
  function add(src, onLoad, that) {
    var i = index++;
    sources[i] = {src: src, onLoad: onLoad, that: that};
    body.appendChild(ce('div', {innerHTML: getImgHtml(i)}));
    var img = getImg(i);
    img.src = src;
    img.onload = function() {
      var obj = sources[i];
      if (!obj) return;
      obj.onLoad && obj.onLoad.call(obj.that || window, obj.src);
      delete sources[i];
      body.removeChild(getImg(i).parentNode);
    }
  }
  function abort() {
    re(iframe);
    aborted_sources = [];
    for (var k in sources) {
      aborted_sources.push(sources[k]);
    }
    init();
  }
  function repeat(need_redraw) {
    if (!aborted_sources) return [];
    var objs = [];
    for (var k in aborted_sources) {
      var obj = aborted_sources[k];
      add(obj.src, obj.onLoad, obj.that);
      objs.push(obj.that);
    }
    aborted_sources = null;
    if (need_redraw) {
      var redraw_data = [];
      each(objs, function() {
        redraw_data.push([this, this.src]);
        this.src = '';
        hide(this);
      });
      setTimeout(function(){
        each(redraw_data, function() {
          var img = this[0], src = this[1];
          img.src = src;
          show(img);
        });
      }, 10);
    }
    return objs;
  }

  init();

  return {
    add: add,
    abort: abort,
    repeat: repeat
  }
}

function renderFlash(cont, opts, params, vars) {
  if (!opts.url || !opts.id) {
    return false;
  }
  opts = extend({
    version: 9,
    width: 1,
    height: 1
  }, opts);
  var f = opts.url;
  if (!stVersions[f]) {
    stVersions[f] = '';
  }
  if (__debugMode && stVersions[f] < 1000000) stVersions[f] += irand(1000000, 2000000);

  if (stVersions[f]) {
    opts.url += ((opts.url.indexOf('?') == -1) ? '?' : '&') + '_stV=' + stVersions[f];
  }

  params = extend({
    quality: 'high',
    flashvars: ajx2q(vars)
  }, params);
  if (browser.flash < opts.version) return false;
  ge(cont).innerHTML = browser.flashwrap(opts, params);
  return true;
}

function onBodyResize(force) {
  var w = window, de = document.documentElement;
  if (!w.pageNode) return;
  var dwidth = Math.max(intval(w.innerWidth), intval(de.clientWidth));
  var dheight = Math.max(intval(w.innerHeight), intval(de.clientHeight));
  var sbw = sbWidth();

  if (browser.mobile) {
    dwidth = Math.max(dwidth, intval(bodyNode.scrollWidth));
    dheight = Math.max(dheight, intval(bodyNode.scrollHeight));
  } else if (browser.msie7) {
    if (htmlNode.scrollHeight > htmlNode.offsetHeight) {
      dwidth += sbw + 1;
    }
  } else if (browser.msie8) {
    if (htmlNode.scrollHeight + 3 > htmlNode.offsetHeight) {
      dwidth += sbw + 1;
    }
  }
  if (w.lastWindowWidth != dwidth || force === true) {
    w.lastInnerWidth = w.lastWindowWidth = dwidth;

    if (bodyNode.offsetWidth < layoutWidth + sbw + 2) {
      dwidth = layoutWidth + sbw + 2;
    }
    if (dwidth) {
      for (var el = pageNode.firstChild; el; el = el.nextSibling) {
        if (!el.tagName) continue;
        for (var e = el.firstChild; e; e = e.nextSibling) {
          if (e.className == 'scroll_fix') {
            e.style.width = ((w.lastInnerWidth = (dwidth - sbw * (browser.msie7 ? 2 : 1) - 1)) - 1) + 'px';
          }
        }
      }
    }
  }
  if (w.lastWindowHeight != dheight || force === true) {
    w.lastWindowHeight = dheight;
    if (browser.msie6) {
      pageNode.style.height = dheight + 'px';
    }
  }
  if (cur.lSTL) {
    setStyle(cur.lSTL, {width: Math.max(getXY(cur.lSTL.el)[0], 0), height: dheight - 1});
  }
}

function redraw(el, fixedClass) {
  if (el && getStyle(el, 'position') == 'fixed') {
    fixedClass ? removeClass(el, fixedClass) : setStyle(el, {position: 'relative'});
    el.offsetLeft;
    fixedClass ? addClass(el, fixedClass) : setStyle(el, {position: 'fixed'});
  }
}

function getProgressHtml(id, cls) {
  return rs(vk.pr_tpl, {id: id || '', cls: cls || ''});
}

function showProgress(el, id, doInsertBefore) {
  el = ge(el);
  if (!el) return;

  var prel = se(rs(vk.pr_tpl, {id: id || ''}));

  if (doInsertBefore) {
    domInsertBefore(prel, el);
  } else {
    el.appendChild(prel);
  }
  setTimeout(function(){
    setStyle(prel, {opacity: 1});
  });
  return prel;
}

function hideProgress(el) {
  if (el) {
    re(geByClass1('pr', el));
  }
}

function disableEl(el) {
  setStyle(el, 'pointer-events', 'none')
}

function enableEl(el) {
  setStyle(el, 'pointer-events', '')
}

function throttle(fn, time) {
  var timeout;

  return function() {
    if (!timeout) {
      fn.apply(this, arguments);
      timeout = setTimeout(function() {
        timeout = false;
      }, time)
    }
  };
}

function shuffle(arr) {
  var counter = arr.length,
      temp,
      index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);

    counter--;

    temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
}

function getProgressHtml(id, cls) {
  return rs(vk.pr_tpl, {id: id || '', cls: cls || ''});
}

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}

function domCA(el, selector) {
  var matches = selector ?
                matchesSelector :
                function() { return true; };
  do {
    el = domPN(el);
  } while(el && !matchesSelector(el, selector));
  return el;
}

function matchesSelector(el, selector) {
  var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || function(selector) {
    var nodes = (this.parentNode || this.document || this.ownerDocument).querySelectorAll(selector);
    for (var i = nodes.length; --i >= 0 && nodes[i] !== this; ) ;
    return i > -1;
  };

  return matches.call(el, selector);
}

function isHover(el) {return matchesSelector(el, ':hover');}

function isAncestor(el, ancestor) {
  var current = ge(el);
  ancestor = ge(ancestor);
  if (!el || !ancestor) {
    return false;
  }
  while (current = current.parentNode) {
    if (current == ancestor) {
      return true;
    }
  }
  return false;
}

function getScroll() {
  var b = (browser.msie6) ? ge('PageContainer') : document.body, de = document.documentElement;
  return [b.scrollLeft || de.scrollLeft || window.pageXOffset || 0, b.scrollTop || de.scrollTop  || window.pageYOffset || 0,
  de.clientWidth || b.clientWidth || 0, de.clientHeight || b.clientHeight || 0];
}

/* CSS */

window.whitespaceRegex = /[\t\r\n\f]/g;

function hasClass(obj, name) {
  if (obj = ge(obj)) {
    name = trim(name).replace(window.whitespaceRegex, ' ').split(' ');
    var result = true,
      names = (' ' + obj.className + ' ').replace(window.whitespaceRegex, ' ');
    each(name, function(i, name) {
      return (result = names.indexOf(' ' + name + ' ') >= 0);
    });
    return result;
  }
}

function addClass(obj, name) {
  if ((obj = ge(obj)) && !hasClass(obj, name = trim(name).replace(window.whitespaceRegex, ' '))) {
    obj.className = (obj.className ? obj.className + ' ' : '') + name;
  }
}

function removeClass(obj, name) {
  if (obj = ge(obj)) {
    name = trim(name).replace(window.whitespaceRegex, ' ').split(' ').join('|');
    obj.className = trim((obj.className || '').replace((new RegExp('\\b(' + name + ')\\b', 'g')), ' '));
  }
}

function toggleClass(obj, name, v) {
  if (v === undefined) {
    v = !hasClass(obj, name);
  }
  (v ? addClass : removeClass)(obj, name);
  return v;
}

function addClassDelayed(obj, name) { setTimeout(addClass.pbind(obj, name), 0); }
function removeClassDelayed(obj, name) { setTimeout(removeClass.pbind(obj, name), 0); }
function toggleClassDelayed(obj, name, v) {
  if (v === undefined) {
    v = !hasClass(obj, name);
  }
  (v ? addClassDelayed : removeClassDelayed)(obj, name);
  return v;
}

function replaceClass(obj, oldName, newName) {
  removeClass(obj, oldName);
  addClass(obj, newName);
}

var cssTransformProp = (function(){
  var testEl = document.createElement('div');
  if(testEl.style.transform == null) {
    var vendors = ['Webkit', 'Moz', 'ms'];
    for(var vendor in vendors) {
      if(testEl.style[ vendors[vendor] + 'Transform' ] !== undefined) {
        return vendors[vendor] + 'Transform';
      }
    }
  }
  return 'transform';
})();

function getStyle(elem, name, force) {
  elem = ge(elem);
  if (isArray(name)) { var res = {}; each(name, function(i,v){res[v] = getStyle(elem, v);}); return res; }
  if (!elem) return '';
  if (force === undefined) {
    force = true;
  }
  if (!force && name == 'opacity' && browser.msie) {
    var filter = elem.style['filter'];
    return filter ? (filter.indexOf('opacity=') >= 0 ?
      (parseFloat(filter.match(/opacity=([^)]*)/)[1] ) / 100) + '' : '1') : '';
  }
  if (!force && elem.style && (elem.style[name] || name == 'height')) {
    return elem.style[name];
  }

  var ret, defaultView = document.defaultView || window;
  if (defaultView.getComputedStyle) {
    name = name.replace(/([A-Z])/g, '-$1').toLowerCase();
    var computedStyle = defaultView.getComputedStyle(elem, null);
    if (computedStyle) {
      ret = computedStyle.getPropertyValue(name);
    }
  } else if (elem.currentStyle) {
    if (name == 'opacity' && browser.msie) {
      var filter = elem.currentStyle['filter'];
      return filter && filter.indexOf('opacity=') >= 0 ?
        (parseFloat(filter.match(/opacity=([^)]*)/)[1]) / 100) + '' : '1';
    }
    var camelCase = name.replace(/\-(\w)/g, function(all, letter){
      return letter.toUpperCase();
    });
    ret = elem.currentStyle[name] || elem.currentStyle[camelCase];
    //dummy fix for ie
    if (ret == 'auto') {
      ret = 0;
    }

    ret = (ret + '').split(' ');
    each(ret, function(i,v) {
      if (!/^\d+(px)?$/i.test(v) && /^\d/.test(v)) {
        var style = elem.style, left = style.left, rsLeft = elem.runtimeStyle.left;
        elem.runtimeStyle.left = elem.currentStyle.left;
        style.left = v || 0;
        ret[i] = style.pixelLeft + 'px';
        style.left = left;
        elem.runtimeStyle.left = rsLeft;
      }
    });
    ret = ret.join(' ');
  }

  if (force && (name == 'width' || name == 'height')) {
    var ret2 = getSize(elem, true)[({'width': 0, 'height': 1})[name]];
    ret = (intval(ret) ? Math.max(floatval(ret), ret2) : ret2) + 'px';
  }

  return ret;
}

function setStyle(elem, name, value){
  elem = ge(elem);
  if (!elem) return;
  if (typeof name == 'object') return each(name, function(k, v) { setStyle(elem,k,v); });
  if (name == 'opacity') {
    if (browser.msie) {
      if ((value + '').length) {
        if (value !== 1) {
          elem.style.filter = 'alpha(opacity=' + value * 100 + ')';
        } else {
          elem.style.filter = '';
        }
      } else {
        elem.style.cssText = elem.style.cssText.replace(/filter\s*:[^;]*/gi, '');
      }
      elem.style.zoom = 1;
    };
    elem.style.opacity = value;
  } else {
    try{
      var isN = typeof(value) == 'number';
      if (isN && (/height|width/i).test(name)) value = Math.abs(value);
      elem.style[name] = isN && !(/z-?index|font-?weight|opacity|zoom|line-?height/i).test(name) ? value + 'px' : value;
    } catch(e){debugLog('setStyle error: ', [name, value], e);}
  }
}

/* Animation */

function animate(el, params, speed, callback) {
  el = ge(el);
  if (!el) return;
  var _cb = isFunction(callback) ? callback : function() {};
  var options = extend({}, typeof speed == 'object' ? speed : {duration: speed, onComplete: _cb});
  var fromArr = {}, toArr = {}, visible = isVisible(el), self = this, p;
  options.orig = {};
  params = clone(params);
  if (params.discrete) {
    options.discrete = 1;
    delete(params.discrete);
  }
  if (browser.iphone)
    options.duration = 0;
  var tween = data(el, 'tween'), i, name, toggleAct = visible ? 'hide' : 'show';
  if (tween && tween.isTweening) {
    options.orig = extend(options.orig, tween.options.orig);
    tween.stop(false);
    if (tween.options.show) toggleAct = 'hide';
    else if (tween.options.hide) toggleAct = 'show';
  }
  for (p in params)  {
    if (!tween && (params[p] == 'show' && visible || params[p] == 'hide' && !visible)) {
      return options.onComplete.call(this, el);
    }
    if ((p == 'height' || p == 'width') && el.style) {
      if (!params.overflow) {
        if (options.orig.overflow == undefined) {
          options.orig.overflow = getStyle(el, 'overflow');
        }
        el.style.overflow = 'hidden';
      }
      if (!hasClass(el, 'inl_bl') && el.tagName != 'TD') {
        el.style.display = 'block';
      }
    }
    if (/show|hide|toggle/.test(params[p])) {
      if (params[p] == 'toggle') {
        params[p] = toggleAct;
      }
      if (params[p] == 'show') {
        var from = 0;
        options.show = true;
        if (options.orig[p] == undefined) {
          options.orig[p] = getStyle(el, p, false) || '';
          setStyle(el, p, 0);
        }

        var o;
        if (p == 'height' && browser.msie6) {
          o = '0px';
          el.style.overflow = '';
        } else {
          o = options.orig[p];
        }

        var old = el.style[p];
        el.style[p] = o;
        params[p] = parseFloat(getStyle(el, p, true));
        el.style[p] = old;

        if (p == 'height' && browser.msie && !params.overflow) {
          el.style.overflow = 'hidden';
        }
      } else {
        if (options.orig[p] == undefined) {
          options.orig[p] = getStyle(el, p, false) || '';
        }
        options.hide = true;
        params[p] = 0;
      }
    }
  }
  if (options.show && !visible) {
    show(el);
  }
  tween = new Fx.Base(el, options);
  each(params, function(name, to) {
    if (/backgroundColor|borderBottomColor|borderLeftColor|borderRightColor|borderTopColor|color|borderColor|outlineColor/.test(name)) {
      var p = (name == 'borderColor') ? 'borderTopColor' : name;
      from = getColor(el, p);
      to = getRGB(to);
      if (from === undefined) return;
    } else {
      var parts = to.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
        start = tween.cur(name, true) || 0;
      if (parts) {
        to = parseFloat(parts[2]);
        if (parts[1]) {
          to = ((parts[1] == '-=' ? -1 : 1) * to) + to;
        }
      }

      if (options.hide && name == 'height' && browser.msie6) {
        el.style.height = '0px';
        el.style.overflow = '';
      }
      from = tween.cur(name, true);
      if (options.hide && name == 'height' && browser.msie6) {
        el.style.height = '';
        el.style.overflow = 'hidden';
      }
      if (from == 0 && (name == 'width' || name == 'height'))
        from = 1;

      if (name == 'opacity' && to > 0 && !visible) {
        setStyle(el, 'opacity', 0);
        from = 0;
        show(el);
      }
    }
    if (from != to || (isArray(from) && from.join(',') == to.join(','))) {
      fromArr[name] = from;
      toArr[name] = to;
    }
  });
  tween.start(fromArr, toArr);
  data(el, 'tween', tween);

  return tween;
}

function cubicBezier(x1, y1, x2, y2, t, dt) {
  var curveX = function(t) {
    var v = 1 - t;
    return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
  };
  var curveY = function(t) {
    var v = 1 - t;
    return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
  };
  var derivativeCurveX = function(t) {
    var v = 1 - t;
    return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
  };
  var x = t, t0, t1, t2, xx, d2, i;

  // First try a few iterations of Newton's method -- normally very fast.
  for (t2 = x, i = 0; i < 8; i++){
    xx = curveX(t2) - x;
    if (Math.abs(xx) < dt) {
      return curveY(t2);
    }
    d2 = derivativeCurveX(t2);
    if (Math.abs(d2) < 1e-6) break;
    t2 = t2 - xx / d2;
  }

  t0 = 0, t1 = 1, t2 = x;

  if (t2 < t0) return curveY(t0);
  if (t2 > t1) return curveY(t1);

  // Fallback to the bisection method for reliability.
  while (t0 < t1){
    xx = curveX(t2);
    if (Math.abs(xx - x) < dt) return curveY(t2);
    if (x > xx) t0 = t2;
    else t1 = t2;
    t2 = (t1 - t0) * .5 + t0;
  }

  // Failure
  return curveY(t2);
}

function fadeTo(el, speed, to, callback) {
  return animate(el, {opacity: to}, speed, callback);
}

var Fx = {
  Transitions: {
    linear: function(t, b, c, d) { return c*t/d + b; },
    sineInOut: function(t, b, c, d) { return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b; },
    halfSine: function(t, b, c, d) { return c * (Math.sin(Math.PI * (t/d) / 2)) + b; },
    easeOutBack: function(t, b, c, d) { var s = 1.70158; return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b; },
    easeInCirc: function(t, b, c, d) { return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b; },
    easeOutCirc: function(t, b, c, d) { return c * Math.sqrt(1 - (t=t/d-1)*t) + b; },
    easeInQuint: function(t, b, c, d) { return c*(t/=d)*t*t*t*t + b; },
    easeOutQuint: function(t, b, c, d) { return c*((t=t/d-1)*t*t*t*t + 1) + b; },
    easeOutCubic: function(t, b, c, d) { return c*((t=t/d-1)*t*t + 1) + b;},
    swiftOut: function(t, b, c, d) { return c * cubicBezier(0.4, 0, 0.22, 1, t/d, 4/d) + b; }
  },
  Attrs: [
    [ 'height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom' ],
    [ 'width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight' ],
    [ 'opacity', 'left', 'top' ]
  ],
  Timers: [],
  TimerId: null
}, fx = Fx;

Fx.Base = function(el, options, name) {
  this.el = ge(el);
  this.name = name;
  this.options = extend({
    onStep: function(){},
    onComplete: function() {},
    transition: options.transition || Fx.Transitions.sineInOut,
    duration: 500
  }, options || {});
}

function genFx(type, num) {
  var obj = {};
  each(Fx.Attrs.concat.apply([], Fx.Attrs.slice(0, num)), function() {
    obj[this] = type;
  });
  return obj;
};

// Shortcuts for custom animations
each({slideDown: genFx('show', 1),
  slideUp: genFx('hide', 1),
  slideToggle: genFx('toggle', 1),
  fadeIn: {opacity: 'show'},
  fadeOut: {opacity: 'hide'},
  fadeToggle: {opacity: 'toggle'}}, function(f, v) {
  window[f] = function(el, speed, callback) { return animate(el, v, speed, callback); }
});

// Shortcuts for custom animations
each({slideDown: genFx('show', 1),
  slideUp: genFx('hide', 1),
  slideToggle: genFx('toggle', 1),
  fadeIn: {opacity: 'show'},
  fadeOut: {opacity: 'hide'},
  fadeToggle: {opacity: 'toggle'}}, function(f, val) {
  window[f] = function(el, speed, callback) { return animate(el, val, speed, callback); }
});

Fx.Base.prototype = {
  start: function(from, to){
    this.from = from;
    this.to = to;
    this.time = vkNow();
    this.isTweening = true;

    var self = this;
    function t(gotoEnd) {
      return self.step(gotoEnd);
    }
    t.el = this.el;
    if (t() && Fx.Timers.push(t) && !Fx.TimerId) {
      Fx.TimerId = setInterval(function() {
        var timers = Fx.Timers, l = timers.length;
        for (var i = 0; i < l; i++) {
          if (!timers[i]()) {
            timers.splice(i--, 1);
            l--;
          }
        }
        if (!l) {
          clearInterval(Fx.TimerId);
          Fx.TimerId = null;
        }
      }, 13);
    }
    return this;
  },

  stop: function(gotoEnd) {
    var timers = Fx.Timers;

    for (var i = timers.length - 1; i >= 0; i--) {
      if (timers[i].el == this.el ) {
        if (gotoEnd) {
          timers[i](true);
        }
        timers.splice(i, 1);
      }
    }
    this.isTweening = false;
  },

  step: function(gotoEnd) {
    var time = vkNow();
    if (!gotoEnd && time < this.time + this.options.duration) {
      this.cTime = time - this.time;
      this.now = {};
      for (p in this.to) {
        // color fx
        if (isArray(this.to[p])) {
          var color = [], j;
          for (j = 0; j < 3; j++) {
            if (this.from[p] === undefined || this.to[p] === undefined) {
              return false;
            }
            color.push(Math.min(parseInt(this.compute(this.from[p][j], this.to[p][j])), 255));
          }
          this.now[p] = color;
        } else {
          this.now[p] = this.compute(this.from[p], this.to[p]);
          if (this.options.discrete) this.now[p] = intval(this.now[p]);
        }
      }
      this.update();
      return true;
    } else {
      setTimeout(this.options.onComplete.bind(this, this.el), 10);
      this.now = extend(this.to, this.options.orig);
      this.update();
      if (this.options.hide) hide(this.el);
      this.isTweening = false;
      return false;
    }
  },

  compute: function(from, to){
    var change = to - from;
    return this.options.transition(this.cTime, from, change, this.options.duration);
  },

  update: function(){
    this.options.onStep(this.now);
    for (var p in this.now) {
      if (isArray(this.now[p])) setStyle(this.el, p, 'rgb(' + this.now[p].join(',') + ')');
      else this.el[p] != undefined ? (this.el[p] = this.now[p]) : setStyle(this.el, p, this.now[p]);
    }
  },

  cur: function(name, force){
    if (this.el[name] != null && (!this.el.style || this.el.style[name] == null))
      return this.el[name];
    return parseFloat(getStyle(this.el, name, force)) || 0;
  }
};

function cssAnim(obj, prep, opts, callb) {
  var v = intval(browser.version);
  if (obj && ((browser.chrome && v > 14) || (browser.mozilla && v > 13) || (browser.opera && v > 2))) {
    var callbWrap;
    var st = 'all '+opts.duration+'ms '+(opts.func || 'ease-out');
    obj.style.WebkitTransition = st;
    obj.style.MozTransition = st;
    obj.style.OTransition = st;
    obj.style.transition = st;
    var callbWrap = function() {
      if (browser.opera && intval(browser.version) <= 12) {
        obj.removeEventListener('oTransitionEnd', callbWrap);
      } else {
        removeEvent(obj, 'webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', callbWrap);
      }
      obj.style.WebkitTransition = '';
      obj.style.MozTransition = '';
      obj.style.OTransition = '';
      obj.style.transition = '';
      if (callb) callb();
      return false;
    }
    if (callb) {
      if (browser.opera && intval(browser.version) <= 12) {
        obj.addEventListener('oTransitionEnd', callbWrap)
      } else {
        addEvent(obj, 'webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', callbWrap);
      }
    }
    setTimeout(setStyle.pbind(obj, prep), 0);
  } else {
    animate(obj, prep, extend(opts, {onComplete: callb}));
  }
}

function animateCount(el, newCount, opts) {
  el = ge(el);
  opts = opts || {};

  if (opts.str) {
    newCount = trim(newCount.toString()) || '';
  } else {
    newCount = positive(newCount);
  }
  if (!el) return;
  if (browser.mobile && !browser.safari_mobile && !browser.android) {
    val(el, newCount || '');
    return;
  }

  var curCount = data(el, 'curCount'),
    nextCount = data(el, 'nextCount');

  if (typeof nextCount == 'number' || opts.str && typeof nextCount == 'string') {
    if (newCount != nextCount) {
      data(el, 'nextCount', newCount);
    }
    return;
  }
  if (typeof curCount == 'number' || opts.str && typeof curCount == 'string') {
    if (newCount != curCount) {
      data(el, 'nextCount', newCount);
    }
    return;
  }
  if (opts.str) {
    curCount = trim(val(el).toString()) || '';
  } else {
    curCount = positive(val(el));
  }
  if (opts.str === 'auto') {
    opts.str = !curCount.match(/^\d+$/) || !newCount.match(/^\d+$/);
    if (!opts.str) {
      curCount = positive(curCount);
      newCount = positive(newCount);
    }
  }
  if (curCount == newCount) {
    return;
  }
  data(el, 'curCount', newCount);
  var incr = opts.str ? (curCount.length == newCount.length ? curCount < newCount : curCount.length < newCount.length) : curCount < newCount,
    big = (incr ? newCount : curCount).toString(),
    small = (incr ? curCount : newCount).toString(),
    constPart = [],
    constEndPart = [],
    bigPart = '',
    smallPart = '',
    i, l, j;

  if (!opts.str) {
    small = ((new Array(big.length - small.length + 1)).join('0')) + small;
  }
  for (i = 0, l = big.length; i < l; i++) {
    if ((j = big.charAt(i)) !== small.charAt(i)) {
      break;
    }
    constPart.push(j);
  }
  bigPart = big.substr(i);
  smallPart = small.substr(i);

  if (opts.str) {
    for (i = bigPart.length; i > 0; i--) {
      if ((j = bigPart.charAt(i)) !== smallPart.charAt(i)) {
        break;
      }
      constEndPart.unshift(j);
    }
    if (constEndPart.length) {
      bigPart = bigPart.substr(0, i + 1);
      smallPart = smallPart.substr(0, i + 1);
    }
  }

  constPart = constPart.join('').replace(/\s$/, '&nbsp;');
  constEndPart = constEndPart.join('').replace(/^\s/, '&nbsp;');

  if (!trim(val(el)) && !opts.noSpaceIfEmpty) {
    val(el, '&nbsp;');
  }
  var h = el.clientHeight || el.offsetHeight;
  val(el, '<div class="counter_wrap inl_bl"></div>');
  var wrapEl = el.firstChild,
    constEl1, constEl2, animwrapEl, animEl,
    vert = true;

  if (constPart.length) {
    wrapEl.appendChild(constEl1 = ce('div', {className: 'counter_const inl_bl', innerHTML: constPart}));
  }
  if (!constPart.length) {
    smallPart = smallPart.replace(/^0+/, '');
  }
  if (!smallPart || smallPart == '0' && !constPart.length) {
    smallPart = '&nbsp;';
    vert = constPart.length ? true : false;
  }

  wrapEl.appendChild(animwrapEl = ce('div', {className: 'counter_anim_wrap inl_bl'}));
  animwrapEl.appendChild(animEl = ce('div', {
    className: 'counter_anim ' + (incr ? 'counter_anim_inc' : 'counter_anim_dec'),
    innerHTML: '<div class="counter_anim_big"><span class="counter_anim_big_c">' + bigPart + '</span></div>' +
    (vert ? '<div class="counter_anim_small"><span class="counter_anim_small_c">' + smallPart + '</span></div>' : '')
  }, vert ? {marginTop: incr ? -h : 0} : {right: 0}));
  if (opts.str) {
    setStyle(animEl, {textAlign: 'right', right: 0});
  }

  var bigW = getSize(geByClass1('counter_anim_big_c', animEl, 'span'))[0],
    smallW = vert ? (smallPart == '&nbsp;' ? bigW : getSize(geByClass1('counter_anim_small_c', animEl, 'span'))[0]) : 0;

  if (constEndPart.length) {
    wrapEl.appendChild(constEl2 = ce('div', {className: 'counter_const inl_bl', innerHTML: constEndPart}));
  }

  if (!opts.noWrapWidth) {
    setStyle(wrapEl, {width: (constEl1 && getSize(constEl1)[0] || 0) + (constEl2 && getSize(constEl2)[0] || 0) + bigW + 0})
  }

  if (browser.csstransitions === undefined) {
    var b = browser, bv = floatval(b.version);
    browser.csstransitions =
      (b.chrome && bv >= 9.0) ||
      (b.mozilla && bv >= 4.0) ||
      (b.opera && bv >= 10.5) ||
      (b.safari && bv >= 3.2) ||
      (b.safari_mobile) ||
      (b.android);
  }
  var css3 = browser.csstransitions;
  setStyle(animwrapEl, {width: incr ? smallW : bigW});

  var onDone = function () {
    val(el, newCount || (opts.noSpaceIfEmpty ? '' : ' '));
    var next = data(el, 'nextCount');
    data(el, 'curCount', false);
    data(el, 'nextCount', false);
    if (typeof next == 'number' || opts.str && typeof next == 'string') {
      setTimeout(animateCount.pbind(el, next, opts), 0);
    }
    opts.onDone && opts.onDone();
  }, margin = vert ? {marginTop: incr ? 0 : -h} : {marginRight: incr ? -smallW : 0};
  if (css3) {
    getStyle(animwrapEl, 'width');
    addClass(animwrapEl, 'counter_css_anim_wrap');
    if (bigW != smallW) {
      setStyle(animwrapEl, {width: incr ? bigW : smallW});
    }
    if (vert) setStyle(animEl, margin);
    setTimeout(onDone, 300);

    if (opts.fadeMode) {
      setStyle(geByClass1('counter_anim_big', el), 'opacity', 1);
      setStyle(geByClass1('counter_anim_small', el), 'opacity', 0);
    }
  } else {
    if (bigW != smallW) {
      animate(animwrapEl, {width: incr ? bigW : smallW}, {duration: 100});
    }
    if (vert) {
      animate(animEl, margin, {duration: 300, transition: Fx.Transitions.easeOutCirc, onComplete: onDone});
    } else {
      setTimeout(onDone, 300);
    }
  }
}

/* Tooltips */

function _cleanHide(el) {
  if (el.temphide) {
    removeEvent(el, 'mouseout', el.temphide);
    removeAttr(el, 'temphide');
    removeAttr(el, 'showing');
  }
}

function showTooltip(el, opts) {
  _cleanHide(el);

  var showing = true;
  el.temphide = function() {
    showing = false;
  }
  addEvent(el, 'mouseout', el.temphide);

  if (opts.stat) stManager.add(opts.stat);
  stManager.add([jsc('web/tooltips.js'), 'tooltips.css'], function() {
    if (!showing) return;
    _cleanHide(el);

    if (!el.tt || !el.tt.el || opts.force) {
      tooltips.create(el, opts);
      if (opts.onCreate) opts.onCreate();
    }
    tooltips.show(el, opts);
  });
}

function showTitle(el, text, shift, opts) {
  el = ge(el);
  var tf = function() {
    return text || el.getAttribute('data-title');
  };
  if (browser.msie && browser.version < 9) {
    el.setAttribute('title', tf());
  } else {
    if (!shift) {
      var sx = Math.round(20 - getSize(el)[0] / 2);
      shift = [sx, 8];
    }
    showTooltip(el, extend({text: tf, shift: shift, black: 1}, opts));
  }
}

/* UI */

function topMsg(text, seconds, color) {
  if (!color) color = '#D6E5F7';
  if (!text) {
    hide('system_msg');
  } else {
    clearTimeout(window.topMsgTimer);
    var el = ge('system_msg');
    el.style.backgroundColor = color;
    el.innerHTML = text;
    show(el);
    if (seconds) {
      window.topMsgTimer = setTimeout(topMsg.pbind(false), seconds * 1000);
    }
  }
}

function topError(text, seconds) {
  if (text.message) {
    var e = text;
    text = '<b>JavaScript error:</b> ' + e.message;
    if (e.stack && __debugMode) text += '<br/>' + e.stack.replace(/\n/g, '<br/>');
  }
  topMsg(text, seconds, '#FFB4A3');
}

function setTitle(el, cntEl, txt) {
  el = ge(el);
  if (!el || el.titleSet) return;

  if (!cntEl) cntEl = el;
  if (cntEl.scrollWidth > cntEl.clientWidth) {
    el.setAttribute('title', trim(txt || el.innerText || el.textContent));
  } else {
    var b = geByTag1('b', el);
    if (b && b.scrollWidth > b.clientWidth) {
      el.setAttribute('title', trim(txt || el.innerText || el.textContent));
    } else {
      el.removeAttribute('title');
    }
  }
  el.titleSet = 1;
}

function setFavIcon() {}

function showGlobalPrg(img, opts) {
  var xy = getXY(img), sz = getSize(img), o = opts || {}, w = o.w || 32, h = o.h || 13, el = ge('global_prg');
  el.className = o.cls || 'progress';
  setStyle(el, {
    left: xy[0] + Math.floor((sz[0] - w) / 2) + intval(o.shift ? o.shift[0] : 0),
    top: xy[1] + Math.floor((sz[1] - h) / 2) + intval(o.shift ? o.shift[1] : 0),
    width: w, height: h,
    display: 'block',
    'z-index': (o.zIndex ? o.zIndex : null)
  });
  if (o.hide) {
    img.style.visibility = 'hidden';
  }
}

function callHub(func, count) {
  this.count = count || 1;
  this.done = function(c) {
    this.count -= c || 1;
    if (this.count <= 0) {
      func();
    }
  };
}
window.CallHub = callHub;

function isChecked(el) {
  el = ge(el);
  return hasClass(el, 'on') ? 1 : '';
}

function checkbox(el, v) {
  el = ge(el);
  if (!el || hasClass(el, 'disabled')) return;

  if (v === undefined) {
    v = !isChecked(el);
  }
  toggleClass(el, 'on', v);
  return false;
}

function disable(el, v) {
  el = ge(el);

  if (v === undefined) {
    v = !hasClass(el, 'disabled');
  }
  toggleClass(el, 'disabled', v);
  return false;
}

function autosizeSetup(el, options) {
  el = ge(el);
  if (!el) return;
  if (el.autosize) {
    el.autosize.update();
    return;
  }

  options.minHeight = intval(options.minHeight) || intval(getStyle(el, 'height'));
  options.maxHeight = intval(options.maxHeight);

  var elwidth = getSize(el)[0],
      fs = getStyle(el, 'fontSize'),
      lh;
  if (!elwidth) {
    elwidth = intval(getStyle(el, 'width'));
  }
  if (elwidth < 1) {
    elwidth = intval(getStyle(el, 'width', false));
  }
  if (fs.indexOf('em') > 0) {
    fs = floatval(fs) * vk.fs;
  }
  fs = intval(fs);
  el.autosize = {
    options: options,
    helper: ce('textarea', {className: 'ashelper'}, {
      width: elwidth,
      height: 10,
      fontFamily: getStyle(el, 'fontFamily'),
      fontSize: fs + 'px',
      lineHeight: (lh = getStyle(el, 'lineHeight')),
      boxSizing: getStyle(el, 'boxSizing'),
      padding: getStyle(el, 'padding')
    }),
    handleEvent: function(v, e) {
      var ch = e.charCode ? String.fromCharCode(e.charCode) : e.charCode;
      if (ch === undefined) {
        ch = String.fromCharCode(e.keyCode);
        if (e.keyCode == 10 || e.keyCode == 13) {
          ch = '\n';
        } else if (!browser.msie && e.keyCode <= 40) {
          ch = '';
        }
      }
      if (!ch) {
        return v;
      }
      if (!browser.msie) {
        return v.substr(0, el.selectionStart) + ch + v.substr(el.selectionEnd);
      }
      var r = document.selection.createRange();
      if (r.text) {
        v = v.replace(r.text, '');
      }
      return v + ch;
    },
    update: function(e) {
      var value = el.value;
      if (e && e.type != 'blur' && e.type != 'keyup' && (!browser.msie || e.type == 'keypress')) {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          value = el.autosize.handleEvent(value, e);
        }
      }
      if (!value) {
        value = ' ';
      }
      if (el.autosize.helper.value != value) {
        el.autosize.helper.value = value;
      }
      var opts = el.autosize.options,
          oldHeight = getSize(el, true)[1],
          newHeight = el.autosize.helper.scrollHeight, df;
      if (opts.exact && (df = newHeight % lh) > 2) {
        newHeight -= (df - 2);
      }
      if (newHeight < opts.minHeight) {
        newHeight = opts.minHeight;
      }
      var newStyle = {overflow: 'hidden'}, curOverflow = getStyle(el, 'overflow').indexOf('auto') > -1 ? 'auto' : 'hidden';
      if (opts.maxHeight && newHeight > opts.maxHeight) {
        newHeight = opts.maxHeight;
        extend(newStyle, {overflow: 'auto', overflowX: 'hidden'});
      }
      if (oldHeight != newHeight || curOverflow != newStyle.overflow) {
        newStyle.height = newHeight;
        setStyle(el, newStyle);
        if (isFunction(opts.onResize)) {
          opts.onResize(newHeight);
        }
      }
    }
  }
  if (options.exact) {
    if (lh == 'normal') lh = '120%';
    lh = intval((lh.indexOf('%') > 0) ? fs * intval(lh) / 100 : lh);
  }
  utilsNode.appendChild(el.autosize.helper);
  if (browser.opera_mobile) {
    setStyle(el, {overflow: 'hidden'});
    el.autosize.update();
    addEvent(el, 'blur', el.autosize.update);
  } else {
    addEvent(el, 'keydown keyup keypress', el.autosize.update);
    setTimeout(function() {
      setStyle(el, {overflow: 'hidden', resize: 'none'});
      el.autosize.update();
      var t = val(el); val(el, ' ', true); val(el, t, true);
    }, 0);
  }
}

function sbWidth() {
  if (window._sbWidth === undefined) {
    var t = ce('div', {innerHTML: '<div style="height: 75px;">1<br>1</div>'}, {
      overflowY: 'scroll',
      position: 'absolute',
      width: '50px',
      height: '50px'
    });
    bodyNode.appendChild(t);
    window._sbWidth = t.offsetWidth - t.firstChild.offsetWidth - 1;
    bodyNode.removeChild(t);
  }
  return window._sbWidth;
}

function val(input, value, nofire) {
  input = ge(input);
  if (!input) return;

  if (value !== undefined) {
    if (input.setValue) {
      input.setValue(value);
      !nofire && input.phonblur && input.phonblur();
    } else if (input.tagName == 'INPUT' || input.tagName == 'TEXTAREA') {
      input.value = value;
    } else if (input.emojiId !== undefined && window.Emoji) {
      Emoji.val(input, value);
    } else {
      input.innerHTML = value;
    }

    triggerEvent(input, 'valueChanged');
  }

  return input.getValue ? input.getValue() :
         (((input.tagName == 'INPUT' || input.tagName == 'TEXTAREA') ? input.value : input.innerHTML) || '');
}

function elfocus(el, from, to) {
  el = ge(el);
  try {
    el.focus();
    if (from === undefined || from === false) from = el.value.length;
    if (to === undefined || to === false) to = from;
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.collapse(true);
      range.moveEnd('character', to);
      range.moveStart('character', from);
      range.select();
    } else if (el.setSelectionRange) {
      el.setSelectionRange(from, to);
    }
  } catch(e) {}
}

function shortCurrency() {
  var rubEnabled = {};
  each(geByClass('_short_currency'), function() {
    var _short = this.getAttribute('data-short') || '',
        _short_len = winToUtf(_short).length,
        ff = getStyle(this, 'fontFamily') || 'tahoma,arial,sans-serif';
    if (!_short) return true;
    if (typeof rubEnabled[ff] === 'undefined') {
      var _test = '';
      for (var i = _short_len - 1; i >= 0; i--) {
        _test += '&#8399;';
      }
      var div = ce('div', {innerHTML: '<b>' + _short + '</b><b>' + _test + '</b>'},{fontFamily: ff, fontSize: '24px'});
      ge('utils').appendChild(div);
      rubEnabled[ff] = Math.abs(div.firstChild.offsetWidth - div.lastChild.offsetWidth) >= 3 * _short_len;
      re(div);
    }
    if (rubEnabled[ff]) {
      val(this, _short);
    }
  });
}

function notaBene(el, color, nofocus) {
  el = ge(el);
  if (!el) return;

  if (!nofocus) elfocus(el);
  var oldBack = data(el, 'back') || data(el, 'back', getStyle(el, 'backgroundColor'));
  var colors = {notice: '#FFFFE0', warning: '#FAEAEA'};
  setStyle(el, 'backgroundColor', colors[color] || color || colors.warning);
  setTimeout(animate.pbind(el, {backgroundColor: oldBack}, 300), 400);
}

function getCaretBoundingRect(node) {
    var rectNode = node.getBoundingClientRect(),
      rectCaret = null,
      range = null;
    if (rectNode.top === rectNode.bottom) return {left: 0, top: 0, bottom: 0};
    if (document.selection) { // using textRange
      range = document.selection.createRange();
      rectCaret = range.getClientRects() || [];
      if (!rectCaret.length) { // fix empty range
        range.text = '_';
        range.moveStart('character', -1);
        rectCaret = range.getClientRects();
        range.text = '';
      }
      rectCaret = rectCaret[rectCaret.length - 1];
    } else if (window.getSelection) { // using Range
      var sel = getSelection();
      range = sel.getRangeAt(0);
      if (range.collapsed) { // fix empty range
        var offset = range.startOffset;
        range.setStart(range.startContainer, 0);
        rectCaret = range.getClientRects();
        range.setStart(range.startContainer, offset);
      }
      rectCaret = rectCaret.length ? rectCaret[rectCaret.length - 1] : {right: rectNode.left, top: rectNode.top, bottom: rectNode.top};
    }
    return {
      left: rectCaret.right - rectNode.left,
      top: rectCaret.top - rectNode.top,
      bottom: rectCaret.bottom - rectNode.top
    };
};

function hasAccessibilityMode() {
  return !!(window.vk && vk.a11y);
}

/* UI Placeholder */

function __phCheck(el, opts, focus, blur) {
  opts = opts || {};
  var shown = el.phshown, ph = el.phcont,
      back = opts.back, editable = opts.editable,
      phColor = opts.phColor || '#8C8E91',
      activeColor = opts.activeColor || '#C0C8D0',
      hideBackAfter = opts.hideBackAfter,
      animateTimout = (opts.timeout || opts.timeout === 0) ? opts.timeout : 100,
      animatePeriod = opts.period || 200;
  if (editable) {
    var v = (el.textContent !== undefined ? el.textContent : el.innerText) || geByTag('img', el).length;
  } else {
    var v = el.value;
  }
  if (shown && (back && v || !back && (focus && !focus.type || v))) {
    hide(ph);
    el.phshown = false;
  } else if (!shown && !v && (back || blur)) {
    show(ph);
    el.phshown = true;
    if (browser.opera && blur) {
      el.setAttribute('placeholder', ''); el.removeAttribute('placeholder', '');
    }
  }
  if (back && !v) {
    if (focus && !focus.type) {
      var cb = hideBackAfter ? hide.pbind(ph.firstChild.firstChild) : null;
      clearTimeout(el.phanim);
      el.phanim = setTimeout(function() {
        animate(ph.firstChild.firstChild, {color: activeColor}, animatePeriod, cb);
      }, animateTimout);
    }
    if (blur) {
      clearTimeout(el.phanim);
      if (hideBackAfter) {
        show(ph.firstChild.firstChild);
      }
      el.phanim = setTimeout(function() {
        animate(ph.firstChild.firstChild, {color: phColor}, animatePeriod);
      }, animateTimout);
    }
  }
}

function placeholderSetup(id, opts) {
  var el = ge(id);
  var disabled = false;
  var ph;
  var o = opts ? clone(opts) : {};
  if (!el || (el.phevents && !o.reload) || !(ph = (el.getAttribute ? el.getAttribute('placeholder') : el.placeholder))) {
    return;
  }

  el.removeAttribute('placeholder');

  var pad = {};
  var dirs = ['Top', 'Bottom', 'Left', 'Right'];
  if (o.pad) {
    pad = o.pad;
  } else {
    if (o.fast) {
      for (var i = 0; i < 4; ++i) {
        pad['padding' + dirs[i]] = 3;
        pad['margin' + dirs[i]] = 0;
        pad['border' + dirs[i] + 'Width'] = 1;
      }
      extend(pad, o.styles || {});
    } else {
      var prop = [];
      for (var i = 0; i < 4; ++i) {
        prop.push('margin' + dirs[i]);
        prop.push('padding' + dirs[i]);
        prop.push('border' + dirs[i] + 'Width');
      }
      pad = getStyle(el, prop);
    }
    for (var i = 0; i < 4; ++i) { // add border if needed
      var mKey = 'margin' + dirs[i],
          bKey = 'border' + dirs[i] + 'Width';
      pad[mKey] = (intval(pad[mKey]) + intval(pad[bKey])) + 'px';
      delete(pad[bKey]);
    }
  }

  if (o.reload) {
    var prel = el.previousSibling;
    if (prel && hasClass(prel, 'input_back_wrap')) re(prel);
  }
  var b1 = el.phcont = el.parentNode.insertBefore(ce('div', {
    className: 'input_back_wrap no_select',
    innerHTML: '<div class="input_back"><div class="input_back_content' + (o.big ? ' big' : '') + '" style="width: ' + (getSize(el)[0] - 20) + 'px;">' + ph + '</div></div>'
  }), el);
  var b = domFC(b1);
  var c = domFC(b);
  setStyle(b, pad);

  var cv = __phCheck.pbind(el, o), checkValue = browser.mobile ? cv : function(f, b) {
    setTimeout(cv.pbind(f, b), 0);
  }

  if (browser.msie && browser.version < 8) {
    setStyle(b, {marginTop: 1});
  }
  el.phonfocus = function(hid) {
    if (disabled) {
      return;
    }
    el.focused = true;
    cur.__focused = el;
    if (hid === true) {
      setStyle(el, {backgroundColor: '#FFF'});
      hide(b);
    }
    checkValue(true, false);
  }
  el.phonblur = function() {
    if (disabled) {
      return;
    }
    cur.__focused = el.focused = false;
    show(b);
    checkValue(false, true);
  }
  el.phshown = true, el.phanim = null;

  if (el.value || (o.editable && ((el.textContent !== undefined ? el.textContent : el.innerText) || geByTag('img', el).length))) {
    el.phshown = false;
    hide(b1);
  }

  if (!browser.opera_mobile) {
    addEvent(b1, 'focus click', function(ev) {
      if (disabled) {
        return;
      }
      if (o.editableFocus) {
        setTimeout(o.editableFocus.pbind(el), 0);
        el.phonfocus();
      } else {
        el.blur(); el.focus();
      }
    });
    addEvent(el, 'focus'+(o.editable ? ' click' : ''), el.phonfocus);
    addEvent(el, 'keydown paste cut input', checkValue);
  }
  addEvent(el, 'blur', el.phonblur);
  el.check = checkValue;

  el.getValue = function() {
    return o.editable ? el.innerHTML : el.value;
  }

  el.setPlaceholder = function(ph) {
    geByClass1('input_back_content', b1).textContent = ph;
  },

  el.setDisabled = function(dis) {
    disabled = dis;
  },

  el.setValue = function(v) {
    if (o.editable) {
      el.innerHTML = v;
    } else {
      el.value = v;
    }
    __phCheck(el, o);
  }
  el.phevents = true;
  el.phonsize = function() {};

  if (o.global) return;

  if (!o.reload) {
    if (!cur.__phinputs) {
      cur.__phinputs = [];
      cur.destroy.push(function(__phinputs) {
        for (var i = 0, l = __phinputs.length; i < l; ++i) {
          removeData(__phinputs[i]);
        }
      }.pbind(cur.__phinputs));
    }
    cur.__phinputs.push(el);
  }
}

// placeholder fallback for IE and old opera
function placeholderInit(id, opts) {
  var el = ge(id);
  var ph;
  var o = opts ? clone(opts) : {};
  var custom = typeof(ce("input").placeholder) === 'undefined' || el && el.getAttribute && el.getAttribute('contenteditable');
  if (!el || (el.phevents && !o.reload) || !(ph = (el.getAttribute ? el.getAttribute('placeholder') : el.placeholder))) {
    return;
  }
  el.getValue = function() {
    return o.editable ? el.innerHTML : el.value;
  }
  el.setValue = function(v) {
    if (o.editable) {
      el.innerHTML = v;
    } else {
      el.value = v;
    }
    if (custom) {
      _phCheck(el, o);
    }
  }
  el.phonfocus = function() {}
  el.phonblur = function() {}
  if (!custom) return;

  function _phCheck(el, opts, focus, blur) {
    opts = opts || {};
    var shown = el.phshown,
        ph = el.phcont,
        editable = opts.editable;
    if (editable) {
      var v = (el.textContent !== undefined ? el.textContent : el.innerText);
      if (v && browser.opera && v.match(/^[ ]+$/)) {
        v = '';
      }
      if (!v) {
        v = geByTag('img', el).length > 0;
      }
      if (!v) {
        v = geByTag('br', el).length > 1;
      }
    } else {
      var v = el.value;
    }
    if (shown && v) {
      hide(ph);
      el.phshown = false;
    } else if (!shown && !v) {
      show(ph);
      el.phshown = true;
      if (browser.opera && blur) {
        el.setAttribute('placeholder', ''); el.removeAttribute('placeholder', '');
      }
    }
  }


  el.removeAttribute('placeholder');

  if (o.reload) {
    var prel = domNS(el);
    if (prel && hasClass(prel, 'placeholder')) re(prel);
  }
  var b1 = el.phcont = domInsertAfter(ce('div', {
    className: 'placeholder',
    innerHTML: '<div class="ph_input"><div class="ph_content">' + ph + '</div></div>'
  }), el);
  var b = domFC(b1);
  var c = domFC(b);

  var cv = _phCheck.pbind(el, o), checkValue = browser.mobile ? cv : function(f, b) {
    setTimeout(cv.pbind(f, b), 0);
  }

  el.phonfocus = function(hid) {
    el.focused = true;
    cur.__focused = el;
    checkValue(true, false);
  }
  el.phonblur = function() {
    cur.__focused = el.focused = false;
    checkValue(false, true);
  }
  el.phshown = true;

  if (el.value || (o.editable && ((el.textContent !== undefined ? el.textContent : el.innerText) || geByTag('img', el).length))) {
    el.phshown = false;
    hide(b1);
  }

  if (!browser.opera_mobile) {
    addEvent(b1, 'focus click', function(ev) {
      if (o.editableFocus) {
        setTimeout(o.editableFocus.pbind(el), 0);
        el.phonfocus();
      } else {
        el.blur(); el.focus();
      }
    });
    addEvent(el, 'focus' + (o.editable ? ' click' : ''), el.phonfocus);
    addEvent(el, 'keydown paste cut input', checkValue);
  }
  addEvent(el, 'blur', el.phonblur);
  el.check = checkValue;

  el.phevents = true;
  el.phonsize = function() {};

  if (o.global) return;

  if (!o.reload) {
    if (!cur.__phinputs) {
      cur.__phinputs = [];
      cur.destroy.push(function() {
        if (!cur.__phinputs) return;
        for (var i = 0, l = cur.__phinputs.length; i < l; ++i) {
          removeData(cur.__phinputs[i]);
        }
      });
    }
    cur.__phinputs.push(el);
  }
}

/* UI Boxes */

function requestBox(box, onDone, onFail) {
  box.setOptions({onHide: onFail});
  box.onDone = function() {
    box.setOptions({onHide: false});
    onDone();
  }
  return box;
}

function activateMobileBox(opts) {
  return requestBox(showBox('activation.php', {
    act: 'activate_mobile_box',
    hash: opts.hash,
    captcha: opts.acceptCaptcha ? 1 : ''
  }), function() {
    vk.nophone = 0;
    opts.onDone();
  }, opts.onFail);
}

// Layers

window._layerAnim = false;
window.layers = {
  sh: (!_layerAnim || browser.msie || browser.iphone) ? function(el, done) {
    show(el);
    if (done) done();
  } : function(el, done) {
    fadeIn(el, 200, done);
  },
  hd: (!_layerAnim || browser.msie || browser.iphone) ? function(el, done) {
    hide(el);
    if (done) done();
  } : function(el, done) {
    fadeOut(el, 200, done);
  },
  visible: false,
  _show: function(el, con, opacity, color) {
    setStyle(el, {opacity: opacity || '', backgroundColor: color || ''});
    if (!layers.visible) {
      toggleFlash();
      if (browser.mozilla) {
        window._oldScroll = htmlNode.scrollTop;
        pageNode.style.height = (_oldScroll + (window.lastWindowHeight || 0)) + 'px';
        pageNode.style.marginTop = -_oldScroll + 'px';
      } else if (!browser.msie6) {
        (browser.msie7 ? htmlNode : bodyNode).style.overflow = 'hidden';
      }
    }
    layers.visible = true;
    addClass(bodyNode, 'layers_shown');
    if (con.visibilityHide) {
      removeClass(con, 'box_layer_hidden');
    } else {
      show(con);
    }
    layers.sh(el);
  },
  _hide: function(el, con) {
    var done = function() {
      if (con && con.visibilityHide) {
        addClass(con, 'box_layer_hidden');
      } else {
        hide(con);
      }
      if ((!isVisible(boxLayerWrap) || boxLayerWrap.visibilityHide)
        && ((window.mvcur && mvcur.minimized)
          || !isVisible(window.mvLayerWrap))
        && !isVisible(window.wkLayerWrap)) {
        layers.visible = false;
        removeClass(bodyNode, 'layers_shown');
        toggleFlash(true);
        if (browser.mozilla) {
          pageNode.style.height = 'auto';
          pageNode.style.marginTop = '0px';
          if (window._oldScroll) {
            htmlNode.scrollTop = _oldScroll;
          }
        } else if (!browser.msie6) {
          (browser.msie7 ? htmlNode : bodyNode).style.overflow = 'auto';
        }
      }
    }
    layers.hd(el, done);
  }
};

// Message box

window._message_box_guid = 0;
window._message_boxes = [];
window._show_flash_timeout = 0;
var __bq = boxQueue = {
  hideAll: function(force, noLoc) {
    if (force) {
      while (__bq.count()) {
        __bq.hideLast();
      }
      return;
    }
    if (__bq.count()) {
      var box = _message_boxes[__bq._boxes.pop()];
      box._in_queue = false;
      box._hide(false, false, noLoc);
    }
    while (__bq.count()) {
      var box = _message_boxes[__bq._boxes.pop()];
      box._in_queue = false;
    }
  },
  hideLast: function(check, e) {
    if (__bq.count()) {
      var box = _message_boxes[__bq._boxes[__bq.count() - 1]];
      if (check === true && (box.changed || __bq.skip || e && e.target && e.target.tagName && e.target.tagName.toLowerCase() != 'input' && cur.__mdEvent && e.target != cur.__mdEvent.target)) {
        __bq.skip = false;
        return;
      }
      box.hide();
    }
    if (e && e.type == 'click') return cancelEvent(e);
  },
  hideBGClick: function(e) {
    if (e && e.target && /^box_layer/.test(e.target.id)) {
      __bq.hideLast();
    }
  },
  count: function() {
    return __bq._boxes.length;
  },
  _show: function(guid) {
    var box = _message_boxes[guid];
    if (!box || box._in_queue) return;
    if (__bq.count()) {
      _message_boxes[__bq._boxes[__bq.count() - 1]]._hide(true, true);
    } else if (window.tooltips) {
      tooltips.hideAll();
    }
    box._in_queue = true;
    var notFirst = __bq.count() ? true : false;
    __bq.curBox = guid;
    box._show(notFirst || __bq.currHiding, notFirst);
    __bq._boxes.push(guid);
  },
  _hide: function(guid) {
    var box = _message_boxes[guid];
    if (!box || !box._in_queue || __bq._boxes[__bq.count() - 1] != guid || !box.isVisible()) return;
    box._in_queue = false;
    __bq._boxes.pop();
    box._hide(__bq.count() ? true : false);
    if (__bq.count()) {
      var prev_guid = __bq._boxes[__bq.count() - 1];
      __bq.curBox = prev_guid;
      _message_boxes[prev_guid]._show(true, true, true);
    }
  },
  _boxes: [],
  curBox: 0
};

__bq.hideLastCheck = __bq.hideLast.pbind(true);

function curBox() {
  var b = _message_boxes[__bq.curBox];
  return (b && b.isVisible()) ? b : null;
}

if (!browser.mobile) {
  addEvent(document, 'keydown', function(e) {
    if (e.keyCode == KEY.ESC && __bq.count()) {
      __bq.hideLast();
      return false;
    }
  });
}

function boxRefreshCoords(cont) {
  var height = window.innerHeight || document.documentElement.clientHeight || boxLayerBG.offsetHeight;
  var top = browser.mobile ? intval(window.pageYOffset) : 0;
  containerSize = getSize(cont);
  cont.style.marginTop = Math.max(10, top + (height - containerSize[1]) / 3) + 'px';
}

function MessageBox(options, dark) {
  var defaults = {
    title: false,
    titleControls: '',
    width: 450,
    height: 'auto',
    animSpeed: 0,
    bodyStyle: '',
    grey: false,
    white: false,
    selfDestruct: true,
    progress: false,
    hideOnBGClick: false,
    hideButtons: false,
    onShow: false,
    onHideAttempt: false,
    onBeforeHide: false,
    onHide: false,
    onClean: false,
    onDestroy: false
  };

  options = extend(defaults, options);

  var buttonsCount = 0,
      boxContainer, boxBG, boxLayout;
  var boxTitleWrap, boxTitle, boxTitleControls, boxCloseButton, boxBody;
  var boxControlsWrap, boxControls, boxButtons, boxProgress, boxControlsText;
  var guid = _message_box_guid++, visible = false, btns = {'ok' : [], 'cancel' : []};

  if (!options.progress) options.progress = 'box_progress' + guid;

  var controlsStyle = options.hideButtons ? ' style="display: none"' : '';
  boxContainer = ce('div', {
    className: 'popup_box_container'+(options.containerClass ? ' '+options.containerClass : ''),
    innerHTML: '\
      <div class="box_layout" onclick="__bq.skip=true;">\
      <div class="box_title_wrap"><div class="box_x_button"></div><div class="box_title_controls"></div><div class="box_title"></div></div>\
      <div class="box_body" style="' + options.bodyStyle + '"></div>\
      <div class="box_controls_wrap"' + controlsStyle + '><div class="box_controls">\
      <table cellspacing="0" cellpadding="0" class="fl_r"><tr></tr></table>\
      <div class="progress" id="' + options.progress + '"></div>\
      <div class="box_controls_text"></div>\
      </div></div>\
      </div>'
  }, {
    display: 'none'
  });
  hide(boxContainer);

  boxLayout = domFC(boxContainer);

  boxTitleWrap = domFC(boxLayout);
  boxCloseButton = domFC(boxTitleWrap);
  boxTitle = domLC(boxTitleWrap);
  boxTitleControls = domNS(boxCloseButton);

  if (options.noCloseButton) hide(boxCloseButton);

  boxBody = domNS(boxTitleWrap);

  boxControlsWrap = domNS(boxBody);
  boxControls = domFC(boxControlsWrap);
  boxButtons = domFC(boxControls);
  boxProgress = domNS(boxButtons);
  boxControlsText = domNS(boxProgress);

  boxLayer.appendChild(boxContainer);

  refreshBox();
  boxRefreshCoords(boxContainer);

  var emitter = new EventEmitter();

  // Refresh box properties
  function refreshBox() {
    // Set title
    if (options.title) {
      boxTitle.innerHTML = options.title;
      removeClass(boxBody, 'box_no_title');
      show(boxTitleWrap);
    } else {
      addClass(boxBody, 'box_no_title');
      hide(boxTitleWrap);
    }
    if (options.titleControls) {
      boxTitleControls.innerHTML = options.titleControls;
    }
    toggleClass(boxBody, 'box_no_buttons', options.hideButtons);
    toggleClass(boxTitleWrap, 'box_grey', options.grey);
    toggleClass(boxTitleWrap, 'box_white', options.white);

    // Set box dimensions
    boxContainer.style.minWidth = typeof(options.width) == 'string' ? options.width : options.width + 'px';
    boxContainer.style.width = typeof(options.width) == 'string' ? options.width : options.width + 'px';
    boxContainer.style.height = typeof(options.height) == 'string' ? options.height : options.height + 'px';
  }

  // Add button
  function addButton(label, onclick, type) {
    ++buttonsCount;
    var btnClass = 'flat_button', type;
    if (type == 'no' || type == 'gray') {
      btnClass += ' secondary';
      type = 'cancel';
    } else {
      type = 'ok';
    }

    var handler = function() {
      emitter.emit(type, retBox);
      onclick.apply(null, arguments);
    }

    var buttonWrap = ce('button', {
      className: btnClass,
      innerHTML: label
    }), row = boxButtons.rows[0], cell = row.insertCell(0);
    cell.appendChild(buttonWrap);
    createButton(buttonWrap, handler);
    btns[type].push(buttonWrap);

    return buttonWrap;
  }

  // Add custom controls text
  function setControlsText(text) {
    boxControlsText.innerHTML = text;
  }

  // Remove buttons
  function removeButtons() {
    var row = boxButtons.rows[0];
    while (row.cells.length) {
      cleanElems(row.cells[0]);
      row.deleteCell(0);
    }
    btns.ok.length = btns.cancel.length = 0;
  }

  var destroyMe = function() {
    if (isFunction(options.onClean)) options.onClean();
    if (isFunction(options.onDestroy)) options.onDestroy();
    removeButtons();
    cleanElems(boxContainer, boxCloseButton, boxTitleWrap, boxControlsWrap);
    boxLayer.removeChild(boxContainer);
    delete _message_boxes[guid];
    if (options.onWidgetHide) {
      options.onWidgetHide();
    }
  }

  // Hide box
  var hideMe = function(showingOther, tempHiding, noLoc) {
    if (!visible) return;
    visible = false;

    var speed = (showingOther === true) ? 0 : options.animSpeed;

    if (options.hideOnBGClick) {
      removeEvent(document, 'click', __bq.hideBGClick);
    }

    if (isFunction(options.onBeforeHide)) {
      options.onBeforeHide();
    }

    if (_layerAnim && !showingOther) {
      layers.boxhide();
    }

    var onHide = function() {
      if (__bq.currHiding == _message_boxes[guid]) {
        __bq.currHiding = false;
      }
      if (!_layerAnim && !_message_boxes[guid].shOther && !showingOther) {
        layers.boxhide();
      }
      if (!tempHiding && options.selfDestruct) {
        destroyMe();
      } else {
        hide(boxContainer);
      }
      if (isFunction(options.onHide)) {
        options.onHide(noLoc);
      }
    }
    if (speed > 0) {
      __bq.currHiding = _message_boxes[guid];
      fadeOut(boxContainer, speed, onHide);
    } else {
      onHide();
    }
  }

  // Show box
  function showMe(noAnim, notFirst, isReturned) {
    if (visible || !_message_boxes[guid]) return;
    visible = true;

    var speed = (noAnim === true || notFirst) ? 0 : options.animSpeed;

    if (options.hideOnBGClick) {
      addEvent(document, 'click', __bq.hideBGClick);
    }

    // Show blocking background
    if (!notFirst) {
      layers.boxshow();
    }

    if (__bq.currHiding) {
      __bq.currHiding.shOther = true;
      var cont = __bq.currHiding.bodyNode.parentNode.parentNode;
      data(cont, 'tween').stop(true);
    }

    // Show box
    if (speed > 0) {
      fadeIn(boxContainer, speed);
    } else {
      show(boxContainer);
    }

    boxRefreshCoords(boxContainer);
    if (options.onShow) {
      options.onShow(isReturned);
    }

    _message_box_shown = true;
  }

  addEvent(boxCloseButton, 'click', __bq.hideLast);

  var retBox = _message_boxes[guid] = {
    guid: guid,
    _show: showMe,
    _hide: hideMe,

    bodyNode: boxBody,
    titleWrap: boxTitleWrap,
    btns: btns,

    // Show box
    show: function() {
      __bq._show(guid);
      return this;
    },
    progress: boxProgress,
    showCloseProgress: addClass.pbind(boxTitleWrap, 'box_loading'),
    hideCloseProgress: removeClass.pbind(boxTitleWrap, 'box_loading'),
    showProgress: function() {
      hide(boxControlsText);
      show(boxProgress);
    },
    hideProgress: function() {
      hide(boxProgress);
      show(boxControlsText);
    },

    // Hide box
    hide: function(attemptParam) {
      if (isFunction(options.onHideAttempt) && !options.onHideAttempt(attemptParam)) return false;
      __bq._hide(guid);
      return true;
    },

    isVisible: function() {
      return visible;
    },
    bodyHeight: function() {
      return getStyle(boxBody, 'height');
    },

    // Insert html content into the box
    content: function(html) {
      if (options.onClean) options.onClean();
      boxBody.innerHTML = html;
      boxRefreshCoords(boxContainer);
      refreshBox();
      return this;
    },

    emit: function(ev, arg) {
      emitter.emit(ev, arg);
    },

    // Add button
    addButton: function(label, onclick, type, returnBtn) {
      var btn = addButton(label, onclick ? onclick : this.hide, type);
      return (returnBtn) ? btn : this;
    },

    setButtons: function(yes, onYes, no, onNo) {
      var b = this.removeButtons();
      if (!yes) return b.addButton(getLang('box_close'));
      b.addButton(yes, onYes)
      if (no) b.addButton(no, onNo, 'no');
      return b;
    },

    // Set controls text
    setControlsText: setControlsText,

    // Remove buttons
    removeButtons: function() {
      removeButtons();
      return this;
    },

    destroy: destroyMe,

    getOptions: function() {
      return options;
    },

    on: function(ev, handler) {
      emitter.on(ev, handler);
    },

    once: function(ev, handler) {
      emitter.once(ev, handler);
    },

    // Update box options
    setOptions: function(newOptions) {
      if (options.hideOnBGClick) {
        removeEvent(document, 'click', __bq.hideBGClick);
      }
      options = extend(options, newOptions);
      if ('bodyStyle' in newOptions) {
        var items = options.bodyStyle.split(';');
        for (var i = 0, l = items.length; i < l; ++i) {
          var name_value = items[i].split(':');
          if (name_value.length > 1 && name_value[0].length) {
            boxBody.style[trim(name_value[0])] = trim(name_value[1]);
            if (boxBody.style.setProperty) {
              boxBody.style.setProperty(trim(name_value[0]), trim(name_value[1]), '');
            }
          }
        }
      }
      if (options.hideOnBGClick) {
        addEvent(document, 'click', __bq.hideBGClick);
      }
      toggle(boxControlsWrap, !options.hideButtons);
      refreshBox();
      if (!options.noRefreshCoords) {
        boxRefreshCoords(boxContainer);
      }
      return this;
    },
    evalBox: function(js, url, params) {
      var scr = '((function() { return function() { var box = this; ' + (js || '') + ';}; })())'; // IE :(
      if (__debugMode) {
        var fn = eval(scr);
        fn.apply(this, [url, params]);
      } else try {
        var fn = eval(scr);
        fn.apply(this, [url, params]);
      } catch (e) {
        topError(e, {dt: 15, type: 7, url: url, query: params ? ajx2q(params) : undefined, js: js});
      }
    }
  }
  return retBox;
}

function showBox(url, params, options, e) {
  if (checkEvent(e)) return false;

  var opts = options || {};
  var boxParams = opts.params || {};
  if (opts.containerClass) {
    boxParams.containerClass = opts.containerClass;
  }
  var box = new MessageBox(boxParams);
  var p = {
    onDone: function(title, html, js, data) {
      if (!box.isVisible()) {
        if (opts.onDone) opts.onDone(box, data);
        return;
      }

      function processResponse() {
        show(boxLayerBG);
        addClass(bodyNode, 'layers_shown');
        box.setOptions({title: title, hideButtons: boxParams.hideButtons || false});
        if (opts.showProgress) {
          box.show();
        } else {
          show(box.bodyNode);
        }
        box.content(html);
        box.evalBox(js, url, params);
        if (opts.onDone) opts.onDone(box, data);
      }

      if (__debugMode) {
          processResponse();
      } else {
        try {
          processResponse();
        } catch(e) {
          topError(e, {dt: 15, type: 103, url: url, query: ajx2q(params), answer: Array.prototype.slice.call(arguments).join('<!>')});
          if (box.isVisible()) box.hide();
        }
      }
    },
    onFail: function(error) {
      box.failed = true;
      setTimeout(box.hide, 0);
      if (isFunction(opts.onFail)) return opts.onFail(error);
    },
    cache: opts.cache,
    stat: opts.stat,
    fromBox: true
  };

  if (opts.prgEl) {
    opts.showProgress = showGlobalPrg.pbind(opts.prgEl, {cls: opts.prgClass, w: opts.prgW, h: opts.prgH, hide: true});
    opts.hideProgress = hide.pbind('global_prg');
  }
  if (opts.showProgress) {
    extend(p, {
      showProgress: opts.showProgress,
      hideProgress: opts.hideProgress
    });
  } else {
    box.setOptions({title: false, hideButtons: true}).show();
    if (__bq.count() < 2) {
      hide(boxLayerBG);
      removeClass(bodyNode, 'layers_shown');
    }
    hide(box.bodyNode);
    p.showProgress = function() {
      show(boxLoader);
      boxRefreshCoords(boxLoader);
    }
    p.hideProgress = hide.pbind(boxLoader);
  }
  box.removeButtons().addButton(getLang('global_close'));

  ajax.post(url, params, p);
  return box;
}

function showTabbedBox(url, params, options, e) {
  options = options || {};
  options.stat = options.stat || [];
  options.stat.push(jsc('web/box.js'), 'boxes.css');
  return showBox(url, params, options, e)
}

function showFastBox(o, c, yes, onYes, no, onNo) {
  return (new MessageBox(typeof(o) == 'string' ? {title: o} : o)).content(c).setButtons(yes, onYes, no, onNo).show();
}

function showCaptchaBox(sid, dif, box, o) {
  var done = function(e) {
    if (e && e.keyCode !== undefined && e.keyCode != 10 && e.keyCode != 13) return;
    var key = geByTag1('input', box.bodyNode);
    if (!trim(key.value) && e !== true) {
      elfocus(key);
      return;
    }
    var imgs = geByTag1('img', box.bodyNode);
    var captcha = imgs[0], loader = imgs[1];
    removeEvent(key);
    removeEvent(captcha);
    show(geByClass1('progress', box.bodyNode));
    hide(key);
    o.onSubmit(sid, key.value);
  }
  var was_box = box ? true : false;
  var difficulty = intval(dif) ? '' : '&s=1';
  var imgSrc = o.imgSrc || '/captcha.php?sid=' + sid + difficulty;
  if (!was_box) {
    var content = '\
  <div class="captcha">\
    <div><img src="' + imgSrc + '"/></div>\
    <div><input type="text" class="big_text" maxlength="7" placeholder="' + getLang('global_captcha_input_here') + '" /><div class="progress" /></div></div>\
  </div>' + (o.addText || '');
    box = showFastBox({
      title: getLang('captcha_enter_code'),
      width: 305,
      onHide: o.onHide,
      onDestroy: o.onDestroy || false
    }, content, getLang('captcha_send'), function() {
      box.submit();
    }, getLang('captcha_cancel'), function() {
      var key = geByTag1('input', box.bodyNode);
      var captcha = geByTag1('img', box.bodyNode);
      removeEvent(key);
      removeEvent(captcha);
      box.hide();
    });
  }
  box.submit = done.pbind(true);
  var key = geByTag1('input', box.bodyNode);
  var captcha = geByTag1('img', box.bodyNode);
  if (was_box) {
    key.value = '';
    captcha.src = '/captcha.php?sid=' + sid + difficulty;
    hide(geByClass1('progress', box.bodyNode));
  }
  show(key);
  addEvent(key, 'keypress', done);
  addEvent(captcha, 'click', function() {
    this.src = '/captcha.php?sid=' + sid + difficulty + '&v=' + irand(1000000, 2000000);
  });
  elfocus(key);
  return box;
}

function showReCaptchaBox(key, lang, box, o) {
  window.recaptchaResponse = function(response) {
    o.onSubmit(response);
  };
  var was_box = box ? true : false,
      loaded = !!window.grecaptcha;
  if (!was_box) {
    if (!loaded) {
      window.recaptchaCallback = function() {
        var _box = curBox();
        if (!_box) return;
        var wrapId = geByClass1('recaptcha', _box.bodyNode);
        if (!wrapId) return;
        val(wrapId, '');
        grecaptcha.render(wrapId, {
          sitekey: key,
          callback: recaptchaResponse
        });
      }
      headNode.appendChild(ce('script', {
        type: 'text/javascript',
        src: 'https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit&hl=' + lang
      }));
    }

    var content = '<div class="recaptcha"></div>' + (o.addText || '');
    box = showFastBox({
      title: getLang('global_recaptcha_title'),
      width: 354,
      onHide: o.onHide,
      onDestroy: o.onDestroy || false
    }, content, getLang('captcha_cancel'));
    var wrap = geByClass1('recaptcha', box.bodyNode);
    wrap.id = 'recaptcha' + (box.guid ? box.guid : '0');
    showProgress(wrap);
  }
  if (was_box && loaded) {
    grecaptcha.reset();
  } else if (loaded) {
    recaptchaCallback();
  }
  box.changed = true;
  return box;
}

function showDoneBox(msg, opts) {
  if (!opts) {
    opts = {};
  }
  var l = (opts.w || 380) + 20;
  var style = opts.w ? ' style="width: ' + opts.w + 'px;"' : '';
  var pageW = bodyNode.offsetWidth;
  var resEl = ce('div', {
    className: 'top_result_baloon_wrap fixed ' + (opts.className || ''),
    innerHTML: '<div class="top_result_baloon"' + style + '>' + msg + '</div>',
  }, { left: (pageW - l) / 2 });
  if (opts.parentEl) {
    geByClass1(opts.parentEl).appendChild(resEl);
  } else {
    bodyNode.insertBefore(resEl, bodyNode.firstChild);
  }
  var height = window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : boxLayerBG.offsetHeight);
  var top = browser.mobile ? intval(window.pageYOffset) : 0;
  var containerSize = getSize(resEl);
  resEl.style.top = Math.max(10, top + (height - containerSize[1]) / 3) + 'px';
  var out = opts.out || 2000;
  var start = new Date();
  var _fadeOut = function() {
    if (out < 0) {
      return;
    }
    window.doneBoxTO = setTimeout(function() {
      if (opts.permit && !opts.permit()) {
        _fadeOut();
        return;
      }
      fadeOut(resEl.firstChild, 500, function() {
        re(resEl);
        if (opts.callback) {
          opts.callback();
        }
      });
    }, out);
  }
  addEvent(resEl, 'mouseenter', function() {
    clearTimeout(window.doneBoxTO);
    out -= new Date() - start;
  });
  addEvent(resEl, 'mouseleave', function() {
    start = new Date();
    _fadeOut();
  });
  _fadeOut();
  return resEl;
}

/**
 Simple tooltips.

 el - object which tootlip should point to
 opts
 content         - (required) string or dom element for tooltip content
 id              - custom id for tootlip
 cls             - custom class for tooltip
 autoShow        - show/hide tooltip on mouse enter/leave, if false - on mouse click (default: true)
 customShow      - external code sets visibility of tooltip
 delay           - delay for tooltip show (default: 100)
 appendTo        - appends tooltip to particular element
 appendToParent  - appends tooltip to closest positioned element (default: false)
 offset          - custom offset for tooltip (default: [0, 0]). Array or function returning array
 shift           - custom array shift
 elClassWhenShown - class that will be added to el when tooltip is shown
 setPos          - function for calculation tooltip custom position. forceSide parameter is required
 noHideOnClick   - no hide tooltip after show by click. work only with autoShow=false (default: false)
 type            - ElementTooltip.TYPE_VERTICAL / ElementTooltip.TYPE_HORIZONTAL (default vertical)
 forceSide       - forces tooltip to be shown on particular side top/bottom/left/right. It ignores type option.
 defaultSide
 align           - align of the tooltip center/left/right (center by default, supports rtl).
 width           - custom tooltip height (function or int value)
 noBorder
 arrowSize       - 'mini', normal', 'big'

 onShow          - callback fired when tooltip is shown
 onHide          - callback fired when tooltip is hidden
 onFirstTimeShow - callback fired when tooltip is shown first time (onShow also will be called next)
 */
function ElementTooltip(el, opts) {
  if (this.constructor != ElementTooltip) {
    throw new Error('ElementTooltip was called without \'new\' operator');
  }

  el = ge(el);
  if (!el || !el.nodeType) {
    throw new Error('First argument not a DOM element');
  }

  if (data(el, 'ett')) { // already have tt for this element
    return data(el, 'ett');
  }

  this._opts = extend({
    delay: 100,
    offset: [0, 0],
    shift: 0,
    type: ElementTooltip.TYPE_VERTICAL,
    id: '',
    cls: '',
    width: null,
    appendToParent: false,
    autoShow: true,
    autoHide: false,
    noHideOnClick: false,
    arrowSize: 'normal',
    customShow: false,
    align: ElementTooltip.ALIGN_CENTER,
  }, opts);

  if (this._opts.customShow) {
    this._opts.autoShow = false
  }

  if (!this._opts.defaultSide) {
    this._opts.defaultSide = this._opts.type == ElementTooltip.TYPE_VERTICAL ? 'top' : 'left'
  }

  this._opts.cls += ' eltt_arrow_size_' + this._opts.arrowSize
  this._opts.cls += ' eltt_align_' + this._opts.align;

  if (this._opts.noBorder) {
    this._opts.cls += ' eltt_noborder'
  }

  if (this._opts.type != ElementTooltip.TYPE_VERTICAL) {
    delete this._opts.shift
  }

  if (this._opts.setPos && !this._opts.forceSide) {
    throw new Error('forceSide parameter should be set if you use setPos');
  }

  if (this._opts.forceSide) {
    this._opts.type = inArray(this._opts.forceSide, ['top', 'bottom']) ? ElementTooltip.TYPE_VERTICAL : ElementTooltip.TYPE_HORIZONTAL;
  }

  this._appendToEl = this._opts.appendTo ? this._opts.appendTo : (this._opts.appendToParent ? domClosestPositioned(el, {noOverflow: true}) : el);

  this._arrowSize = {
    'mini': ElementTooltip.ARROW_SIZE_MINI,
    'normal': ElementTooltip.ARROW_SIZE_NORMAL,
    'big': ElementTooltip.ARROW_SIZE_BIG,
  }[this._opts.arrowSize]

  if (this._opts.forceSide) {
    this._opts.type = ElementTooltip.getType(this._opts.forceSide)
  }

  this._el = el;
  data(this._el, 'ett', this);

  this._initEvents(el);

  this._clearTimeouts();

  this._isShown = false;
}

ElementTooltip.TYPE_VERTICAL = 0;
ElementTooltip.TYPE_HORIZONTAL = 1;
ElementTooltip.FADE_SPEED = 100; // keep in sync with @eltt_fade_speed
ElementTooltip.ARROW_SIZE = 6;

ElementTooltip.ARROW_SIZE_MINI = 9;
ElementTooltip.ARROW_SIZE_NORMAL = 8;
ElementTooltip.ARROW_SIZE_BIG = 16;

ElementTooltip.ALIGN_LEFT = 'left';
ElementTooltip.ALIGN_CENTER = 'center';
ElementTooltip.ALIGN_RIGHT = 'right';

ElementTooltip.prototype._initEvents = function(el) {
  if (this._opts.autoShow) {
    addEvent(el, 'mouseenter', this._el_me_event = this._onMouseEnter.bind(this));
  }

  if (this._opts.autoShow || this._opts.autoHide) {
    addEvent(el, 'mouseleave', this._el_ml_event = this._onMouseLeave.bind(this));
  }

  if (!this._opts.autoShow && !this._opts.customShow) {
    addEvent(el, 'click', this._el_c_event = function() {
      if (this._isShown && this._opts.noHideOnClick) return;
      this.toggle(!this._isShown)
    }.bind(this));
  }
}

ElementTooltip.prototype._onMouseEnter = function(event) {
  clearTimeout(this._hto);
  this._hto = false; // prevent hide

  if (!this._isShown && this._opts.autoShow) {
    clearTimeout(this._reTimeout); this._reTimeout = false;

    clearTimeout(this._sto);
    this._sto = setTimeout(this.show.bind(this), this._opts.delay);
  }
}

ElementTooltip.prototype._onMouseLeave = function(event) {
  this._clearTimeouts();
  this._hto = setTimeout(this._hide.bind(this), 200);
}

ElementTooltip.prototype._onMouseWindowClick = function(event) {
  var node = event.target;
  while(node && node != this._ttel && node != document.body && node != this._el) {
    node = domPN(node);
  }

  if (hasClass(event.target, '_ap_layer__close')) {
    return
  }

  if (!node || node == document.body) {
    this.hide(true);
    return cancelEvent(event);
  }
}

ElementTooltip.prototype.destroy = function() {
  this._el_me_event && removeEvent(this._el, 'mouseenter', this._el_me_event);
  this._el_ml_event && removeEvent(this._el, 'mouseleave', this._el_ml_event);
  this._el_c_event && removeEvent(this._el, 'click', this._el_c_event);

  this._clearTimeouts();
  removeData(this._el, 'ett');
  re(this._ttel);
  this._ev_wclick && removeEvent(document, 'mousedown', this._ev_wclick);
  var contentEl;
  if (this._ttel) {
    contentEl = geByClass1('_eltt_content', this._ttel);
  }
  this._opts.onDestroy && this._opts.onDestroy(contentEl);
}

ElementTooltip.prototype.hide = function(byElClick) {
  this._hide(byElClick);
}

ElementTooltip.prototype._onTooltipMouseEnter = function(ev) {
  this._clearTimeouts();
}

ElementTooltip.prototype._onTooltipMouseLeave = function(ev) {
  this._onMouseLeave();
}

ElementTooltip.prototype.build = function() {
  if (!this._ttel) {
    this._ttel = se('<div class="eltt ' + (this._opts.cls || '') + '" id="' + this._opts.id + '"><div class="eltt_arrow_back _eltt_arrow_back"><div class="eltt_arrow"></div></div><div class="eltt_content _eltt_content"></div></div>');
    this._ttArrowEl = geByClass1('_eltt_arrow_back', this._ttel)

    var contentWrap = geByClass1('_eltt_content', this._ttel)

    if (this._opts.content) {
      if (isString(this._opts.content)) {
        contentWrap.innerHTML = this._opts.content;
      } else {
        contentWrap.appendChild(this._opts.content);
      }
    }

    this._appendToEl.appendChild(this._ttel);
  }
}

ElementTooltip.prototype.show = function() {
  if (this._isShown) {
    this.updatePosition();
    return
  }

  this._clearTimeouts();

  if (!this._ttel) {
    this.build();

    if (this._opts.autoShow || this._opts.autoHide) {
      addEvent(this._ttel, 'mouseenter', this._ev_ttenter = this._onTooltipMouseEnter.bind(this));
      addEvent(this._ttel, 'mouseleave', this._ev_ttleave = this._onTooltipMouseLeave.bind(this));
    }
  }

  if (this._opts.width) {
    var width = isFunction(this._opts.width) ? this._opts.width.call(this) : this._opts.width;
    setStyle(this._ttel, 'width', width);
  }

  show(this._ttel);

  var contentEl = geByClass1('_eltt_content', this._ttel)
  if (this._opts.onFirstTimeShow && !this._firstTimeShown) {
    this._opts.onFirstTimeShow.call(this, contentEl, this._ttel);
  }
  this._opts.onShow && this._opts.onShow(contentEl, !this._firstTimeShown);

  this._firstTimeShown = true;

  this.updatePosition();

  this._isShown = true;

  this.updatePosition();
  this._visTO = setTimeout(addClass.pbind(this._ttel, 'eltt_vis'), 10);

  this._opts.elClassWhenShown && addClass(this._el, this._opts.elClassWhenShown);

  if (this._ev_wclick) {
    removeEvent(document, 'mousedown', this._ev_wclick);
  }
  addEvent(document, 'mousedown', this._ev_wclick = this._onMouseWindowClick.bind(this));
}

ElementTooltip.getType = function(side) {
  switch(side) {
    case 'top':
    case 'bottom':
      return ElementTooltip.TYPE_VERTICAL
    case 'right':
    case 'left':
      return ElementTooltip.TYPE_HORIZONTAL
  }
}

ElementTooltip.prototype.getOptions = function() {
  return this._opts
}

ElementTooltip.prototype.updatePosition = function() {
  var side = this._opts.forceSide;

  var boundingBox = this._opts.getTargetBoundingBox ? this._opts.getTargetBoundingBox(this) : false;
  if (!boundingBox) {
    var elPos = getXY(this._el);
    var elSize = getSize(this._el);
    boundingBox = {
      left: elPos[0],
      top: elPos[1],
      width: elSize[0],
      height: elSize[1]
    }
  }

  var audioLayerWrapEl = gpeByClass('audio_layer_container', this._ttel);
  var boundingEl = audioLayerWrapEl ? audioLayerWrapEl : domClosestOverflowHidden(this._ttel);
  var boundingElPos = (boundingEl != bodyNode) ? getXY(boundingEl) : [ scrollGetX(), scrollGetY() + getPageHeaderHeight()];
  var boundingElSize = (boundingEl != bodyNode) ? getSize(boundingEl) : [ window.innerWidth, window.innerHeight ];

  var ttelSize = getSize(this._ttel);

  var arrowSize = this._arrowSize;
  var border = this._opts.noBorder ? 0 : 1;

  var offset = isFunction(this._opts.offset) ? this._opts.offset() : this._opts.offset;

  var style;

  var _this = this;
  function setArrowCenteredPosition(side, shift) {
    var style = {}
    var sizeIndex = ['marginLeft', 'marginTop'].indexOf(side);
    var align;

    if (_this._opts.align === (vk.rtl ? ElementTooltip.ALIGN_LEFT : ElementTooltip.ALIGN_RIGHT)) {
      align = ttelSize[sizeIndex] - Math.max(border + arrowSize + (shift || 0), Math.min(ttelSize[sizeIndex], boundingBox[sizeIndex ? 'height' : 'width']) / 2);
    } else if (_this._opts.align === (vk.rtl ? ElementTooltip.ALIGN_RIGHT : ElementTooltip.ALIGN_LEFT)) {
      align = Math.max(border + arrowSize + (shift || 0), Math.min(ttelSize[sizeIndex], boundingBox[sizeIndex ? 'height' : 'width']) / 2);
    } else {
      align = ttelSize[sizeIndex] / 2;
    }

    style[side] = Math.floor(align)/*tt align*/ - border/*borders*/ - arrowSize - (shift || 0)/*shift compensation*/
    setStyle(_this._ttArrowEl, style)
  }

  if (this._opts.setPos) {
    // if setPos callback provided it should return
    // { left, top, arrowPos(optional) }
    style = this._opts.setPos(this) || {};

    if (ElementTooltip.getType(side) == ElementTooltip.TYPE_VERTICAL) {
      if (style.arrowPosition !== (void 0)) {
        setStyle(this._ttArrowEl, {
          marginLeft: style.arrowPosition
        })
      } else {
        setArrowCenteredPosition('marginLeft')
      }
    } else {
      if (style.arrowPosition !== (void 0)) {
        setStyle(this._ttArrowEl, {
          marginTop: style.arrowPosition
        })
      } else {
        setArrowCenteredPosition('marginTop')
      }
    }

  } else {
    if (!side && this._prevSide && this._opts.preventSideChange) {
      side = this._prevSide;
    } else if (!side) {
      if (this._opts.type == ElementTooltip.TYPE_VERTICAL) {
        var inMessages = hasClass(bodyNode, 'body_im');
        var bottomGap = inMessages ? 60 : (this._opts.bottomGap || 0);

        var enoughSpaceAbove = (boundingBox.top - boundingElPos[1]) > ttelSize[1] + arrowSize - offset[1];
        var enoughSpaceBelow = (scrollGetY() + boundingElSize[1] - (boundingBox.top + boundingBox.height + arrowSize) - bottomGap) > ttelSize[1];

        if (this._opts.defaultSide == 'top') {
          side = enoughSpaceAbove ? 'top' : 'bottom'
        } else {
          side = enoughSpaceBelow ? 'bottom' : 'top'
        }
      } else {
        if ((boundingBox.left - boundingElPos[0]) < ttelSize[0]) {
          side = 'right';
        } else {
          side = 'left';
        }
      }
    }

    var parentPos = getXY(this._appendToEl);
    var parentOffset = [
      boundingBox.left - parentPos[0],
      boundingBox.top - parentPos[1]
    ];

    var shift;
    var totalLeftOffset = offset[0] + parentOffset[0];

    if (this._opts.centerShift) {
      totalLeftOffset += this._opts.centerShift || 0;
      shift = this._opts.centerShift;
    } else if (this._opts.rightShift) {
      shift = -(ttelSize[0]/2 - this._opts.rightShift);
      totalLeftOffset += shift;
    }

    this._prevSide = side;

    var horAlignOffset;
    var verAlignOffset;
    var overflow;
    var padding = 20;

    if (this._opts.align === (vk.rtl ? ElementTooltip.ALIGN_LEFT : ElementTooltip.ALIGN_RIGHT)) {
      horAlignOffset = boundingBox.width - ttelSize[0];
      verAlignOffset = boundingBox.height - ttelSize[1];
    } else if (this._opts.align === (vk.rtl ? ElementTooltip.ALIGN_RIGHT : ElementTooltip.ALIGN_LEFT)) {
      horAlignOffset = 0;
      verAlignOffset = 0;
    } else {
      horAlignOffset = -ttelSize[0]/2 + boundingBox.width/2;
      verAlignOffset = boundingBox.height/2 - ttelSize[1]/2;
    }

    switch (side) {
      case 'bottom':
        overflow = horAlignOffset + boundingBox.left + offset[0] + ttelSize[0] + padding - (boundingElPos[0] + boundingElSize[0]);

        if (overflow < 0) {
          overflow = 0;
        }

        shift = shift ? shift - overflow : -overflow;
        style = {
          left: horAlignOffset + totalLeftOffset - overflow,
          top: boundingBox.height + arrowSize - offset[1] + parentOffset[1]
        };
        break;

      case 'top':
        overflow = horAlignOffset + boundingBox.left + offset[0] + ttelSize[0] + padding - (boundingElPos[0] + boundingElSize[0]);

        if (overflow < 0) {
          overflow = 0;
        }

        shift = shift ? shift - overflow : -overflow;
        style = {
          left: horAlignOffset + totalLeftOffset - overflow,
          top: -ttelSize[1] - arrowSize + offset[1] + parentOffset[1]
        };
        break;

      case 'right':
        overflow = verAlignOffset + boundingBox.top + offset[1] - (boundingElPos[1] + padding);

        if (overflow > 0) {
          overflow = 0;
        }

        shift = shift ? shift - overflow : -overflow;
        style = {
          left: boundingBox.width + arrowSize + totalLeftOffset,
          top: verAlignOffset + offset[1] + parentOffset[1] - overflow
        };
        break;

      case 'left':
        overflow = verAlignOffset + boundingBox.top + offset[1] - (boundingElPos[1] + padding);

        if (overflow > 0) {
          overflow = 0;
        }

        shift = shift ? shift - overflow : -overflow;
        style = {
          left: -ttelSize[0] - arrowSize + totalLeftOffset,
          top: verAlignOffset + offset[1] + parentOffset[1] - overflow
        };
        break;
    }

    if (this._opts.type == ElementTooltip.TYPE_VERTICAL) {
      setArrowCenteredPosition('marginLeft', shift)
    } else {
      setArrowCenteredPosition('marginTop', shift)
    }
  }

  each(['top', 'bottom', 'left', 'right'], function(i, s) {
    if (side != s) {
      removeClass(this._ttel, 'eltt_' + s);
    }
  }.bind(this));

  addClass(this._ttel, 'eltt_' + side);
  setStyle(this._ttel, style);
};

ElementTooltip.prototype._hide = function(byElClick) {
  this._isShown = false;

  this._clearTimeouts();

  this._reTimeout = setTimeout((function() {
    hide(this._ttel);

    this._opts.elClassWhenShown && removeClass(this._el, this._opts.elClassWhenShown);
    this._opts.onHide && this._opts.onHide(this._ttel, !!byElClick);
  }).bind(this), ElementTooltip.FADE_SPEED);

  if (this._opts.onBeforeHide) {
    try {
      this._opts.onBeforeHide(this._ttel, !!byElClick);
    } catch(e) {}
  }

  removeClass(this._ttel, 'eltt_vis');
  this._ev_wclick && removeEvent(document, 'mousedown', this._ev_wclick);
}

ElementTooltip.prototype.isShown = function() {
  return this._isShown;
}

ElementTooltip.prototype.toggle = function() {
  if (this.isShown()) {
    this.hide();
  } else {
    this.show();
  }
}

ElementTooltip.prototype._clearTimeouts = function() {
  this._visTO && clearTimeout(this._visTO); this._visTO = false;
  this._sto && clearTimeout(this._sto); this._sto = false;
  this._hto && clearTimeout(this._hto); this._hto = false;
  this._reTimeout && clearTimeout(this._reTimeout); this._reTimeout = false;
}

ElementTooltip.prototype.getContent = function() {
  return geByClass1('_eltt_content', this._ttel);
}

/* UI Radio */

window.radioBtns = {};

function radioval(name) {
  return radioBtns[name] ? radioBtns[name].val : false;
}

function radiobtn(el, v, name) {
  if (!radioBtns[name]) return;
  each(radioBtns[name].els, function() {
    if (!this) {
      return;
    }

    if (this == el) {
      addClass(this, 'on');
    } else {
      removeClass(this, 'on');
    }
  });
  return radioBtns[name].val = v;
}

/* UI Buttons */

function createButton(el, onClick) {
  el = ge(el);
  if (!el || el.btnevents) return;
  if (hasClass(el, 'flat_button')) {
    if (isFunction(onClick)) {
      el.onclick = onClick.pbind(el);
    }
    return;
  }
  var p = el.parentNode;
  if (hasClass(p, 'button_blue') || hasClass(p, 'button_gray')) {
    if (isFunction(onClick)) {
      el.onclick = onClick.pbind(el);
    }
    return;
  }
  var hover = false;
  addEvent(el, 'click mousedown mouseover mouseout', function(e) {
    if (hasClass(p, 'locked')) return;
    switch (e.type) {
    case 'click':
      if (!hover) return;
      el.className = 'button_hover';
      onClick(el);
      return cancelEvent(e);
    break;
    case 'mousedown':
      el.className = 'button_down';
    break;
    case 'mouseover':
      hover = true;
      el.className = 'button_hover';
    break;
    case 'mouseout':
      el.className = 'button';
      hover = false;
    break;
    }
  });
  el.btnevents = true;
}

function actionsMenuItemLocked(el) {
  if (!(el = ge(el))) return;
  return hasClass(el, 'ui_actions_menu_item_lock');
}

function lockActionsMenuItem(el) {
  if (
    (el = ge(el)) &&
    hasClass(el, 'ui_actions_menu_item') &&
    !hasClass(el, 'ui_actions_menu_item_lock')
  ) {
    data(el, 'inner', el.innerHTML);
    addClass(el, 'ui_actions_menu_item_lock');
    var lockText = ce('div', {className: 'ui_actions_menu_item_lock_text'});
    val(lockText, el.innerHTML);
    el.appendChild(lockText);
    showProgress(el);
  }
}

function unlockActionsMenuItem(el) {
  if (
    (el = ge(el)) &&
    hasClass(el, 'ui_actions_menu_item') &&
    hasClass(el, 'ui_actions_menu_item_lock')
  ) {
    removeClass(el, 'ui_actions_menu_item_lock');
    el.innerHTML = data(el, 'inner');
  }
}

function linkLocked(el) {
  if (!(el = ge(el))) return;
  return hasClass(el, 'link_lock');
}

function lockLink(el) {
  if (
    !(el = ge(el)) ||
    el.tagName.toLowerCase() != 'a' ||
    linkLocked(el)
  ) return;
  addClass(el, 'link_lock');
}

function unlockLink(el) {
  if (
    !(el = ge(el)) ||
    !linkLocked(el)
  ) return;
  removeClass(el, 'link_lock');
}

function lockButton(el) {
  if (!(el = ge(el))) return;

  if (el.tagName.toLowerCase() != 'button' && !hasClass(el, 'flat_button') && !hasClass(el, 'wr_header') || isButtonLocked(el)) return;

  var elSize = getSize(el);

  addClass(el, 'flat_btn_lock');
  data(el, 'inner', el.innerHTML);

  setStyle(el, { width: elSize[0], height: elSize[1] });

  el.innerHTML = '';

  showProgress(el, 'btn_lock');
}
function unlockButton(el) {
  if (!(el = ge(el))) return;

  if (!isButtonLocked(el)) return;

  hideProgress(el);
  el.innerHTML = data(el, 'inner');
  removeClass(el, 'flat_btn_lock');

  setStyle(el, { width: null, height: null });
}

function buttonLocked(el) {
  return isButtonLocked(el);
}

function isButtonLocked(el) {
  if (!(el = ge(el))) return;
  return hasClass(el, 'flat_btn_lock');
}

function disableButton(el, disable) {
  if (!(el = ge(el)) || el.tagName.toLowerCase() !== 'button') return;

  if (disable) {
    if (!isVisible(el)) {
      return
    }
    el.parentNode.insertBefore(ce('button', {innerHTML: el.innerHTML, className: el.className + ' button_disabled'}), el);
    hide(el);
  } else {
    var disabledEl = domPS(el);
    if (disabledEl && hasClass(disabledEl, 'button_disabled')) re(disabledEl);
    show(el);
  }
}

function lockFlatButton(el) {
  if (!el || el.tagName.toLowerCase() != 'button' || isButtonLocked(el)) return;
  addClass(el, 'flat_btn_lock');
  el.innerHTML = '<span class="flat_btn_h">'+el.innerHTML+'</span>';
}

function unlockFlatButton(el) {
  if (!isButtonLocked(el)) return;
  el.innerHTML = el.firstChild.innerHTML;
  removeClass(el, 'flat_btn_lock');
}

/* UI Ads */

window.__adsLoaded = vkNow();

function __adsGetAjaxParams(ajaxParams, ajaxOptions) {
  __adsGetAjaxParams = function() {
    return window.AdsLight && AdsLight.getAjaxParams.apply(AdsLight.getAjaxParams, arguments) || {al_ad: null};
  };
  var result = stManager.add([jsc('web/ads_light.js')], __adsGetAjaxParams.pbind(ajaxParams, ajaxOptions));
  return result || {al_ad: null};
}

function __adsUpdate(force) {
  __adsUpdate = function() {
    window.AdsLight && AdsLight.updateBlock.apply(AdsLight.updateBlock, arguments);
  };
  stManager.add([jsc('web/ads_light.js')], __adsUpdate.pbind(force));
}

function __adsSet(adsHtml, adsSection, adsCanShow, adsShowed, adsParams, adsProps) {
  __adsSet = function() {
    window.AdsLight && AdsLight.setNewBlock.apply(AdsLight.setNewBlock, arguments);
  };
  stManager.add([jsc('web/ads_light.js')], __adsSet.pbind(adsHtml, adsSection, adsCanShow, adsShowed, adsParams, adsProps));
}

/* Post video */

window._videoLastInlined = false;
function showVideo(videoId, listId, options, ev) {
  if (cur.viewAsBox) return cur.viewAsBox();
  if (checkEvent(ev)) return true;

  if (window.mvcur && mvcur.mvShown && mvcur.minimized && mvcur.videoRaw == videoId) {
    videoview.unminimize();
    return false;
  }

  if (!options) {
    options = {};
  }

  var claim = nav.objLoc.claim,
      stat = ['videoview.js', 'videoview.css', 'page.js', 'page.css'];

  if (options.playlistId) {
    options.addParams = extend(options.addParams, {playlist_id: options.playlistId});
    if (!window.VideoPlaylist || !VideoPlaylist.getList(options.playlistId)) {
      options.addParams.load_playlist = intval(/^-?\d+_-?\d+$/.test(options.playlistId));
    }
  }

  var hub = new callHub(function() {
    if (!options.hidden) {
      revertLastInlineVideo();
      videoview.showVideo.apply(videoview, hub.data);
    } else {
      options.hidden(hub.data, options, listId, videoId);
    }
  }, 2);

  stManager.add(stat, function() {
    if (!options.hidden) {
      videoview.show(ev, videoId, listId, options);
    }
    hub.done();
  });

  extend(options, {onDone: function() {
    hub.data = arguments;
    hub.done();
  }, cache: (listId != 'status')});

  var actParams = options.params;

  if (!actParams) {
    actParams = {
      act: 'show',
      video: videoId,
      list: listId,
      autoplay: (options.autoplay) ? 1 : 0,
      ad_video: options.ad_video,
      module: options.module || currentModule() || '',
      svids: options.svids,
    };
  }
  if (options.addParams) {
    actParams = extend(actParams, options.addParams);
  }
  if (!trim(actParams.module)) {
    extend(actParams, { _nol: JSON.stringify(nav.objLoc) });
  }
  if (claim) {
    actParams.claim = claim;
  }
  ajax.post('al_video.php', actParams, options);

  vkImage().src = locProtocol + '//vk.com/rtrg?r=w*Z1Flwi3QdbWaoLMc7zOA*7Cr4Nrtojr9otHjsjIhsb2CVqRWalgbvxZw3MzxZa6be3Siu2XY3gvK5fysYtWLWgNwHMpjRTupSGZrcGRNlj7fduqq9*t7ij6CX4aMcBTD5be8mIXJsbTsvP8Zl2RZEd76a4FTuCOFqzMxqGtFc-';

  return false;
}

window.VideoConstants = {
  VIDEO_ITEM_INDEX_OWNER_ID: 0,
  VIDEO_ITEM_INDEX_ID:       1,
  VIDEO_ITEM_INDEX_THUMB:    2,
  VIDEO_ITEM_INDEX_TITLE:    3,
  VIDEO_ITEM_INDEX_FLAGS:    4,
  VIDEO_ITEM_INDEX_DURATION: 5,
  VIDEO_ITEM_INDEX_HASH:     6,
  VIDEO_ITEM_INDEX_MODER_ACTS: 7,
  VIDEO_ITEM_INDEX_OWNER:    8,
  VIDEO_ITEM_INDEX_DATE:     9,
  VIDEO_ITEM_INDEX_VIEWS:    10,

  VIDEO_ITEM_FLAG_EXTERNAL:        1 << 0,
  VIDEO_ITEM_FLAG_DOMAIN_YT:       1 << 1,
  VIDEO_ITEM_FLAG_DOMAIN_COUB:     1 << 2,
  VIDEO_ITEM_FLAG_DOMAIN_RT:       1 << 3,
  VIDEO_ITEM_FLAG_DOMAIN_PLADFORM: 1 << 4,
  VIDEO_ITEM_FLAG_DOMAIN_VIMEO:    1 << 5,
  VIDEO_ITEM_FLAG_CAN_EDIT:        1 << 6,
  VIDEO_ITEM_FLAG_CAN_DELETE:      1 << 7,
  VIDEO_ITEM_FLAG_CAN_ADD:         1 << 8,
  VIDEO_ITEM_FLAG_PRIVATE:         1 << 9,
  VIDEO_ITEM_FLAG_NO_AUTOPLAY:     1 << 10,
  VIDEO_ITEM_FLAG_ADDED:           1 << 11,
  VIDEO_ITEM_FLAG_SKIP_THUMB_LOAD: 1 << 12,
  VIDEO_ITEM_FLAG_NEED_SIGN_IN:    1 << 13,
  VIDEO_ITEM_FLAG_HD:              1 << 14,
  VIDEO_ITEM_FLAG_DELETED:         1 << 15,
  VIDEO_ITEM_FLAG_CAN_DOWNLOAD:    1 << 16,
};

function videoCallback(params) {
  var method = params.shift();
  if (window.Videoview && Videoview.playerCallback[method]) {
    Videoview.playerCallback[method].apply(Videoview, params);
  } else {
    throw Error('Unregistered player callback: ' + method);
  }
}

function checkMp4(callback) {
  callback(true);
}

/* Post audio */


function audioSearchPerformer(ref, ev) {}

function padAudioPlaylist() {
  return window.audioPlaylist || ls.get('pad_playlist');
}

function toggleAudioLyrics(event, ref, audioId, lyricsId) {
  if (!lyricsId) {
    return false;
  }

  var audioRowEl = gpeByClass('_audio_row', ref);
  var lyricsEl = geByClass1('_audio_lyrics_wrap', audioRowEl);

  if (lyricsEl.innerHTML) {
    toggle(lyricsEl);
    cancelEvent(event);
    return false;
  }

  lyricsId = intval(lyricsId);

  if (lyricsId) {
    addClass(audioRowEl, 'audio_loading');
    showProgress(audioRowEl);

    ajax.post('al_audio.php', { act: 'get_lyrics', aid: audioId, lid: lyricsId }, {
      onDone: function(lyrics) {
        hideProgress(audioRowEl);
        removeClass(audioRowEl, 'audio_loading');

        lyricsEl.innerHTML = lyrics;
        show(lyricsEl);
      },
      onFail: function() { return true; },
    });

    cancelEvent(event);
  }

  return false;
}

function getAudioPlayer() {
  getAudioPlayer.run || extend(getAudioPlayer, {
    queue: [],
    run: function() {
      window.ap = new AudioPlayer();
      var func = null;
      while (func = getAudioPlayer.queue.shift()) ap[func.name].apply(ap, func.args);
    },
    wrapper: {
      toggleAudio: function() {
        if (vk && vk.widget && !vk.id) {
          Widgets.oauth();
          return false;
        }
        getAudioPlayer.queue.push({
          name: 'toggleAudio',
          args: [].slice.call(arguments)
        });
      }
    }
  });

  if (window.ap) return ap;
  if (window.AudioPlayer) return window.ap = new AudioPlayer();

  stManager.add(['audioplayer.js', 'audioplayer.css', 'ui_common.js', 'ui_common.css'], getAudioPlayer.run);
  return getAudioPlayer.wrapper;
}
function audioShowActionTooltip(btn, shift, needDownAndLeft) {
  if (cur._addRestoreInProgress) return;

  var audioRow = gpeByClass('_audio_row', btn);
  var audioObject = AudioUtils.getAudioFromEl(audioRow, true)
  var action = domData(btn, 'action');
  var text

  var audioAddRestoreInfo = AudioUtils.getAddRestoreInfo();

  switch(action) {
    case 'current_delete':
      text = getLang('audio_delete_from_current')
      break

    case 'recoms_delete':
      text = getLang('audio_dont_show');
      break

    case 'listened_delete':
      text = getLang('audio_remove_from_list');
      break

    case 'delete':
      if (window.AudioPage && AudioPage.isInRecentPlayed(audioRow)) { // todo: little bit hacky
        text = getLang('audio_remove_from_list');

      } else {
        var restores = audioAddRestoreInfo[audioObject.fullId];
        if (restores && restores.deleteAll) {
          text = restores.deleteAll.text;
        } else {
          text = getLang('global_delete_audio');
        }
      }
      break;

    case 'restore_recoms':
      text = getLang('audio_restore_audio');
      break

    case 'add':
      var info = audioAddRestoreInfo[audioObject.fullId];

      if (info && info.state == 'deleted') {
        text = getLang('audio_restore_audio');

      } else if (info && info.state == 'added') {
        text = getLang('global_delete_audio');

      } else {
        var audioPage = window.AudioPage ? currentAudioPage(btn) : false;
        if (audioPage && audioPage.getOwnerId() < 0 && audioPage.canAddToGroup()) {
          text = getLang('audio_add_to_group');
        } else {
          text = getLang('audio_add_to_audio');
        }
      }
      break;

    case 'edit':
      text = getLang('audio_edit_audio');
      break;

    case 'next':
      text = (cur.lang && cur.lang.global_audio_set_next_audio) || getLang('audio_set_next_audio');
      break;

    case 'recoms':
      text = getLang('audio_show_recommendations');
      break;
  }

  var options = {text: function() { return text; }, black: 1, shift: shift ? shift : [7, 4, 0], needLeft: true, forcetodown: needDownAndLeft };

  if (gpeByClass('_im_mess_stack', btn)) {
    options.appendParentCls = '_im_mess_stack';
    options.shift = [7, 10, 0];
    options.noZIndex = true;

  } else if (gpeByClass('top_notify_wrap', btn)) {
    options.appendParentCls = 'top_notify_wrap';
  }

  showTooltip(btn, options);
}

function playAudioNew() {
  cur.gpHidden = true;
  var args = arguments;
  if (args[args.length-1] !== false) args = Array.prototype.slice.apply(arguments).concat([true]);
  if (!browser.ipad) {
    stManager.add(['audioplayer.js', 'audioplayer.css'], function() {
      audioPlayer.operate.apply(null, args);
    });
  } else {
    audioPlayer.operate.apply(null, args);
  }
}

function currentAudioId() {
  return window.audioPlayer && audioPlayer.id;
}

function showAudioClaimWarning(audio, claim) {
  var claimText, claimTitle;
  var ownerId = audio.ownerId;
  var id = audio.id;
  var claimId = claim.id;
  var title = audio.title;
  var reason = claim.reason;

  if (reason == 'geo') {
    claimText = getLang('audio_claimed_geo');
    claimTitle = getLang('audio_claim_warning_title');
  } else if (reason == 'site_rules_violation') {
    claimText = getLang('audio_site_rules_violation_warning');
    claimTitle = getLang('audio_site_rules_violation_header');
  } else if (reason == 'subscription') {
    claimText = getLang('audio_claimed_future');
    claimTitle = getLang('audio_claimed_future_title');
  } else {
    claimText = getLang('audio_claim_warning');
    claimTitle = getLang('audio_claim_warning_title');
  }

  claimText = claimText.split('{audio}').join('<b>' + title + '</b>');

  var el = geByClass1('_audio_row_' + ownerId + '_' + id);
  el && showTooltip(el, {
    slide: 15,
    shift: [-3, 6],
    dir: 'auto',
    showdt: 0,
    hidedt: 200,
    appendEl: ge('main'),
    typeClass: 'like_tt audio_claim_warning_tt',
    content: '<div class="audio_claim_warning_title">' + claimTitle + '</div><div class="audio_claim_warning_content">' + claimText + '</div>'
  });
}

function parallel() {
  var args = [].slice.call(arguments)
  var onDoneAll = args.pop()
  var hub = new callHub(onDoneAll, args.length)
  each(args, function (i, func) {
    func(function () {
      hub.done()
    })
  })
}

function shareAudioPlaylist(event, playlistOwnerId, playlistId, accessHash) {
  showBox('like.php', {
    act: 'publish_box',
    object: 'audio_playlist' + playlistOwnerId + '_' + playlistId,
    list: accessHash,
  }, {
    stat: ['wide_dd.js', 'wide_dd.css', jsc('web/sharebox.js')]
  });

  return cancelEvent(event)
}

/* Post photo */

function isPhotoeditor3Available() {
  return (browser.msie ? parseInt(browser.version) > 10 : true);
}

/* Article */
function bookmark(ownerId, objectId, objectType, hash, isBookmarked, itemAccessHash, ref) {
  isBookmarked = isBookmarked || false;
  itemAccessHash = itemAccessHash || '';
  ref = ref || '';

  ajax.post('al_bookmarks.php', {
    act: 'bookmark',
    owner_id: ownerId,
    object_id: objectId,
    type: objectType,
    state: isBookmarked ? 1 : 0,
    hash: hash,
    item_access_hash: itemAccessHash,
    ref: ref,
  }, {
    onDone: function(addedText, tags, objectTypeInt, setTagHash) {
      if (addedText) {
        var boxEl = window.showDoneBox(addedText);
        var setTagEl = geByClass1('bookmarks_tag_set', boxEl)
        if (setTagEl && !isEmpty(tags)) {
          var tagsArray = []
          each(tags, function(id, tag) {
            tagsArray.push(tag)
          })
          tagsArray.sort(function(a, b) {
            return a.order - b.order
          })

          var content = '<div class="bookmarks_tags_list">';
          for (var i = 0; i < tagsArray.length; i++) {
            var tag = tagsArray[i]
            content += '<div class="bookmarks_tags_list_item" data-id=' + tag.id + '">'+tag.name+'</div>';
          }
          content += '</div>';

          content = se(content)

          content.addEventListener('click', function(e) {
            var tagEl = domClosest('bookmarks_tags_list_item', e.target)
            if (tagEl) {
              var tagId = domData(tagEl, 'id')
              var added = toggleClass(tagEl, 'bookmarks_tags_list_item--selected')
              ajax.post('al_bookmarks.php', {
                act: 'set_tag',
                item_type: objectTypeInt,
                item_oid: ownerId,
                item_id: objectId,
                hash: setTagHash,
                tag_id: tagId,
                is_tagged: intval(!added),
              })
            }
          })

          if (cur.setBookmarksTagTooltip) {
            cur.setBookmarksTagTooltip.destroy()
          }

          stManager.add(['ui_common.css', 'ui_common.js'], function() {})

          cur.setBookmarksTagTooltip = new ElementTooltip(setTagEl, {
            content: content,
            appendToParent: true,
            cls: 'bookmarks_tag_set_tt',
            autoShow: true,
            offset: [0, -36],
            onFirstTimeShow: function(contentEl) {
              stManager.add(['ui_common.css', 'ui_common.js'], function() {
                cur.setBookmarksTagTooltipScroll = new uiScroll(domFC(contentEl), { // eslint-disable-line new-cap
                  theme: 'dark',
                })
              })
            },
            onShow: function() {
              Notifier.freezeEvents();
              curNotifier.tooltipShown = true;
            },
            onHide: function() {
              curNotifier.tooltipShown = false;
              if (curNotifier.unfreezeAfterTooltipHide) {
                Notifier.unfreezeEvents();
              }
            }
          });

          cur.destroy.push(function() {
            cur.setBookmarksTagTooltip.destroy();
          })
        }
      }
    }
  });
}

function bookmarkArticle(event, ele, ownerId, objectId, objectType, hash, isBookmarked) {
  if (ele) {
    isBookmarked = parseInt(domData(ele, 'state'));
    domData(ele, 'state', isBookmarked ? 0 : 1);
  }

  bookmark(ownerId, objectId, objectType, hash, isBookmarked);

  each(geByClass('_article_' + ownerId + '_' + objectId), function(i, el) {
    var btn = geByClass1('_bookmark_btn', el)
    domData(btn, 'state', isBookmarked ? 0 : 1);
  });

  return cancelEvent(event);
}

function bookmarkEvent(event, ele, groupId, hash) {
  var isBookmarked = parseInt(domData(ele, 'state'));

  domData(ele, 'state', isBookmarked ? 0 : 1);

  ajax.post('fave.php', {
    act: isBookmarked ? 'a_delete_group' : 'a_add_group',
    gid: groupId,
    hash: hash
  }, {
    onDone: function(text, addedText) {
      if (!isBookmarked) {
        showDoneBox(addedText);
      }
    }
  });

  return cancelEvent(event);
}

function bookmarkTooltip(btn) {
  var shift = [9, 8];
  var shiftClass = '';
  var appendClass = '';

  if (gpeByClass('_im_mess_stack', btn)) {
    appendClass = '_im_mess_stack';
  }

  showTooltip(btn, {
    className: 'bookmarks_tt ' + shiftClass,
    shift: shift,
    text: function() {
      return domData(btn, 'state') === '1' ? domData(btn, 'remove') : domData(btn, 'add');
    },
    black: 1,
    appendParentCls: appendClass,
  });
}

/* Widgets */

window.Widgets = {

  initBadBrowser: function() {
    var wrapper = geByClass1('widgets_page_error_wrap');

    if (wrapper && window.cur && window.fastXDM) {
      function resize() {
        cur.Rpc.callMethod('resize', getSize(wrapper)[1])
      };

      cur.Rpc = new fastXDM.Client({
        onInit: function() {
          setTimeout(resize, 500)
        }
      }, {
        safe: true,
        sameOrigin: true
      });

      resize();
      setTimeout(resize, 0);
    }
  },

  popupBoxWidth: 450,
  popupBoxHeight: 300,

  popupBoxOpen: function(url, params, name, opts) {
    opts = extend({
      width: this.popupBoxWidth,
      height: this.popupBoxHeight,
      onClose: null
    }, opts);

    params = extend({
      widget: 4
    }, params);

    if (browser.safari) opts.height += 45; /* safari popup window panel height, hardcoded to avoid popup jump */

    var left = Math.max(0, (screen.width - opts.width) / 2) + (screen.availLeft | 0),
      top = Math.max(0, (screen.height - opts.height) / 2) + (screen.availTop | 0);
    if (!/^https?:\/\//i.test(url)) {
      url = location.protocol + '//' + location.host + '/' + url.replace(/^\/+/, '');
    }
    window.activePopup = window.open(url + '?' + ajx2q(params), name, 'width='+opts.width+',height='+opts.height+',left='+left+',top='+top+',menubar=0,toolbar=0,location=0,status=0');
    if (activePopup) {
      activePopup.focus();
      opts.onClose && (function check() {
        !activePopup || activePopup.closed ? opts.onClose() : setTimeout(check, 1000);
      })();
    }
  },

  popupBoxAdjust: function(startWidth, startHeight, opts) {
    opts = extend({
      nocenter: false,
      container: false,
      forceWidth: false,
      forceHeight: false,
      minWidth: 0,
      minHeight: 0,
      attempts: 5,
      interval: 500
    }, opts);

    if (window.panelsHeight == void 0) window.panelsHeight = null;
    if (window.panelsWidth == void 0) window.panelsWidth = null;
    window.popupWidth = null;
    window.popupHeight = null;
    var interruptedCentering = opts.nocenter,
      interruptedResize = false,
      inter = 0,
      lastLeft = null,
      lastTop = null,
      loaded = false,
      resized = false,
      container = opts.container || geByClass1('box_layout') || ge('page_wrap'),
      scrollable = ge('box_layer_wrap') || bodyNode;

    if (!container || !scrollable) return;
    if (!startWidth) startWidth = this.popupBoxWidth;
    if (!startHeight) startHeight = this.popupBoxHeight;
    fixScrolls(true);

    function sL() {return window.screenX !== void 0 ? screenX : window.screenLeft;}
    function sT() {return window.screenY !== void 0 ? screenY : window.screenTop;}

    function adjust() {
      if ((interruptedCentering || opts.nocenter) && interruptedResize) return;
      if (!interruptedCentering && lastLeft !== null && lastTop !== null && (lastLeft !== sL() || lastTop !== sT())) interruptedCentering = true;

      var containerWidth = container.scrollWidth,
        containerHeight = container.scrollHeight,
        width = Math.max(opts.minWidth, (opts.forceWidth ? startWidth : containerWidth)) + panelsWidth,
        height = Math.max(opts.minHeight, (opts.forceHeight ? startHeight : containerHeight)) + panelsHeight;

      if (screen.availWidth && screen.availHeight) {
        width = Math.min(screen.availWidth, width);
        height = Math.min(screen.availHeight, height);
      }

      if (width != popupWidth || height != popupHeight) {
        popupWidth = width + (containerHeight + panelsHeight > height ? sbWidth() + 1 : 0);
        popupHeight = height;
        resized = +new Date();

        interruptedCentering || opts.nocenter || window.moveTo(
          Math.floor((screen.width - popupWidth+ (browser.safari ? -panelsWidth : panelsWidth)) / 2) + (screen.availLeft | 0),
          Math.floor((screen.height - popupHeight + (browser.safari ? -panelsHeight : panelsHeight)) / 2) + (screen.availTop | 0)
        );

        window.resizeTo(popupWidth, popupHeight);
      }

      setTimeout(function() {
        if (!interruptedCentering) {
          lastLeft = sL();
          lastTop = sT();
        }
        onBodyResize();
      }, 0);
    }

    function fixScrolls(partly) {
      scrollable.style.overflow = 'hidden';
      !partly && setTimeout(function() {
        scrollable.style.overflow = '';
      }, 0);
    }

    function startAdjustment(newOpts) {
      if (interruptedCentering && interruptedResize) return;
      clearInterval(inter);
      newOpts && extend(opts, newOpts);

      if (panelsHeight === null) {
        if (window.innerWidth == void 0 || window.outerWidth == void 0) {
          resized = +new Date();
          window.resizeTo(startWidth, startHeight);
          panelsWidth = startWidth - (document.documentElement.clientWidth || document.body.clientWidth);
          panelsHeight = startHeight - (document.documentElement.clientHeight || document.body.clientHeight);
        } else {
          panelsWidth = outerWidth - innerWidth;
          panelsHeight = outerHeight - innerHeight;
        }
      }

      adjust();

      var i = 0;
      inter = setInterval(function() {
        adjust();
        if (++i >= opts.attempts) {
          clearInterval(inter);
        }
      }, opts.interval);
    }

    if (document.readyState === "complete") {
      loaded = true;
      fixScrolls();
    }
    addEvent(window, 'load', function() {
      loaded = true;
      fixScrolls();
    });

    addEvent(window, 'resize', function self() {
      if (!loaded) return;
      if (resized && (+new Date() - resized < 1000)) {
        resized = false;
        fixScrolls();
        return;
      }
      interruptedCentering = interruptedResize = true;
      clearInterval(inter);
      removeEvent(window, 'resize', self);
    });

    setTimeout(startAdjustment, 1);
    return startAdjustment;
  },

  oauth: function(options, params) {
    if (vk.show_external_auth_box) {
      return Widgets.popupBoxOpen(location.origin + '/al_settings.php', extend({
        act: 'external_auth_box',
        widget_hash: cur.widgetHash,
      }, isObject(params) ? params : {}), 'vk_external_auth', extend({
        width: 655,
        height: 171,
        onClose: function() {
          location.reload();
        }
      }, isObject(options) ? options : {}));
    }

    var oauthDomain = 'oauth.vk.com';
    if (__dev) {
      var match = location.origin.match(/^https?:\/\/([\w-]+\.)([\w-]+\.)vk.com$/);
      oauthDomain = match[1] + 'oauth.' + match[2] + 'vk.com';
    }

    Widgets.popupBoxOpen(location.protocol + '//' + oauthDomain + '/authorize', extend({
      client_id: -1,
      redirect_uri: 'close.html',
      display: 'widget'
    }, isObject(params) ? params : {}), 'vk_openapi', extend({
      width: 655,
      height: 430,
      onClose: window.gotSession ? window.gotSession.pbind(true) : void 0
    }, isObject(options) ? options : {}));
  },

  showTooltip: (function(showTooltip) {
    return function() {
      var args = [].slice.call(arguments);
      args[1] = extend(args[1] || {}, {
        showIfFit: true
      });
      return showTooltip.apply(this, args);
    }
  })(window.showTooltip),

  showReCaptchaBox: function(key, lang, box, o) {
    showBox('al_apps.php', {
      act: 'show_recaptcha_box',
      box_msg: o.addText,
      widget_width: 352
    });
    cur.Rpc.methods.recaptcha = o.onSubmit || function() {};
    cur.Rpc.methods.recaptchaHide = function() {
      isFunction(cur.recaptchaHide) && cur.recaptchaHide();
      isFunction(o.onHide) && o.onHide();
    }
  },

  showPhoto: function(photo, list) {
    return showBox('al_photos.php', {
      act: 'photo_box',
      photo: photo,
      wall_owner: photo.split('_')[0],
      list: list,
      widget_width: 654
    });
  },

  showVideo: function(video, list) {
    window.revertLastInlineVideo && revertLastInlineVideo();
    return showBox('al_video.php', {
      act: 'video_box',
      video: video,
      list: list,
      wall_owner: video.split('_')[0],
      widget_width: 780,
      module: cur.module || '_alpost'
    });
  },

  showSubscribeBox: function(oid, callback, state, isEvent) {
    window.subscribedCallback = callback ? callback : function() {};
    Widgets.popupBoxOpen('widget_community.php', {
      act: 'a_subscribe_box',
      oid: oid,
      state: state !== void 0 ? state : 1,
      is_event: isEvent ? 1 : void 0
    }, 'vk_subscribe', {
      height: 291
    });
  },

  showUnsubscribeBox: function(oid, callback) {
    window.unsubscribedCallback = callback ? callback : function() {};
    Widgets.popupBoxOpen('widget_community.php', {
      act: 'a_unsubscribe_box',
      oid: oid
    }, 'vk_unsubscribe', {
      height: 291
    });
  },

  showBox: function(allowed, onbefore) {
    var originalShowBox = window.showBox;

    allowed = extend(allowed || {}, {
      'blank.php': true,
      'al_apps.php': {'show_recaptcha_box': true}
    });

    return function(url, params, options, e) {
      if (allowed[url] && (!isObject(allowed[url]) || allowed[url][params.act])) {
        window.tooltips && tooltips.hideAll();
        onbefore && onbefore();

        if (isObject(allowed[url]) && allowed[url][params.act] && isObject(allowed[url][params.act].params)) {
          extend(params, allowed[url][params.act].params);
        }

        if (vk.amp) {
          Widgets.popupBoxOpen(url, extend({
            widget_hash: cur.widgetHash,
          }, params), url+'_'+params.act, {
            width: params.widget_width || void 0,
            height: params.widget_height || void 0,
          });
        } else {
          var stat = params.act && isObject(allowed[url]) && allowed[url][params.act].stat;
          stat && cur.Rpc.callMethod('showLoader', true);

          stManager.add(stat || [], function() {
            params = extend({
              widget_hash: cur.widgetHash,
              widget: 2,
              scrollbar_width: window.sbWidth(),
              widget_width: options && options.params && intval(options.params.width) || void(0)
            }, params);
            cur.Rpc.callMethod('showBox', url+'?' + ajx2q(params), {
              height: window.outerHeight || screen.availHeight || 768,
              width: window.outerWidth || screen.availWidth || 1028,
              base_domain: '//' + location.hostname + '/'
            });
          });
        }
      } else {
        debugLog('Forbidden request: '+params.act+' in '+url);
        return true;
      }
      return false;
    }
  },

  hideBox: function() {
    window.Rpc && Rpc.callMethod('destroy');
  },

  showInlineVideo: function(videoId, listId, options, ev, thumb) {
    if (checkEvent(ev)) return true;

    if (window.mvcur && mvcur.mvShown) {
      return showVideo(videoId, listId, options, ev);
    }

    options = options || {};
    options.params = options.params || {act: 'show_inline', video: videoId, list: listId, autoplay: (options.autoplay) ? 1 : 0, module: options.module || cur.module || ''};
    if (!trim(options.params.module)) {
      extend(options.params, { _nol: JSON.stringify(nav.objLoc) });
    }
    var h = thumb.clientHeight,
        w = thumb.clientWidth,
        btn = geByClass1('video_play_inline', thumb, 'div');

    extend(options.params, {width: w, height: h});
    extend(options.params, options.addParams);

    options.onDone = function (title, html, js, opts) {
      revertLastInlineVideo();
      hide(thumb);
      var videoWrap = ce('div', {id: 'page_video_inline_wrap' + videoId, className: 'page_video_inline_wrap', innerHTML: html}, {width: w, height: h}),
          videoBg = ge('video_background' + videoId);
      _videoLastInlined = [videoWrap, thumb]
      thumb.parentNode.appendChild(videoWrap);
      videoBg && setStyle(geByTag1('img', videoBg), {width: w, height: h});
      cur.mvOpts = opts && opts.mvData ? opts.mvData : false;
      if (opts.player) {
        var container = domByClass(videoWrap, 'video_box_wrap');
        VideoInitializer.initPlayer(container, opts.player.type, opts.player.params);
      }
      try {
        eval('(function () {' + js + '})();');
      } catch (e) {
      }

      if (!options.params.mute) {
        var _n = window.Notifier, _a = window.audioPlayer;
        if (_n) setTimeout(function() { _n.lcSend('video_start'); }, 0);
        if (_a && _a.player && !_a.player.paused()) {
          _a.pauseTrack();
          _a.pausedByVideo = 1;
        }
      }
    };
    options.onFail = function(text) {
      showBox('blank.php', {code: 1901});
      return true;
    }
    options.showProgress = function () {
      addClass(btn, 'video_play_inline_loading');
    };
    options.hideProgress = function () {
      removeClass(btn, 'video_play_inline_loading');
    };
    stManager.add('videoview.js', function() {
      ajax.post('al_video.php', options.params, options);
      vkImage().src = locProtocol + '//vk.com/rtrg?r=w*Z1Flwi3QdbWaoLMc7zOA*7Cr4Nrtojr9otHjsjIhsb2CVqRWalgbvxZw3MzxZa6be3Siu2XY3gvK5fysYtWLWgNwHMpjRTupSGZrcGRNlj7fduqq9*t7ij6CX4aMcBTD5be8mIXJsbTsvP8Zl2RZEd76a4FTuCOFqzMxqGtFc-';
    });
    return false;
  },

  revertLastInlineVideo: function(ancestor) {
    if (!_videoLastInlined) {
      return;
    }
    var current, found = false;
    if ((ancestor = ge(ancestor)) &&
        (current = _videoLastInlined[0])) {
      while (current = current.parentNode) {
        if (current == ancestor) {
          found = true;
          break;
        }
      }
      if (!found) {
        return;
      }
    }
    re(_videoLastInlined[0]);
    show(_videoLastInlined[1]);
    _videoLastInlined = false;
    delete cur.mvOpts;
  },

  pauseLastInlineVideo: function() {
    if (!_videoLastInlined) {
      return;
    }
    var player = ge('video_player') || window.html5video || null;
    if (player && player.playVideo) {
      player.playVideo(false);
    }
  },

  unblurPhotoInPhotoBox: function(photoRaw, hash, btn) {
    ajax.post('al_photos.php', {
      act: 'unblur',
      photo_raw: photoRaw,
      hash: hash
    }, {
      showProgress: lockButton.pbind(btn),
      hideProgress: unlockButton.pbind(btn),
      onDone: function(isFullyAvaliable) {
        var photoEl = document.querySelector('.ZPhotosRestriction--blur');
        removeClass(photoEl, 'ZPhotosRestriction--blur');
        var titleEl = photoEl.querySelector('.ZPhotosRestriction__title');
        var textEl = photoEl.querySelector('.ZPhotosRestriction__text');
        var btnEl = photoEl.querySelector('.ZPhotosRestriction__button');
        if (titleEl) {
          titleEl.parentNode.removeChild(titleEl);
        }
        if (textEl) {
          textEl.parentNode.removeChild(textEl);
        }
        if (btnEl) {
          btnEl.parentNode.removeChild(btnEl);
        }
      }
    });
  },

};

function loadScript(scriptSrc, options) {
  var timeout = options.timeout;
  var onLoad = options.onLoad;
  var onError = options.onError;

  var script = document.createElement('script');
  script.addEventListener('load', success);
  script.addEventListener('readystatechange', success);
  script.addEventListener('error', fail);
  script.src = scriptSrc;
  document.head.appendChild(script);

  if (timeout) {
    var failTimeout = setTimeout(fail, timeout);
  }

  function success(evt) {
    if (script.readyState && script.readyState != 'loaded' && script.readyState != 'complete') return;

    removeListeners();
    onLoad && onLoad();
  }

  function fail(evt) {
    removeListeners();
    onError && onError();
  }

  function removeListeners() {
    clearTimeout(failTimeout);
    script.removeEventListener('load', success);
    script.removeEventListener('readystatechange', success);
    script.removeEventListener('error', fail);
  }

  return {
    destroy: function destroy() {
      removeListeners();
    }
  };
}

function getStatusExportHash() {
  return vk.statusExportHash;
}

var urlActiveExp = /(?:([!()?., \n\r\t \u00A0]|^)((https?:\/\/)?((?:[a-z0-9_\-]+\.)+(?:[a-z]{2,9}|xn--p1ai|xn--j1amh|xn--80asehdb|xn--80aswg))(\/.*?)?(\#.*?)?)(?:[\.!:;,\*\(\)]*(&nbsp;|[ \t\r\n \u00A0]))|([!()?., \n\r\t \u00A0]|^)((https?:\/\/)?((?:[a-z0-9�-����_\-]+\.)+(?:��|���|������|����|���))(\/.*?)?(\#.*?)?)(?:[\.!:;,\*\(\)]*(&nbsp;|[ \t\r\n \u00A0])))/i,
  urlInactiveExp = /(?:([!()?., \n\r\t \u00A0]|^)((https?:\/\/)?((?:[a-z0-9_\-]+\.)+(?:[a-z]{2,9}|xn--p1ai|xn--j1amh|xn--80asehdb|xn--80aswg))(\/.*?)?(\#.*?)?)(?:[\.!:;,\*\(\)&]*(&nbsp;|[ \t\r\n \u00A0]|$))|([!()?., \n\r\t \u00A0]|^)((https?:\/\/)?((?:[a-z0-9�-����_\-]+\.)+(?:��|���|������|����|���))(\/.*?)?(\#.*?)?)(?:[\.!:;,\*\(\)&]*(&nbsp;|[ \t\r\n \u00A0]|$)))/i;

function extractUrls(text, inactive) {
  var rx = inactive ? urlInactiveExp : urlActiveExp,
    matches;

  var result = [];
  while (text && (matches = text.match(rx))) {
    text = text.substr(matches.index + matches[0].length);
    var offset = 0;
    if (!matches[4]) {
      offset = 7;
    }
    result.push({url: matches[2 + offset], query: matches[5 + offset] || '', domain: matches[4 + offset]});
  }

  return result;
}

function updateMoney(balance, balanceEx) {
  if (balance === undefined || balance === false) return;
  var postfix = '';
  if (balanceEx === true) {
    vk.balanceEx = balance;
    postfix = '_ex';
  } else {
    vk.balance = balance;
  }
  var els = geByClass('votes_balance_nom' + postfix);
  for (var i in els) {
    els[i].innerHTML = balance+' '+getLang('votes_flex', balance);
  }
  var money = balance * (vk.vcost || 7.0);
  var els = geByClass('money_balance_nom' + postfix);
  for (var i in els) {
    els[i].innerHTML = getLang('global_money_amount_rub', money, true);
  }
  if (balanceEx !== undefined && balanceEx !== false && balanceEx !== true) {
    updateMoney(balanceEx, true);
  }
}

function formatCount(count, opts) {
  opts = opts || {};
  var kLimit = opts.kLimit || 1000;
  var mLimit = opts.mLimit || 1000000;

  if (count >= mLimit && !opts.noCheck) {
    count = intval(count / 100000);
    count = (count > 1000) ? intval(count / 10) : count / 10;
    return formatCount(count, extend(opts, {
      noCheck: true
    }), true) + 'M';
  } else if (count >= kLimit && !opts.noCheck) {
    count = intval(count / 100);
    count = (count > 100) ? intval(count / 10) : count / 10;
    return formatCount(count, extend(opts, {
      noCheck: true
    }), true) + 'K';
  }

  return langNumeric(count, '%s', true).replace(/,/g, '\.');
}

addEvent(window, 'DOMContentLoaded load', function() {
  vk.loaded = true;
});

if (!window.constants) {
  window.constants = {};
}

window.constants.Groups = {
  GROUPS_ADMIN_LEVEL_USER: 0,
  GROUPS_ADMIN_LEVEL_MODERATOR: 1,
  GROUPS_ADMIN_LEVEL_EDITOR: 2,
  GROUPS_ADMIN_LEVEL_ADMINISTRATOR: 3,
  GROUPS_ADMIN_LEVEL_HOST: 4,
  GROUPS_ADMIN_LEVEL_EVENT_CREATOR: 5,
  GROUPS_ADMIN_LEVEL_CREATOR: 6,
  GROUPS_ADMIN_PSEUDO_LEVEL_ADVERTISER: 100
};

window.getPageHeaderHeight = (function() {
  var cached;
  return function() {
    var headerEl = ge('page_header');
    cached = cached || (headerEl ? headerEl.offsetHeight : 0);
    return cached;
  }
})();

try{stManager.done('lite.js');}catch(e){}
