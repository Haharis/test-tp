describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })

    it("should raise an exception for n > 100", function(){
        var f = function(){
            Util.factorial(101);
        }
        expect(f).toThrow('Unable to compute factorial for n > 100');
    })
});

describe("Arrangement", function(){
    var testCases = [
        {
            n : 0,
            r : 0,
            arrangement : 1
        },
        {
            n : 1,
            r : 1,
            arrangement : 1
        },
        {
            n : 2,
            r : 2,
            arrangement : 2
        },
        {
            n : 3,
            r : 2,
            arrangement : 6
        },
        {
            n : 4,
            r : 4,
            arrangement : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.arrangement + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.arrangement(testCase.n, testCase.r);
            expect(result).toEqual(testCase.arrangement);
        })
    });

    it("should raise an exception when r > n", function(){
        var f = function(){
            Util.arrangement(-1, 2);
        }
        expect(f).toThrow('Unable to compute arrangement for r > n');
    });

    it("should raise an exception when r is not an integer", function(){
        var f = function(){
            Util.arrangement(5, "test");
        }
        expect(f).toThrow('Unable to compute r arrangement of non integer values');
    })
});

describe("Combination", function(){
    var testCases = [
        {
            n : 0,
            r : 0,
            combination : 1
        },
        {
            n : 1,
            r : 1,
            combination : 1
        },
        {
            n : 2,
            r : 2,
            combination : 1
        },
        {
            n : 3,
            r : 2,
            combination : 3
        },
        {
            n : 4,
            r : 4,
            combination : 1
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.combination + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.combination(testCase.n, testCase.r);
            expect(result).toEqual(testCase.combination);
        })
    });
});

describe("IsPrime", function(){
    var testCases = [
        {
            n : 2,
            isprime : true
        },
        {
            n : 3,
            isprime : true
        },
        {
            n : 4,
            isprime : false
        },
        {
            n : 5,
            isprime : true
        },
        {
            n : 6,
            isprime : false
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.isprime + " when n = " + testCase.n, function(){
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.isprime);
        })
    });

    it("should raise an exception when n <= n", function(){
        var f = function(){
            Util.isPrime(0);
        }
        expect(f).toThrow('Unable to compute isprime for n <= 0');
    });

    it("should raise an exception when n === 1", function(){
        var f = function(){
            Util.isPrime(1);
        }
        expect(f).toThrow('Unable to compute isprime for n === 1');
    })

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.isPrime("test");
        }
        expect(f).toThrow('Unable to compute isprime of non integer values');
    })
});

describe("SumPrime", function(){
    var testCases = [
        {
            n : 2,
            sumprime : 2
        },
        {
            n : 3,
            sumprime : 5
        },
        {
            n : 4,
            sumprime : 5
        },
        {
            n : 5,
            sumprime : 10
        },
        {
            n : 6,
            sumprime : 10
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.sumprime + " when n = " + testCase.n, function(){
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.sumprime);
        })
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.sumPrime("test");
        }
        expect(f).toThrow('Unable to compute sumprime of non integer values');
    })
});

describe("FizzBuzz", function(){
    var testCases = [
        {
            n : 2,
            res : [1, 2]
        },
        {
            n : 3,
            res : [1, 2, "Fizz"]
        },
        {
            n : 4,
            res : [1, 2, "Fizz", 4]
        },
        {
            n : 5,
            res : [1, 2, "Fizz", 4, "Buzz"]
        },
        {
            n : 15,
            res : [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.res + " when n = " + testCase.n, function(){
            var result = Util.fizzBuzz(testCase.n);
            expect(result).toEqual(testCase.res);
        })
    });

    it("should raise an exception when n <= 1", function(){
        var f = function(){
            Util.fizzBuzz(0);
        }
        expect(f).toThrow('Unable to compute fizzbuzz for n <= 1');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.fizzBuzz("test");
        }
        expect(f).toThrow('Unable to compute fizzbuzz of non integer values');
    })
});

describe("Cipher", function(){
    var testCases = [
        {
            phrase : "abc",
            res : "bcd"
        },
        {
            phrase : "ABC",
            res : "BCD"
        },
        {
            phrase : "Test Unitaire",
            res : "Uftu Vojubjsf"
        },
        {
            phrase : "Bruno",
            res : "Csvop"
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.res + " when phrase = " + testCase.phrase, function(){
            var result = Util.cipher(testCase.phrase);
            expect(result).toEqual(testCase.res);
        })
    });

    it("should raise an exception when phrase is not a string", function(){
        var f = function(){
            Util.cipher(1);
        }
        expect(f).toThrow('Unable to compute cipher of non string values');
    })
});