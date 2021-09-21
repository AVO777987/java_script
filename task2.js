let buttons = document.querySelectorAll('button');
for(let i=0; i < buttons.length; i++){
    buttons[i].onclick = function(e){
        let old_img = document.querySelector('.big_img');
        let new_img = document.createElement('img');
        let old_img_id = Number(old_img.id.split('_')[2]);
        if(buttons[i].id == 'forward'){
            if(old_img_id == 3){
                new_img.src = 'slider/1.jpg';
                new_img.id = 'slider_img_1';
            }
            else {
                new_img.src = 'slider/' + (old_img_id + 1) + '.jpg';
                new_img.id = 'slider_img_' + (old_img_id + 1);
            }
        }
        else {
            if(old_img_id == 1){
                new_img.src = 'slider/3.jpg';
                new_img.id = 'slider_img_3';
            }
            else {
                new_img.src = 'slider/' + (old_img_id - 1) + '.jpg';
                new_img.id = 'slider_img_' + (old_img_id - 1);
            }
        }
        new_img.classList.add("big_img");
        let div_img = document.querySelector('#big_img_cont');
        div_img.innerHTML = '';
        div_img.append(new_img);
    }
}