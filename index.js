const stringingOperations = {
    add: (string) => {
        try {
            if (string.length == 0) return 0
            //Considering old cases as seperate since those do not comes with speccified delimiter
            if (!string.startsWith("//")) {
                const result= string.split(/[,\n]/).map(Number).filter((num) => num <= 1000)
                stringingOperations.checkForNegatives(result)
                return result.reduce((acc, curr) => acc + curr, 0)
            }
            // New cases where delimiter is specified as //[delimiter]\n[numbers…]
            const initalSplit = string.split('\n');
            let delimiter = initalSplit[0].substring(2);
            if (delimiter.match(/\[.*?\]/g)) {
                delimiter = stringingOperations.setDelimiter(delimiter)
            }
            const result = initalSplit[1].split(delimiter).map(Number).filter((num) => num <= 1000);
            stringingOperations.checkForNegatives(result)
            return result.reduce((acc, curr) => acc + curr, 0);;
        }
        catch (error) {
            console.error('Error:', error.message);
            throw error;
        }
    },
    checkForNegatives: (result) => {
        const negatives = result.filter((num) => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives}`);
        }
    },
    setDelimiter: (delimiter) => {
        delimiter = delimiter.match(/\[.*?\]/g).map((del) => del.slice(1, -1));
        delimiter = delimiter.map(del => del.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
        return new RegExp(delimiter, 'g');
    }
}
module.exports = stringingOperations;