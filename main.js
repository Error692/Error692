let dot = document.getElementsByClassName('round'),
    slider = document.getElementsByClassName('slide'),
    round = document.getElementById('slider'),
    curentslide = 0;
    
    dot[0].addEventListener('click', function() {
 sliderflip(0);
    });
    dot[1].addEventListener('click', function() {
        sliderflip(1)
    });
    dot[2].addEventListener('click', function() {
        sliderflip(2)
    });
    dot[3].addEventListener('click', function() {
        sliderflip(3)
    });
    function sliderflip(juk) {
        slider[curentslide].className ='slide';
        dot[curentslide].className = 'round';
        curentslide = juk;
        slider[juk].className = 'slide activeslide';
        dot[juk].className = 'round roundactive';
     };
     
