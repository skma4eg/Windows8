
(function(_0xaf03x1) {
    'use strict';
    Date['now'] = Date['now'] || function() {
        return +new Date();
    };
    _0xaf03x1['ias'] = function(_0xaf03x2) {
        var _0xaf03x3 = _0xaf03x1['extend']({}, _0xaf03x1['ias']['defaults'], _0xaf03x2);
        var _0xaf03x4 = new _0xaf03x1['ias']['util']();
        var _0xaf03x5 = new _0xaf03x1['ias']['paging'](_0xaf03x3['scrollContainer']);
        var _0xaf03x6 = (_0xaf03x3['history'] ? new _0xaf03x1['ias']['history']() : false);
        var _0xaf03x7 = this;

        function _0xaf03x8() {
            var _0xaf03x9;
            _0xaf03x5['onChangePage'](function(_0xaf03xa, _0xaf03xb, _0xaf03xc) {
                if (_0xaf03x6) {
                    _0xaf03x6['setPage'](_0xaf03xa, _0xaf03xc);
                };
                _0xaf03x3['onPageChange']['call'](this, _0xaf03xa, _0xaf03xc, _0xaf03xb);
            });
            _0xaf03xd();
            if (_0xaf03x6 && _0xaf03x6['havePage']()) {
                _0xaf03x10();
                _0xaf03x9 = _0xaf03x6['getPage']();
                _0xaf03x4['forceScrollTop'](function() {
                    var _0xaf03xa;
                    if (_0xaf03x9 > 1) {
                        _0xaf03x1d(_0xaf03x9);
                        _0xaf03xa = _0xaf03x12(true);
                        _0xaf03x1('html, body')['scrollTop'](_0xaf03xa);
                    } else {
                        _0xaf03xd();
                    };
                });
            };
            return _0xaf03x7;
        };
        _0xaf03x8();

        function _0xaf03xd() {
            _0xaf03x11();
            _0xaf03x3['scrollContainer']['scroll'](_0xaf03xe);
        };

        function _0xaf03xe() {
            var _0xaf03xa, _0xaf03xf;
            _0xaf03xa = _0xaf03x4['getCurrentScrollOffset'](_0xaf03x3['scrollContainer']);
            _0xaf03xf = _0xaf03x12();
            if (_0xaf03xa >= _0xaf03xf) {
                if (_0xaf03x1e() >= _0xaf03x3['triggerPageThreshold']) {
                    _0xaf03x10();
                    _0xaf03x24(function() {
                        _0xaf03x14(_0xaf03xa);
                    });
                } else {
                    _0xaf03x14(_0xaf03xa);
                };
            };
        };

        function _0xaf03x10() {
            _0xaf03x3['scrollContainer']['unbind']('scroll', _0xaf03xe);
        };

        function _0xaf03x11() {
            _0xaf03x1(_0xaf03x3['pagination'])['hide']();
        };

        function _0xaf03x12(_0xaf03xa) {
            var _0xaf03xb, _0xaf03x13;
            _0xaf03xb = _0xaf03x1(_0xaf03x3['container'])['find'](_0xaf03x3['item'])['last']();
            if (_0xaf03xb['size']() === 0) {
                return 0;
            };
            _0xaf03x13 = _0xaf03xb['offset']()['top'] + _0xaf03xb['height']();
            if (!_0xaf03xa) {
                _0xaf03x13 += _0xaf03x3['thresholdMargin'];
            };
            return _0xaf03x13;
        };

        function _0xaf03x14(_0xaf03x9, _0xaf03x15) {
            var _0xaf03x16;
            _0xaf03x16 = _0xaf03x1(_0xaf03x3['next'])['attr']('href');
            if (!_0xaf03x16) {
                if (_0xaf03x3['noneleft']) {
                    _0xaf03x1(_0xaf03x3['container'])['find'](_0xaf03x3['item'])['last']()['after'](_0xaf03x3['noneleft']);
                };
                return _0xaf03x10();
            };
            if (_0xaf03x3['beforePageChange'] && _0xaf03x1['isFunction'](_0xaf03x3['beforePageChange'])) {
                if (_0xaf03x3['beforePageChange'](_0xaf03x9, _0xaf03x16) === false) {
                    return;
                };
            };
            _0xaf03x5['pushPages'](_0xaf03x9, _0xaf03x16);
            _0xaf03x10();
            _0xaf03x20();
            _0xaf03x18(_0xaf03x16, function(_0xaf03xa, _0xaf03xb) {
                var _0xaf03xc = _0xaf03x3['onLoadItems']['call'](this, _0xaf03xb),
                    _0xaf03x17;
                if (_0xaf03xc !== false) {
                    _0xaf03x1(_0xaf03xb)['hide']();
                    _0xaf03x17 = _0xaf03x1(_0xaf03x3['container'])['find'](_0xaf03x3['item'])['last']();
                    _0xaf03x17['after'](_0xaf03xb);
                    _0xaf03x1(_0xaf03xb)['fadeIn']();
                };
                _0xaf03x16 = _0xaf03x1(_0xaf03x3['next'], _0xaf03xa)['attr']('href');
                _0xaf03x1(_0xaf03x3['pagination'])['replaceWith'](_0xaf03x1(_0xaf03x3['pagination'], _0xaf03xa));
                _0xaf03x22();
                _0xaf03x11();
                if (_0xaf03x16) {
                    _0xaf03xd();
                } else {
                    _0xaf03x10();
                };
                _0xaf03x3['onRenderComplete']['call'](this, _0xaf03xb);
                if (_0xaf03x15) {
                    _0xaf03x15['call'](this);
                };
            });
        };

        function _0xaf03x18(_0xaf03xb, _0xaf03xc, _0xaf03x9) {
            var _0xaf03x15 = [],
                _0xaf03x19, _0xaf03x1a = Date['now'](),
                _0xaf03x1b, _0xaf03x1c;
            _0xaf03x9 = _0xaf03x9 || _0xaf03x3['loaderDelay'];
            _0xaf03x1['get'](_0xaf03xb, null, function(_0xaf03xa) {
                _0xaf03x19 = _0xaf03x1(_0xaf03x3['container'], _0xaf03xa)['eq'](0);
                if (0 === _0xaf03x19['length']) {
                    _0xaf03x19 = _0xaf03x1(_0xaf03xa)['filter'](_0xaf03x3['container'])['eq'](0);
                };
                if (_0xaf03x19) {
                    _0xaf03x19['find'](_0xaf03x3['item'])['each'](function() {
                        _0xaf03x15['push'](this);
                    });
                };
                if (_0xaf03xc) {
                    _0xaf03x1c = this;
                    _0xaf03x1b = Date['now']() - _0xaf03x1a;
                    if (_0xaf03x1b < _0xaf03x9) {
                        setTimeout(function() {
                            _0xaf03xc['call'](_0xaf03x1c, _0xaf03xa, _0xaf03x15);
                        }, _0xaf03x9 - _0xaf03x1b);
                    } else {
                        _0xaf03xc['call'](_0xaf03x1c, _0xaf03xa, _0xaf03x15);
                    };
                };
            }, 'html');
        };

        function _0xaf03x1d(_0xaf03xa) {
            var _0xaf03xb = _0xaf03x12(true);
            if (_0xaf03xb > 0) {
                _0xaf03x14(_0xaf03xb, function() {
                    _0xaf03x10();
                    if ((_0xaf03x5['getCurPageNum'](_0xaf03xb) + 1) < _0xaf03xa) {
                        _0xaf03x1d(_0xaf03xa);
                        _0xaf03x1('html,body')['animate']({
                            "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70": _0xaf03xb
                        }, 400, 'swing');
                    } else {
                        _0xaf03x1('html,body')['animate']({
                            "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70": _0xaf03xb
                        }, 1000, 'swing');
                        _0xaf03xd();
                    };
                });
            };
        };

        function _0xaf03x1e() {
            var _0xaf03xa = _0xaf03x4['getCurrentScrollOffset'](_0xaf03x3['scrollContainer']);
            return _0xaf03x5['getCurPageNum'](_0xaf03xa);
        };

        function _0xaf03x1f() {
            var _0xaf03xa = _0xaf03x1('.ias_loader');
            if (_0xaf03xa['size']() === 0) {
                _0xaf03xa = _0xaf03x1('<div class="ias_loader">' + _0xaf03x3['loader'] + '</div>');
                _0xaf03xa['hide']();
            };
            return _0xaf03xa;
        };

        function _0xaf03x20() {
            var _0xaf03xa = _0xaf03x1f(),
                _0xaf03x21;
            if (_0xaf03x3['customLoaderProc'] !== false) {
                _0xaf03x3['customLoaderProc'](_0xaf03xa);
            } else {
                _0xaf03x21 = _0xaf03x1(_0xaf03x3['container'])['find'](_0xaf03x3['item'])['last']();
                _0xaf03x21['after'](_0xaf03xa);
                _0xaf03xa['fadeIn']();
            };
        };

        function _0xaf03x22() {
            var _0xaf03xa = _0xaf03x1f();
            _0xaf03xa['remove']();
        };

        function _0xaf03x23(_0xaf03xa) {
            var _0xaf03xb = _0xaf03x1('.ias_trigger');
            if (_0xaf03xb['size']() === 0) {
                _0xaf03xb = _0xaf03x1('<center><div class="ias_trigger"><a href="#">' + _0xaf03x3['trigger'] + '</a></div></center>');
                _0xaf03xb['hide']();
            };
            _0xaf03x1('a', _0xaf03xb)['off']('click')['on']('click', function() {
                _0xaf03x25();
                _0xaf03xa['call']();
                return false;
            });
            return _0xaf03xb;
        };

        function _0xaf03x24(_0xaf03xa) {
            var _0xaf03xb = _0xaf03x23(_0xaf03xa),
                _0xaf03x21;
            _0xaf03x21 = _0xaf03x1(_0xaf03x3['container'])['find'](_0xaf03x3['item'])['last']();
            _0xaf03x21['after'](_0xaf03xb);
            _0xaf03xb['fadeIn']();
        };

        function _0xaf03x25() {
            var _0xaf03xa = _0xaf03x23();
            _0xaf03xa['remove']();
        };
    };
    _0xaf03x1['ias']['defaults'] = {
        container: '.blog-posts',
        scrollContainer: _0xaf03x1(window),
        item: '.post-outer',
        pagination: '#blog-pager',
        next: '#blog-pager-older-link a',
        loader: '<center><img src="https://lh4.googleusercontent.com/-73o3lpTZCfQ/U3ylJNXHilI/AAAAAAAAPH4/gMhI4oL8Qmk/s16/facebook-loading-animated-gif.gif"/></center>',
        loaderDelay: 2000,
        triggerPageThreshold: 2,
        trigger: 'See More Recent Stories...',
        thresholdMargin: -500,
        history: true,
        onPageChange: function() {},
        beforePageChange: function() {},
        onLoadItems: function() {},
        onRenderComplete: function() {
            FB['XFBML']['parse']();
            gapi['plusone']['go']();
            twttr['widgets']['load']();
            _gaq['push'](['_trackPageview']);
        },
        customLoaderProc: false
    };
    _0xaf03x1['ias']['util'] = function() {
        var _0xaf03xc = false;
        var _0xaf03x9 = false;
        var _0xaf03x15 = this;

        function _0xaf03x8() {
            _0xaf03x1(window)['load'](function() {
                _0xaf03xc = true;
            });
        };
        _0xaf03x8();
        this['forceScrollTop'] = function(_0xaf03xa) {
            _0xaf03x1('html,body')['scrollTop'](0);
            if (!_0xaf03x9) {
                if (!_0xaf03xc) {
                    setTimeout(function() {
                        _0xaf03x15['forceScrollTop'](_0xaf03xa);
                    }, 1);
                } else {
                    _0xaf03xa['call']();
                    _0xaf03x9 = true;
                };
            };
        };
        this['getCurrentScrollOffset'] = function(_0xaf03xa) {
            var _0xaf03xb, _0xaf03x26;
            if (_0xaf03xa['get'](0) === window) {
                _0xaf03xb = _0xaf03xa['scrollTop']();
            } else {
                _0xaf03xb = _0xaf03xa['offset']()['top'];
            };
            _0xaf03x26 = _0xaf03xa['height']();
            return _0xaf03xb + _0xaf03x26;
        };
    };
    _0xaf03x1['ias']['paging'] = function() {
        var _0xaf03xc = [
            [0, document['location'].toString()]
        ];
        var _0xaf03x9 = function() {};
        var _0xaf03x15 = 1;
        var _0xaf03x16 = new _0xaf03x1['ias']['util']();

        function _0xaf03x8() {
            _0xaf03x1(window)['scroll'](_0xaf03xe);
        };
        _0xaf03x8();

        function _0xaf03xe() {
            var _0xaf03xa, _0xaf03x27, _0xaf03x28, _0xaf03x29, _0xaf03x2a;
            _0xaf03xa = _0xaf03x16['getCurrentScrollOffset'](_0xaf03x1(window));
            _0xaf03x27 = _0xaf03x2b(_0xaf03xa);
            _0xaf03x28 = _0xaf03x2c(_0xaf03xa);
            if (_0xaf03x15 !== _0xaf03x27) {
                _0xaf03x29 = _0xaf03x28[0];
                _0xaf03x2a = _0xaf03x28[1];
                _0xaf03x9['call']({}, _0xaf03x27, _0xaf03x29, _0xaf03x2a);
            };
            _0xaf03x15 = _0xaf03x27;
        };

        function _0xaf03x2b(_0xaf03xa) {
            for (var _0xaf03x4 = (_0xaf03xc['length'] - 1); _0xaf03x4 > 0; _0xaf03x4--) {
                if (_0xaf03xa > _0xaf03xc[_0xaf03x4][0]) {
                    return _0xaf03x4 + 1;
                };
            };
            return 1;
        };
        this['getCurPageNum'] = function(_0xaf03xa) {
            _0xaf03xa = _0xaf03xa || _0xaf03x16['getCurrentScrollOffset'](_0xaf03x1(window));
            return _0xaf03x2b(_0xaf03xa);
        };

        function _0xaf03x2c(_0xaf03xa) {
            for (var _0xaf03x4 = (_0xaf03xc['length'] - 1); _0xaf03x4 >= 0; _0xaf03x4--) {
                if (_0xaf03xa > _0xaf03xc[_0xaf03x4][0]) {
                    return _0xaf03xc[_0xaf03x4];
                };
            };
            return null;
        };
        this['onChangePage'] = function(_0xaf03xa) {
            _0xaf03x9 = _0xaf03xa;
        };
        this['pushPages'] = function(_0xaf03xa, _0xaf03xb) {
            _0xaf03xc['push']([_0xaf03xa, _0xaf03xb]);
        };
    };
    _0xaf03x1['ias']['history'] = function() {
        var _0xaf03x15 = false;
        var _0xaf03x16 = false;

        function _0xaf03x8() {
            _0xaf03x16 = !!(window['history'] && history['pushState'] && history['replaceState']);
            _0xaf03x16 = false;
        };
        _0xaf03x8();
        this['setPage'] = function(_0xaf03xa, _0xaf03xb) {
            this['updateState']({
                page: _0xaf03xa
            }, '', _0xaf03xb);
        };
        this['havePage'] = function() {
            return (this['getState']() !== false);
        };
        this['getPage'] = function() {
            var _0xaf03xa;
            if (this['havePage']()) {
                _0xaf03xa = this['getState']();
                return _0xaf03xa['page'];
            };
            return 1;
        };
        this['getState'] = function() {
            var _0xaf03xa, _0xaf03x2d, _0xaf03x2e;
            if (_0xaf03x16) {
                _0xaf03x2d = history['state'];
                if (_0xaf03x2d && _0xaf03x2d['ias']) {
                    return _0xaf03x2d['ias'];
                };
            } else {
                _0xaf03xa = (window['location']['hash']['substring'](0, 7) === '#/page/');
                if (_0xaf03xa) {
                    _0xaf03x2e = parseInt(window['location']['hash']['replace']('#/page/', ''), 10);
                    return {
                        page: _0xaf03x2e
                    };
                };
            };
            return false;
        };
        this['updateState'] = function(_0xaf03xa, _0xaf03xb, _0xaf03xc) {
            if (_0xaf03x15) {
                this['replaceState'](_0xaf03xa, _0xaf03xb, _0xaf03xc);
            } else {
                this['pushState'](_0xaf03xa, _0xaf03xb, _0xaf03xc);
            };
        };
        this['pushState'] = function(_0xaf03xa, _0xaf03xb, _0xaf03xc) {
            var _0xaf03x9;
            if (_0xaf03x16) {
                history['pushState']({
                    ias: _0xaf03xa
                }, _0xaf03xb, _0xaf03xc);
            } else {
                _0xaf03x9 = (_0xaf03xa['page'] > 0 ? '#/page/' + _0xaf03xa['page'] : '');
                window['location']['hash'] = _0xaf03x9;
            };
            _0xaf03x15 = true;
        };
        this['replaceState'] = function(_0xaf03xa, _0xaf03xb, _0xaf03xc) {
            if (_0xaf03x16) {
                history['replaceState']({
                    ias: _0xaf03xa
                }, _0xaf03xb, _0xaf03xc);
            } else {
                this['pushState'](_0xaf03xa, _0xaf03xb, _0xaf03xc);
            };
        };
    };
})(jQuery);
