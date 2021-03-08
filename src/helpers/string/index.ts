//Usually I would just use replace.all which is available inside typescript
//but jest runs its tests using node, and replace.all is only available in node >= 14
//so for compatibility reasons I'm using this function, which basically does the same thing 
export const replaceAll = (value: string, replaceMap: {[key: string]: string}) => {
    let  newValue = '';

    for(let char of value){
        if(replaceMap[char] !== undefined){
            newValue += replaceMap[char];
            continue;
        }
        
        newValue += char;
    }

    return newValue;
}