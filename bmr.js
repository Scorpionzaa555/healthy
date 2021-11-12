window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click',calbmr);
}

function calbmr(){
    let age = parseInt(document.querySelector('#age').value);
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    //let gender = document.querySelector('check:checked')
    var male = document.getElementById("check1");
    var female = document.getElementById("check2");

    if(weight === '' || isNaN(weight) || weight < 0){
        alert('Please Enter Your Weight');
    }else if(height === '' || isNaN(height) || height < 0){
        alert('Please Enter Your Height');
    }else if(age === '' || isNaN(age) || age < 0){
        alert('Please Enter Your Age');
    }

    else if(male.checked == true){
        let bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age).toFixed(2);
        alert("Your BMR Is : "+ bmr + " kcal");
    }else if(female.checked == true){
        let bmr = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age).toFixed(2);
        alert("Your BMR Is : "+ bmr + " kcal");
    }
}