const stringingOperations = {
    add:(string)=>{
        if(string.length==0) return 0
        const splittedString= string.split(',').map(Number);
        return splittedString[0]+splittedString[1];
    }
}
module.exports = stringingOperations;E