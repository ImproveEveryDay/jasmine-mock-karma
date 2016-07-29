/**
 * Created by h148299 on 7/21/2016.
 */
var ajaxScripts = function(){
    this.getUserData = function(userId, successCallback, failureCallback){
        $.ajax({
            type: "GET",
            url: "/Users/" + userId,
            contentType: "application/json",
            success: function(data){
                successCallback(data);
            },
            error: function(xhr, data, error){
                failureCallback(xhr, data, error);
            }
        });
    };
    /*
    returns a promise
     */
    this.getInformation = function(url, successCallback, failureCallback){
        return $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json",
            success: function(data){
                successCallback(data);
            },
            error: function(xhr, data, error){
                failureCallback(xhr, data, error);
            }
        });
    };

    this.getSource =  function(url){
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json",
            success: function(data){
                debugger
                return data;
            },
            error: function(xhr, data, error){

            }
        });
    }
}