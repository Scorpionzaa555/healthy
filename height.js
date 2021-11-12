window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click',calheight);
}

function calheight(){
    //let age = parseInt(document.querySelector('#age').value);
    let mom = parseInt(document.querySelector('#mom').value);
    let dad = parseInt(document.querySelector('#dad').value);
    //let gender = document.querySelector('input[name="gender"]:checked')
    var male = document.getElementById("check1");
    var female = document.getElementById("check2");

    if(dad === '' || isNaN(dad) || dad < 0){
        alert('Please Enter Your Father Height');
    }else if(mom === '' || isNaN(mom) || mom < 0){
        alert('Please Enter Your Mother Height');
    }

    else if(male.checked == true){
        let result = (dad + mom + 13) / 2; //66 + (13.7 * weight) + (5 * height) - (6.8 * age).toFixed(2);
        alert("Your Height Is : "+ result + " cm");
    }else if(female.checked == true){
        let result = (dad + mom - 13) / 2; //665 + (9.6 * weight) + (1.8 * height) - (4.7 * age).toFixed(2);
        alert("Your Height Is : "+ result + " cm");
    }
}