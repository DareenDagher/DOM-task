
var imagesList= Array.from( document.querySelectorAll('.item img'));
var lightBoxContainer= document.querySelector('.light-box-container');
var lightBoxItem = document.querySelector('.light-box-item');

var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var closeBtn = document.querySelector('.close');

var currentSlideIndex=0;





for(var i=0; i<imagesList.length; i++){
    imagesList[i].addEventListener('click',function(e) {

        var imgSrc=e.target.getAttribute('src');
        lightBoxItem.style.cssText=`background-image: url(${imgSrc})`;
        lightBoxContainer.classList.remove('d-none');

        currentSlideIndex=imagesList.indexOf(e.target);
    })
}

nextBtn.addEventListener('click',function(){
    nextSlide();
})

prevBtn.addEventListener('click',function(){
    prevSlide();
})

closeBtn.addEventListener('click',function(){
    lightBoxContainer.classList.add('d-none');
})

document.addEventListener('keydown', function (e) {
    if (!lightBoxContainer.classList.contains('d-none')) {
        switch (e.key) {
            case 'ArrowRight': // Next slide
                nextSlide();
                break;
            case 'ArrowLeft': // Previous slide
                prevSlide();
                break;
            case 'Escape': // Close lightbox
                lightBoxContainer.classList.add('d-none');
                break;
        }
    }
});

function nextSlide(){
    currentSlideIndex++;
    if(currentSlideIndex==imagesList.length){
        currentSlideIndex=0;
    }
    updateLightBox()

}

function prevSlide(){
    currentSlideIndex--;
    if(currentSlideIndex<0){
        currentSlideIndex=imagesList.length-1;
    }
    updateLightBox()
}

function updateLightBox() {
    var imgSrc = imagesList[currentSlideIndex].getAttribute('src');
    lightBoxItem.style.cssText = `background-image: url(${imgSrc});`;
}