/* global jQuery */
jQuery(document).ready(function ($) {
  var animated = false
  var counterTarget = document.getElementById('count').getElementsByClassName('row-fluid')
  var countTrigger = $(counterTarget[0]).offset().top
  var countTrigger2 = $(counterTarget[1]).offset().top

  function countDetect () {
    var yScrollPos = window.pageYOffset + $(window).height() - $(counterTarget[0]).height() * 4 / 7
    var yScrollPos2 = window.pageYOffset - $(counterTarget[1]).height() * 2 / 7
    if (yScrollPos > countTrigger && yScrollPos2 < countTrigger2 && !animated) {
      new CountUp('undergraduate-students', 0, 1400, 0, 3).start()
      new CountUp('graduate-students', 0, 150, 0, 3).start()
      new CountUp('faculty', 0, 45, 0, 3).start()
      new CountUp('staff', 0, 66, 0, 3).start()
      new CountUp('alumni', 0, 6700, 0, 3).start()
      new CountUp('ranking', 0, 25, 0, 3).start()
      animated = true
    }
  }
  countDetect()
  $(window).on('scroll', countDetect)
})
/*

    countUp.js
    by @inorganik

*/
var CountUp = function (e, h, l, m, n, f) {
  for (var k = 0, d = ['webkit', 'moz', 'ms', 'o'], c = 0; c < d.length && !window.requestAnimationFrame; ++c)window.requestAnimationFrame = window[d[c] + 'RequestAnimationFrame'], window.cancelAnimationFrame = window[d[c] + 'CancelAnimationFrame'] || window[d[c] + 'CancelRequestAnimationFrame']; window.requestAnimationFrame || (window.requestAnimationFrame = function (a, p) { var b = (new Date()).getTime(), c = Math.max(0, 16 - (b - k)), d = window.setTimeout(function () { a(b + c) }, c); k = b + c; return d }); window.cancelAnimationFrame ||
(window.cancelAnimationFrame = function (a) { clearTimeout(a) }); var a = this; a.options = {useEasing: !0, useGrouping: !0, separator: ',', decimal: '.', easingFn: null, formattingFn: null}; for (var g in f)f.hasOwnProperty(g) && (a.options[g] = f[g]); a.options.separator === '' && (a.options.useGrouping = !1); a.options.prefix || (a.options.prefix = ''); a.options.suffix || (a.options.suffix = ''); a.d = typeof e === 'string' ? document.getElementById(e) : e; a.startVal = Number(h); a.endVal = Number(l); a.countDown = a.startVal > a.endVal; a.frameVal = a.startVal
  a.decimals = Math.max(0, m || 0); a.dec = Math.pow(10, a.decimals); a.duration = 1E3 * Number(n) || 2E3; a.formatNumber = function (b) { b = b.toFixed(a.decimals); var c = (b + '').split('.'); b = c[0]; c = c.length > 1 ? a.options.decimal + c[1] : ''; var d = /(\d+)(\d{3})/; if (a.options.useGrouping) for (;d.test(b);)b = b.replace(d, '$1' + a.options.separator + '$2'); return a.options.prefix + b + c + a.options.suffix }; a.easeOutExpo = function (a, c, d, e) { return d * (-Math.pow(2, -10 * a / e) + 1) * 1024 / 1023 + c }; a.easingFn = a.options.easingFn ? a.options.easingFn : a.easeOutExpo
  a.formattingFn = a.options.formattingFn ? a.options.formattingFn : a.formatNumber; a.version = function () { return '1.7.1' }; a.printValue = function (b) { b = a.formattingFn(b); a.d.tagName === 'INPUT' ? this.d.value = b : a.d.tagName === 'text' || a.d.tagName === 'tspan' ? this.d.textContent = b : this.d.innerHTML = b }; a.count = function (b) {
    a.startTime || (a.startTime = b); a.timestamp = b; b -= a.startTime; a.remaining = a.duration - b; a.frameVal = a.options.useEasing ? a.countDown ? a.startVal - a.easingFn(b, 0, a.startVal - a.endVal, a.duration) : a.easingFn(b, a.startVal,
      a.endVal - a.startVal, a.duration) : a.countDown ? a.startVal - b / a.duration * (a.startVal - a.endVal) : a.startVal + b / a.duration * (a.endVal - a.startVal); a.frameVal = a.countDown ? a.frameVal < a.endVal ? a.endVal : a.frameVal : a.frameVal > a.endVal ? a.endVal : a.frameVal; a.frameVal = Math.round(a.frameVal * a.dec) / a.dec; a.printValue(a.frameVal); b < a.duration ? a.rAF = requestAnimationFrame(a.count) : a.callback && a.callback()
  }; a.start = function (b) { a.callback = b; a.rAF = requestAnimationFrame(a.count); return !1 }; a.pauseResume = function () {
    a.paused ? (a.paused =
!1, delete a.startTime, a.duration = a.remaining, a.startVal = a.frameVal, requestAnimationFrame(a.count)) : (a.paused = !0, cancelAnimationFrame(a.rAF))
  }; a.reset = function () { a.paused = !1; delete a.startTime; a.startVal = h; cancelAnimationFrame(a.rAF); a.printValue(a.startVal) }; a.update = function (b) { cancelAnimationFrame(a.rAF); a.paused = !1; delete a.startTime; a.startVal = a.frameVal; a.endVal = Number(b); a.countDown = a.startVal > a.endVal; a.rAF = requestAnimationFrame(a.count) }; a.printValue(a.startVal)
}