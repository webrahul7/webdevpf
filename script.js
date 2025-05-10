document.addEventListener('DOMContentLoaded', () => {
    const resumeBtns = document.querySelectorAll('.resume-btn');
    const resumeDetails = document.querySelectorAll('.resume-detail');

    
    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            
            resumeBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            
          
            btn.classList.add('active');

           
            resumeDetails.forEach((detail) => {
                detail.classList.remove('active');
            });

         
            const activeDetail = resumeDetails[idx];
            if (activeDetail) {
                activeDetail.classList.add('active');
            }
        });
    });

  
    const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
    const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
    
    let index = 0;
    const totalImages = document.querySelectorAll('.portfolio-carousel .image-slide .img-item').length;

    const activePortfolio = () => {
        const imgSlide = document.querySelector('.portfolio-carousel .image-slide');
        const portfolioDetails = document.querySelectorAll('.portfolio-detail');

        imgSlide.style.transform = `translateX(-${index * 100}%)`; 
        
     
        portfolioDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        
        
        if (portfolioDetails[index]) {
            portfolioDetails[index].classList.add('active');
        }
    };

    
    arrowRight.addEventListener('click', () => {
        index = (index + 1) % totalImages; 
        activePortfolio();
    });

    
    arrowLeft.addEventListener('click', () => {
        index = (index - 1 + totalImages) % totalImages; 
        activePortfolio();
    });
});





    // Disable Right Click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert("Right-click is disabled.");
    });

    // Disable Ctrl+U and Ctrl+S
    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey && e.key === 'u') ||        
            (e.ctrlKey && e.key === 's') ||       
            (e.key === 'F12')) {                   
            e.preventDefault();
            alert("Action disabled.");
        }
    });




















