(function(){

    // Initial title 
    let title = document.title;
    // Delay of blurMessage array animation 
    let animationDelay = 1000;
    // Array of items to animate when lost focus of webpage
    let blurMessage = [
        "👈🏻", 
        "👈🏻 👈🏻", 
        "👈🏻 👈🏻 👈🏻", 
        "👈🏻 👈🏻 👈🏻 👈🏻",
        "👈🏻 👈🏻 👈🏻 👈🏻 👈🏻",
        "👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻",
        "👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻",
        "👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻",
        "👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻 👈🏻"
    ];
    let intervalTimer = null;

    function startTitleAnimation() {
        document.title = blurMessage[8];
        let count = 0;
        intervalTimer = setInterval(() => {
            document.title = blurMessage[count];
            if (count === blurMessage.length - 1) {
                count = 0;
            } else {
                count++;
            }
        }, animationDelay);
    }

    function stopTitleAnimation() {
        clearInterval(intervalTimer);
        document.title = title; 
    }

    // Event listeners
    window.addEventListener("blur", function () {
        startTitleAnimation();
    });

    window.addEventListener("focus", function(){ 
        stopTitleAnimation();
    });

})();