var exe_relatedpost_count = 4;
var exe_relatedpost_sum_count = 0;
var exe_relatedpost_data = 0;
var exe_relatedpost_title = new Array();
var exe_relatedpost_url = new Array();
var exe_relatedpost_sum = new Array();
var exe_relatedpost_img = new Array();

function saringtags(_0x4263x9, _0x4263xa) {
    var _0x4263xb = _0x4263x9['split']('<');
    for (var _0x4263xc = 0; _0x4263xc < _0x4263xb['length']; _0x4263xc++) {
        if (_0x4263xb[_0x4263xc]['indexOf']('>') != -1) {
            _0x4263xb[_0x4263xc] = _0x4263xb[_0x4263xc]['substring'](_0x4263xb[_0x4263xc]['indexOf']('>') + 1, _0x4263xb[_0x4263xc]['length']);
        };
    };
    _0x4263xb = _0x4263xb['join']('');
    _0x4263xb = _0x4263xb['substring'](0, _0x4263xa - 1);
    return _0x4263xb;
};

function relpostimgcuplik(_0x4263xa) {
    for (var _0x4263xb = 0; _0x4263xb < _0x4263xa['feed']['entry']['length']; _0x4263xb++) {
        var _0x4263x9 = _0x4263xa['feed']['entry'][_0x4263xb];
        exe_relatedpost_title[exe_relatedpost_data] = _0x4263x9['title']['$t'];
        postcontent = '';
        if ('content' in _0x4263x9) {
            postcontent = _0x4263x9['content']['$t'];
        } else {
            if ('summary' in _0x4263x9) {
                postcontent = _0x4263x9['summary']['$t'];
            };
        };
        exe_relatedpost_sum[exe_relatedpost_data] = saringtags(postcontent, exe_relatedpost_sum_count);
        if ('media$thumbnail' in _0x4263x9) {
            postimg = _0x4263x9['media$thumbnail']['url'];
        } else {
            postimg = 'https://lh3.googleusercontent.com/-cjAUAp1jzhI/UrrQfAkABfI/AAAAAAAAKUA/IPrBDowLVwY/s215/No_Image_Available.png';
        };
        exe_relatedpost_img[exe_relatedpost_data] = postimg;
        for (var _0x4263xc = 0; _0x4263xc < _0x4263x9['link']['length']; _0x4263xc++) {
            if (_0x4263x9['link'][_0x4263xc]['rel'] == 'alternate') {
                exe_relatedpost_url[exe_relatedpost_data] = _0x4263x9['link'][_0x4263xc]['href'];
                break;
            };
        };
        exe_relatedpost_data++;
    };
};

function contains(_0x4263xf, _0x4263xb) {
    for (var _0x4263xc = 0; _0x4263xc < _0x4263xf['length']; _0x4263xc++) {
        if (_0x4263xf[_0x4263xc] == _0x4263xb) {
            return true;
        };
    };
    return false;
};

function exe_relatedpost_main() {
    var _0x4263x11 = new Array(0);
    var _0x4263x12 = new Array(0);
    var _0x4263x13 = new Array(0);
    var _0x4263x14 = new Array(0);
    for (var _0x4263x15 = 0; _0x4263x15 < exe_relatedpost_url['length']; _0x4263x15++) {
        if (!contains(_0x4263x11, exe_relatedpost_url[_0x4263x15])) {
            _0x4263x11['length'] += 1;
            _0x4263x11[_0x4263x11['length'] - 1] = exe_relatedpost_url[_0x4263x15];
            _0x4263x12['length'] += 1;
            _0x4263x12[_0x4263x12['length'] - 1] = exe_relatedpost_title[_0x4263x15];
            _0x4263x13['length'] += 1;
            _0x4263x13[_0x4263x13['length'] - 1] = exe_relatedpost_sum[_0x4263x15];
            _0x4263x14['length'] += 1;
            _0x4263x14[_0x4263x14['length'] - 1] = exe_relatedpost_img[_0x4263x15];
        };
    };
    exe_relatedpost_title = _0x4263x12;
    exe_relatedpost_url = _0x4263x11;
    exe_relatedpost_sum = _0x4263x13;
    exe_relatedpost_img = _0x4263x14;
    for (var _0x4263x15 = 0; _0x4263x15 < exe_relatedpost_title['length']; _0x4263x15++) {
        var _0x4263x16 = Math['floor']((exe_relatedpost_title['length'] - 1) * Math['random']());
        var _0x4263x17 = exe_relatedpost_title[_0x4263x15];
        var _0x4263x18 = exe_relatedpost_url[_0x4263x15];
        var _0x4263x19 = exe_relatedpost_sum[_0x4263x15];
        var _0x4263x1a = exe_relatedpost_img[_0x4263x15];
        exe_relatedpost_title[_0x4263x15] = exe_relatedpost_title[_0x4263x16];
        exe_relatedpost_url[_0x4263x15] = exe_relatedpost_url[_0x4263x16];
        exe_relatedpost_sum[_0x4263x15] = exe_relatedpost_sum[_0x4263x16];
        exe_relatedpost_img[_0x4263x15] = exe_relatedpost_img[_0x4263x16];
        exe_relatedpost_title[_0x4263x16] = _0x4263x17;
        exe_relatedpost_url[_0x4263x16] = _0x4263x18;
        exe_relatedpost_sum[_0x4263x16] = _0x4263x19;
        exe_relatedpost_img[_0x4263x16] = _0x4263x1a;
    };
    var _0x4263x1b = 0;
    var _0x4263x1c = Math['floor']((exe_relatedpost_title['length'] - 1) * Math['random']());
    var _0x4263x1d = _0x4263x1c;
    var _0x4263x1e;
    var _0x4263x1f = document['URL'];
    while (_0x4263x1b < exe_relatedpost_count) {
        if (exe_relatedpost_url[_0x4263x1c] != _0x4263x1f) {
            _0x4263x1e = '<li>';
            _0x4263x1e += '<a href=\'' + exe_relatedpost_url[_0x4263x1c] + '\' rel=\'dofollow\' target=\'_blank\' title=\'' + exe_relatedpost_title[_0x4263x1c] + '\'><img src=\'' + exe_relatedpost_img[_0x4263x1c] + '\' /></a>';
            _0x4263x1e += '<a href=\'' + exe_relatedpost_url[_0x4263x1c] + '\' title=\'' + exe_relatedpost_title[_0x4263x1c] + '\' target=\'_blank\' rel=\'dofollow\' >' + exe_relatedpost_title[_0x4263x1c] + '</a>';
            _0x4263x1e += '<span class=\'exe_relatedpost_description\'>' + exe_relatedpost_sum[_0x4263x1c] + '</span>';
            _0x4263x1e += '</li>';
            document['write'](_0x4263x1e);
            _0x4263x1b++;
            if (_0x4263x1b == exe_relatedpost_count) {
                break;
            };
        };
        if (_0x4263x1c < exe_relatedpost_title['length'] - 1) {
            _0x4263x1c++;
        } else {
            _0x4263x1c = 0;
        };
        if (_0x4263x1c == _0x4263x1d) {
            break;
        };
    };
};
