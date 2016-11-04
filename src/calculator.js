function Calculator(adder) {
    return {
        adder: adder,
        multiply: function(a, b) {
            if (!this.adder) {
                this.adder = new Adder();
            }
            result = 0;
            for (var i = 0; i < b; i++) {
                result = this.adder.add(result, a);
            }
            return result;
        },
        divide: function(a, b) {
            if (!this.subtractor) {
                this.subtractor = new Subtractor();
            }
            result = 0;
            while (a >= b) {
                a -= b;
                result++;
            }
            return result;
        }
    }
}
