$(document).ready(function() {
    var logo_of_company = '../../images/logo_pharos.jpg';
    var name_of_company = 'Pharos-Gea';
    var avatar_of_user = '../../images/cute.jpg';
    var username_of_user = 'Legendary Pilot ';
    var array_unit = ['1','2','3','4','5', '6', '7', '8', '9'];
    var array_class = ['1A1', '1A2', '3A3','4A5'];
    // array_unit[0] = ['A2' , 'A3', 'A4','A5', 'A6', 'A7', 'A8'];
    $('#open_sidebar').attr('src','../../images/quuyensachdep2.png');
    var animal = "<img src=\"../../images/haiconvitxinhxinh2.png\" class=\"haiconvit\" />  <img src=\"../../images/haicongaxinhxinh2.png\" class=\"haiconga\" />   <img src=\"../../images/consocbuon12.png\" class=\"consocbuon\"/> <img src=\"../../images/images1.png\" class=\"cayleo\"/>";
    sidebar_show(logo_of_company, name_of_company, avatar_of_user, username_of_user, array_unit, array_class);
    // var cardbody = document.getElementById("card-body");
    audio_first();
    background_and_border_radius_audio_mobile();
    $('#button-video').click(function (){
        video_click();
        video_fix();
    });
    $('#button-audio').click(function (){
        audio_first();
        audio_fix();
    });
    $( ".sidebar_fix" ).hover(function() {
        $( this ).css( 'z-index','30001' );

    });
    $('#button-video_mobile').click(function () {
        background_and_border_radius_video_mobile();
        video_mobile_fix();
    });
    $('#button_audio_mobile').click(function () {
        background_and_border_radius_audio_mobile();
        audio_mobile_fix();
    });


});
function audio_first() {
    background_and_boder_radius_audio();
    border_audio();
    audio_button();
};
function video_click() {
    background_and_boder_radius_video();
    border_video();
    video_button();
};
function video_mobile_fix() {
    $('#button_audio_mobile').css('border-bottom','0');
    $('#button-video_mobile').css('border-top','0');
    $('#center-bottom-empty').css('border-top','0');
};
function audio_mobile_fix() {
    $('#button_audio_mobile').css('border-top','0');
    $('#center-bottom-buttom-audio').css('background-color','#F4FA58');
    $('#button-video_mobile').css('border-bottom','0');
    $('#button-empty_mobile').css('border-radius','0');
    $('#button-empty_mobile').css('border-top','0');
};
function audio_button() {
    var animal = "<img src=\"../../images/haiconvitxinhxinh2.png\" class=\"haiconvit\" />  <img src=\"../../images/haicongaxinhxinh2.png\" class=\"haiconga\" />   <img src=\"../../images/consocbuon12.png\" class=\"consocbuon\"/> <img src=\"../../images/images1.png\" class=\"cayleo\"/>";
    var cardbody = document.getElementById("card-body");
    var btn = "                <a class=\"btn btn-play-audio open-popup-link\" href=\"#test-popup\">\n" +
        "                    <i class=\"fas fa-play\"></i>\n" +
        "                    <div id=\"name\">Track A2</div>\n" +
        "                </a>";

    cardbody.innerHTML = btn + animal;
};
function video_button() {
    var animal = "<img src=\"../../images/haiconvitxinhxinh2.png\" class=\"haiconvit\" />  <img src=\"../../images/haicongaxinhxinh2.png\" class=\"haiconga\" />   <img src=\"../../images/consocbuon12.png\" class=\"consocbuon\"/> <img src=\"../../images/images1.png\" class=\"cayleo\"/>";
    var cardbody = document.getElementById("card-body");
    var btn = "                <a class=\"btn btn-play-video\" href=\"../../video/ac.mp4\" data-featherlight=\"iframe\" data-featherlight-iframe-allowfullscreen=\"true\" data-featherlight-iframe-width=\"800\" data-featherlight-iframe-height=\"450\"\">\n" +
        "                    <i class=\"fas fa-video\"></i>\n" +
        "                    <div id=\"name\">Track A2</div>\n" +
        "                </a>";
    cardbody.innerHTML = btn + animal;
};
function audio_button_mobile() {
    var animal = "<img src=\"../../images/haiconvitxinhxinh2.png\" class=\"haiconvit\" />  <img src=\"../../images/haicongaxinhxinh2.png\" class=\"haiconga\" />   <img src=\"../../images/consocbuon12.png\" class=\"consocbuon\"/> <img src=\"../../images/images1.png\" class=\"cayleo\"/>";
    var cardbody = document.getElementById("card-body-mobile");
    var btn = "                <a class=\"btn btn-play-audio open-popup-link\" href=\"#test-popup\">\n" +
        "                    <i class=\"fas fa-play\"></i>\n" +
        "                    <div id=\"name\">Track A2</div>\n" +
        "                </a>";
    cardbody.innerHTML = btn + animal;
};
function video_button_mobile() {
    var animal = "<img src=\"../../images/haiconvitxinhxinh2.png\" class=\"haiconvit\" />  <img src=\"../../images/haicongaxinhxinh2.png\" class=\"haiconga\" />   <img src=\"../../images/consocbuon12.png\" class=\"consocbuon\"/> <img src=\"../../images/images1.png\" class=\"cayleo\"/>";
    var cardbody = document.getElementById("card-body-mobile");
    var btn = "                <a class=\"btn btn-play-video\" href=\"../../video/ac.mp4\" data-featherlight=\"iframe\" data-featherlight-iframe-allowfullscreen=\"true\" data-featherlight-iframe-width=\"800\" data-featherlight-iframe-height=\"450\"\">\n" +
        "                    <i class=\"fas fa-video\"></i>\n" +
        "                    <div id=\"name\">Track A2</div>\n" +
        "                </a>";
    cardbody.innerHTML = btn + animal;
};
function video_fix() {
    $('#button-audio').css('border-right', '0');
    $('#button-video').css('border-left', '0');
    $('#empty').css('border-left','0');
    $('#button-audio').css('border-top', '0');
}
function audio_fix() {
    $('#button-audio').css('border-left', '0');
    $('#button-video').css('border-right', '0');
    $('#button-empty').css('border-radius','0');
    $('#audio').css('background-color', '#F4FA58');
    $('#button-empty').css('border-left','0');
};

