fetch('https://static.easysunday.com/covid-19/getTodayCases.json?fbclid=IwAR0ARcTcNt75I0xMALxJKoKN8wpEvwOWQQ_lqYVkFwnQBhZAc5IHjGNeznk')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    document.getElementById("Confirmed").innerHTML = data.Confirmed.toLocaleString();
    document.getElementById("NewConfirmed").innerHTML = "[" + "+" + data.NewConfirmed.toLocaleString() + "]";
    document.getElementById("Recovered").innerHTML = data.Recovered.toLocaleString();
    document.getElementById("NewRecovered").innerHTML = "[" + "+" + data.NewRecovered.toLocaleString() + "]";
    document.getElementById("Hospitalized").innerHTML = data.Hospitalized.toLocaleString();
    document.getElementById("NewHospitalized").innerHTML = "[" + "+" + data.NewHospitalized.toLocaleString() + "]";
    document.getElementById("Deaths").innerHTML = data.Deaths.toLocaleString();
    document.getElementById("NewDeaths").innerHTML = "[" + "+" + data.NewDeaths.toLocaleString() + "]";
    document.getElementById("UpdateDate").innerHTML = data.UpdateDate.toLocaleString();
})