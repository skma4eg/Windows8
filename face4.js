
(function(_0x3825x1) {
    'use strict';
    Date['now'] = Date['now'] || function() {
        return +new Date();
    };
    _0x3825x1['ias'] = function(_0x3825x2) {
        var _0x3825x3 = _0x3825x1['extend']({}, _0x3825x1['ias']['defaults'], _0x3825x2);
        var _0x3825x4 = new _0x3825x1['ias']['util']();
        var _0x3825x5 = new _0x3825x1['ias']['paging'](_0x3825x3['scrollContainer']);
        var _0x3825x6 = (_0x3825x3['history'] ? new _0x3825x1['ias']['history']() : false);
        var _0x3825x7 = this;

        function _0x3825x8() {
            var _0x3825x9;
            _0x3825x5['onChangePage'](function(_0x3825xa, _0x3825xb, _0x3825xc) {
                if (_0x3825x6) {
                    _0x3825x6['setPage'](_0x3825xa, _0x3825xc);
                };
                _0x3825x3['onPageChange']['call'](this, _0x3825xa, _0x3825xc, _0x3825xb);
            });
            _0x3825xd();
            if (_0x3825x6 && _0x3825x6['havePage']()) {
                _0x3825x10();
                _0x3825x9 = _0x3825x6['getPage']();
                _0x3825x4['forceScrollTop'](function() {
                    var _0x3825xa;
                    if (_0x3825x9 > 1) {
                        _0x3825x1d(_0x3825x9);
                        _0x3825xa = _0x3825x12(true);
                        _0x3825x1('html, body')['scrollTop'](_0x3825xa);
                    } else {
                        _0x3825xd();
                    };
                });
            };
            return _0x3825x7;
        };
        _0x3825x8();

        function _0x3825xd() {
            _0x3825x11();
            _0x3825x3['scrollContainer']['scroll'](_0x3825xe);
        };

        function _0x3825xe() {
            var _0x3825xa, _0x3825xf;
            _0x3825xa = _0x3825x4['getCurrentScrollOffset'](_0x3825x3['scrollContainer']);
            _0x3825xf = _0x3825x12();
            if (_0x3825xa >= _0x3825xf) {
                if (_0x3825x1e() >= _0x3825x3['triggerPageThreshold']) {
                    _0x3825x10();
                    _0x3825x24(function() {
                        _0x3825x14(_0x3825xa);
                    });
                } else {
                    _0x3825x14(_0x3825xa);
                };
            };
        };

        function _0x3825x10() {
            _0x3825x3['scrollContainer']['unbind']('scroll', _0x3825xe);
        };

        function _0x3825x11() {
            _0x3825x1(_0x3825x3['pagination'])['hide']();
        };

        function _0x3825x12(_0x3825xa) {
            var _0x3825xb, _0x3825x13;
            _0x3825xb = _0x3825x1(_0x3825x3['container'])['find'](_0x3825x3['item'])['last']();
            if (_0x3825xb['size']() === 0) {
                return 0;
            };
            _0x3825x13 = _0x3825xb['offset']()['top'] + _0x3825xb['height']();
            if (!_0x3825xa) {
                _0x3825x13 += _0x3825x3['thresholdMargin'];
            };
            return _0x3825x13;
        };

        function _0x3825x14(_0x3825x9, _0x3825x15) {
            var _0x3825x16;
            _0x3825x16 = _0x3825x1(_0x3825x3['next'])['attr']('href');
            if (!_0x3825x16) {
                if (_0x3825x3['noneleft']) {
                    _0x3825x1(_0x3825x3['container'])['find'](_0x3825x3['item'])['last']()['after'](_0x3825x3['noneleft']);
                };
                return _0x3825x10();
            };
            if (_0x3825x3['beforePageChange'] && _0x3825x1['isFunction'](_0x3825x3['beforePageChange'])) {
                if (_0x3825x3['beforePageChange'](_0x3825x9, _0x3825x16) === false) {
                    return;
                };
            };
            _0x3825x5['pushPages'](_0x3825x9, _0x3825x16);
            _0x3825x10();
            _0x3825x20();
            _0x3825x18(_0x3825x16, function(_0x3825xa, _0x3825xb) {
                var _0x3825xc = _0x3825x3['onLoadItems']['call'](this, _0x3825xb),
                    _0x3825x17;
                if (_0x3825xc !== false) {
                    _0x3825x1(_0x3825xb)['hide']();
                    _0x3825x17 = _0x3825x1(_0x3825x3['container'])['find'](_0x3825x3['item'])['last']();
                    _0x3825x17['after'](_0x3825xb);
                    _0x3825x1(_0x3825xb)['fadeIn']();
                };
                _0x3825x16 = _0x3825x1(_0x3825x3['next'], _0x3825xa)['attr']('href');
                _0x3825x1(_0x3825x3['pagination'])['replaceWith'](_0x3825x1(_0x3825x3['pagination'], _0x3825xa));
                _0x3825x22();
                _0x3825x11();
                if (_0x3825x16) {
                    _0x3825xd();
                } else {
                    _0x3825x10();
                };
                _0x3825x3['onRenderComplete']['call'](this, _0x3825xb);
                if (_0x3825x15) {
                    _0x3825x15['call'](this);
                };
            });
        };

        function _0x3825x18(_0x3825xb, _0x3825xc, _0x3825x9) {
            var _0x3825x15 = [],
                _0x3825x19, _0x3825x1a = Date['now'](),
                _0x3825x1b, _0x3825x1c;
            _0x3825x9 = _0x3825x9 || _0x3825x3['loaderDelay'];
            _0x3825x1['get'](_0x3825xb, null, function(_0x3825xa) {
                _0x3825x19 = _0x3825x1(_0x3825x3['container'], _0x3825xa)['eq'](0);
                if (0 === _0x3825x19['length']) {
                    _0x3825x19 = _0x3825x1(_0x3825xa)['filter'](_0x3825x3['container'])['eq'](0);
                };
                if (_0x3825x19) {
                    _0x3825x19['find'](_0x3825x3['item'])['each'](function() {
                        _0x3825x15['push'](this);
                    });
                };
                if (_0x3825xc) {
                    _0x3825x1c = this;
                    _0x3825x1b = Date['now']() - _0x3825x1a;
                    if (_0x3825x1b < _0x3825x9) {
                        setTimeout(function() {
                            _0x3825xc['call'](_0x3825x1c, _0x3825xa, _0x3825x15);
                        }, _0x3825x9 - _0x3825x1b);
                    } else {
                        _0x3825xc['call'](_0x3825x1c, _0x3825xa, _0x3825x15);
                    };
                };
            }, 'html');
        };

        function _0x3825x1d(_0x3825xa) {
            var _0x3825xb = _0x3825x12(true);
            if (_0x3825xb > 0) {
                _0x3825x14(_0x3825xb, function() {
                    _0x3825x10();
                    if ((_0x3825x5['getCurPageNum'](_0x3825xb) + 1) < _0x3825xa) {
                        _0x3825x1d(_0x3825xa);
                        _0x3825x1('html,body')['animate']({
                            "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70": _0x3825xb
                        }, 400, 'swing');
                    } else {
                        _0x3825x1('html,body')['animate']({
                            "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70": _0x3825xb
                        }, 1000, 'swing');
                        _0x3825xd();
                    };
                });
            };
        };

        function _0x3825x1e() {
            var _0x3825xa = _0x3825x4['getCurrentScrollOffset'](_0x3825x3['scrollContainer']);
            return _0x3825x5['getCurPageNum'](_0x3825xa);
        };

        function _0x3825x1f() {
            var _0x3825xa = _0x3825x1('.ias_loader');
            if (_0x3825xa['size']() === 0) {
                _0x3825xa = _0x3825x1('<div class="ias_loader">' + _0x3825x3['loader'] + '</div>');
                _0x3825xa['hide']();
            };
            return _0x3825xa;
        };

        function _0x3825x20() {
            var _0x3825xa = _0x3825x1f(),
                _0x3825x21;
            if (_0x3825x3['customLoaderProc'] !== false) {
                _0x3825x3['customLoaderProc'](_0x3825xa);
            } else {
                _0x3825x21 = _0x3825x1(_0x3825x3['container'])['find'](_0x3825x3['item'])['last']();
                _0x3825x21['after'](_0x3825xa);
                _0x3825xa['fadeIn']();
            };
        };

        function _0x3825x22() {
            var _0x3825xa = _0x3825x1f();
            _0x3825xa['remove']();
        };

        function _0x3825x23(_0x3825xa) {
            var _0x3825xb = _0x3825x1('.ias_trigger');
            if (_0x3825xb['size']() === 0) {
                _0x3825xb = _0x3825x1('<center><div class="ias_trigger"><a href="#">' + _0x3825x3['trigger'] + '</a></div></center>');
                _0x3825xb['hide']();
            };
            _0x3825x1('a', _0x3825xb)['off']('click')['on']('click', function() {
                _0x3825x25();
                _0x3825xa['call']();
                return false;
            });
            return _0x3825xb;
        };

        function _0x3825x24(_0x3825xa) {
            var _0x3825xb = _0x3825x23(_0x3825xa),
                _0x3825x21;
            _0x3825x21 = _0x3825x1(_0x3825x3['container'])['find'](_0x3825x3['item'])['last']();
            _0x3825x21['after'](_0x3825xb);
            _0x3825xb['fadeIn']();
        };

        function _0x3825x25() {
            var _0x3825xa = _0x3825x23();
            _0x3825xa['remove']();
        };
    };
    _0x3825x1['ias']['defaults'] = {
        container: '.blog-posts',
        scrollContainer: _0x3825x1(window),
        item: '.mobile-post-outer',
        pagination: '#blog-pager',
        next: '#blog-pager-older-link a',
        loader: '<center><img src="https://lh4.googleusercontent.com/-73o3lpTZCfQ/U3ylJNXHilI/AAAAAAAAPH4/gMhI4oL8Qmk/s16/facebook-loading-animated-gif.gif"/></center>',
        loaderDelay: 2000,
        triggerPageThreshold: 2,
        trigger: 'Show More',
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
    _0x3825x1['ias']['util'] = function() {
        var _0x3825xc = false;
        var _0x3825x9 = false;
        var _0x3825x15 = this;

        function _0x3825x8() {
            _0x3825x1(window)['load'](function() {
                _0x3825xc = true;
            });
        };
        _0x3825x8();
        this['forceScrollTop'] = function(_0x3825xa) {
            _0x3825x1('html,body')['scrollTop'](0);
            if (!_0x3825x9) {
                if (!_0x3825xc) {
                    setTimeout(function() {
                        _0x3825x15['forceScrollTop'](_0x3825xa);
                    }, 1);
                } else {
                    _0x3825xa['call']();
                    _0x3825x9 = true;
                };
            };
        };
        this['getCurrentScrollOffset'] = function(_0x3825xa) {
            var _0x3825xb, _0x3825x26;
            if (_0x3825xa['get'](0) === window) {
                _0x3825xb = _0x3825xa['scrollTop']();
            } else {
                _0x3825xb = _0x3825xa['offset']()['top'];
            };
            _0x3825x26 = _0x3825xa['height']();
            return _0x3825xb + _0x3825x26;
        };
    };
    _0x3825x1['ias']['paging'] = function() {
        var _0x3825xc = [
            [0, document['location'].toString()]
        ];
        var _0x3825x9 = function() {};
        var _0x3825x15 = 1;
        var _0x3825x16 = new _0x3825x1['ias']['util']();

        function _0x3825x8() {
            _0x3825x1(window)['scroll'](_0x3825xe);
        };
        _0x3825x8();

        function _0x3825xe() {
            var _0x3825xa, _0x3825x27, _0x3825x28, _0x3825x29, _0x3825x2a;
            _0x3825xa = _0x3825x16['getCurrentScrollOffset'](_0x3825x1(window));
            _0x3825x27 = _0x3825x2b(_0x3825xa);
            _0x3825x28 = _0x3825x2c(_0x3825xa);
            if (_0x3825x15 !== _0x3825x27) {
                _0x3825x29 = _0x3825x28[0];
                _0x3825x2a = _0x3825x28[1];
                _0x3825x9['call']({}, _0x3825x27, _0x3825x29, _0x3825x2a);
            };
            _0x3825x15 = _0x3825x27;
        };

        function _0x3825x2b(_0x3825xa) {
            for (var _0x3825x4 = (_0x3825xc['length'] - 1); _0x3825x4 > 0; _0x3825x4--) {
                if (_0x3825xa > _0x3825xc[_0x3825x4][0]) {
                    return _0x3825x4 + 1;
                };
            };
            return 1;
        };
        this['getCurPageNum'] = function(_0x3825xa) {
            _0x3825xa = _0x3825xa || _0x3825x16['getCurrentScrollOffset'](_0x3825x1(window));
            return _0x3825x2b(_0x3825xa);
        };

        function _0x3825x2c(_0x3825xa) {
            for (var _0x3825x4 = (_0x3825xc['length'] - 1); _0x3825x4 >= 0; _0x3825x4--) {
                if (_0x3825xa > _0x3825xc[_0x3825x4][0]) {
                    return _0x3825xc[_0x3825x4];
                };
            };
            return null;
        };
        this['onChangePage'] = function(_0x3825xa) {
            _0x3825x9 = _0x3825xa;
        };
        this['pushPages'] = function(_0x3825xa, _0x3825xb) {
            _0x3825xc['push']([_0x3825xa, _0x3825xb]);
        };
    };
    _0x3825x1['ias']['history'] = function() {
        var _0x3825x15 = false;
        var _0x3825x16 = false;

        function _0x3825x8() {
            _0x3825x16 = !!(window['history'] && history['pushState'] && history['replaceState']);
            _0x3825x16 = false;
        };
        _0x3825x8();
        this['setPage'] = function(_0x3825xa, _0x3825xb) {
            this['updateState']({
                page: _0x3825xa
            }, '', _0x3825xb);
        };
        this['havePage'] = function() {
            return (this['getState']() !== false);
        };
        this['getPage'] = function() {
            var _0x3825xa;
            if (this['havePage']()) {
                _0x3825xa = this['getState']();
                return _0x3825xa['page'];
            };
            return 1;
        };
        this['getState'] = function() {
            var _0x3825xa, _0x3825x2d, _0x3825x2e;
            if (_0x3825x16) {
                _0x3825x2d = history['state'];
                if (_0x3825x2d && _0x3825x2d['ias']) {
                    return _0x3825x2d['ias'];
                };
            } else {
                _0x3825xa = (window['location']['hash']['substring'](0, 7) === '#/page/');
                if (_0x3825xa) {
                    _0x3825x2e = parseInt(window['location']['hash']['replace']('#/page/', ''), 10);
                    return {
                        page: _0x3825x2e
                    };
                };
            };
            return false;
        };
        this['updateState'] = function(_0x3825xa, _0x3825xb, _0x3825xc) {
            if (_0x3825x15) {
                this['replaceState'](_0x3825xa, _0x3825xb, _0x3825xc);
            } else {
                this['pushState'](_0x3825xa, _0x3825xb, _0x3825xc);
            };
        };
        this['pushState'] = function(_0x3825xa, _0x3825xb, _0x3825xc) {
            var _0x3825x9;
            if (_0x3825x16) {
                history['pushState']({
                    ias: _0x3825xa
                }, _0x3825xb, _0x3825xc);
            } else {
                _0x3825x9 = (_0x3825xa['page'] > 0 ? '#/page/' + _0x3825xa['page'] : '');
                window['location']['hash'] = _0x3825x9;
            };
            _0x3825x15 = true;
        };
        this['replaceState'] = function(_0x3825xa, _0x3825xb, _0x3825xc) {
            if (_0x3825x16) {
                history['replaceState']({
                    ias: _0x3825xa
                }, _0x3825xb, _0x3825xc);
            } else {
                this['pushState'](_0x3825xa, _0x3825xb, _0x3825xc);
            };
        };
    };
})(jQuery);
