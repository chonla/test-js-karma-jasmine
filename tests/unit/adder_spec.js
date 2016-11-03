describe("Adder", function() {
    it("should return 3 when add by Adder", function() {
        var adder = new Adder(),
            result = adder.add(1, 2);

        expect(result).toEqual(3);
    });

    it("should return 3 when add by add function", function() {
        var result = add_number(1, 2);

        expect(result).toEqual(3);
    });
});
