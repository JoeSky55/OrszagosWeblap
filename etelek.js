console.log(adatok)
var szoveg = ""

for (let i = 0; i < adatok.length; i++) {
    //console.log(prizes.prizes[i].category)

    szoveg += 
    `
    <div class="col-sm-4">
        <div class="szepites" data-bs-toggle="modal" data-bs-target="#myModal" onclick="kattintas(${i})">
            ${adatok[i].neve}
            <br>
            ${adatok[i].kep}
        </div>    
    </div>
    `
    
}
document.getElementById("gridecske").innerHTML = szoveg