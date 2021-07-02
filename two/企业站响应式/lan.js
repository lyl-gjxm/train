
 /* function imgonload() {
    let img = document.querySelectorAll("img");
  
    for(let i=0; i<img.length; i++) {
      if(img[i].getBoundingClientRect().top < window.innerHeight) {
        
        img[i].src = img[i].dataset.src;
      }
    }
  }

  function scollImg(fn) {
    let timer = null;
    let context = this;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context);
      }, 500)
    }
  }
  window.onload = imgonload;
  window.onscroll = scollImg(imgonload); */

  const con = document.querySelector('.scroll-con')
            const imgs = document.querySelectorAll('.scroll-con-img')
            function lazyLoad(target) {
                const io = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target
                            const src = img.getAttribute('data-src')
                            img.setAttribute('src', src)
                            img.classList.add('fade')
                            observer.disconnect()
                        }
                    })
                }, {
                    root: con,
                    threshold: 1,
                    rootMargin: '0px'
                })
                io.observe(target)
            }
            imgs.forEach(lazyLoad)