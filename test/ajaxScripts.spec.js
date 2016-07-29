/**
 * Created by h148299 on 7/21/2016.
 */

describe('ajaxScripts module testing', function(){
    var testModule;
    var server;
   beforeEach(function(){
       testModule = new ajaxScripts();
       spyOn(jQuery, "ajax").and.callFake(function(options){
           debugger
           if(/.*success.*/.test(options.url)){
               options.success('{name:"Tom", age:"22"}');
           }
           else{
               options.error();
           }
           var d = jQuery.Deferred();
           d.then(options.success(), options.error());
           return d.promise();
       });
   });
    afterEach(function(){
        $.ajax.and.callThrough();
    });
    it("Mock ajax callback function", function(){
        var successCallback = jasmine.createSpy();
        var failureCallback = jasmine.createSpy();
        testModule.getUserData("successUserId", successCallback, failureCallback);
        expect(successCallback).toHaveBeenCalledWith('{name:"Tom", age:"22"}');
        testModule.getUserData("errorUserId", successCallback, failureCallback);
        expect(failureCallback).toHaveBeenCalled();
    });
    it("Mock promise returned from ajax call", function(){
        var successCallback = jasmine.createSpy();
        var failureCallback = jasmine.createSpy();
        var promise = testModule.getInformation("test", successCallback, failureCallback);
        promise.done();
        expect(successCallback).toHaveBeenCalled();
        promise.fail();
        expect(failureCallback).toHaveBeenCalled();
    });

});