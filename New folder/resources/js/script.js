// Example 1: From an element in DOM
$(document).ready(function() {
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
});
var num = 0;
var hiddenPlayer = $('#hidden-player');
var player = $('#player');
var title = $('.title');
var artist = $('.artist');
var cover = $('.coverr');

function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s / 3600); //Get whole hours
    s -= h * 3600;
    var m = Math.floor(s / 60); //Get remaining minutes
    s -= m * 60;
    return h + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
};

songs = [{
    src: "audio/Nuoc-Mat.mp3",
    title: "Nước Mắt",
    artist: "Smelod",
    coverart: "images/pand-and-elephant.JPG"
},

    {
        src: "audio/Song-Gio.mp3",
        title: "Sóng Gió",
        artist: "Jack, K-ICM",
        coverart: "images/pand-and-elephant.JPG"
    },

    {
        src: "audio/Hong-Kong-1.mp3",
        title: "HongKong1",
        artist: "Nguyễn Trọng Tài",
        coverart: "images/pand-and-elephant.JPG"
    },

    {
        src: "audio/Anh-Oi-O-Lai.mp3",
        title: "Anh Ơi Ở Lại",
        artist: "Chi Pu, Đạt G",
        coverart: "images/pand-and-elephant.JPG"
    },

    {
        src: "audio/Anh-Chang-Sao-Ma-Khang-Viet.mp3.mp3",
        title: "Anh Chẳng Sao Mà",
        artist: "Andy Mineo",
        coverart: "images/pand-and-elephant.JPG"
    }
];

var initSongSrc = songs[0].src;
var initSongTitle = songs[0].title;
var initSongArtist = songs[0].artist;
var initSongCover = songs[0].coverart;

hiddenPlayer.attr("src", initSongSrc);
title.html(initSongTitle);
artist.html(initSongArtist);
cover.attr('src', initSongCover);

hiddenPlayer.attr('order', '0');
hiddenPlayer[0].onloadedmetadata = function() {
    var dur = hiddenPlayer[0].duration;
    var songLength = secondsTimeSpanToHMS(dur)
    var songLengthParse = songLength.split(".")[0];
    $('.time-finish').html(songLengthParse);
};

var items = songs.length - 1;
$(document).click(function (e)
{
    // Đối tượng container chứa popup
    var container = $("#player");
    var click_popup = $('#test-popup').is(':visible');
    console.log(click_popup);
    if ((!click_popup))
    {
        console.log("pk");
        $('.play-button').toggleClass('paused');
        if ($('.play-button').hasClass("paused")) {
            hiddenPlayer[0].pause();
        }
}
});
$('.next').on('click', function() {
    var songOrder = hiddenPlayer.attr('order');

    if (items == songOrder) {
        num = 0;
        var songSrc = songs[0].src;
        var songTitle = songs[0].title;
        var songArtist = songs[0].artist;
        var songCover = songs[0].coverart;
        hiddenPlayer.attr('order', '0');
        hiddenPlayer.attr('src', songSrc).trigger('play');
        title.html(songTitle);
        artist.html(songArtist);
        cover.attr('src', songCover);
    } else {
        console.log(songOrder);
        num += 1;
        var songSrc = songs[num].src;
        var songTitle = songs[num].title;
        var songArtist = songs[num].artist;
        var songCover = songs[num].coverart;
        hiddenPlayer.attr('src', songSrc).trigger('play');
        title.html(songTitle);
        artist.html(songArtist);
        cover.attr('src', songCover);
        hiddenPlayer.attr('order', num);
    }
});

$('.prev').on('click', function() {
    var songOrder = hiddenPlayer.attr('order');

    if (songOrder == 0) {
        num = items;
        var songSrc = songs[items].src;
        var songTitle = songs[items].title;
        var songArtist = songs[items].artist;
        hiddenPlayer.attr('order', items);
        hiddenPlayer.attr('src', songSrc).trigger('play');
        title.html(songTitle);
        artist.html(songArtist);
    } else {
        num -= 1;
        var songSrc = songs[num].src;
        var songTitle = songs[num].title;
        var songArtist = songs[num].artist;
        hiddenPlayer.attr('src', songSrc).trigger('play');
        title.html(songTitle);
        artist.html(songArtist);
        hiddenPlayer.attr('order', num);
    }
});

$(".play-button").click(function() {
    $(this).toggleClass("paused");
    if ($(this).hasClass("paused")) {
        hiddenPlayer[0].pause();
    } else {
        hiddenPlayer[0].play();
    }
});

hiddenPlayer.on('timeupdate', function() {
    var songLength = secondsTimeSpanToHMS(this.duration)
    var songLengthParse = songLength.split(".")[0];
    $('.time-finish').html(songLengthParse);

    var songCurrent = secondsTimeSpanToHMS(this.currentTime)
    var songCurrentParse = songCurrent.split(".")[0];
    $('.time-now').html(songCurrentParse);
    $('progress').attr("value", this.currentTime / this.duration);

    if (!hiddenPlayer[0].paused) {
        $(".play-button").removeClass('paused');
        $('progress').css('cursor', 'pointer');


        $('progress').on('click', function(e) {
            var parentOffset = $(this).parent().offset();
            var relX = e.pageX - parentOffset.left;
            var percPos = relX * 100 / 355;
            var second = hiddenPlayer[0].duration * parseInt(percPos) / 100;
            console.log(second);
            hiddenPlayer[0].currentTime = second;
        })
    }

    if (this.currentTime == this.duration) {
        $('.next').trigger('click');
    }
});