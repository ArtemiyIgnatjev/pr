
function check() {
   
    let a = 0;
    let b = 0;
    let result = 0;
    let pw = 0;
    let pm = 0;
    
    var x = document.getElementById("i-1").value;
    document.getElementById("i-1").value = "";
    var y = document.getElementById("i-2").value;
    document.getElementById("i-2").value = "";
    var z = document.getElementById("i-3").value;
    document.getElementById("i-3").value = "";

    console.log('x=', x, 'y=', y, 'z=', z);
    
    let radio = document.querySelectorAll('.i-7');
    for (let i = 0; i < radio.length; i++){
       if (radio[i].checked) {
            a = radio[i].value;
            break;
        }
        
    }

    console.log('a=', a);

    let radio2 = document.querySelectorAll('.check');
    for (let j = 0; j < radio2.length; j++){
        if (radio2[j].checked) {
            b = radio2[j].value;
            break;
        }
    }
    console.log('b=', b);

    
    pw = a;
    pm = b * x * y * z
    result = Number(pw) + Number(pm);

    console.log('result=', result);
    console.log('pw=', pw);
    console.log('pm=', pm);

    var el = document.getElementById('rezult').value = result;
    document.querySelector('.size-x').innerHTML = x;
    document.querySelector('.size-y').innerHTML = y;
    document.querySelector('.size-z').innerHTML = z;
    var elpw = document.getElementById('pww').value = pw;
    var elpm = document.getElementById('pmm').value = pm;
    
}


