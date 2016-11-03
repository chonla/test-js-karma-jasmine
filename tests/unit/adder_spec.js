describe("Adder", function() {
    it("should be true", function() {
        var adder = new Adder(),
            result = adder.add(1, 2);

        expect(result).toEqual(3);
    });
});
