
document.addEventListener("DOMContentLoaded", function(){
    var div = document.querySelector('div');
        div.classList.add('slider');
    var btnnext = document.querySelector('#nextPicture');
    var btnprev = document.querySelector('#prevPicture');
    var list = div.querySelector('ul').children;
    var index = 0;
        list[index].classList.add('visible');

        btnnext.addEventListener('click', function(){
            console.log("button next");
            list[index].classList.remove('visible');
            index += 1;
            if(index > 5) {
                index = 0;
            }
            list[index].classList.add('visible');
        })

        btnprev.addEventListener('click', function(){
            console.log("button prev");
            list[index].classList.remove('visible');
            index -= 1;
            if(index < 0) {
                index = 0;
            }
            list[index].classList.add('visible');
        });
    });
