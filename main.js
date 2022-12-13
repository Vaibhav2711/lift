//Add new lift

const addLift = (numOfLifts) =>{
    for(let i = 1;i<numOfLifts;i++){
        const newLift = document.createElement("div");
        newLift.setAttribute("class","lift");
        //console.log(newLift);
        const box = document.getElementById("set");
        //console.log(box);
        box.appendChild(newLift);
    }
    
}


//Add new floor
const newFloor = document.createElement("div");
newFloor.setAttribute("class","floor");
newFloor.style.top = "-150px";
const plan = document.getElementById("plan");
plan.appendChild(newFloor);

//Add button
const buttonLayout = document.createElement("div");
buttonLayout.setAttribute("class","btns");
const levelNo = document.createElement("div");
levelNo.setAttribute("class","level");
levelNo.innerHTML = "Floor 2";
const upButton = document.createElement("button");
upButton.setAttribute("class","up");
const downButton = document.createElement("button");
downButton.setAttribute("class","down");
buttonLayout.appendChild(levelNo);
buttonLayout.appendChild(upButton);
buttonLayout.appendChild(downButton);
buttonLayout.style.top = "420px";
const plan1 = document.getElementById("floorLevel");
//console.lo
//plan1.appendChild(newFloor);
plan1.insertBefore(buttonLayout,plan1.children[0]);

//newfloor
const newFloor1 = document.createElement("div");
newFloor1.setAttribute("class","floor");
newFloor1.style.top = "-300px";
const plan2 = document.getElementById("plan");
plan2.appendChild(newFloor1);

//new button
const buttonLayout1 = document.createElement("div");
buttonLayout1.setAttribute("class","btns");
const levelNo1 = document.createElement("div");
levelNo1.setAttribute("class","level");
levelNo1.innerHTML = "Floor 3";
const upButton1 = document.createElement("button");
upButton1.setAttribute("class","up");
const downButton1 = document.createElement("button");
downButton1.setAttribute("class","down");
buttonLayout1.appendChild(levelNo1);
buttonLayout1.appendChild(upButton1);
buttonLayout1.appendChild(downButton1);
buttonLayout1.style.top = "350px";
const plan3 = document.getElementById("floorLevel");
//console.lo
//plan1.appendChild(newFloor);
plan3.insertBefore(buttonLayout1,plan3.children[0]);