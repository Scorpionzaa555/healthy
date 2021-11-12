window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click',caltime);
}

function caltime(){
    let weight = parseInt(document.querySelector('#weight').value);
    let weightt = parseInt(document.querySelector('#weightt').value);
    let time = parseInt(document.querySelector('#time').value);

    if(weight === '' || isNaN(weight) || weight < 0){
        alert('Please Enter Your Weight');
    } else if(weightt === '' || isNaN(weightt) || weightt < 0){
        alert('Please Enter Your Weight');
    }

    else if(weight = parseInt(document.querySelector('#weight').value)){
        //let result = ((weight-weightt)/time); //time/(weight-weightt);
        let result = weight-weightt;
        result = result/time;
        alert("ปริมาณที่ต้องลดต่อวัน : "+ result+ " kg");
        
    }
}