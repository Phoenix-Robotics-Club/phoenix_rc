window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var screen = window.innerWidth
  if (screen>900){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("header").style.background = '#19191a';
      document.getElementById("header").style.boxShadow = '10px 5px 5px grey';
      document.getElementById("logo-text").style.color = 'white';
      document.getElementById('home').style.color = 'white';
      document.getElementById('events').style.color = 'white';
      document.getElementById('aboutus').style.color = 'white';
      document.getElementById('team').style.color = 'white';
    } 
    else {
      document.getElementById("header").style.background = 'rgb(255, 255, 255,0)';
      document.getElementById("header").style.boxShadow = 'none';
      document.getElementById("logo-text").style.color = 'black';
      document.getElementById('home').style.color = 'black';
      document.getElementById('events').style.color = 'black';
      document.getElementById('aboutus').style.color = 'black';
      document.getElementById('team').style.color = 'black';


    }

  }
  
}
var a = document.getElementsByClassName('hamburger_menu')[0];
      function hamburger() {
        if (a.style.display === 'flex'){
          document.body.style.overflow='visible';
          a.style.display = 'none';
          document.getElementById('menu').innerHTML='<img src="images/menu.png" alt="">';
          
        }
        else{
          a.style.display = 'flex';
          document.getElementById('menu').innerHTML='<h2>X</h2>';
          document.body.style.overflow='hidden';
    
        }
      }
function validate() {
  if (grecaptcha.getResponse() == ""){
    alert("Please fill the captcha");
  } 
  else 
  {
    document.getElementsByClassName('join_now')[0].action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSeIfaYN3o4_BaDmC6XQALxJkbZLBmoAZvNmTwU6p7DbCDALig/formResponse"
    alert("Thank you");
  }
      }
function speak() {
            document.getElementById('listen-text').style.display='flex';
            document.getElementById('chat').style.border='2px solid aqua';
            var recognition = new webkitSpeechRecognition();
            recognition.lang = "en-US";
            recognition.onresult = function(event) {
    
                if (event.results[0][0].transcript.includes('home')){
                    window.location.href = "{% url 'home' %}";
                }
                else if (event.results[0][0].transcript.includes('projects')){
                    window.location.href = "{% url 'projects' %}";
                }
                else if (event.results[0][0].transcript.includes('research')){
                    window.location.href = "{% url 'research' %}";
                }
                else if (event.results[0][0].transcript.includes('team')){
                    window.location.href = "{% url 'team' %}";
                
                }
                else if (event.results[0][0].transcript.includes('login')){
                    window.location.href = "{% url 'Login' %}";
                }
                else if (event.results[0][0].transcript.includes('register') || event.results[0][0].transcript.includes('registration')){
                    window.location.href = "{% url 'Join' %}";
                }
                else if (event.results[0][0].transcript.includes('events')){
                    window.location.href = "{% url 'events' %}";
                }
                document.getElementById('listen-text').style.display='none';
                document.getElementById('chat').style.border='none';
            }
            recognition.start()
            
        }
