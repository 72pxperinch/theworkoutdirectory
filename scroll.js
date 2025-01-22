const image = document.querySelector('.image-container div');
const container = document.querySelector('.image-container');
const logo = document.querySelector('#logo');
const lname = document.querySelector('#lname');
const ltag = document.querySelector('#ltag');
const highlight = document.querySelector('#highlighted');
const high1 = document.querySelector('#high1');
const high2 = document.querySelector('#high2');
const high3 = document.querySelector('#high3');
const high4 = document.querySelector('#high4');
const high5 = document.querySelector('#high5');
const high6 = document.querySelector('#high6');
const high7 = document.querySelector('#high7');
const high8 = document.querySelector('#high8');
const poster = document.querySelector('#poster');
const posterImgs = document.querySelectorAll('#poster img');
const info = document.querySelectorAll('#info img');
const grid = document.querySelectorAll('#grid img');
const exer = document.querySelectorAll('#exer img');
const all = document.querySelector('#all');
const pp = document.querySelectorAll('#pp img');
const desc = document.querySelector('#desc');


window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition < 500) {
        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        logo.classList.remove('logoAni3');
        container.classList.remove('image-containerAni');
        desc.classList.remove('descAni');
        high1.classList.remove('high1Ani');
        high2.classList.remove('high2Ani');
        high3.classList.remove('high3Ani');
        high4.classList.remove('high4Ani');
        high5.classList.remove('high5Ani');
        high6.classList.remove('high6Ani');
        high7.classList.remove('high7Ani');
        high8.classList.remove('high8Ani');
        high2.classList.remove('high2Ani2');
        high4.classList.remove('high4Ani2');
        high5.classList.remove('high5Ani2');
        high6.classList.remove('high6Ani2');
        high7.classList.remove('high7Ani2');
        highlight.classList.remove('highlightAni1');
        highlight.classList.remove('highlightAni2');
        highlight.classList.remove('highlightAni3');
        highlight.classList.remove('highlightAni4');
        highlight.classList.remove('highlightAni5');
        poster.classList.remove('posterAni');
        all.classList.remove('allAni');
        all.classList.remove('allAni2');
        all.classList.remove('allAni3');
        all.classList.remove('allAni4');
        all.style.transform = `rotateX(0) rotateZ(0deg) rotateZ(0deg) scale(1)`;


    } else if (scrollPosition >= 500 && scrollPosition < 1500) {
        logo.classList.remove('logoAni3');
        container.classList.remove('image-containerAni');
        desc.classList.remove('descAni');
        high1.classList.remove('high1Ani');
        high2.classList.remove('high2Ani');
        high3.classList.remove('high3Ani');
        high4.classList.remove('high4Ani');
        high5.classList.remove('high5Ani');
        high6.classList.remove('high6Ani');
        high7.classList.remove('high7Ani');
        high8.classList.remove('high8Ani');
        high2.classList.remove('high2Ani2');
        high4.classList.remove('high4Ani2');
        high5.classList.remove('high5Ani2');
        high6.classList.remove('high6Ani2');
        high7.classList.remove('high7Ani2');
        highlight.classList.remove('highlightAni1');
        highlight.classList.remove('highlightAni2');
        highlight.classList.remove('highlightAni3');
        highlight.classList.remove('highlightAni4');
        highlight.classList.remove('highlightAni5');
        poster.classList.remove('posterAni');
        all.classList.remove('allAni');
        all.classList.remove('allAni2');
        all.classList.remove('allAni3');
        all.classList.remove('allAni4');
        all.style.transform = `rotateX(0) rotateZ(0deg) rotateZ(0deg) scale(1)`;


        logo.classList.add('logoAni2');
        lname.classList.add('nameAni');
        ltag.classList.add('tagAni');


    } else if (scrollPosition >= 1500 && scrollPosition < 2500) {
        container.classList.remove('image-containerAni');
        high1.classList.remove('high1Ani');
        high2.classList.remove('high2Ani');
        high3.classList.remove('high3Ani');
        high4.classList.remove('high4Ani');
        high5.classList.remove('high5Ani');
        high6.classList.remove('high6Ani');
        high7.classList.remove('high7Ani');
        high8.classList.remove('high8Ani');
        high2.classList.remove('high2Ani2');
        high4.classList.remove('high4Ani2');
        high5.classList.remove('high5Ani2');
        high6.classList.remove('high6Ani2');
        high7.classList.remove('high7Ani2');
        highlight.classList.remove('highlightAni1');
        highlight.classList.remove('highlightAni2');
        highlight.classList.remove('highlightAni3');
        highlight.classList.remove('highlightAni4');
        highlight.classList.remove('highlightAni5');
        poster.classList.remove('posterAni');
        all.classList.remove('allAni');
        all.classList.remove('allAni2');
        all.classList.remove('allAni3');
        all.classList.remove('allAni4');
        all.style.transform = `rotateX(0) rotateZ(0deg) rotateZ(0deg) scale(1)`;

        logo.classList.add('logoAni3');
        desc.classList.add('descAni');


        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');

    } else if (scrollPosition >= 2500 && scrollPosition < 3500) {
        high1.classList.remove('high1Ani');
        high2.classList.remove('high2Ani');
        high3.classList.remove('high3Ani');
        high4.classList.remove('high4Ani');
        high5.classList.remove('high5Ani');
        high6.classList.remove('high6Ani');
        high7.classList.remove('high7Ani');
        high8.classList.remove('high8Ani');
        high2.classList.remove('high2Ani2');
        high4.classList.remove('high4Ani2');
        high5.classList.remove('high5Ani2');
        high6.classList.remove('high6Ani2');
        high7.classList.remove('high7Ani2');
        highlight.classList.remove('highlightAni1');
        highlight.classList.remove('highlightAni2');
        highlight.classList.remove('highlightAni3');
        highlight.classList.remove('highlightAni4');
        highlight.classList.remove('highlightAni5');
        poster.classList.remove('posterAni');
        all.classList.remove('allAni');
        all.classList.remove('allAni2');
        all.classList.remove('allAni3');
        all.classList.remove('allAni4');
        all.style.transform = `rotateX(0) rotateZ(0deg) rotateZ(0deg) scale(1)`;


        container.classList.add('image-containerAni');


        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');
        logo.classList.add('logoAni3');


    } else if (scrollPosition >= 3500 && scrollPosition < 4500) {
        high4.classList.remove('high4Ani');
        high5.classList.remove('high5Ani');
        high6.classList.remove('high6Ani');
        high7.classList.remove('high7Ani');
        high8.classList.remove('high8Ani');
        high2.classList.remove('high2Ani2');
        high4.classList.remove('high4Ani2');
        high5.classList.remove('high5Ani2');
        high6.classList.remove('high6Ani2');
        high7.classList.remove('high7Ani2');
        highlight.classList.remove('highlightAni1');
        highlight.classList.remove('highlightAni2');
        highlight.classList.remove('highlightAni3');
        highlight.classList.remove('highlightAni4');
        highlight.classList.remove('highlightAni5');
        poster.classList.remove('posterAni');
        all.classList.remove('allAni');
        all.classList.remove('allAni2');
        all.classList.remove('allAni3');
        all.classList.remove('allAni4');
        all.style.transform = `rotateX(0) rotateZ(0deg) rotateZ(0deg) scale(1)`;


        high1.classList.add('high1Ani');
        high3.classList.add('high3Ani');
        high2.classList.add('high2Ani');
        highlight.classList.add('highlightAni1');


        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');
        logo.classList.add('logoAni3');
        container.classList.add('image-containerAni');


    } else if (scrollPosition >= 4500 && scrollPosition < 5500) {

        high7.classList.remove('high7Ani');
        high8.classList.remove('high8Ani');
        high4.classList.remove('high4Ani2');
        high5.classList.remove('high5Ani2');
        high6.classList.remove('high6Ani2');
        high7.classList.remove('high7Ani2');
        highlight.classList.remove('highlightAni3');
        highlight.classList.remove('highlightAni4');
        highlight.classList.remove('highlightAni5');
        poster.classList.remove('posterAni');
        all.classList.remove('allAni');
        all.classList.remove('allAni2');
        all.classList.remove('allAni3');
        all.classList.remove('allAni4');
        all.style.transform = `rotateX(0) rotateZ(0deg) rotateZ(0deg) scale(1)`;


        high4.classList.add('high4Ani');
        high5.classList.add('high5Ani');
        high6.classList.add('high6Ani');
        high2.classList.add('high2Ani2');
        highlight.classList.add('highlightAni2');


        high2.classList.remove('high2Ani');
        highlight.classList.remove('highlightAni1');
        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');
        high3.classList.add('high3Ani');
        logo.classList.add('logoAni3');
        high1.classList.add('high1Ani');
        container.classList.add('image-containerAni');


    } else if (scrollPosition >= 5500 && scrollPosition < 6500) {

        high8.classList.remove('high8Ani');
        high7.classList.remove('high7Ani2');
        highlight.classList.remove('highlightAni4');
        highlight.classList.remove('highlightAni5');
        poster.classList.remove('posterAni');
        all.classList.remove('allAni');
        all.classList.remove('allAni2');
        all.classList.remove('allAni3');
        all.classList.remove('allAni4');
        all.style.transform = `rotateX(0) rotateZ(0deg) rotateZ(0deg) scale(1)`;


        high4.classList.add('high4Ani2');
        high5.classList.add('high5Ani2');
        high6.classList.add('high6Ani2');
        high7.classList.add('high7Ani');
        highlight.classList.add('highlightAni3');


        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');
        highlight.classList.remove('highlightAni2');
        high4.classList.remove('high4Ani');
        high5.classList.remove('high5Ani');
        high6.classList.remove('high6Ani');
        high2.classList.add('high2Ani2');
        high3.classList.add('high3Ani');
        high1.classList.add('high1Ani');
        logo.classList.add('logoAni3');
        container.classList.add('image-containerAni');
        high8.classList.remove('high8Ani');


    } else if (scrollPosition >= 6500 && scrollPosition < 7500) {

        highlight.classList.remove('highlightAni5');
        poster.classList.remove('posterAni');
        all.classList.remove('allAni');
        all.classList.remove('allAni2');
        all.classList.remove('allAni3');
        all.classList.remove('allAni4');

        all.style.transform = `rotateX(0) rotateZ(0deg) rotateZ(0deg) scale(1)`;

        highlight.classList.remove('highlightAni3');
        high7.classList.remove('high7Ani1');
        high7.classList.add('high7Ani2');
        high8.classList.add('high8Ani');
        highlight.classList.add('highlightAni4');


        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');
        high4.classList.add('high4Ani2');
        high5.classList.add('high5Ani2');
        high6.classList.add('high6Ani2');
        high2.classList.add('high2Ani2');
        high3.classList.add('high3Ani');
        high1.classList.add('high1Ani');
        logo.classList.add('logoAni3');
        container.classList.add('image-containerAni');



        const startIndex = 25;
        const delayIncrement = 20;
        const maxSteps = Math.max(startIndex, exer.length - startIndex - 1);

        for (let i = 0; i <= maxSteps; i++) {
            if (startIndex + i < exer.length) {
                setTimeout(() => {
                    exer[startIndex + i].style.opacity = 0;
                    exer[startIndex + i].style.transform = 'translateZ(500px)';
                }, delayIncrement * i);
            }

            if (startIndex - i >= 0) {
                setTimeout(() => {
                    exer[startIndex - i].style.opacity = 0;
                    exer[startIndex - i].style.transform = 'translateZ(500px)';
                }, delayIncrement * i);
            }
        }

        const delayIncrementInfo = 200;

        info.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 0;
            }, delayIncrementInfo * index);
        });


    } else if (scrollPosition >= 7500 && scrollPosition < 8500) {

        all.classList.remove('allAni2');
        all.classList.remove('allAni3');
        all.classList.remove('allAni4');


        highlight.classList.remove('highlightAni4');
        highlight.classList.add('highlightAni5');
        poster.classList.add('posterAni');
        all.classList.add('allAni');


        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');
        high7.classList.add('high7Ani2');
        high8.classList.add('high8Ani');
        high4.classList.add('high4Ani2');
        high5.classList.add('high5Ani2');
        high6.classList.add('high6Ani2');
        high2.classList.add('high2Ani2');
        high3.classList.add('high3Ani');
        high1.classList.add('high1Ani');
        logo.classList.add('logoAni3');
        container.classList.add('image-containerAni');


        const startIndex = 25;
        const delayIncrement = 72;
        const maxSteps = Math.max(startIndex, exer.length - startIndex - 1);

        for (let i = 0; i <= maxSteps; i++) {
            if (startIndex + i < exer.length) {
                setTimeout(() => {
                    exer[startIndex + i].style.opacity = 1;
                    exer[startIndex + i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }

            if (startIndex - i >= 0) {
                setTimeout(() => {
                    exer[startIndex - i].style.opacity = 1;
                    exer[startIndex - i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }
        }

        const delayIncrementInfo = 200;

        info.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'translateZ(200px)';
            }, delayIncrementInfo * index);
        });

        const delayIncrementGrid = 15;
        const startIndexGrid = 25;

        for (let i = 0; i <= maxSteps; i++) {
            if (startIndexGrid + i < grid.length) {
                setTimeout(() => {
                    grid[startIndexGrid + i].style.transform = 'translateZ(200px)';
                }, delayIncrementGrid * i);
            }

            if (startIndexGrid - i >= 0) {
                setTimeout(() => {
                    grid[startIndexGrid - i].style.transform = 'translateZ(200px)';
                }, delayIncrementGrid * i);
            }
        }


    } else if (scrollPosition >= 8500 && scrollPosition < 9500) {

        all.classList.remove('allAni3');
        all.classList.remove('allAni4');

        all.classList.remove('allAni');
        all.classList.add('allAni2');

        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');
        poster.classList.add('posterAni');
        highlight.classList.add('highlightAni5');
        high7.classList.add('high7Ani2');
        high8.classList.add('high8Ani');
        high4.classList.add('high4Ani2');
        high5.classList.add('high5Ani2');
        high6.classList.add('high6Ani2');
        high2.classList.add('high2Ani2');
        high3.classList.add('high3Ani');
        high1.classList.add('high1Ani');
        logo.classList.add('logoAni3');
        container.classList.add('image-containerAni');


        const startIndex = 25;
        const delayIncrement = 72;
        const maxSteps = Math.max(startIndex, exer.length - startIndex - 1);

        for (let i = 0; i <= maxSteps; i++) {
            if (startIndex + i < exer.length) {
                setTimeout(() => {
                    exer[startIndex + i].style.opacity = 1;
                    exer[startIndex + i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }

            if (startIndex - i >= 0) {
                setTimeout(() => {
                    exer[startIndex - i].style.opacity = 1;
                    exer[startIndex - i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }
        }

        const delayIncrementInfo = 200;

        info.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'translateZ(0px)';

            }, delayIncrementInfo * index);
        });


        grid.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 0;

            }, 10);
        });


    } else if (scrollPosition >= 9500 && scrollPosition < 10500) {

        all.classList.remove('allAni4');

        all.classList.remove('allAni2');
        all.classList.add('allAni3');

        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');
        poster.classList.add('posterAni');
        highlight.classList.add('highlightAni5');
        high7.classList.add('high7Ani2');
        high8.classList.add('high8Ani');
        high4.classList.add('high4Ani2');
        high5.classList.add('high5Ani2');
        high6.classList.add('high6Ani2');
        high2.classList.add('high2Ani2');
        high3.classList.add('high3Ani');
        high1.classList.add('high1Ani');
        logo.classList.add('logoAni3');
        container.classList.add('image-containerAni');


        const startIndex = 25;
        const delayIncrement = 72;
        const maxSteps = Math.max(startIndex, exer.length - startIndex - 1);

        for (let i = 0; i <= maxSteps; i++) {
            if (startIndex + i < exer.length) {
                setTimeout(() => {
                    exer[startIndex + i].style.opacity = 1;
                    exer[startIndex + i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }

            if (startIndex - i >= 0) {
                setTimeout(() => {
                    exer[startIndex - i].style.opacity = 1;
                    exer[startIndex - i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }
        }



        const delayIncrementInfo = 200;

        info.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'translateZ(0px)';

            }, delayIncrementInfo * index);
        });



        grid.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'translateZ(200px)';

            }, 10);
        });


        const delayIncrementPp = 200;

        pp.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 0;
            }, delayIncrementPp);
        });

    } else if (scrollPosition >= 10500 && scrollPosition < 11500) {
        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');


        all.classList.remove('allAni3');
        all.classList.add('allAni4');

        poster.classList.add('posterAni');
        highlight.classList.add('highlightAni5');
        high7.classList.add('high7Ani2');
        high8.classList.add('high8Ani');
        high4.classList.add('high4Ani2');
        high5.classList.add('high5Ani2');
        high6.classList.add('high6Ani2');
        high2.classList.add('high2Ani2');
        high3.classList.add('high3Ani');
        high1.classList.add('high1Ani');
        logo.classList.add('logoAni3');
        container.classList.add('image-containerAni');


        const startIndex = 25;
        const delayIncrement = 72;
        const maxSteps = Math.max(startIndex, exer.length - startIndex - 1);

        for (let i = 0; i <= maxSteps; i++) {
            if (startIndex + i < exer.length) {
                setTimeout(() => {
                    exer[startIndex + i].style.opacity = 1;
                    exer[startIndex + i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }

            if (startIndex - i >= 0) {
                setTimeout(() => {
                    exer[startIndex - i].style.opacity = 1;
                    exer[startIndex - i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }
        }

        const delayIncrementInfo = 200;

        info.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'translateZ(0px)';

            }, delayIncrementInfo * index);
        });

        grid.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'translateZ(0px)';

            }, 10);
        });

        const delayIncrementPp = 200;

        pp.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'translateZ(200px)';

            }, delayIncrementPp);
        });


    } else if (scrollPosition >= 11500) {
        logo.classList.remove('logoAni2');
        lname.classList.remove('nameAni');
        ltag.classList.remove('tagAni');
        desc.classList.remove('descAni');

        all.classList.remove('allAni4');

        if (window.innerHeight <= window.innerWidth) {
            const scalingFactor = window.innerHeight * 3 / 1645;
            all.style.transform = `rotateX(0) rotateZ(0deg) scale(${scalingFactor})`;
            all.style.right = 0;
            all.style.top = 0;
        } else {
            const scalingFactor = window.innerWidth * 2.3 / 1645;
            all.style.transform = `rotateX(0) rotateZ(0deg) scale(${scalingFactor})`;
        }
        

        // const scalingFactor = window.innerHeight * 3 / 1645;
        // all.style.transform = `rotateX(0) rotateZ(0deg) rotateZ(0deg) scale(${scalingFactor})`;
        // all.style.right = 0;
        // all.style.top = 0;

        poster.classList.add('posterAni');
        highlight.classList.add('highlightAni5');
        high7.classList.add('high7Ani2');
        high8.classList.add('high8Ani');
        high4.classList.add('high4Ani2');
        high5.classList.add('high5Ani2');
        high6.classList.add('high6Ani2');
        high2.classList.add('high2Ani2');
        high3.classList.add('high3Ani');
        high1.classList.add('high1Ani');
        logo.classList.add('logoAni3');
        container.classList.add('image-containerAni');


        const startIndex = 25;
        const delayIncrement = 72;
        const maxSteps = Math.max(startIndex, exer.length - startIndex - 1);

        for (let i = 0; i <= maxSteps; i++) {
            if (startIndex + i < exer.length) {
                setTimeout(() => {
                    exer[startIndex + i].style.opacity = 1;
                    exer[startIndex + i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }

            if (startIndex - i >= 0) {
                setTimeout(() => {
                    exer[startIndex - i].style.opacity = 1;
                    exer[startIndex - i].style.transform = 'translateZ(0px)';
                }, delayIncrement * i);
            }
        }

        const delayIncrementInfo = 200;

        info.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'translateZ(0px)';

            }, delayIncrementInfo * index);
        });


        const delayIncrementGrid = 55;
        const startIndexGrid = 25;

        for (let i = 0; i <= maxSteps; i++) {
            if (startIndexGrid + i < grid.length) {
                setTimeout(() => {
                    grid[startIndexGrid + i].style.opacity = 1;
                    grid[startIndex + i].style.transform = 'translateZ(0px)';
                }, delayIncrementGrid * i);
            }

            if (startIndexGrid - i >= 0) {
                setTimeout(() => {
                    grid[startIndexGrid - i].style.opacity = 1;
                    grid[startIndex - i].style.transform = 'translateZ(0px)';
                }, delayIncrementGrid * i);
            }
        }
        const delayIncrementPp = 200;

        pp.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'translateZ(0px)';

            }, delayIncrementPp);
        });


    }
});



function updateTransform() {
    image.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
}

