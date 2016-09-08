

 addEventListener('DOMContentLoaded', function(){

     var gallery = document.querySelector('#gallery').children;
     var hide = document.querySelector('#hideButton');
     var show = document.querySelector('#showButton');
     var input = document.querySelector('input');

     hide.addEventListener('click', function() {
         var tag = input.value;
         input.value = '';

         for(var i = 0; i < gallery.length; i++) {
             var tags = gallery[i].dataset.tag;
             console.log(i+':'+tags);

            for(var j = 0; j < tags.length; j++) {
                if(tag == tags.substring(j, j + tag.length)) {
                    gallery[i].classList.add('invisible');
                    console.log('znaleziono!');
                    break;
                }
            }
        }
    });

    show.addEventListener('click', function() {
        var tag = input.value;
        input.value = '';
            for(var i = 0; i < gallery.length; i++) {
                var tags = gallery[i].dataset.tag;
                console.log(i+':'+tags);

               for(var j = 0; j < tags.length; j++) {
                   if(tag == tags.substring(j, j + tag.length)) {
                       gallery[i].classList.remove('invisible');
                       console.log('znaleziono!');
                       break;
                   }
               }
           }
     });
 });
