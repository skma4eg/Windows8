
$(window)['scroll'](function(_0x5e3cx1) {
    var _0x5e3cx2 = $('.exe_floating_main_div')['offset']()['top'];
    if ($(this)['scrollTop']() >= _0x5e3cx2 && $('.exe_floating_data_div')['css']('position') != 'fixed') {
        $('.exe_floating_data_div')['css']({
            "\x70\x6F\x73\x69\x74\x69\x6F\x6E": 'fixed',
            "\x77\x69\x64\x74\x68": '320px',
            "\x74\x6F\x70": '42px'
        });
        $('.exe_floating_main_div')['css']('height', '0px');
    } else {
        if ($(this)['scrollTop']() < _0x5e3cx2 && $('.exe_floating_data_div')['css']('position') != 'relative') {
            $('.exe_floating_main_div')['css']('height', '0px');
            $('.exe_floating_data_div')['css']({
                "\x70\x6F\x73\x69\x74\x69\x6F\x6E": 'relative',
                "\x74\x6F\x70": '15px'
            });
        };
    };
});
