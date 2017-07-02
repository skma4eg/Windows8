


function latestcommentlistbyexeideas(_0xaddcx2) {
    document['write']('<ul>');
    for (var _0xaddcx3 = 0; _0xaddcx3 < _0xaddcx2['feed']['entry']['length']; _0xaddcx3++) {
        for (var _0xaddcx4 = 0; _0xaddcx4 < _0xaddcx2['feed']['entry'][_0xaddcx3]['link']['length']; _0xaddcx4++) {
            if (_0xaddcx2['feed']['entry'][_0xaddcx3]['link'][_0xaddcx4]['rel'] == 'alternate') {
                break;
            };
        };
        var _0xaddcx5 = '' + _0xaddcx2['feed']['entry'][_0xaddcx3]['link'][_0xaddcx4]['href'] + '';
        var _0xaddcx6 = _0xaddcx2['feed']['entry'][_0xaddcx3]['author'][0]['gd$image']['src'];
        var _0xaddcx7 = _0xaddcx2['feed']['entry'][_0xaddcx3]['author'][0]['name']['$t'];
        var _0xaddcx8 = _0xaddcx2['feed']['entry'][_0xaddcx3]['title']['$t'];
        var _0xaddcx9 = _0xaddcx2['feed']['entry'][_0xaddcx3]['published']['$t'];
        var _0xaddcxa = '<li><a href=\'' + _0xaddcx5 + '\'><img src=\'' + _0xaddcx6 + '\'></img><span class=\'comment_author\'>' + _0xaddcx7 + '</span><span class=\'comment_title\'>' + _0xaddcx8 + '</span><span class=\'comment_date\'>' + _0xaddcx9 + '</span></a></li>';
        document['write'](_0xaddcxa);
    };
    document['write']('</ul>');
};
