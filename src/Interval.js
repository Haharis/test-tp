Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return this.start <= interval.start && this.end >= interval.end;
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
	var interval_union_start = 0;
	var interval_union_end = 0;

	if (!(this.overlaps(interval)))
		return [this, interval];

	if (this.includes(interval))
		return this;

	if (this.start <= interval.start)
		interval_union_start = this.start;
	else
		interval_union_start = interval.start;

	if (this.end >= interval.end)
		interval_union_end = this.end;
	else
		interval_union_end = interval.end;

	if (this.start === interval.end)
		return new Interval(interval.start, this.end);

	if (this.end === interval.start)
		return new Interval(this.start, interval.end);

	return new Interval(interval_union_start, interval_union_end);
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
	if (!(this.overlaps(interval)))
		return null;

	if (this.start < interval.start)
		return new Interval(interval.start, this.end);
	else
		return new Interval(this.start, interval.end);
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {
	if (!(this.overlaps(interval)))
		return [this, interval];

	if (this.start < interval.start) {
		if (this.end < interval.end) {
			return [new Interval(this.start, interval.start), new Interval(this.end, interval.end)];
		} else {
			return [new Interval(this.start, interval.start), new Interval(interval.end, this.end)];
		}
	} else {
		return [new Interval(interval.start, this.start), new Interval(interval.end, this.end)];
	}
};