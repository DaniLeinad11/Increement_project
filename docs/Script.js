let amount = document.querySelector('#amount-text');
let reset = document.querySelector('#reset');
let number = document.querySelectorAll('.number');
let add = document.querySelectorAll('.add');
let remove = document.querySelectorAll('.remove');
let erase = document.querySelectorAll('.delete');
let main = document.querySelectorAll('.horizontal');

const styleObj = {
    width: "60px",
    backgroundColor: "rgb(255, 238, 0)",
    marginRight: '0px',
}




let value = 0
if(number[0].innerHTML == 'zero'){
    if(value == '0'){
        number[0].innerHTML = "zero"
    };

    add[0].addEventListener("click", function(){
        if(number[0].innerHTML == 'zero'){
            amount.innerHTML ++;
        }
        value ++;
        number[0].innerHTML = value;
        number[0].style.backgroundColor = 'dodgerBlue';
        number[0].style.width = '40px';
        number[0].style.marginRight = '20px';
        remove[0].style.backgroundColor = 'grey';
    });

    
    remove[0].addEventListener("click", function(){
        if(number[0].innerHTML == '1'){
            amount.innerHTML --;
        }

        if(value <= '1'){
            value = 0;
            number[0].innerHTML = "zero"
            number[0].style = styleObj
            remove[0].style.backgroundColor = 'silver';
        }
        else{
            value --;
            number[0].innerHTML = value;
        }
    });
}

erase[0].addEventListener("click", function(){
    if(number[0].innerHTML != 'zero'){
        amount.innerHTML --;
    }
});



let value2 = 0;
if(number[1].innerHTML == 'zero'){
    if(value2 == '0'){
        number[1].innerHTML = "zero";
    };

    add[1].addEventListener("click", function(){
        if(number[1].innerHTML == 'zero'){
            amount.innerHTML ++;
        }
        value2 ++;
        number[1].innerHTML = value2;
        number[1].style.backgroundColor = 'dodgerBlue';
        number[1].style.width = '40px';
        number[1].style.marginRight = '20px';
        remove[1].style.backgroundColor = 'grey';
    });

    remove[1].addEventListener("click", function(){
        if(number[1].innerHTML == '1'){
            amount.innerHTML --;
        }

        if(value2 <= '1'){
            value2 = 0;
            number[1].innerHTML = "zero"
            number[1].style = styleObj
            remove[1].style.backgroundColor = 'silver';
        }
        else{
            value2 --;
            number[1].innerHTML = value2;
        }
    });
}

erase[1].addEventListener("click", function(){
    if(number[1].innerHTML != 'zero'){
        amount.innerHTML --;
    }
});




let value3 = 0;
if(number[2].innerHTML == 'zero'){
    if(value3 == '0'){
        number[2].innerHTML = "zero";
    };

    add[2].addEventListener("click", function(){
        if(number[2].innerHTML == 'zero'){
            amount.innerHTML ++;
        }

        value3 ++;
        number[2].innerHTML = value3;
        number[2].style.backgroundColor = 'dodgerBlue';
        number[2].style.width = '40px';
        number[2].style.marginRight = '20px';
        remove[2].style.backgroundColor = 'grey';
    });

    remove[2].addEventListener("click", function(){
        if(number[2].innerHTML == '1'){
            amount.innerHTML --;
        }

        if(value3 <= '1'){
            value3 = 0;
            number[2].innerHTML = 'zero';
            number[2].style = styleObj
            remove[2].style.backgroundColor = 'silver';
        }
        else{
            value3 --;
            number[2].innerHTML = value3;
        }
    });
}

erase[2].addEventListener("click", function(){
    if(number[2].innerHTML != 'zero'){
        amount.innerHTML --;
    }
});




let value4 = 0;
if(number[3].innerHTML == 'zero'){
    if(value4 == '0'){
        number[3].innerHTML = "zero";
    };

    add[3].addEventListener("click", function(){
        if(number[3].innerHTML == 'zero'){
            amount.innerHTML ++;
        }

        value4 ++;
        number[3].innerHTML = value4;
        number[3].style.backgroundColor = 'dodgerBlue';
        number[3].style.width = '40px';
        number[3].style.marginRight = '20px';
        remove[3].style.backgroundColor = 'grey';
    });

    remove[3].addEventListener("click", function(){
        if(number[3].innerHTML == '1'){
            amount.innerHTML --;
        }

        if(value4 <= '1'){
            value4 = 0;
            number[3].innerHTML = 'zero';
            number[3].style = styleObj
            remove[3].style.backgroundColor = 'silver';
            
        }
        else{
            value4 --;
            number[3].innerHTML = value4;
        }
    });
}

erase[3].addEventListener("click", function(){
    if(number[3].innerHTML != 'zero'){
        amount.innerHTML --;
    }
});




const resetStyle = {
    backgroundColor: 'rgb(255, 238, 0)',
    width: '60px',
    marginRight: '0px',
}

// reset.addEventListener("click", function(){
//     window.location.reload();
// });


erase[0].addEventListener("click", function(){
    main[0].style.display = 'none';
});

erase[1].addEventListener("click", function(){
    main[1].style.display = 'none';
});

erase[2].addEventListener("click", function(){
    main[2].style.display = 'none';
});

erase[3].addEventListener("click", function(){
    main[3].style.display = 'none';
});

// if(number[1].innerHTML == '0'){
//     add[1].addEventListener("click", function(){
//         number[1].innerHTML ++;
//         number[1].style.backgroundColor = 'dodgerBlue';
//         number[1].style.width = '40px';
//         number[1].style.marginRight = '20px';
//         remove[1].style.backgroundColor = 'grey';
//     });
// }

// if(number[2].innerHTML == '0'){
//     add[2].addEventListener("click", function(){
//         number[2].innerHTML ++;
//         number[2].style.backgroundColor = 'dodgerBlue';
//         number[2].style.width = '40px';
//         number[2].style.marginRight = '20px';
//         remove[2].style.backgroundColor = 'grey';
//     });
// }

// if(number[3].innerHTML == '0'){
//     add[3].addEventListener("click", function(){
//         number[3].innerHTML ++;
//         number[3].style.backgroundColor = 'dodgerBlue';
//         number[3].style.width = '40px';
//         number[3].style.marginRight = '20px';
//         remove[3].style.backgroundColor = 'grey';
//     });
// }
















const container =  document.getElementById('container1')

const daniel = [1, 2, 3, 4, 5];

daniel.forEach(function(item){

    console.log(item + 1)
    container.innerHTML += '<h1>{item}</h1>';
})














