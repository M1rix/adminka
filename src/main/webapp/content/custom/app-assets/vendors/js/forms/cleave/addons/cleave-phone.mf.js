!function () {
  function l(l, n) {
    var u = l.split('.'),
      t = T;
    u[0] in t || !t.execScript || t.execScript('var ' + u[0]);
    for (var e; u.length && (e = u.shift()); ) u.length || void 0 === n ? (t = t[e] ? t[e] : (t[e] = {})) : (t[e] = n);
  }
  function n(l, n) {
    function u() {}
    (u.prototype = n.prototype),
      (l.M = n.prototype),
      (l.prototype = new u()),
      (l.prototype.constructor = l),
      (l.N = function (l, u, t) {
        for (var e = Array(arguments.length - 2), r = 2; r < arguments.length; r++) e[r - 2] = arguments[r];
        return n.prototype[u].apply(l, e);
      });
  }
  function u(l, n) {
    null != l && this.a.apply(this, arguments);
  }
  function t(l) {
    l.b = '';
  }
  function e(l, n) {
    l.sort(n || r);
  }
  function r(l, n) {
    return l > n ? 1 : l < n ? -1 : 0;
  }
  function i(l) {
    var n,
      u = [],
      t = 0;
    for (n in l) u[t++] = l[n];
    return u;
  }
  function a(l, n) {
    (this.b = l), (this.a = {});
    for (var u = 0; u < n.length; u++) {
      var t = n[u];
      this.a[t.b] = t;
    }
  }
  function o(l) {
    return (
      (l = i(l.a)),
      e(l, function (l, n) {
        return l.b - n.b;
      }),
      l
    );
  }
  function s(l, n) {
    switch (((this.b = l), (this.g = !!n.v), (this.a = n.c), (this.i = n.type), (this.h = !1), this.a)) {
      case k:
      case J:
      case K:
      case O:
      case Z:
      case Y:
      case U:
        this.h = !0;
    }
    this.f = n.defaultValue;
  }
  function f() {
    (this.a = {}), (this.f = this.j().a), (this.b = this.g = null);
  }
  function p(l, n) {
    for (var u = o(l.j()), t = 0; t < u.length; t++) {
      var e = u[t],
        r = e.b;
      if (null != n.a[r]) {
        l.b && delete l.b[e.b];
        var i = 11 == e.a || 10 == e.a;
        if (e.g)
          for (var e = c(n, r) || [], a = 0; a < e.length; a++) {
            var s = l,
              f = r,
              h = i ? e[a].clone() : e[a];
            s.a[f] || (s.a[f] = []), s.a[f].push(h), s.b && delete s.b[f];
          }
        else (e = c(n, r)), i ? ((i = c(l, r)) ? p(i, e) : b(l, r, e.clone())) : b(l, r, e);
      }
    }
  }
  function c(l, n) {
    var u = l.a[n];
    if (null == u) return null;
    if (l.g) {
      if (!(n in l.b)) {
        var t = l.g,
          e = l.f[n];
        if (null != u)
          if (e.g) {
            for (var r = [], i = 0; i < u.length; i++) r[i] = t.b(e, u[i]);
            u = r;
          } else u = t.b(e, u);
        return (l.b[n] = u);
      }
      return l.b[n];
    }
    return u;
  }
  function h(l, n, u) {
    var t = c(l, n);
    return l.f[n].g ? t[u || 0] : t;
  }
  function g(l, n) {
    var u;
    if (null != l.a[n]) u = h(l, n, void 0);
    else
      l: {
        if (((u = l.f[n]), void 0 === u.f)) {
          var t = u.i;
          if (t === Boolean) u.f = !1;
          else if (t === Number) u.f = 0;
          else {
            if (t !== String) {
              u = new t();
              break l;
            }
            u.f = u.h ? '0' : '';
          }
        }
        u = u.f;
      }
    return u;
  }
  function m(l, n) {
    return l.f[n].g ? (null != l.a[n] ? l.a[n].length : 0) : null != l.a[n] ? 1 : 0;
  }
  function b(l, n, u) {
    (l.a[n] = u), l.b && (l.b[n] = u);
  }
  function y(l, n) {
    var u,
      t = [];
    for (u in n) 0 != u && t.push(new s(u, n[u]));
    return new a(l, t);
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
  function v() {
    f.call(this);
  }
  function d() {
    f.call(this);
  }
  function _() {
    f.call(this);
  }
  function S() {}
  function w() {}
  function x() {} /*

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
  function A() {
    this.a = {};
  }
  function N(l) {
    return 0 == l.length || rl.test(l);
  }
  function j(l, n) {
    if (null == n) return null;
    n = n.toUpperCase();
    var u = l.a[n];
    if (null == u) {
      if (((u = nl[n]), null == u)) return null;
      (u = new x().a(_.j(), u)), (l.a[n] = u);
    }
    return u;
  }
  function B(l) {
    return (l = ll[l]), null == l ? 'ZZ' : l[0];
  }
  function E(l) {
    (this.H = RegExp(' ')),
      (this.C = ''),
      (this.m = new u()),
      (this.w = ''),
      (this.i = new u()),
      (this.u = new u()),
      (this.l = !0),
      (this.A = this.o = this.F = !1),
      (this.G = A.b()),
      (this.s = 0),
      (this.b = new u()),
      (this.B = !1),
      (this.h = ''),
      (this.a = new u()),
      (this.f = []),
      (this.D = l),
      (this.J = this.g = F(this, this.D));
  }
  function F(l, n) {
    var u;
    if (null != n && isNaN(n) && n.toUpperCase() in nl) {
      if (((u = j(l.G, n)), null == u)) throw Error('Invalid region code: ' + n);
      u = g(u, 10);
    } else u = 0;
    return (u = j(l.G, B(u))), null != u ? u : il;
  }
  function $(l) {
    for (var n = l.f.length, u = 0; u < n; ++u) {
      var e = l.f[u],
        r = g(e, 1);
      if (l.w == r) return !1;
      var i;
      i = l;
      var a = e,
        o = g(a, 1);
      if (-1 != o.indexOf('|')) i = !1;
      else {
        (o = o.replace(al, '\\d')), (o = o.replace(ol, '\\d')), t(i.m);
        var s;
        s = i;
        var a = g(a, 2),
          f = '999999999999999'.match(o)[0];
        f.length < s.a.b.length ? (s = '') : ((s = f.replace(new RegExp(o, 'g'), a)), (s = s.replace(RegExp('9', 'g'), ' '))),
          0 < s.length ? (i.m.a(s), (i = !0)) : (i = !1);
      }
      if (i) return (l.w = r), (l.B = fl.test(h(e, 4))), (l.s = 0), !0;
    }
    return (l.l = !1);
  }
  function R(l, n) {
    for (var u = [], t = n.length - 3, e = l.f.length, r = 0; r < e; ++r) {
      var i = l.f[r];
      0 == m(i, 3) ? u.push(l.f[r]) : ((i = h(i, 3, Math.min(t, m(i, 3) - 1))), 0 == n.search(i) && u.push(l.f[r]));
    }
    l.f = u;
  }
  function C(l, n) {
    l.i.a(n);
    var u = n;
    if (el.test(u) || (1 == l.i.b.length && tl.test(u))) {
      var e,
        u = n;
      '+' == u ? ((e = u), l.u.a(u)) : ((e = ul[u]), l.u.a(e), l.a.a(e)), (n = e);
    } else (l.l = !1), (l.F = !0);
    if (!l.l) {
      if (!l.F)
        if (V(l)) {
          if (H(l)) return I(l);
        } else if (
          (0 < l.h.length &&
            ((u = l.a.toString()),
            t(l.a),
            l.a.a(l.h),
            l.a.a(u),
            (u = l.b.toString()),
            (e = u.lastIndexOf(l.h)),
            t(l.b),
            l.b.a(u.substring(0, e))),
          l.h != L(l))
        )
          return l.b.a(' '), I(l);
      return l.i.toString();
    }
    switch (l.u.b.length) {
      case 0:
      case 1:
      case 2:
        return l.i.toString();
      case 3:
        if (!V(l)) return (l.h = L(l)), G(l);
        l.A = !0;
      default:
        return l.A
          ? (H(l) && (l.A = !1), l.b.toString() + l.a.toString())
          : 0 < l.f.length
          ? ((u = q(l, n)), (e = M(l)), 0 < e.length ? e : (R(l, l.a.toString()), $(l) ? P(l) : l.l ? D(l, u) : l.i.toString()))
          : G(l);
    }
  }
  function I(l) {
    return (l.l = !0), (l.A = !1), (l.f = []), (l.s = 0), t(l.m), (l.w = ''), G(l);
  }
  function M(l) {
    for (var n = l.a.toString(), u = l.f.length, t = 0; t < u; ++t) {
      var e = l.f[t],
        r = g(e, 1);
      if (new RegExp('^(?:' + r + ')$').test(n)) return (l.B = fl.test(h(e, 4))), (n = n.replace(new RegExp(r, 'g'), h(e, 2))), D(l, n);
    }
    return '';
  }
  function D(l, n) {
    var u = l.b.b.length;
    return l.B && 0 < u && ' ' != l.b.toString().charAt(u - 1) ? l.b + ' ' + n : l.b + n;
  }
  function G(l) {
    var n = l.a.toString();
    if (3 <= n.length) {
      for (var u = l.o && 0 == l.h.length && 0 < m(l.g, 20) ? c(l.g, 20) || [] : c(l.g, 19) || [], t = u.length, e = 0; e < t; ++e) {
        var r = u[e];
        (0 < l.h.length && N(g(r, 4)) && !h(r, 6) && null == r.a[5]) ||
          ((0 != l.h.length || l.o || N(g(r, 4)) || h(r, 6)) && sl.test(g(r, 2)) && l.f.push(r));
      }
      return R(l, n), (n = M(l)), 0 < n.length ? n : $(l) ? P(l) : l.i.toString();
    }
    return D(l, n);
  }
  function P(l) {
    var n = l.a.toString(),
      u = n.length;
    if (0 < u) {
      for (var t = '', e = 0; e < u; e++) t = q(l, n.charAt(e));
      return l.l ? D(l, t) : l.i.toString();
    }
    return l.b.toString();
  }
  function L(l) {
    var n,
      u = l.a.toString(),
      e = 0;
    return (
      1 != h(l.g, 10) ? (n = !1) : ((n = l.a.toString()), (n = '1' == n.charAt(0) && '0' != n.charAt(1) && '1' != n.charAt(1))),
      n
        ? ((e = 1), l.b.a('1').a(' '), (l.o = !0))
        : null != l.g.a[15] &&
          ((n = new RegExp('^(?:' + h(l.g, 15) + ')')),
          (n = u.match(n)),
          null != n && null != n[0] && 0 < n[0].length && ((l.o = !0), (e = n[0].length), l.b.a(u.substring(0, e)))),
      t(l.a),
      l.a.a(u.substring(e)),
      u.substring(0, e)
    );
  }
  function V(l) {
    var n = l.u.toString(),
      u = new RegExp('^(?:\\+|' + h(l.g, 11) + ')'),
      u = n.match(u);
    return (
      null != u &&
      null != u[0] &&
      0 < u[0].length &&
      ((l.o = !0), (u = u[0].length), t(l.a), l.a.a(n.substring(u)), t(l.b), l.b.a(n.substring(0, u)), '+' != n.charAt(0) && l.b.a(' '), !0)
    );
  }
  function H(l) {
    if (0 == l.a.b.length) return !1;
    var n,
      e = new u();
    l: {
      if (((n = l.a.toString()), 0 != n.length && '0' != n.charAt(0)))
        for (var r, i = n.length, a = 1; 3 >= a && a <= i; ++a)
          if (((r = parseInt(n.substring(0, a), 10)), r in ll)) {
            e.a(n.substring(a)), (n = r);
            break l;
          }
      n = 0;
    }
    return (
      0 != n &&
      (t(l.a),
      l.a.a(e.toString()),
      (e = B(n)),
      '001' == e ? (l.g = j(l.G, '' + n)) : e != l.D && (l.g = F(l, e)),
      l.b.a('' + n).a(' '),
      (l.h = ''),
      !0)
    );
  }
  function q(l, n) {
    var u = l.m.toString();
    if (0 <= u.substring(l.s).search(l.H)) {
      var e = u.search(l.H),
        u = u.replace(l.H, n);
      return t(l.m), l.m.a(u), (l.s = e), u.substring(0, l.s + 1);
    }
    return 1 == l.f.length && (l.l = !1), (l.w = ''), l.i.toString();
  }
  var T = this;
  (u.prototype.b = ''),
    (u.prototype.set = function (l) {
      this.b = '' + l;
    }),
    (u.prototype.a = function (l, n, u) {
      if (((this.b += String(l)), null != n)) for (var t = 1; t < arguments.length; t++) this.b += arguments[t];
      return this;
    }),
    (u.prototype.toString = function () {
      return this.b;
    });
  var U = 1,
    Y = 2,
    k = 3,
    J = 4,
    K = 6,
    O = 16,
    Z = 18;
  (f.prototype.set = function (l, n) {
    b(this, l.b, n);
  }),
    (f.prototype.clone = function () {
      var l = new this.constructor();
      return l != this && ((l.a = {}), l.b && (l.b = {}), p(l, this)), l;
    }),
    n(v, f);
  var z = null;
  n(d, f);
  var Q = null;
  n(_, f);
  var W = null;
  (v.prototype.j = function () {
    var l = z;
    return (
      l ||
        (z = l =
          y(v, {
            0: { name: 'NumberFormat', I: 'i18n.phonenumbers.NumberFormat' },
            1: { name: 'pattern', required: !0, c: 9, type: String },
            2: { name: 'format', required: !0, c: 9, type: String },
            3: { name: 'leading_digits_pattern', v: !0, c: 9, type: String },
            4: { name: 'national_prefix_formatting_rule', c: 9, type: String },
            6: { name: 'national_prefix_optional_when_formatting', c: 8, defaultValue: !1, type: Boolean },
            5: { name: 'domestic_carrier_code_formatting_rule', c: 9, type: String },
          })),
      l
    );
  }),
    (v.j = v.prototype.j),
    (d.prototype.j = function () {
      var l = Q;
      return (
        l ||
          (Q = l =
            y(d, {
              0: { name: 'PhoneNumberDesc', I: 'i18n.phonenumbers.PhoneNumberDesc' },
              2: { name: 'national_number_pattern', c: 9, type: String },
              9: { name: 'possible_length', v: !0, c: 5, type: Number },
              10: { name: 'possible_length_local_only', v: !0, c: 5, type: Number },
              6: { name: 'example_number', c: 9, type: String },
            })),
        l
      );
    }),
    (d.j = d.prototype.j),
    (_.prototype.j = function () {
      var l = W;
      return (
        l ||
          (W = l =
            y(_, {
              0: { name: 'PhoneMetadata', I: 'i18n.phonenumbers.PhoneMetadata' },
              1: { name: 'general_desc', c: 11, type: d },
              2: { name: 'fixed_line', c: 11, type: d },
              3: { name: 'mobile', c: 11, type: d },
              4: { name: 'toll_free', c: 11, type: d },
              5: { name: 'premium_rate', c: 11, type: d },
              6: { name: 'shared_cost', c: 11, type: d },
              7: { name: 'personal_number', c: 11, type: d },
              8: { name: 'voip', c: 11, type: d },
              21: { name: 'pager', c: 11, type: d },
              25: { name: 'uan', c: 11, type: d },
              27: { name: 'emergency', c: 11, type: d },
              28: { name: 'voicemail', c: 11, type: d },
              29: { name: 'short_code', c: 11, type: d },
              30: { name: 'standard_rate', c: 11, type: d },
              31: { name: 'carrier_specific', c: 11, type: d },
              33: { name: 'sms_services', c: 11, type: d },
              24: { name: 'no_international_dialling', c: 11, type: d },
              9: { name: 'id', required: !0, c: 9, type: String },
              10: { name: 'country_code', c: 5, type: Number },
              11: { name: 'international_prefix', c: 9, type: String },
              17: { name: 'preferred_international_prefix', c: 9, type: String },
              12: { name: 'national_prefix', c: 9, type: String },
              13: { name: 'preferred_extn_prefix', c: 9, type: String },
              15: { name: 'national_prefix_for_parsing', c: 9, type: String },
              16: { name: 'national_prefix_transform_rule', c: 9, type: String },
              18: { name: 'same_mobile_and_fixed_line_pattern', c: 8, defaultValue: !1, type: Boolean },
              19: { name: 'number_format', v: !0, c: 11, type: v },
              20: { name: 'intl_number_format', v: !0, c: 11, type: v },
              22: { name: 'main_country_for_code', c: 8, defaultValue: !1, type: Boolean },
              23: { name: 'leading_digits', c: 9, type: String },
              26: { name: 'leading_zero_possible', c: 8, defaultValue: !1, type: Boolean },
            })),
        l
      );
    }),
    (_.j = _.prototype.j),
    (S.prototype.a = function (l) {
      throw (new l.b(), Error('Unimplemented'));
    }),
    (S.prototype.b = function (l, n) {
      if (11 == l.a || 10 == l.a) return n instanceof f ? n : this.a(l.i.prototype.j(), n);
      if (14 == l.a) {
        if ('string' == typeof n && X.test(n)) {
          var u = Number(n);
          if (0 < u) return u;
        }
        return n;
      }
      if (!l.h) return n;
      if (((u = l.i), u === String)) {
        if ('number' == typeof n) return String(n);
      } else if (u === Number && 'string' == typeof n && ('Infinity' === n || '-Infinity' === n || 'NaN' === n || X.test(n)))
        return Number(n);
      return n;
    });
  var X = /^-?[0-9]+$/;
  n(w, S),
    (w.prototype.a = function (l, n) {
      var u = new l.b();
      return (u.g = this), (u.a = n), (u.b = {}), u;
    }),
    n(x, w),
    (x.prototype.b = function (l, n) {
      return 8 == l.a ? !!n : S.prototype.b.apply(this, arguments);
    }),
    (x.prototype.a = function (l, n) {
      return x.M.a.call(this, l, n);
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
  var ll = { 590: ['GP', 'BL', 'MF'] },
    nl = {
      BL: [
        null,
        [null, null, '(?:590|69\\d)\\d{6}', null, null, null, null, null, null, [9]],
        [null, null, '590(?:2[7-9]|5[12]|87)\\d{4}', null, null, null, '590271234'],
        [null, null, '69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}', null, null, null, '690001234'],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        'BL',
        590,
        '00',
        '0',
        null,
        null,
        '0',
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      GP: [
        null,
        [null, null, '(?:590|69\\d)\\d{6}', null, null, null, null, null, null, [9]],
        [
          null,
          null,
          '590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}',
          null,
          null,
          null,
          '590201234',
        ],
        [null, null, '69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}', null, null, null, '690001234'],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        'GP',
        590,
        '00',
        '0',
        null,
        null,
        '0',
        null,
        null,
        null,
        [[null, '(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[56]'], '0$1']],
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        1,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      MF: [
        null,
        [null, null, '(?:590|69\\d)\\d{6}', null, null, null, null, null, null, [9]],
        [null, null, '590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}', null, null, null, '590271234'],
        [null, null, '69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}', null, null, null, '690001234'],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        'MF',
        590,
        '00',
        '0',
        null,
        null,
        '0',
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
    };
  A.b = function () {
    return A.a ? A.a : (A.a = new A());
  };
  var ul = {
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
    tl = RegExp('[+＋]+'),
    el = RegExp('([0-9０-９٠-٩۰-۹])'),
    rl = /^\(?\$1\)?$/,
    il = new _();
  b(il, 11, 'NA');
  var al = /\[([^\[\]])*\]/g,
    ol = /\d(?=[^,}][^,}])/g,
    sl = RegExp('^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$'),
    fl = /[- ]/;
  (E.prototype.K = function () {
    (this.C = ''),
      t(this.i),
      t(this.u),
      t(this.m),
      (this.s = 0),
      (this.w = ''),
      t(this.b),
      (this.h = ''),
      t(this.a),
      (this.l = !0),
      (this.A = this.o = this.F = !1),
      (this.f = []),
      (this.B = !1),
      this.g != this.J && (this.g = F(this, this.D));
  }),
    (E.prototype.L = function (l) {
      return (this.C = C(this, l));
    }),
    l('Cleave.AsYouTypeFormatter', E),
    l('Cleave.AsYouTypeFormatter.prototype.inputDigit', E.prototype.L),
    l('Cleave.AsYouTypeFormatter.prototype.clear', E.prototype.K);
}.call('object' == typeof global && global ? global : window);
