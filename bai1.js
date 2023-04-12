let a = document.getElementById('a');
let b = document.getElementById('b');
let kq = document.getElementById('kq');

const button = document.getElementById('button');
function check(e){
    e.preventDefault();
    if(a.value.trim()==""){
        alert('Bạn chưa số a');
        return;
    }else if(b.value.trim()==""){
        alert('Bạn chưa nhập số b');
        return;
    }else if(a.value>b.value){
        alert('Số a phải bé hơn số b');
        return;
    }  

    let tong = 0;
    for (let i = a.value; i <= b.value; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }


        if (i > 1 && flag == 0) {
            tong = tong + i;

        }
    }
    kq.innerHTML= 'Tổng các số nguyên tố là: '+ tong;
    console.log(tong);
}
button.addEventListener('click',check)




