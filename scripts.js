revealAnswer = (id) => {
    if (id === 'reveal-ans1') {
        document.getElementById('ans1').classList.remove('hidden');
        document.getElementById('reveal-ans1').innerHTML = 'Hide Answer';
        document.getElementById('reveal-ans1').setAttribute('onclick','hideAnswer(this.id)');
    } else if  (id === 'reveal-ans2') {
        document.getElementById('ans2').classList.remove('hidden');
        document.getElementById('reveal-ans2').innerHTML = 'Hide Answer';
        document.getElementById('reveal-ans2').setAttribute('onclick','hideAnswer(this.id)');
    } else if  (id === 'reveal-ans3') {
        document.getElementById('ans3').classList.remove('hidden');
        document.getElementById('reveal-ans3').innerHTML = 'Hide Answer';
        document.getElementById('reveal-ans3').setAttribute('onclick','hideAnswer(this.id)');
    }
}

hideAnswer = (id) => {
    if (id === 'reveal-ans1') {
        document.getElementById('ans1').classList.add('hidden');
        document.getElementById('reveal-ans1').innerHTML = 'Show Answer';
        document.getElementById('reveal-ans1').setAttribute('onclick','revealAnswer(this.id)');
    } else if (id === 'reveal-ans2') {
        document.getElementById('ans2').classList.add('hidden');
        document.getElementById('reveal-ans2').innerHTML = 'Show Answer';
        document.getElementById('reveal-ans2').setAttribute('onclick','revealAnswer(this.id)');
    } else if (id === 'reveal-ans3') {
        document.getElementById('ans3').classList.add('hidden');
        document.getElementById('reveal-ans3').innerHTML = 'Show Answer';
        document.getElementById('reveal-ans3').setAttribute('onclick','revealAnswer(this.id)');
    }
}

menu = () => {

    if ($('nav').hasClass('menu-active')) {
        $('nav').removeClass('menu-active');
    } else {
        $('nav').addClass('menu-active');
    }
}

$('.nav-items').click(function() {
    menu();
});

toggle = (id) => {
    let current = document.getElementById('toggle-text').innerHTML;
    if (current === 'Professional'){
        document.getElementById('slider').style.right = "50px";
        document.getElementById('toggle-text').innerHTML = "Creative";
        document.getElementById("stylesheet").setAttribute("href", "creative_stylesheet.css");

    } else {
        document.getElementById('slider').style.right = "90px";
        document.getElementById('toggle-text').innerHTML = "Professional";
        document.getElementById("stylesheet").setAttribute("href", "professional_stylesheet.css");
    }
}

toggleMobile = (id) => {
    let current = document.getElementById('toggle-text-mobile').innerHTML;
    if (current === 'Professional'){
        document.getElementById('slider-mobile').style.right = "90px";
        document.getElementById('toggle-text-mobile').innerHTML = "Creative";
        document.getElementById("stylesheet").setAttribute("href", "creative_stylesheet.css");

    } else {
        document.getElementById('slider-mobile').style.right = "50px";
        document.getElementById('toggle-text-mobile').innerHTML = "Professional";
        document.getElementById("stylesheet").setAttribute("href", "professional_stylesheet.css");
    }
}

changeImage = (id) => {
    imageSRC = "./images/"+id+".jpg";
    document.getElementById('main-image-gallery').src = "./images/" + id + ".jpg";
    let previousImage = document.getElementsByClassName("active-image");
    previousImage[0].classList.remove("active-image");

    let thumbnailContainer = document.getElementById(id);
    let thumbnailImage = thumbnailContainer.getElementsByTagName("IMG");
    thumbnailImage[0].classList.add('active-image');
}

timeAndDate = () => {
    let day = new Date();
    let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
    document.getElementById('time-box').innerText = time;

    let refresh = setTimeout(() => {
        timeAndDate();
    }, 3000);

}

timeAndDate();
