//tutorial credict to: https://www.cssscript.com/instagram-photos-feed/?fbclid=IwAR2yunwZYQZFyoMIKPoSGCSjissAwUK0VHoDoYiPOFC4WKXGiUSf9UegzDM

var slideIndex = 1;
showSlides(slideIndex);


function plus(n) {
    showSlides(slideIndex += n);
}

function ongoingSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("fadingslides");
    var dots = document.getElementsByClassName("dots");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" aktiv", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " aktiv";
}


//nyt
const apiUrl = 'http://toblar2.dreamhosters.com/wp-json/wp/v2/posts/19';
const apiKey = 'vgFeAYsyg623phaHEj7jhOmPUM1rn0vD';

function getImageFromWP() {
    let postOptionsId = 19;
    console.log('getImageFromWP()');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            try {
                program = JSON.parse(this.responseText);
                program_fredag.src = program.acf.program_fredag;
                program_loerdag.src = program.acf.program_loerdag;
            } catch (error) {
                errorMessage(`Fejl JSON`);
            }
        }
        if (this.readyState == 4 && this.status > 400) {
            errorMessage('En fejl opstod i hentning af data, prøv igen senere!');
        }
    }
    xhttp.open('GET', `${apiUrl}posts/${postOptionsId}`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}