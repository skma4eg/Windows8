
function recentpostlistbyexeideas(_0xb07ax2) {
    document['write']('<ul>');
    for (var _0xb07ax3 = 0; _0xb07ax3 < _0xb07ax2['feed']['entry']['length']; _0xb07ax3++) {
        for (var _0xb07ax4 = 0; _0xb07ax4 < _0xb07ax2['feed']['entry'][_0xb07ax3]['link']['length']; _0xb07ax4++) {
            if (_0xb07ax2['feed']['entry'][_0xb07ax3]['link'][_0xb07ax4]['rel'] == 'alternate') {
                break;
            };
        };
        var _0xb07ax5 = '\'' + _0xb07ax2['feed']['entry'][_0xb07ax3]['link'][_0xb07ax4]['href'] + '\'';
        var _0xb07ax6 = _0xb07ax2['feed']['entry'][_0xb07ax3]['title']['$t'];
        var _0xb07ax7 = _0xb07ax2['feed']['entry'][_0xb07ax3]['media$thumbnail']['url'];
        var _0xb07ax8 = _0xb07ax2['feed']['entry'][_0xb07ax3]['summary']['$t'];
        var _0xb07ax9 = _0xb07ax8['substr'](0, 55);
        var _0xb07axa = '<li><a href=' + _0xb07ax5 + ' target=\'_blank\'><img src=\'' + _0xb07ax7 + '\'/><span class=\'recent_title\'>' + _0xb07ax6 + '</span><span class=\'recent_summ\'>' + _0xb07ax9 + '</span></a></li>';
        document['write'](_0xb07axa);
    };
    document['write']('</ul>');
};
