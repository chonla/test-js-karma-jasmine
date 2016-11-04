describe("Calculator", function() {
    it("should call adder to add X to result Y times when multiply X by Y", function() {
        var adder = jasmine.createSpyObj("adder", ["add"]),
            calculator = new Calculator(adder);

        calculator.multiply(3, 5);

        expect(adder.add.calls.count()).toEqual(5);
    });

    it("should return result of X * Y", function() {
        var calculator = new Calculator(),
            result = calculator.multiply(3, 5);

        expect(result).toEqual(15);
    });
});
