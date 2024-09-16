
describe("Test for stringOperations", () => {
    const stringOperations= require("./index")
    describe("Test for add function", () => {
        it("Should return 0", () => {
            expect(stringOperations.add("")).toBe(0);
        });
        it("Should return 3", () => {
            expect(stringOperations.add("1,2")).toBe(3);
        });
        it("Should return 15 - case Multiple values", () => {
            expect(stringOperations.add("1,2,3,4,5")).toBe(15);
        });
        it("Should return 15 - case Multiple empty values", () => {
            expect(stringOperations.add(",,,,")).toBe(0);
        });
        it("Should return 15 - case: Multiple type of splits in array(New line between numbers)", () => {
            expect(stringOperations.add("1\n2,3,4\n5")).toBe(15);
        });
        it("Should return 12 - case: Multiple type of splits in array with partial empty elements(New line between numbers)", () => {
            expect(stringOperations.add("\n,3,4\n5")).toBe(12);
        });
        it("Should return 0 - case: Multiple type of splits in array with fully empty elements", () => {
            expect(stringOperations.add("\n,,\n")).toBe(0);
        });
        it("Should return error - case: Unrealted delimiters", () => {
            expect(stringOperations.add("\n,,\n")).toBe(0);
        });
        it("Should return 3 - case: With specified delimiter '//[delimiter]\n[numbers..]'", () => {
            expect(stringOperations.add("//;\n1;2")).toBe(3);
        });
        it("Should return 0 - case: With specified delimiter but no numbers'", () => {
            expect(stringOperations.add("//;\n")).toBe(0);
        });
        it("Should return 23 - case: With no delimiter specified and has single number'", () => {
            expect(stringOperations.add("//;\n23")).toBe(23);
        });
        it('Should return error - case: Negative numbers are not allowed', () => {
            expect(() => stringOperations.add("1,-2,3,-4\n5,-22")).toThrow("Negatives not allowed: -2,-4,-22");
        });
        it('Should return error - case: Negative numbers are not allowed, With delimiter specified', () => {
            expect(() => stringOperations.add("//;\n1;-2;3;-4;5")).toThrow("Negatives not allowed: -2,-4");
        });
        it('Should return 15 - case: Negative symbol as delimiter', () => {
            expect(stringOperations.add("//-\n1-2-3-4-5")).toBe(15);
        });
        it('Should return 11 - case: Should skip numbers above 1000', () => {
            expect(stringOperations.add("//-\n1-2-3-4000-5")).toBe(11);
            expect(stringOperations.add("1,2,3,1001,5")).toBe(11);
        });
        it('Should return 15 - case: Should accept multi cutom delimitor charcters', () => {
            expect(stringOperations.add("//[---]\n1---2---3---4---5")).toBe(15);
        });
        it('Should return 15 - case: Should accept multi cutom delimitor charcters even though delimiter is empty', () => {
            expect(stringOperations.add("//[]\n12345")).toBe(15);
        });
        it('Should return 15 - case: Should accept multi delimitors', () => {
            expect(stringOperations.add("//[-][+]\n1-2+3-4-5")).toBe(15);
            expect(stringOperations.add("//[@][*]\n1@2*3*4*5")).toBe(15);
        });
        it('Should return 15 - case: Should accept multi delimitors with multi characters', () => {
            expect(stringOperations.add("//[---][++]\n1++2++3---4---5")).toBe(15);
            expect(stringOperations.add("//[@@][*@]\n1@@2*@3*@4*@5")).toBe(15);
        });
    });
})