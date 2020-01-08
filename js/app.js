    //jquery and plugins

$(document).foundation()

    //OLD SCROLL FUNCTION
    // $(function(){
    //     var x = 0;
    //     setInterval(function(){
    //         x-=1;
    //         $('.home').css('background-position', x + 'px 0');
    //     }, 20);
    // })

    $('.bannerTxtWrap').textillate({
        in: {
            effect: 'fadeIn',
            delayScale: 2,
            delay: 25,
            shuffle: true}

    });

//js
//imgLinkHover bandaid code

    img01 = document.querySelector('#imgCon01')
    dis1 = document.querySelector('#dis1')
    img02 = document.querySelector('#imgCon02')
    dis2 = document.querySelector('#dis2')
    img03 = document.querySelector('#imgCon03')
    dis3 = document.querySelector('#dis3')
    img04 = document.querySelector('#imgCon04')
    dis4 = document.querySelector('#dis4')
    img05 = document.querySelector('#imgCon05')
    dis5 = document.querySelector('#dis5')
    img06 = document.querySelector('#imgCon06')
    dis6 = document.querySelector('#dis6')
    img07 = document.querySelector('#imgCon07')
    dis7 = document.querySelector('#dis7')
    img08 = document.querySelector('#imgCon08')
    dis8 = document.querySelector('#dis8')
    img09 = document.querySelector('#imgCon09')
    dis9 = document.querySelector('#dis9')
    img10 = document.querySelector('#imgCon10')
    dis10 = document.querySelector('#dis10')
    img11 = document.querySelector('#imgCon11')
    dis11 = document.querySelector('#dis11')

    
    img01.onmouseover = (function(){
        dis1.style.display = 'block';
    })

    img01.onmouseleave = (function(){
        dis1.style.display = 'none';
    })

    img02.onmouseover = (function(){
        dis2.style.display = 'block';
    })

    img02.onmouseleave = (function(){
        dis2.style.display = 'none';
    })
    
    img03.onmouseover = (function(){
        dis3.style.display = 'block';
    })

    img03.onmouseleave = (function(){
        dis3.style.display = 'none';
    })

    img04.onmouseover = (function(){
        dis4.style.display = 'block';
    })

    img04.onmouseleave = (function(){
        dis4.style.display = 'none';
    })

    img05.onmouseover = (function(){
        dis5.style.display = 'block';
    })

    img05.onmouseleave = (function(){
        dis5.style.display = 'none';
    })

    img06.onmouseover = (function(){
        dis6.style.display = 'block';
    })

    img06.onmouseleave = (function(){
        dis6.style.display = 'none';
    })
    
    img07.onmouseover = (function(){
        dis7.style.display = 'block';
    })

    img07.onmouseleave = (function(){
        dis7.style.display = 'none';
    })

    img08.onmouseover = (function(){
        dis8.style.display = 'block';
    })

    img08.onmouseleave = (function(){
        dis8.style.display = 'none';
    })

    img09.onmouseover = (function(){
        dis9.style.display = 'block';
    })

    img09.onmouseleave = (function(){
        dis9.style.display = 'none';
    })

    img10.onmouseover = (function(){
        dis10.style.display = 'block';
    })

    img10.onmouseleave = (function(){
        dis10.style.display = 'none';
    })

    img11.onmouseover = (function(){
        dis11.style.display = 'block';
    })

    img11.onmouseleave = (function(){
        dis11.style.display = 'none';
    })

    

    //lightbox
    

    // img01.onclick = (function(){
    //     lightbox.style.display = "block";
    //     var galImg = window.getComputedStyle(this).getPropertyValue("background-Image");
    //     lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
    //     console.log(galImg);
    // })

    // img02.onclick = (function(){
    //     lightbox.style.display = "block";
    //     var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
    //     lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
    //     console.log(galImg);
    // })

    // img03.onclick = (function(){
    //     lightbox.style.display = "block";
    //     var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
    //     lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
    //     console.log(galImg);
    // })

    // img04.onclick = (function(){
    //     lightbox.style.display = "block";
    //     var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
    //     lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
    //     console.log(galImg);
    // })

    // img05.onclick = (function(){
    //     lightbox.style.display = "block";
    //     var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
    //     lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
    //     console.log(galImg);
    // })

    // img06.onclick = (function(){
    //     lightbox.style.display = "block";
    //     var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
    //     lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
    //     console.log(galImg);
    // })



    // span.onclick = (function(){
    //     lightbox.style.display = "none";

        
    // }); 