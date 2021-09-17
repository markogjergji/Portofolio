
window.addEventListener("DOMContentLoaded" , () => {
  
    setTimeout(() => {
        document.getElementById("scroll").style.zIndex= 1;
        document.getElementById("scroll").style.opacity= 1;
        document.getElementById("reveal-square").style.display = "none";
    }, 1700);
    window.addEventListener("scroll" , (e) => {
        document.getElementById("scroll").style.width = "100%";
        document.getElementById("scroll-text").innerText = "";

        if(window.pageYOffset === 0){
            document.getElementById("scroll").style.width = "38vw";
            document.getElementById("scroll-text").innerText = "scroll";
        }

    })
    
    let projectId = 0;
    fadeOutElements();


    function showAboutElements(){
        document.getElementById("skills-text").style.width = "29vw";
        document.querySelector("#about-info-image > div").style.height = "18vw";
        document.querySelector('#about-text').style.setProperty('--trans', 'scaleX(1)');
        document.querySelector("#skills-text > div ").style.top = 0;
        document.querySelector("#about-info-text").style.opacity = 1;
        document.querySelector("#about-info-text").style.transitionDelay = "1300ms";

        Array.from(document.getElementById("about-skills").children).forEach((e,i) => {
            e.style.transitionDelay = ((i * 150) + 1600) + "ms";
            e.style.opacity = "1";
        });

        document.getElementById("horizontal-1-about").style.width = "100vw";
        document.getElementById("horizontal-2-about").style.width = "100vw";
        document.getElementById("vertical-about").style.height = "100vh";

    }

    function slideElementsFromBottom(projectId){
        Array.from(document.getElementsByClassName("project-description")[projectId].children).forEach((c,i) => {

            c.children[0].style.transitionDelay = ((i * 150) + 1000) + "ms";
            c.children[0].style.top = "0px";
        })
       
        document.getElementsByClassName("project-name")[projectId].children[0].style.top = "0";

        if(projectId != 1)
        document.getElementsByClassName("project-name")[projectId].style.width = "29vw";
        else
        document.getElementsByClassName("project-name")[projectId].style.width = "33vw";
        Array.from(document.getElementsByClassName("project-tech")[projectId].children).forEach((c,i) => {
            
            c.style.opacity = "1";
            c.style.transitionDelay =  (i*300 + 3500) + "ms";
            
        })
        document.getElementsByClassName("project-name")[projectId].style.opacity = "1";  
    }

    function slideElementsToLeft(projectId){

      
        document.getElementsByClassName("project-name")[projectId].children[0].style.left = "-1500px";
       
        Array.from(document.getElementsByClassName("project-description")[projectId].children).forEach((c,i) => {

            c.children[0].style.transitionDelay = ((i * 150)) + "ms";
            c.children[0].style.left = "-1500px";
            
        })
        
        Array.from(document.getElementsByClassName("project-tech")[projectId].children).forEach((c,i) => {
          
            c.style.transitionDelay =  (i*100 + 1000) + "ms";
            c.style.left = "-1500px";  
             
        })
        document.getElementsByClassName("project-name")[projectId].style.width = "0"; 
        
    }

    function fadeOutElements(){
        document.getElementById("video-con").style.opacity = 0;
        document.getElementById("horizontal").style.width = 0;
        document.getElementById("horizontal-2").style.width = 0;
        document.getElementById("vertical").style.height = 0;
    

    }

    function fadeInElements(){
        document.getElementById("video-con").style.opacity = 1;
        document.getElementById("horizontal").style.width = "91vw";
        document.getElementById("horizontal-2").style.width = "91vw";
        document.getElementById("vertical").style.height = "110vh";
        
    }
     
    let video = document.getElementById('first-video');

    document.getElementById("play-first-video").addEventListener("click" , () =>  {
        video.style.opacity = 1;
        document.getElementById("play-first-video").style.display = "none";
        document.querySelector(".triangle").style.display = "none";

        video.play();
        video.currentTime = 0;

    })
    
    document.getElementById("first-video").addEventListener("ended" , () => {
        document.getElementById("first-video").style.opacity = 0.1;
        document.getElementById("play-first-video").style.display = "flex";
        document.querySelector(".triangle").style.display = "flex";

    })
    document.getElementById("second-video").addEventListener("ended" , () => {
        document.getElementById("second-video").style.opacity = 0.1;
        document.getElementById("play-first-video").style.display = "flex";
        document.querySelector(".triangle").style.display = "flex";

    })
    document.getElementById("third-video").addEventListener("ended" , () => {
        document.getElementById("third-video").style.opacity = 0.1;
        document.getElementById("play-first-video").style.display = "flex";
        document.querySelector(".triangle").style.display = "flex";

    })


    function changeProject(front){

        slideElementsToLeft(projectId);

        setTimeout((() => fadeOutElements(projectId)), 1000);

        document.getElementsByClassName("project-number")[projectId].removeAttribute("style");
        document.getElementsByClassName("project-name")[projectId].removeAttribute("style");
        document.getElementsByClassName("project-description")[projectId].removeAttribute("style");
        document.getElementsByClassName("project-tech")[projectId].removeAttribute("style");

        setTimeout(function(){
            fadeInElements();

            Array.from(document.getElementsByClassName("project-name")[projectId].children).forEach((c,i) => {

                c.removeAttribute("style");

            })

            Array.from(document.getElementsByClassName("project-tech")[projectId].children).forEach((c,i) => {
                
                c.removeAttribute("style");

            })
            Array.from(document.getElementsByClassName("project-description")[projectId].children).forEach((c,i) => {
     
                c.removeAttribute("style"); 
                Array.from(c.children).forEach((e) => {

                    e.removeAttribute("style"); 
                     
                })
                 
            })
            document.getElementsByClassName("project-number")[projectId].style.display = "none";
            document.getElementsByClassName("project-name")[projectId].style.display = "none";
            document.getElementsByClassName("project-description")[projectId].style.display = "none";
            document.getElementsByClassName("project-tech")[projectId].style.display = "none";
            video.pause();
            video.style.opacity = 0.1;
           
            document.getElementsByClassName("video")[projectId].style.display = "none";
            

            if(front)
                projectId++;
            else
                projectId--;

            if(projectId === 3)
                projectId = 0
            if(projectId === -1)
                projectId = 2

            video = document.getElementsByClassName("video")[projectId];

            if(projectId === 0)
            document.querySelector("#bottom-buttons > div > a").href = "https://github.com/markogjergji/MusicTaste"
            else if(projectId === 1)
            document.querySelector("#bottom-buttons > div > a").href = "https://github.com/markogjergji/FTIWebPage"
            else
            document.querySelector("#bottom-buttons > div > a").href = "https://github.com/markogjergji/GeoAL"

            if(projectId != 0)
            {
                document.querySelector("#first-top-button > span").style.opacity = 0;
                setTimeout((() => document.getElementById("first-top-button").innerHTML = ' <span><i class="fas fa-arrow-left"></i></span>'), 300);
                
            }
        
        else
        {
            document.querySelector("#first-top-button > span").style.opacity = 0;
            setTimeout((() => document.getElementById("first-top-button").innerHTML = '<span>Top</span>'), 300);
            
        }

            document.getElementsByClassName("project-number")[projectId].style.display = "flex";
            document.getElementsByClassName("project-name")[projectId].style.display = "flex";
            document.getElementsByClassName("project-description")[projectId].style.display = "block";
            document.getElementsByClassName("project-tech")[projectId].style.display = "block";
            document.getElementsByClassName("video")[projectId].style.display = "flex";
            
            document.getElementById("play-first-video").style.display = "flex";
            document.querySelector(".triangle").style.display = "flex";
            if(isElementInViewport(document.getElementById("video-con")))
            {
                slideElementsFromBottom(projectId);
            }
            if( /Android|webOS|iPhone/i.test(navigator.userAgent) ) {
                if(document.getElementById("projects-con").getBoundingClientRect().y < 70)
             {
                slideElementsFromBottom(projectId);
             }
             }
            
        }, 2800);
        
    }

    document.getElementById("first-top-button").addEventListener("click" , () => {
        if(projectId === 0)
            window.scrollTo(0,0);
        else
            changeProject(false);
        
    })



    document.getElementById("first-next-project-button").addEventListener("click" , () => {

         changeProject(true);

    })



    function isElementInViewport (el) {

        let rect = el.getBoundingClientRect();
    
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    }


    if(isElementInViewport(document.getElementById("about-text")))
    {
        showAboutElements();
    }

    if( /Android|webOS|iPhone/i.test(navigator.userAgent) ) {
       if(document.getElementById("projects-con").getBoundingClientRect().y < 70)
    {
        fadeInElements();
        slideElementsFromBottom(projectId);
    }
    }

    if(isElementInViewport(document.getElementById("video-con")))
    {
        fadeInElements();
        slideElementsFromBottom(projectId);
    }

    window.onscroll = function () { 
        if( /Android|webOS|iPhone/i.test(navigator.userAgent) ) {
            if(document.getElementById("projects-con").getBoundingClientRect().y < 70)
         {
             
             fadeInElements();
             slideElementsFromBottom(projectId);
         }
         }
        if(isElementInViewport(document.getElementById("video-con"))){
            fadeInElements();
            slideElementsFromBottom(projectId);
        
        }
        if(isElementInViewport(document.getElementById("about-text"))){
            showAboutElements();
        }
    };


    setTimeout(() => {
        document.addEventListener('mousemove', startPainting);
    }, 2700);

    

    function startPainting(e){
       
        if(document.getElementById("canvas").children.length > 270)
            document.removeEventListener('mousemove', startPainting);

        let d = document.getElementById("canvas");
        let c = document.createElement("div");

        c.setAttribute("class","circle");
        c.style.top = e.pageY + "px";
        c.style.left =  e.pageX+ "px";

        d.appendChild(c);
        
        setTimeout(() => {
            c.style.backgroundColor = "#111111";
        }, 1);
    }


})


        
   