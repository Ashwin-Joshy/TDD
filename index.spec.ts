
describe("Test for stringOperations", () => {
    const stringOperations= require("./index")
    describe("Test for add function", () => {
        it("Should return 0", () => {
            expect(stringOperations.add("")).toBe(0);
        });
        it("Should return 3", () => {
            expect(stringOperations.add("1,2")).toBe(3);
        });
        it("Should return 15", () => {
            expect(stringOperations.add("1,2,3,4,5")).toBe(15);
        });
    });
})