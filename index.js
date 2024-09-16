const stringingOperations = {
    add: (string) => {
        try {
            if (string.length == 0) return 0
            //Considering old cases as seperate since those do not comes with speccified delimiter
            if (!string.startsWith("//")) {
                return string.split(/[,\n]/).map(Number).reduce((acc, curr) => acc + curr, 0)
            }
            // New cases where delimiter is specified as //[delimiter]\n[numbers…]
            const initalSplit = string.split('\n');
            const delimiter = initalSplit[0].substring(2);
            const result = initalSplit[1].split(delimiter).map(Number);
            return result.reduce((acc, curr) => acc + curr, 0);;
        }
        catch (error) {
            console.error('Error:', error.message);
            return error.message;
        }
    }
}
module.exports = stringingOperations;