
function findByNum(num) {
    if (!elements[num - 1]) { console.error('Check for errors, no such element exists.'); return 'Over!'; }
    console.log(`The element is ${elements[num - 1].name}`);
    console.log(`Symbol:${elements[num - 1].sym}`);
    console.log(`Group:${elements[num - 1].group} Period:${elements[num - 1].period}`);
    return 'Over!';
}
function find(name) {
    let yes;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].sym == name) {
            console.log(`The element is ${elements[i].name}`);
            console.log(`Symbol: ${elements[i].sym}`);
            console.log(`Group: ${elements[i].group}   Period: ${elements[i].period}`);
            yes = name;
            break;
        }

    }
    if (yes) { return 'Enjoy' }
    else { return 'Check for errors, element not found!' };

}





