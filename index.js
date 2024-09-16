const stringingOperations = {
    add:(string)=>{
        if(string.length==0) return 0
        const splittedString= string.split(',').map(Number);
        return splittedString.reduce((acc,curr)=>acc+curr);
    }
}
module.exports = stringingOperations;