describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});

describe("Interval - including", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(10, 12),
        new Interval(15, 16),
        new Interval(15, 17),
        new Interval(10, 20),
        new Interval(11, 12)

    ].forEach(function (interval) {
        it("should includes " + interval.toString() + " in " + testedInterval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not includes " + interval.toString() + " in " + testedInterval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});

describe("Interval - union", function () {
    testedInterval = new Interval(10, 20);

    [
        {
            inter : new Interval(8, 12),
            union : new Interval(8, 20)
        },
        {
            inter : new Interval(15, 16),
            union : new Interval(10, 20)
        },
        {
            inter : new Interval(17, 22),
            union : new Interval(10, 22)
        },
        {
            inter : new Interval(10, 20),
            union : new Interval(10, 20)
        },
        {
            inter : new Interval(8, 21),
            union : new Interval(8, 21)
        }

    ].forEach(function (interval) {
        it("should returns " + interval.union.toString() + " with the union of " + testedInterval.toString() + " and " + interval.inter.toString(), function () {
            expect(testedInterval.union(interval.inter)).toEqual(interval.union);
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should returns " + interval.toString() + " and " + testedInterval.toString() + " with the union of " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.union(interval)).toEqual([testedInterval, interval]);
        });
    });
});