

addEventListener('DOMContentLoaded', function(){

    var div = document.querySelector('div');
        div.classList.add('gallery');

    var list = document.querySelector('ul').children;
    var body = document.querySelector('body');

        for (var i = 0; i < list.length; i++) {
            list[i].addEventListener('click', function(){
                console.log(this.firstElementChild.getAttribute('src'));
                var divF = document.createElement('div');
                    divF.classList.add('fullScreen');
                    divF.innerHTML = "<img src='"+this.firstElementChild.getAttribute('src')+"'>";
                    divF.innerHTML += "<button class='close'>Close</button>";

            body.appendChild(divF);

            var button = document.querySelector('button');
                button.addEventListener('click', function(){
                body.removeChild(divF);

            });
        });
    }
});
