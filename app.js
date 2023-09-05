window.onscroll = function(ev) {
    if (window.scrollY == 0) {
         document.getElementById("heading").style.backgroundColor = "whitesmoke";         
    }
    else    
    {
        document.getElementById("heading").style.backgroundColor = `$("#heading-scrolled")`; 
    }
};
