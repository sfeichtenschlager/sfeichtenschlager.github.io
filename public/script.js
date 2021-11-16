let autoScroll = setInterval(rightScroll, 5000);

function leftScroll() {
    clearInterval(autoScroll);
    let imgCache = document.images[4].src;
    document.images[4].src = document.images[3].src;
    document.images[3].src = document.images[2].src;
    document.images[2].src = document.images[1].src;
    document.images[1].src = document.images[0].src;
    document.images[0].src = imgCache;
    autoScroll = setInterval(rightScroll, 5000);
}

function rightScroll() {
    clearInterval(autoScroll);
    let imgCache = document.images[0].src;
    document.images[0].src = document.images[1].src;
    document.images[1].src = document.images[2].src;
    document.images[2].src = document.images[3].src;
    document.images[3].src = document.images[4].src;
    document.images[4].src = imgCache;
    autoScroll = setInterval(rightScroll, 5000);
}
