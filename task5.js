let height = 20;
let width = 1;

for (let i = 1; i <= height; i++ )
{
    let pyramid = '';
    for (let j = 1; j <= width; j++){
        pyramid = pyramid + 'x';
    }
    width = width + 1;
    console.log(pyramid);
}
