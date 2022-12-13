//Add new lift

const addLift = (numOfLifts = 2,numOfFloors = 3) =>{
    for(let i = 1;i<numOfLifts;i++){
        const newLift = document.createElement("div");
        newLift.setAttribute("class","lift");
        //console.log(newLift);
        const box = document.getElementById("set");
        //console.log(box);
        box.appendChild(newLift);
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
    }
	
	for(let z = 1;z<=numOfFloors;z++){
		const buttonLayout = document.createElement("div");
        buttonLayout.setAttribute("class","btns");
        const levelNo = document.createElement("div");
        levelNo.setAttribute("class","level");
		console.log(z);
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
        const plan1 = document.getElementById("floorLevel");
        //console.lo
        //plan1.appendChild(newFloor);
        plan1.insertBefore(buttonLayout,plan1.children[0]);
	}
};

addLift(3,2);


