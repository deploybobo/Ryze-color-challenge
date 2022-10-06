var stage = 0;
var score = 0;

const stages = [
    {"base": "rgb(61, 42, 227)" , "def": "rgb(95, 81, 233)" , "pos" : 0},
    {"base": "rgb(72, 204, 47)" , "def": "rgb(65, 178, 41)" , "pos" : 1},
    {"base": "rgb(160, 61, 77)" , "def": "rgb(141, 54, 68)" , "pos" : 0},
    {"base": "rgb(237, 57, 237)" , "def": "rgb(237, 49, 238)" , "pos" : 2},
    {"base": "rgb(161, 243, 140)" , "def": "rgb(150, 243, 127)" , "pos" : 1}
]

var input = document.querySelectorAll('.color');

function set(stage){
    input.forEach(el => {
        el.style.backgroundColor = stages[stage].base
    })
    input[stages[stage].pos].style.backgroundColor = stages[stage].def
}

input.forEach(el => {
    el.addEventListener('click',()=>{
        document.querySelector('.stage').innerHTML = stage + 2
        if(el.style.backgroundColor === stages[stage].def){
            stage++
            score += 1;
            console.log('pas' , score)
            document.querySelector('.score').innerHTML = score ;
            if(stage > 4){
                console.log('end')
                end()
            }else{
                set(stage) 
            }

        }else{
            console.log('nope')
            stage++
            if(stage > 4){
                console.log('end')
                end()
            }else{
                set(stage) 
            }
        }
    })
})

function end(){
    document.querySelector('#app').style.display = 'none';
    document.querySelector('form').style.display = 'flex';
}


set(stage)