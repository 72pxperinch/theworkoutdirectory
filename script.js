document.addEventListener('DOMContentLoaded', function () {
    logo.classList.add('logoAni1');
    posterImgs.forEach(function (img, index) {
        if (index > 0) {
            img.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
            img.style.transform = 'translateZ(200px)';
            img.style.opacity = 0;
        }
    });
});

let rotX = 0;
let rotY = 0;

document.addEventListener('mousemove', (e) => {
    let scrollPosition = window.scrollY;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    if (scrollPosition > 2500 && scrollPosition < 5500) {
        rotX = -(y / rect.height) * 5;
        rotY = (x / rect.width) * 5;
    } else if (scrollPosition >= 5500 && scrollPosition < 6500) {
        rotX = -(y / rect.height) * 3;
        rotY = (x / rect.width) * 3;
    } else if (scrollPosition >= 6500 && scrollPosition < 9500) {
        rotX = -(y / rect.height) * 5;
        rotY = (x / rect.width) * 5;
    } 
    // else if (scrollPosition > 11500) {
    //     rotX = 0;
    //     rotY = 0;
    // } 
    else {
        rotX = -(y / rect.height) * 15;
        rotY = (x / rect.width) * 15;
    }

    updateTransform();
});

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        let scrollPosition = window.scrollY;
        const alpha = event.alpha;
        const beta = event.beta;
        const gamma = event.gamma;
        
        if (scrollPosition > 2500 && scrollPosition < 5500) {
            rotX = (beta / 90) * 5;
            rotY = -(gamma / 90) * 5;
        } else if (scrollPosition >= 6500 && scrollPosition < 9500) {
            rotX = (beta / 90) * 5;
            rotY = -(gamma / 90) * 5;
        } 
        // else if (scrollPosition > 11500) {
        //     rotX = 0;
        //     rotY = 0;
        // } 
        else {
            rotX = (beta / 90) * 15;
            rotY = -(gamma / 90) * 15;
        }

        updateTransform();
    });
} else {
    console.log("Device orientation not supported");
}



window.addEventListener('click', handleTapOrDoubleTap);
window.addEventListener('dblclick', handleTapOrDoubleTap);

function handleTapOrDoubleTap(event) {
    let scrollPosition = window.scrollY;
    const scrollPositions = [ 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000];
    if (scrollPosition < 11500) {
        if (event.type === 'dblclick') {
            let previousPositions = scrollPositions.filter(pos => pos < scrollPosition);

            if (previousPositions.length > 1) {
                let twoStepsBackPosition = previousPositions[previousPositions.length - 2];
                window.scrollTo({
                    top: twoStepsBackPosition,
                    behavior: 'smooth'
                });
            } else if (previousPositions.length === 1) {
                window.scrollTo({
                    top: previousPositions[0],
                    behavior: 'smooth'
                });
            }
        } else {
            let nextPosition = scrollPositions.find(pos => pos > scrollPosition);

            if (nextPosition !== undefined) {
                window.scrollTo({
                    top: nextPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
}