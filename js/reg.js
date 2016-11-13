function AjaxFormRequest(result_id,form_id,url) {



   jQuery.ajax({
    url: "http://codeit.pro/frontTestTask/user/registration",
    type: "POST",
    dataType:"html",
    data: jQuery("#"+form_id).serialize(), 
    success: function(response) {
        document.getElementById(result_id).innerHTML = response;
    },
    error: function(response) {
        document.getElementById(result_id).innerHTML = "";
    }
});

   setTimeout(function() {
       var a = document.body.querySelector('#results').innerHTML;
       var b = JSON.parse(a);
       if(b.status === "OK") {
           window.location = 'companies.html'
       } else {
           alert(b.message);
       }
   }, 1000);

}   