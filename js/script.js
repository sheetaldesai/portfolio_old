$(function(){
    // this will get the full URL at the address bar
    var url = window.location.href; 
    console.log("Inside function");
    // passes on every "a" tag 
    $(".navbar-custom-li a").each(function() {

    	// Remove the highlight class from any existing items.
        /*$(this).find( "li.active" )
                 .removeClass( "active" );*/
        console.log(this.href);         
        // checks if its the same on the address bar     	  
        if(url == (this.href)) { 
            $(this).closest("li a").addClass("active");
        }

        }
   
});