
function latestpostlistbyexeideas(_0x5deex2) {
    document['write']('<ul>');
    for (var _0x5deex3 = 0; _0x5deex3 < _0x5deex2['feed']['entry']['length']; _0x5deex3++) {
        for (var _0x5deex4 = 0; _0x5deex4 < _0x5deex2['feed']['entry'][_0x5deex3]['link']['length']; _0x5deex4++) {
            if (_0x5deex2['feed']['entry'][_0x5deex3]['link'][_0x5deex4]['rel'] == 'alternate') {
                break;
            };
        };
        var _0x5deex5 = '\'' + _0x5deex2['feed']['entry'][_0x5deex3]['link'][_0x5deex4]['href'] + '\'';
        var _0x5deex6 = _0x5deex2['feed']['entry'][_0x5deex3]['title']['$t'];
        var _0x5deex7 = _0x5deex2['feed']['entry'][_0x5deex3]['media$thumbnail']['url'];
        var _0x5deex8 = _0x5deex2['feed']['entry'][_0x5deex3]['summary']['$t'];
        var _0x5deex9 = _0x5deex8['substr'](0, 80);
        var _0x5deexa = '<li>' + '<img src=\'' + _0x5deex7 + '\'/><a href=' + _0x5deex5 + '" target="_blank">' + _0x5deex6 + '</a><span>' + _0x5deex9 + '</span></li>';
        document['write'](_0x5deexa);
    };
    document['write']('</ul>');
};

