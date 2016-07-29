/**
 * Created by h148299 on 7/19/2016.
 */
describe("sinon example test", function () {
    var time2013_10_01;

    time2013_10_01 = (new Date(2013, 10-1, 1)).getTime();

    beforeEach(function() {
        // sinon was defined in global scope
        this.fakeTimer = new sinon.useFakeTimers(time2013_10_01);
    });

    it("some test", function() {
        //test
    });

    afterEach(function() {
        this.fakeTimer.restore();
    });

});