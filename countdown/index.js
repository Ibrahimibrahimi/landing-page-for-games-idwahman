
        // creat spans under slides 
          //hours 
          for (var i = 0 ; i < 24 ; i++){
            document.getElementById("hours").innerHTML += `<span>${i}</span>`
        }

          //minutes
        for (var i = 0 ; i <=59 ; i++){
            document.getElementById("minutes").innerHTML += `<span>${i}</span>`
        }
          //seconds
        for (var i = 0 ; i <= 59 ; i++){
            document.getElementById("seconds").innerHTML += `<span>${i}</span>`
        }

        // function of slide
        function slide(id="hours",to=10){
            var slider = document.getElementById(id);
            slider.style.transform = "translateY(" + to * -50 + "px)";
        }


        
        var c = setInterval(()=>{
        var date = new Date();
        var s = date.getSeconds();
        var min = date.getMinutes();
        var h = date.getHours();
        // load slider
        slide("seconds",s);
        slide("minutes",min);
        slide("hours",h);
        },1000)

        // document.onclick = () => {clearInterval(c)}
