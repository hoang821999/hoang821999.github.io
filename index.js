document.getElementById('linkwebsite').addEventListener('click', function(event) {
    event.preventDefault();

    //chuyển hình ông già noel
    document.getElementById('img-santa').classList.add('move');

    //chuyển sang trang web mới sau 2 giây
    setTimeout(function() {
        window.location.href = this.href; // Sử dụng this.href thay vì event.target.href
    }.bind(this), 9000);

    //nhạc ông già noel bật lên
    var audio = document.getElementById("myAudio");
    audio.play();
});
