let list = [];

let ans = prompt("What do you want to do ?");

while(ans !== 'quit' ){
    if(ans == "add"){
        let newTask = prompt("Enter the task");
        list.push(newTask);
        console.log(`${newTask} added to the list`)
    }
    else if(ans == "list"){
        console.log('***************');
        for (let i = 0; i < list.length; i++){
            console.log(`${i}: ${list[i]}`);
        }
        console.log('***************')
    }
    else if(ans == "delete"){
        let rmvIndex = prompt("Enter the index");
        if(!Number.isNaN(rmvIndex)){
            let deleted = list.splice(rmvIndex,1);
            console.log(`${deleted} is removed`)
        }
    }

    ans = prompt("What do you want to do ?");
}

console.log("Ok, Quit the app!");