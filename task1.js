let images = document.querySelectorAll('img');
for(let i=0; i < images.length; i++){
    images[i].onclick = function(e){
        let big_img = document.createElement('img');
        big_img.src = 'big/' + e.target.id.split('_')[1] + '.png';
        big_img.classList.add('big_img');
        let big_div = document.querySelector('#big_img_cont');
        big_div.innerHTML = '';
        big_div.append(big_img);
        big_img.onerror = () => {alert('Картинка не существует!!!!');}
    }
}

