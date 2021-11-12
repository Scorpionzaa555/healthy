window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click',calbmi);
}

function calbmi(){
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);

    if(weight === '' || isNaN(weight) || weight < 0){
        alert('Please Enter Your Weight');
    }else if(height === '' || isNaN(height) || height < 0){
        alert('Please Enter Your Height');
    }

    else{
        let bmi = (weight/((height/100)*(height/100))).toFixed(2);

        if(bmi < 18.5){
            alert("Your BMI Is : "+ bmi+ " --> Under Weight");
        }else if(bmi >= 18.5 && bmi <= 22.9){
            alert("Your BMI Is : "+ bmi+ " --> Normal");
        }else if(bmi >= 23 && bmi <= 24.9){
            alert("Your BMI Is : "+ bmi+ " --> Over Weight");
        }else if(bmi >= 25 && bmi <= 29.9){
            alert("Your BMI Is : "+ bmi+ " --> Obesity");
        }else {
            alert("Your BMI Is : "+ bmi+ " --> Dangerous Obesity");
        }
    }
}