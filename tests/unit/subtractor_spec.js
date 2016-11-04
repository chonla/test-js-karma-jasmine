describe("Subtractor", function() {
    it("should return 3 when subtract by Subtractor", function() {
        var subtractor = new Subtractor(),
            result = subtractor.subtract(5, 2);

        expect(result).toEqual(3);
    });
});
