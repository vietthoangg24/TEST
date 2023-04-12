function numberOneTriangle(){
    let n = prompt("Nhập vào số n bất kì 1<n<10 ");
    if(n>1&&n<10){
    for(let i =1;i<=n;i++){
        for(let j =1;j<=i;j++){
             document.write("* ")
        }
       document.write("<br/>");
    }
}
else {
    alert("Bạn nhập Không đúng số yêu cầu ");
}
  
}
numberOneTriangle();