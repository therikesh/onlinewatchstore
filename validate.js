//<script type="text/javascript">
function validate()
{ 
   if( document.createaccount.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
     document.createaccount.textnames.focus() ;
     return false;
   }
   if( document.createaccount.fathername.value == "" )
   {
     alert( "Please provide your Father Name!" );
     document.createaccount.fathername.focus() ;
     return false;
   }
   
   if( document.createaccount.personaladdress.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.createaccount.personaladdress.focus() ;
     return false;
   }
   if ( ( createaccount.sex[0].checked == false ) && ( createaccount.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }   
      
   if( document.createaccount.State.value == "-1" )
   {
     alert( "Please provide your Select State!" );
     
     return false;
   }
   if( document.createaccount.pincode.value == "" ||
           isNaN( document.createaccount.pincode.value) ||
           document.createaccount.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.createaccount.pincode.focus() ;
     return false;
   }
 var email = document.createaccount.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.createaccount.emailid.focus() ;
     return false;
 }
  if( document.createaccount.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.createaccount.dob.focus() ;
     return false;
   }
  if( document.createaccount.mobileno.value == "" ||
           isNaN( document.createaccount.mobileno.value) ||
           document.createaccount.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.createaccount.mobileno.focus() ;
     return false;
   }
   return( true );


 var email = document.login.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.login.emailid.focus() ;
     return false;
 }
}
//</script>
