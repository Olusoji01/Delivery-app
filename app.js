window.onscroll = function(ev) {
    if (window.scrollY == 0) {
         document.getElementById("heading").style.backgroundColor = "whitesmoke";         
    }
}

function myFunc(){
    window.open("Homepage.html");
  }

  function myFunc2(){
    window.open("Homepage2.html");
  }
/*<input id="text1" type="text" placeholder="Enter username or email">
<input type="button" id="submit" value="Submit" onclick="validate()" />
<script>
    function validate() {
        var field = document.getElementById('text1').value;

        // CHeck if email
        if (/\@/.test(field)) {
            // Validate email address
        }
        else {
            // Validate username
        }
    }
</script>*/
