!function () {
  function n(n, t) {
    var l = n.split('.'),
      e = U;
    l[0] in e || !e.execScript || e.execScript('var ' + l[0]);
    for (var r; l.length && (r = l.shift()); ) l.length || void 0 === t ? (e = e[r] ? e[r] : (e[r] = {})) : (e[r] = t);
  }
  function t(n, t) {
    function l() {}
    (l.prototype = t.prototype),
      (n.M = t.prototype),
      (n.prototype = new l()),
      (n.prototype.constructor = n),
      (n.N = function (n, l, e) {
        for (var r = Array(arguments.length - 2), u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
        return t.prototype[l].apply(n, r);
      });
  }
  function l(n, t) {
    null != n && this.a.apply(this, arguments);
  }
  function e(n) {
    n.b = '';
  }
  function r(n, t) {
    n.sort(t || u);
  }
  function u(n, t) {
    return n > t ? 1 : n < t ? -1 : 0;
  }
  function i(n) {
    var t,
      l = [],
      e = 0;
    for (t in n) l[e++] = n[t];
    return l;
  }
  function d(n, t) {
    (this.b = n), (this.a = {});
    for (var l = 0; l < t.length; l++) {
      var e = t[l];
      this.a[e.b] = e;
    }
  }
  function a(n) {
    return (
      (n = i(n.a)),
      r(n, function (n, t) {
        return n.b - t.b;
      }),
      n
    );
  }
  function o(n, t) {
    switch (((this.b = n), (this.g = !!t.v), (this.a = t.c), (this.i = t.type), (this.h = !1), this.a)) {
      case J:
      case K:
      case L:
      case O:
      case Z:
      case k:
      case Y:
        this.h = !0;
    }
    this.f = t.defaultValue;
  }
  function s() {
    (this.a = {}), (this.f = this.j().a), (this.b = this.g = null);
  }
  function f(n, t) {
    for (var l = a(n.j()), e = 0; e < l.length; e++) {
      var r = l[e],
        u = r.b;
      if (null != t.a[u]) {
        n.b && delete n.b[r.b];
        var i = 11 == r.a || 10 == r.a;
        if (r.g)
          for (var r = p(t, u) || [], d = 0; d < r.length; d++) {
            var o = n,
              s = u,
              c = i ? r[d].clone() : r[d];
            o.a[s] || (o.a[s] = []), o.a[s].push(c), o.b && delete o.b[s];
          }
        else (r = p(t, u)), i ? ((i = p(n, u)) ? f(i, r) : m(n, u, r.clone())) : m(n, u, r);
      }
    }
  }
  function p(n, t) {
    var l = n.a[t];
    if (null == l) return null;
    if (n.g) {
      if (!(t in n.b)) {
        var e = n.g,
          r = n.f[t];
        if (null != l)
          if (r.g) {
            for (var u = [], i = 0; i < l.length; i++) u[i] = e.b(r, l[i]);
            l = u;
          } else l = e.b(r, l);
        return (n.b[t] = l);
      }
      return n.b[t];
    }
    return l;
  }
  function c(n, t, l) {
    var e = p(n, t);
    return n.f[t].g ? e[l || 0] : e;
  }
  function h(n, t) {
    var l;
    if (null != n.a[t]) l = c(n, t, void 0);
    else
      n: {
        if (((l = n.f[t]), void 0 === l.f)) {
          var e = l.i;
          if (e === Boolean) l.f = !1;
          else if (e === Number) l.f = 0;
          else {
            if (e !== String) {
              l = new e();
              break n;
            }
            l.f = l.h ? '0' : '';
          }
        }
        l = l.f;
      }
    return l;
  }
  function g(n, t) {
    return n.f[t].g ? (null != n.a[t] ? n.a[t].length : 0) : null != n.a[t] ? 1 : 0;
  }
  function m(n, t, l) {
    (n.a[t] = l), n.b && (n.b[t] = l);
  }
  function b(n, t) {
    var l,
      e = [];
    for (l in t) 0 != l && e.push(new o(l, t[l]));
    return new d(n, e);
  } /*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  function y() {
    s.call(this);
  }
  function v() {
    s.call(this);
  }
  function $() {
    s.call(this);
  }
  function _() {}
  function S() {}
  function w() {} /*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  function x() {
    this.a = {};
  }
  function N(n) {
    return 0 == n.length || un.test(n);
  }
  function A(n, t) {
    if (null == t) return null;
    t = t.toUpperCase();
    var l = n.a[t];
    if (null == l) {
      if (((l = tn[t]), null == l)) return null;
      (l = new w().a($.j(), l)), (n.a[t] = l);
    }
    return l;
  }
  function j(n) {
    return (n = nn[n]), null == n ? 'ZZ' : n[0];
  }
  function E(n) {
    (this.H = RegExp(' ')),
      (this.C = ''),
      (this.m = new l()),
      (this.w = ''),
      (this.i = new l()),
      (this.u = new l()),
      (this.l = !0),
      (this.A = this.o = this.F = !1),
      (this.G = x.b()),
      (this.s = 0),
      (this.b = new l()),
      (this.B = !1),
      (this.h = ''),
      (this.a = new l()),
      (this.f = []),
      (this.D = n),
      (this.J = this.g = I(this, this.D));
  }
  function I(n, t) {
    var l;
    if (null != t && isNaN(t) && t.toUpperCase() in tn) {
      if (((l = A(n.G, t)), null == l)) throw Error('Invalid region code: ' + t);
      l = h(l, 10);
    } else l = 0;
    return (l = A(n.G, j(l))), null != l ? l : dn;
  }
  function B(n) {
    for (var t = n.f.length, l = 0; l < t; ++l) {
      var r = n.f[l],
        u = h(r, 1);
      if (n.w == u) return !1;
      var i;
      i = n;
      var d = r,
        a = h(d, 1);
      if (-1 != a.indexOf('|')) i = !1;
      else {
        (a = a.replace(an, '\\d')), (a = a.replace(on, '\\d')), e(i.m);
        var o;
        o = i;
        var d = h(d, 2),
          s = '999999999999999'.match(a)[0];
        s.length < o.a.b.length ? (o = '') : ((o = s.replace(new RegExp(a, 'g'), d)), (o = o.replace(RegExp('9', 'g'), ' '))),
          0 < o.length ? (i.m.a(o), (i = !0)) : (i = !1);
      }
      if (i) return (n.w = u), (n.B = fn.test(c(r, 4))), (n.s = 0), !0;
    }
    return (n.l = !1);
  }
  function R(n, t) {
    for (var l = [], e = t.length - 3, r = n.f.length, u = 0; u < r; ++u) {
      var i = n.f[u];
      0 == g(i, 3) ? l.push(n.f[u]) : ((i = c(i, 3, Math.min(e, g(i, 3) - 1))), 0 == t.search(i) && l.push(n.f[u]));
    }
    n.f = l;
  }
  function F(n, t) {
    n.i.a(t);
    var l = t;
    if (rn.test(l) || (1 == n.i.b.length && en.test(l))) {
      var r,
        l = t;
      '+' == l ? ((r = l), n.u.a(l)) : ((r = ln[l]), n.u.a(r), n.a.a(r)), (t = r);
    } else (n.l = !1), (n.F = !0);
    if (!n.l) {
      if (!n.F)
        if (P(n)) {
          if (q(n)) return C(n);
        } else if (
          (0 < n.h.length &&
            ((l = n.a.toString()),
            e(n.a),
            n.a.a(n.h),
            n.a.a(l),
            (l = n.b.toString()),
            (r = l.lastIndexOf(n.h)),
            e(n.b),
            n.b.a(l.substring(0, r))),
          n.h != H(n))
        )
          return n.b.a(' '), C(n);
      return n.i.toString();
    }
    switch (n.u.b.length) {
      case 0:
      case 1:
      case 2:
        return n.i.toString();
      case 3:
        if (!P(n)) return (n.h = H(n)), V(n);
        n.A = !0;
      default:
        return n.A
          ? (q(n) && (n.A = !1), n.b.toString() + n.a.toString())
          : 0 < n.f.length
          ? ((l = T(n, t)), (r = D(n)), 0 < r.length ? r : (R(n, n.a.toString()), B(n) ? G(n) : n.l ? M(n, l) : n.i.toString()))
          : V(n);
    }
  }
  function C(n) {
    return (n.l = !0), (n.A = !1), (n.f = []), (n.s = 0), e(n.m), (n.w = ''), V(n);
  }
  function D(n) {
    for (var t = n.a.toString(), l = n.f.length, e = 0; e < l; ++e) {
      var r = n.f[e],
        u = h(r, 1);
      if (new RegExp('^(?:' + u + ')$').test(t)) return (n.B = fn.test(c(r, 4))), (t = t.replace(new RegExp(u, 'g'), c(r, 2))), M(n, t);
    }
    return '';
  }
  function M(n, t) {
    var l = n.b.b.length;
    return n.B && 0 < l && ' ' != n.b.toString().charAt(l - 1) ? n.b + ' ' + t : n.b + t;
  }
  function V(n) {
    var t = n.a.toString();
    if (3 <= t.length) {
      for (var l = n.o && 0 == n.h.length && 0 < g(n.g, 20) ? p(n.g, 20) || [] : p(n.g, 19) || [], e = l.length, r = 0; r < e; ++r) {
        var u = l[r];
        (0 < n.h.length && N(h(u, 4)) && !c(u, 6) && null == u.a[5]) ||
          ((0 != n.h.length || n.o || N(h(u, 4)) || c(u, 6)) && sn.test(h(u, 2)) && n.f.push(u));
      }
      return R(n, t), (t = D(n)), 0 < t.length ? t : B(n) ? G(n) : n.i.toString();
    }
    return M(n, t);
  }
  function G(n) {
    var t = n.a.toString(),
      l = t.length;
    if (0 < l) {
      for (var e = '', r = 0; r < l; r++) e = T(n, t.charAt(r));
      return n.l ? M(n, e) : n.i.toString();
    }
    return n.b.toString();
  }
  function H(n) {
    var t,
      l = n.a.toString(),
      r = 0;
    return (
      1 != c(n.g, 10) ? (t = !1) : ((t = n.a.toString()), (t = '1' == t.charAt(0) && '0' != t.charAt(1) && '1' != t.charAt(1))),
      t
        ? ((r = 1), n.b.a('1').a(' '), (n.o = !0))
        : null != n.g.a[15] &&
          ((t = new RegExp('^(?:' + c(n.g, 15) + ')')),
          (t = l.match(t)),
          null != t && null != t[0] && 0 < t[0].length && ((n.o = !0), (r = t[0].length), n.b.a(l.substring(0, r)))),
      e(n.a),
      n.a.a(l.substring(r)),
      l.substring(0, r)
    );
  }
  function P(n) {
    var t = n.u.toString(),
      l = new RegExp('^(?:\\+|' + c(n.g, 11) + ')'),
      l = t.match(l);
    return (
      null != l &&
      null != l[0] &&
      0 < l[0].length &&
      ((n.o = !0), (l = l[0].length), e(n.a), n.a.a(t.substring(l)), e(n.b), n.b.a(t.substring(0, l)), '+' != t.charAt(0) && n.b.a(' '), !0)
    );
  }
  function q(n) {
    if (0 == n.a.b.length) return !1;
    var t,
      r = new l();
    n: {
      if (((t = n.a.toString()), 0 != t.length && '0' != t.charAt(0)))
        for (var u, i = t.length, d = 1; 3 >= d && d <= i; ++d)
          if (((u = parseInt(t.substring(0, d), 10)), u in nn)) {
            r.a(t.substring(d)), (t = u);
            break n;
          }
      t = 0;
    }
    return (
      0 != t &&
      (e(n.a),
      n.a.a(r.toString()),
      (r = j(t)),
      '001' == r ? (n.g = A(n.G, '' + t)) : r != n.D && (n.g = I(n, r)),
      n.b.a('' + t).a(' '),
      (n.h = ''),
      !0)
    );
  }
  function T(n, t) {
    var l = n.m.toString();
    if (0 <= l.substring(n.s).search(n.H)) {
      var r = l.search(n.H),
        l = l.replace(n.H, t);
      return e(n.m), n.m.a(l), (n.s = r), l.substring(0, n.s + 1);
    }
    return 1 == n.f.length && (n.l = !1), (n.w = ''), n.i.toString();
  }
  var U = this;
  (l.prototype.b = ''),
    (l.prototype.set = function (n) {
      this.b = '' + n;
    }),
    (l.prototype.a = function (n, t, l) {
      if (((this.b += String(n)), null != t)) for (var e = 1; e < arguments.length; e++) this.b += arguments[e];
      return this;
    }),
    (l.prototype.toString = function () {
      return this.b;
    });
  var Y = 1,
    k = 2,
    J = 3,
    K = 4,
    L = 6,
    O = 16,
    Z = 18;
  (s.prototype.set = function (n, t) {
    m(this, n.b, t);
  }),
    (s.prototype.clone = function () {
      var n = new this.constructor();
      return n != this && ((n.a = {}), n.b && (n.b = {}), f(n, this)), n;
    }),
    t(y, s);
  var z = null;
  t(v, s);
  var Q = null;
  t($, s);
  var W = null;
  (y.prototype.j = function () {
    var n = z;
    return (
      n ||
        (z = n =
          b(y, {
            0: { name: 'NumberFormat', I: 'i18n.phonenumbers.NumberFormat' },
            1: { name: 'pattern', required: !0, c: 9, type: String },
            2: { name: 'format', required: !0, c: 9, type: String },
            3: { name: 'leading_digits_pattern', v: !0, c: 9, type: String },
            4: { name: 'national_prefix_formatting_rule', c: 9, type: String },
            6: { name: 'national_prefix_optional_when_formatting', c: 8, defaultValue: !1, type: Boolean },
            5: { name: 'domestic_carrier_code_formatting_rule', c: 9, type: String },
          })),
      n
    );
  }),
    (y.j = y.prototype.j),
    (v.prototype.j = function () {
      var n = Q;
      return (
        n ||
          (Q = n =
            b(v, {
              0: { name: 'PhoneNumberDesc', I: 'i18n.phonenumbers.PhoneNumberDesc' },
              2: { name: 'national_number_pattern', c: 9, type: String },
              9: { name: 'possible_length', v: !0, c: 5, type: Number },
              10: { name: 'possible_length_local_only', v: !0, c: 5, type: Number },
              6: { name: 'example_number', c: 9, type: String },
            })),
        n
      );
    }),
    (v.j = v.prototype.j),
    ($.prototype.j = function () {
      var n = W;
      return (
        n ||
          (W = n =
            b($, {
              0: { name: 'PhoneMetadata', I: 'i18n.phonenumbers.PhoneMetadata' },
              1: { name: 'general_desc', c: 11, type: v },
              2: { name: 'fixed_line', c: 11, type: v },
              3: { name: 'mobile', c: 11, type: v },
              4: { name: 'toll_free', c: 11, type: v },
              5: { name: 'premium_rate', c: 11, type: v },
              6: { name: 'shared_cost', c: 11, type: v },
              7: { name: 'personal_number', c: 11, type: v },
              8: { name: 'voip', c: 11, type: v },
              21: { name: 'pager', c: 11, type: v },
              25: { name: 'uan', c: 11, type: v },
              27: { name: 'emergency', c: 11, type: v },
              28: { name: 'voicemail', c: 11, type: v },
              29: { name: 'short_code', c: 11, type: v },
              30: { name: 'standard_rate', c: 11, type: v },
              31: { name: 'carrier_specific', c: 11, type: v },
              33: { name: 'sms_services', c: 11, type: v },
              24: { name: 'no_international_dialling', c: 11, type: v },
              9: { name: 'id', required: !0, c: 9, type: String },
              10: { name: 'country_code', c: 5, type: Number },
              11: { name: 'international_prefix', c: 9, type: String },
              17: { name: 'preferred_international_prefix', c: 9, type: String },
              12: { name: 'national_prefix', c: 9, type: String },
              13: { name: 'preferred_extn_prefix', c: 9, type: String },
              15: { name: 'national_prefix_for_parsing', c: 9, type: String },
              16: { name: 'national_prefix_transform_rule', c: 9, type: String },
              18: { name: 'same_mobile_and_fixed_line_pattern', c: 8, defaultValue: !1, type: Boolean },
              19: { name: 'number_format', v: !0, c: 11, type: y },
              20: { name: 'intl_number_format', v: !0, c: 11, type: y },
              22: { name: 'main_country_for_code', c: 8, defaultValue: !1, type: Boolean },
              23: { name: 'leading_digits', c: 9, type: String },
              26: { name: 'leading_zero_possible', c: 8, defaultValue: !1, type: Boolean },
            })),
        n
      );
    }),
    ($.j = $.prototype.j),
    (_.prototype.a = function (n) {
      throw (new n.b(), Error('Unimplemented'));
    }),
    (_.prototype.b = function (n, t) {
      if (11 == n.a || 10 == n.a) return t instanceof s ? t : this.a(n.i.prototype.j(), t);
      if (14 == n.a) {
        if ('string' == typeof t && X.test(t)) {
          var l = Number(t);
          if (0 < l) return l;
        }
        return t;
      }
      if (!n.h) return t;
      if (((l = n.i), l === String)) {
        if ('number' == typeof t) return String(t);
      } else if (l === Number && 'string' == typeof t && ('Infinity' === t || '-Infinity' === t || 'NaN' === t || X.test(t)))
        return Number(t);
      return t;
    });
  var X = /^-?[0-9]+$/;
  t(S, _),
    (S.prototype.a = function (n, t) {
      var l = new n.b();
      return (l.g = this), (l.a = t), (l.b = {}), l;
    }),
    t(w, S),
    (w.prototype.b = function (n, t) {
      return 8 == n.a ? !!t : _.prototype.b.apply(this, arguments);
    }),
    (w.prototype.a = function (n, t) {
      return w.M.a.call(this, n, t);
    }); /*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  var nn = { 91: ['IN'] },
    tn = {
      IN: [
        null,
        [null, null, '(?:00800|1\\d{0,5}|[2-9]\\d\\d)\\d{7}', null, null, null, null, null, null, [8, 9, 10, 11, 12, 13], [6, 7]],
        [
          null,
          null,
          '(?:1(?:1[2-7]\\d\\d|2(?:[0-249][2-7]\\d|[35-8]\\d[2-7])|3(?:[0-25][2-7]\\d|[346-9]\\d[2-7])|4(?:[145][2-7]\\d|[236-9]\\d[2-7])|[59](?:[0235-9]\\d[2-7]|[14][2-7]\\d)|6(?:[014][2-7]\\d|[235-9]\\d[2-7])|7(?:(?:0[24]|[1257][2-7])\\d|[34689]\\d[2-7])|8(?:[01346][2-7]\\d|[257-9]\\d[2-7]))|2(?:[02][2-7]\\d\\d|1(?:[134689]\\d[2-7]|[257][2-7]\\d)|3(?:[013][2-7]\\d|[24-8]\\d[2-7])|4(?:[01][2-7]\\d|[2-8]\\d[2-7])|5(?:[0137][2-7]\\d|[25689]\\d[2-7])|6(?:[0158][2-7]\\d|[2-4679]\\d[2-7])|7(?:[13-79]\\d[2-7]|8[2-7]\\d)|8(?:(?:0[13468]|[1568][2-7])\\d|[2-479]\\d[2-7])|9(?:(?:0\\d|[14][2-7])\\d|[235-9]\\d[2-7]))|3(?:(?:01|1[79])\\d[2-7]|2(?:[1-5]\\d[2-7]|6[2-7]\\d)|3[2-7]\\d\\d|4(?:[13][2-7]\\d|2(?:[0189][2-7]|[2-7]\\d)|[5-8]\\d[2-7])|5(?:[125689]\\d[2-7]|[34][2-7]\\d)|6(?:[01489][2-7]\\d|[235-7]\\d[2-7])|7(?:[02-46][2-7]\\d|[157-9]\\d[2-7])|8(?:(?:0\\d|[159][2-7])\\d|[2-46-8]\\d[2-7]))|4(?:[04][2-7]\\d\\d|1(?:[14578]\\d[2-7]|[36][2-7]\\d)|2(?:(?:0[24]|[1-47][2-7])\\d|[5689]\\d[2-7])|3(?:[15][2-7]\\d|[2-467]\\d[2-7])|5(?:[12][2-7]\\d|[4-7]\\d[2-7])|6(?:[0-26-9][2-7]\\d|[35]\\d[2-7])|7(?:(?:[014-9][2-7]|2[2-8])\\d|3\\d[2-7])|8(?:[013-57][2-7]\\d|[2689]\\d[2-7])|9(?:[014-7][2-7]\\d|[2389]\\d[2-7]))|5(?:1(?:[025][2-7]\\d|[146-9]\\d[2-7])|2(?:[14-8]\\d[2-7]|2[2-7]\\d)|3(?:[1346]\\d[2-7]|[25][2-7]\\d)|4(?:[14-69]\\d[2-7]|[28][2-7]\\d)|5(?:(?:1[2-7]|2[1-7])\\d|[46]\\d[2-7])|6(?:[146-9]\\d[2-7]|[25][2-7]\\d)|7(?:1[2-7]\\d|[2-4]\\d[2-7])|8(?:1[2-7]\\d|[2-8]\\d[2-7])|9(?:[15][2-7]\\d|[246]\\d[2-7]))|6(?:1(?:[1358]\\d[2-7]|2[2-7]\\d)|2(?:1[2-7]\\d|[2457]\\d[2-7])|3(?:1[2-7]\\d|[2-4]\\d[2-7])|4(?:1[2-7]\\d|[235-7]\\d[2-7])|5(?:[17][2-7]\\d|[2-689]\\d[2-7])|6(?:[13][2-7]\\d|[24578]\\d[2-7])|7(?:1[2-7]\\d|[235689]\\d[2-7]|4(?:[0189][2-7]|[2-7]\\d))|8(?:0[2-7]\\d|[1-6]\\d[2-7]))|7(?:1(?:[013-9]\\d[2-7]|2[2-7]\\d)|2(?:[0235-9]\\d[2-7]|[14][2-7]\\d)|3(?:[134][2-7]\\d|[2679]\\d[2-7])|4(?:[1-35689]\\d[2-7]|[47][2-7]\\d)|5(?:[15][2-7]\\d|[2-46-9]\\d[2-7])|[67](?:[02-9]\\d[2-7]|1[2-7]\\d)|8(?:(?:[013-7]\\d|2[0-6])[2-7]|8(?:[0189][2-7]|[2-7]\\d))|9(?:[0189]\\d[2-7]|[2-7]\\d\\d))|8(?:0[2-7]\\d\\d|1(?:[1357-9]\\d[2-7]|6[2-7]\\d)|2(?:[014][2-7]\\d|[235-8]\\d[2-7])|3(?:[03-57-9]\\d[2-7]|[126][2-7]\\d)|(?:4[0-24-9]|5\\d)\\d[2-7]|6(?:[136][2-7]\\d|[2457-9]\\d[2-7])|7(?:[078][2-7]\\d|[1-6]\\d[2-7])|8(?:[1256]\\d[2-7]|[34][2-7]\\d)|9(?:1[2-7]\\d|[2-4]\\d[2-7])))\\d{5}',
          null,
          null,
          null,
          '7410410123',
          null,
          null,
          [10],
          [6, 7, 8],
        ],
        [
          null,
          null,
          '(?:6(?:(?:0(?:0[0-3569]|26|33)|2(?:[06]\\d|3[02589]|8[0-479]|9[0-79])|9(?:0[019]|13))\\d|1279|3(?:(?:0[0-79]|6[0-4679]|7[0-24-9]|[89]\\d)\\d|5(?:0[0-6]|[1-9]\\d)))|7(?:(?:0\\d\\d|19[0-5])\\d|2(?:(?:[0235-79]\\d|[14][017-9])\\d|8(?:[0-59]\\d|[6-8][089]))|3(?:(?:[05-8]\\d|3[017-9])\\d|1(?:[089]\\d|11|7[02-8])|2(?:[0-49][089]|[5-8]\\d)|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d\\d|1(?:[015-9]\\d|[2-4][089])|[29](?:[0-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|[47](?:[089]\\d|11|7[02-8])|[56]\\d[089]|8(?:[0-24-7][089]|[389]\\d))|5(?:(?:[0346-8]\\d|5[017-9])\\d|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[1-3][089])|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-7][089]|[289]\\d)|[1-9]\\d\\d)|8(?:[0-79]\\d\\d|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d\\d|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:(?:[01589]\\d|6[67])\\d|7(?:[02-8]\\d|9[04-9]))|1(?:[0-57-9]\\d\\d|6(?:[089]\\d|7[02-8]))|2(?:[014](?:[089]\\d|7[02-8])|[235-9]\\d\\d)|3(?:[03-57-9]\\d\\d|[126](?:[089]\\d|7[02-8]))|[45]\\d{3}|6(?:[02457-9]\\d\\d|[136](?:[089]\\d|7[02-8]))|7(?:(?:0[07-9]|[1-69]\\d)\\d|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d\\d|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-8]))|9(?:[02-9]\\d\\d|1(?:[0289]\\d|7[02-8])))|9\\d{4})\\d{5}',
          null,
          null,
          null,
          '8123456789',
          null,
          null,
          [10],
        ],
        [null, null, '(?:00800\\d|1(?:600|80[03]\\d{3}))\\d{6}|1800\\d{4,8}', null, null, null, '1800123456'],
        [null, null, '186[12]\\d{9}', null, null, null, '1861123456789', null, null, [13]],
        [null, null, '1860\\d{7}', null, null, null, '18603451234', null, null, [11]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        'IN',
        91,
        '00',
        '0',
        null,
        null,
        '0',
        null,
        null,
        null,
        [
          [null, '(\\d{8})', '$1', ['5[0236-8]'], null, null, 1],
          [null, '(\\d{4})(\\d{4,5})', '$1 $2', ['180', '1800'], null, null, 1],
          [
            null,
            '(\\d{2})(\\d{4})(\\d{4})',
            '$1 $2 $3',
            [
              '11|2[02]|33|4[04]|79[1-7]|80[2-46]',
              '11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])',
              '11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])',
            ],
            '0$1',
            null,
            1,
          ],
          [
            null,
            '(\\d{3})(\\d{3})(\\d{4})',
            '$1 $2 $3',
            [
              '1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)',
              '1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12[2-7]|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1[2-7]|[34][2-6])|4[47][2-7]|61[346]|88[0-8])|8(?:(?:16|2[014]|3[126]|6[136])[2-7]|7(?:0[2-6]|[78][2-7])|8(?:3[2-7]|4[235-7])|91[3-7])',
              '1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1(?:[2-6]|71)|[34][2-6])|4[47](?:[2-6]|7[19])|61[346]|88(?:[01][2-7]|[2-7]|82))|8(?:(?:16|2[014]|3[126]|6[136])(?:[2-6]|7[19])|7(?:0[2-6]|[78](?:[2-6]|7[19]))|8(?:3(?:[2-6]|7[19])|4(?:[2356]|7[19]))|91(?:[3-6]|7[19]))',
            ],
            '0$1',
            null,
            1,
          ],
          [
            null,
            '(\\d{4})(\\d{3})(\\d{3})',
            '$1 $2 $3',
            [
              '1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807',
              '1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]',
              '1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|(?:28[6-8]|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[2-7]|3(?:179|(?:2[0-49]|9[2-57])[2-7]))|807(?:1|9[1-3])',
            ],
            '0$1',
            null,
            1,
          ],
          [null, '(\\d{5})(\\d{5})', '$1 $2', ['[6-9]'], '0$1', null, 1],
          [null, '(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['14'], null, null, 1],
          [null, '(\\d{4})(\\d{2,4})(\\d{4})', '$1 $2 $3', ['1(?:6|8[06])', '1(?:6|8[06]0)'], null, null, 1],
          [null, '(\\d{2})(\\d{3})(\\d{4})(\\d{3})', '$1 $2 $3 $4', ['0'], '0$1', null, 1],
          [null, '(\\d{4})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['1'], null, null, 1],
        ],
        [
          [null, '(\\d{8})', '$1', ['5[0236-8]'], null, null, 1],
          [null, '(\\d{4})(\\d{4,5})', '$1 $2', ['180', '1800'], null, null, 1],
          [
            null,
            '(\\d{2})(\\d{4})(\\d{4})',
            '$1 $2 $3',
            [
              '11|2[02]|33|4[04]|79[1-7]|80[2-46]',
              '11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])',
              '11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])',
            ],
            '0$1',
            null,
            1,
          ],
          [
            null,
            '(\\d{3})(\\d{3})(\\d{4})',
            '$1 $2 $3',
            [
              '1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)',
              '1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12[2-7]|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1[2-7]|[34][2-6])|4[47][2-7]|61[346]|88[0-8])|8(?:(?:16|2[014]|3[126]|6[136])[2-7]|7(?:0[2-6]|[78][2-7])|8(?:3[2-7]|4[235-7])|91[3-7])',
              '1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1(?:[2-6]|71)|[34][2-6])|4[47](?:[2-6]|7[19])|61[346]|88(?:[01][2-7]|[2-7]|82))|8(?:(?:16|2[014]|3[126]|6[136])(?:[2-6]|7[19])|7(?:0[2-6]|[78](?:[2-6]|7[19]))|8(?:3(?:[2-6]|7[19])|4(?:[2356]|7[19]))|91(?:[3-6]|7[19]))',
            ],
            '0$1',
            null,
            1,
          ],
          [
            null,
            '(\\d{4})(\\d{3})(\\d{3})',
            '$1 $2 $3',
            [
              '1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807',
              '1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]',
              '1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|(?:28[6-8]|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[2-7]|3(?:179|(?:2[0-49]|9[2-57])[2-7]))|807(?:1|9[1-3])',
            ],
            '0$1',
            null,
            1,
          ],
          [null, '(\\d{5})(\\d{5})', '$1 $2', ['[6-9]'], '0$1', null, 1],
          [null, '(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['14'], null, null, 1],
          [null, '(\\d{4})(\\d{2,4})(\\d{4})', '$1 $2 $3', ['1(?:6|8[06])', '1(?:6|8[06]0)'], null, null, 1],
          [null, '(\\d{4})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['1'], null, null, 1],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, '(?:00800\\d|1(?:600|8(?:0[03]\\d\\d|6(?:0|[12]\\d\\d))\\d))\\d{6}|1800\\d{4,8}'],
        [null, null, '140\\d{7}', null, null, null, '1409305260', null, null, [10]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
    };
  x.b = function () {
    return x.a ? x.a : (x.a = new x());
  };
  var ln = {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      '０': '0',
      '１': '1',
      '２': '2',
      '３': '3',
      '４': '4',
      '５': '5',
      '６': '6',
      '７': '7',
      '８': '8',
      '９': '9',
      '٠': '0',
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '۰': '0',
      '۱': '1',
      '۲': '2',
      '۳': '3',
      '۴': '4',
      '۵': '5',
      '۶': '6',
      '۷': '7',
      '۸': '8',
      '۹': '9',
    },
    en = RegExp('[+＋]+'),
    rn = RegExp('([0-9０-９٠-٩۰-۹])'),
    un = /^\(?\$1\)?$/,
    dn = new $();
  m(dn, 11, 'NA');
  var an = /\[([^\[\]])*\]/g,
    on = /\d(?=[^,}][^,}])/g,
    sn = RegExp('^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$'),
    fn = /[- ]/;
  (E.prototype.K = function () {
    (this.C = ''),
      e(this.i),
      e(this.u),
      e(this.m),
      (this.s = 0),
      (this.w = ''),
      e(this.b),
      (this.h = ''),
      e(this.a),
      (this.l = !0),
      (this.A = this.o = this.F = !1),
      (this.f = []),
      (this.B = !1),
      this.g != this.J && (this.g = I(this, this.D));
  }),
    (E.prototype.L = function (n) {
      return (this.C = F(this, n));
    }),
    n('Cleave.AsYouTypeFormatter', E),
    n('Cleave.AsYouTypeFormatter.prototype.inputDigit', E.prototype.L),
    n('Cleave.AsYouTypeFormatter.prototype.clear', E.prototype.K);
}.call('object' == typeof global && global ? global : window);
