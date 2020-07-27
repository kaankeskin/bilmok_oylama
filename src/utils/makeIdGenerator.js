export function* makeIdGenerator(){
    let count = 0;
    for (;;) yield ++count;
}