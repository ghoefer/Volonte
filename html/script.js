
alert ("This is under construction")

$('.message').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   function myFunction() {
    document.getElementsByTagName("login-overall")[0].style.backgroundColor = "yellow";

});


<form name="loginform" onSubmit="return validateForm();" action="form.html" method="post">
    <label>User name</label>
    <input type="text" name="usr" placeholder="username">
    <label>Password</label>
    <input type="password" name="pwrd" placeholder="password">
    <input type="submit" value="Loginbtn"/>
</form>

<script>
    function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
        var username = "username";
        var password = "password";
        if ((un == username) && (pw == password)) {
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
  }
</script>