function border_video() {
    $('#button-audio').css('border-left', '2px solid #FA8258');
    $('#button-empty').css('border-left', '2px solid #FA8258');
    $('#button-video').css('border-right', '2px solid #FA8258');
};
function border_audio() {
    $('#button-audio').css('border-right', '2px solid #FA8258');
    $('#button-video').css('border-left', '2px solid #FA8258');
    $('#empty').css('border-left', '2px solid #FA8258');
    $('#button-audio').css('border-top', '2px solid #FA8258');

};
function background_and_boder_radius_video() {
    $('#video').css('background-color', '#F4FA58');
    $('#button-video').css('background-color', '#5bc0de');
    $('#button-video').css('border-radius','0 25% 25% 0');
    $('#audio').css('background-color', '#5bc0de');
    $('#empty').css('background-color', '#5bc0de');
    $('#button-audio').css('border-radius','0 0 0 25%');
    $('#button-empty').css('border-radius','25% 0 0 0');
    $('#button-audio').css('background-color', '#F4FA58');
    $('#button-empty').css('background-color', '#F4FA58');
}
function background_and_boder_radius_audio() {
    $('#button-audio').css('background-color', '#5bc0de');
    $('#button-audio').css('border-radius','0 25% 25% 0');
    $('#video').css('background-color', '#5bc0de');
    $('#button-video').css('background-color', '#F4FA58');
    $('#button-video').css('border-radius','25% 0 0 0');
};
function background_and_border_radius_audio_mobile() {
    $('#button_audio_mobile').css('background-color','#5bc0de');
    $('#button_audio_mobile').css('border-radius','0 0 25% 25%');
    $('#center-bottom-buttom-video').css('background-color','#5bc0de');
    $('#button-video_mobile').css('border-radius','25% 0 0 0');
    $('#button-video_mobile').css('background-color','#F4FA58');
    $('#center-bottom-empty').css('border-top','2px solid #FA8258');
    $('#button-video_mobile').css('border-top','2px solid #FA8258');
    $('#button_audio_mobile').css('border-bottom','2px solid #FA8258');
    $('#button_audio_mobile').css('border-left','2px solid #FA8258');
    audio_button_mobile();
}
function background_and_border_radius_video_mobile() {
    $('#center-bottom-buttom-audio').css('background-color','#5bc0de');
    $('#button_audio_mobile').css('background-color','#F4FA58');
    $('#button_audio_mobile').css('border-radius','0 25% 0 0');
    $('#button_audio_mobile').css('border-top','2px solid #FA8258');
    $('#center-bottom-buttom-video').css('background-color','#F4FA58');
    $('#button-video_mobile').css('background-color','#5bc0de');
    $('#button-video_mobile').css('border-radius','0 0 25% 25%');
    $('#button-video_mobile').css('border-bottom','2px solid #FA8258');
    $('#center-bottom-empty').css('background-color','#5bc0de');
    $('#button-empty_mobile').css('background-color','#F4FA58');
    $('#button-empty_mobile').css('border-radius','25% 0 0 0');
    $('#button-empty_mobile').css('border-top','2px solid #FA8258');
    $('#button_audio_mobile').css('border-left','0');

    video_button_mobile();
}
function sidebar_show(logo_of_company, name_of_company, avatar_of_user, username_of_user, array_unit, array_class) {
    name_and_logo_company(logo_of_company, name_of_company);
    name_and_avatar_user(avatar_of_user,username_of_user );
    unit_list_html_in_sidebar(array_unit);
    class_list_html_in_sidebar(array_class);
};
function unit_list_html_in_sidebar(array_unit) {
    var unit_list = '';
    for (i = 0; i < array_unit.length; i++ ){
        unit_list += sent_unit(array_unit[i]);
    }
    $('#unit_html_list').append(unit_list);
};
function sent_unit(unit_x) {
    var unit_html = "<li class=\"nav-item has-treeview li_unit\"><a href=\"#\" class=\"nav-link new_font auto_active\"><i class=\"nav-icon fab fa-pagelines\"></i><p>Bài " + unit_x + "</p></a></li>";
    return unit_html;
};
function class_list_html_in_sidebar(array_class) {
    var class_list = '';
    for (i = 0; i < array_class.length; i++ ){
        class_list += sent_class(array_class[i]);
    }
    $('#class_html_list').append(class_list);
};
function sent_class(class_x) {
    var class_html = "<li class='nav-item'><a href='' class='nav-link new_font'><i class='far fa-circle nav-icon'></i><p>Lớp " + class_x + "</p></a></li>";
    return class_html;
};

function name_and_logo_company(logo_of_company, name_of_company) {
    $('#name_and_logo_company').children('img').attr('src',logo_of_company);
    $('#name_and_logo_company').children('span').text(name_of_company);
};
function name_and_avatar_user(avatar_of_user,username_of_user ) {
    $('#name_and_avatar_user').find('img').attr('src',avatar_of_user);
    $('#name_and_avatar_user').find('a').text(username_of_user);
};
