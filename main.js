let output;
function findByNum(num,check) {
    if(check==false){
        
        if (!elements[num - 1]) 
        { output='Check for errors, no such element exists.';
         document.getElementById('output').innerHTML=output;
         return 'Over!';
        }
        output=`The element is ${elements[num - 1].name} \n`
                                +
                `Symbol: ${elements[num - 1].sym} \n`
                                +
        `Group: ${elements[num - 1].group} Period: ${elements[num - 1].period} \n`;
        
        document.getElementById('output').innerHTML=output;
        
        return 'Enjoy!';
    }
}


function findByName(name) {
    let yes;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].sym == name) {
            output=`The element is ${elements[i].name} \n`
                                    +
                        `Symbol: ${elements[i].sym} \n`
                                    +
            `Group: ${elements[i].group}   Period: ${elements[i].period} \n`;
            document.getElementById('output').innerHTML=output
            yes = name;
            break;
        }

    }
    if (yes) { return 'Enjoy' }
    else {return false; };
}

//for HTML part.

function execute(input){
    findByName(`${input}`);
    findByNum(input,find(`${input}`));
}




