var thumbnail_mode = 'float';
summary_noimg = 200;
summary_img = 200;

function removeHtmlTag(_0x3a64x3, _0x3a64x4) {
    if (_0x3a64x3['indexOf']('<') != -1) {
        var _0x3a64x5 = _0x3a64x3['split']('<');
        for (var _0x3a64x6 = 0; _0x3a64x6 < _0x3a64x5['length']; _0x3a64x6++) {
            if (_0x3a64x5[_0x3a64x6]['indexOf']('>') != -1) {
                _0x3a64x5[_0x3a64x6] = _0x3a64x5[_0x3a64x6]['substring'](_0x3a64x5[_0x3a64x6]['indexOf']('>') + 1, _0x3a64x5[_0x3a64x6]['length']);
            };
        };
        _0x3a64x3 = _0x3a64x5['join']('');
    };
    _0x3a64x4 = (_0x3a64x4 < _0x3a64x3['length'] - 1) ? _0x3a64x4 : _0x3a64x3['length'] - 2;
    while (_0x3a64x3['charAt'](_0x3a64x4 - 1) != ' ' && _0x3a64x3['indexOf'](' ', _0x3a64x4) != -1) {
        _0x3a64x4++;
    };
    _0x3a64x3 = _0x3a64x3['substring'](0, _0x3a64x4 - 1);
    return _0x3a64x3 + '...';
};

function createSummaryAndThumb(_0x3a64x8) {
    var _0x3a64x9 = document['getElementById'](_0x3a64x8);
    var _0x3a64xa = '';
    var _0x3a64xb = _0x3a64x9['getElementsByTagName']('img');
    var _0x3a64xc = summary_noimg;
    if (_0x3a64xb['length'] >= 1) {
        _0x3a64xa = '<span class="exe_post_image"><img src="' + _0x3a64xb[0]['src'] + '" width="100%" height="300px"/></span>';
        _0x3a64xc = summary_img;
    };
    var _0x3a64xd = '<span class="exe_post_summary">' + removeHtmlTag(_0x3a64x9['innerHTML'], _0x3a64xc) + '</span>' + _0x3a64xa;
    _0x3a64x9['innerHTML'] = _0x3a64xd;
};
