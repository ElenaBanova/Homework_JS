
const btn = document.getElementById('button');
const inp = document.getElementById('age');
btn.onclick= function ()
    {if (inp.value < 18) {
           document.body.innerText = 'Возраст меньше 18 лет';
        }
    }



