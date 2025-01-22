const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const label3 = document.querySelector('#label3');
const label4 = document.querySelector('#label4');
const label5 = document.querySelector('#label5');
const label6 = document.querySelector('#label6');
const label7 = document.querySelector('#label7');
const label8 = document.querySelector('#label8');
const label9 = document.querySelector('#label9');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition < 2500) {
        
        label1.classList.remove('labelAni');
        label2.classList.remove('labelAni');
        label3.classList.remove('labelAni');
        label4.classList.remove('labelAni');
        label5.classList.remove('labelAni');
        label6.classList.remove('labelAni');
        label7.classList.remove('labelAni');
        label8.classList.remove('labelAni');
        label9.classList.remove('labelAni');

    } else if (scrollPosition >= 2500 && scrollPosition < 3500) {
        
        label1.classList.add('labelAni');
        label2.classList.remove('labelAni');
        label3.classList.remove('labelAni');
        label4.classList.remove('labelAni');
        label5.classList.remove('labelAni');
        label6.classList.remove('labelAni');
        label7.classList.remove('labelAni');
        label8.classList.remove('labelAni');
        label9.classList.remove('labelAni');

    } else if (scrollPosition >= 3500 && scrollPosition < 4500) {
        
        label1.classList.remove('labelAni');
        label2.classList.add('labelAni');
        label3.classList.add('labelAni');
        label4.classList.remove('labelAni');
        label5.classList.remove('labelAni');
        label6.classList.remove('labelAni');
        label7.classList.remove('labelAni');
        label8.classList.remove('labelAni');
        label9.classList.remove('labelAni');

    } else if (scrollPosition >= 4500 && scrollPosition < 5500) {

        label1.classList.remove('labelAni');
        label2.classList.remove('labelAni');
        label3.classList.remove('labelAni');
        label4.classList.add('labelAni');
        label5.classList.remove('labelAni');
        label6.classList.remove('labelAni');
        label7.classList.remove('labelAni');
        label8.classList.remove('labelAni');
        label9.classList.remove('labelAni');

    } else if (scrollPosition >= 5500 && scrollPosition < 6500) {

        label1.classList.remove('labelAni');
        label2.classList.remove('labelAni');
        label3.classList.remove('labelAni');
        label4.classList.remove('labelAni');
        label5.classList.add('labelAni');
        label6.classList.remove('labelAni');
        label7.classList.remove('labelAni');
        label8.classList.remove('labelAni');
        label9.classList.remove('labelAni');

    } else if (scrollPosition >= 6500 && scrollPosition < 7500) {

        label1.classList.remove('labelAni');
        label2.classList.remove('labelAni');
        label3.classList.remove('labelAni');
        label4.classList.remove('labelAni');
        label5.classList.remove('labelAni');
        label6.classList.add('labelAni');
        label7.classList.remove('labelAni');
        label8.classList.remove('labelAni');
        label9.classList.remove('labelAni');

    } else if (scrollPosition >= 7500 && scrollPosition < 9500) {

        label1.classList.remove('labelAni');
        label2.classList.remove('labelAni');
        label3.classList.remove('labelAni');
        label4.classList.remove('labelAni');
        label5.classList.remove('labelAni');
        label6.classList.remove('labelAni');
        label7.classList.add('labelAni');
        label8.classList.remove('labelAni');
        label9.classList.remove('labelAni');

    } else if (scrollPosition >= 9500 && scrollPosition < 10500) {
        
        label1.classList.remove('labelAni');
        label2.classList.remove('labelAni');
        label3.classList.remove('labelAni');
        label4.classList.remove('labelAni');
        label5.classList.remove('labelAni');
        label6.classList.remove('labelAni');
        label7.classList.remove('labelAni');
        label8.classList.add('labelAni');
        label9.classList.remove('labelAni');

    } else if (scrollPosition >= 10500 && scrollPosition < 11500) {
        
        label1.classList.remove('labelAni');
        label2.classList.remove('labelAni');
        label3.classList.remove('labelAni');
        label4.classList.remove('labelAni');
        label5.classList.remove('labelAni');
        label6.classList.remove('labelAni');
        label7.classList.remove('labelAni');
        label8.classList.remove('labelAni');
        label9.classList.add('labelAni');
    
    } else if (scrollPosition >= 11500) {

        label1.classList.remove('labelAni');
        label2.classList.remove('labelAni');
        label3.classList.remove('labelAni');
        label4.classList.remove('labelAni');
        label5.classList.remove('labelAni');
        label6.classList.remove('labelAni');
        label7.classList.remove('labelAni');
        label8.classList.remove('labelAni');
        label9.classList.remove('labelAni');
    }
});



function updateTransform() {
    image.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
}

