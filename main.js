//Add new lift

const lifts = [];
const floors = [];
const buttons = [];

const addLift = (numOfLifts = 2,numOfFloors = 3) =>{
	
	
	
	//buttons[0] = document.getElementById("btnSet");
	//lifts[0] = document.getElementById("set");

    for(let i = 0;i<numOfLifts;i++){
        const newLift = document.createElement("div");
        newLift.setAttribute("class","lift");
        //console.log(newLift);
        const box = document.getElementById("set");
        //console.log(box);
        box.appendChild(newLift);
		lifts[i] = newLift;
    }

    for(let j = 1;j<=numOfFloors;j++){
        const newFloor = document.createElement("div");
        newFloor.setAttribute("class","floor");
        let spacing = 150*j;
        let floorSpacing = "-"+spacing.toString()+"px";
        console.log(floorSpacing);
        newFloor.style.top = floorSpacing;
        const plan = document.getElementById("plan");
        plan.appendChild(newFloor);
		floors[j-1] = newFloor;
    }

	for(let z = 0;z<=numOfFloors;z++){
		const buttonLayout = document.createElement("div");
        buttonLayout.setAttribute("class","btns");
        const levelNo = document.createElement("div");
        levelNo.setAttribute("class","level");
		//console.log(z);
        levelNo.innerHTML = "Floor "+(z).toString();
        const upButton = document.createElement("button");
        upButton.setAttribute("class","up");
		upButton.innerHTML = "UP";
        const downButton = document.createElement("button");
        downButton.setAttribute("class","down");
		downButton.innerHTML = "DOWN";
        buttonLayout.appendChild(levelNo);
        buttonLayout.appendChild(upButton);
        buttonLayout.appendChild(downButton);
        let buttonSpacing = 400-(70*(z-1));
        let layoutSpacing = buttonSpacing.toString()+"px";
		console.log(layoutSpacing);
        buttonLayout.style.top = layoutSpacing;
		buttons[z] = buttonLayout;
        const plan1 = document.getElementById("floorLevel");
        //console.lo
        //plan1.appendChild(newFloor);
        plan1.insertBefore(buttonLayout,plan1.children[0]);
	}
	console.log(lifts);
	console.log(floors);
	console.log(buttons);
};

addLift(2,3);

document.querySelector(".up").addEventListener("click",function(){
	//const lift = lifts[0];
	lifts[0].style.transitionDuration = "2s";
	lifts[0].style.top = "-290px"; 
	//console.log(lifts[1].style.animationPlayState);
});

