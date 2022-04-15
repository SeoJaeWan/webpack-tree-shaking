(() => {
  var o = {
      580: (o) => {
        o.exports = {
          func1: () => {
            console.log("func1");
          },
          func2: () => {
            console.log("func2");
          },
        };
      },
    },
    r = {};
  function n(e) {
    var c = r[e];
    if (void 0 !== c) return c.exports;
    var s = (r[e] = { exports: {} });
    return o[e](s, s.exports, n), s.exports;
  }
  (() => {
    "use strict";
    var o = n(580);
    console.log("func1_esm"), (0, o.func2)();
  })();
})();
