const submitBtn = document.getElementById('submit-button');
const thanksMessage = document.getElementById('thanks');
const mainCard = document.getElementById('main-card');
const ratingForm = document.getElementById('rating-form');
const ratings = document.getElementsByClassName('rating-button');
const feedback = document.getElementById('feedback');


function storeValue() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].addEventListener('click', () => {
            let firedButton = Number(ratings[i].value);
            feedback.innerText = `You selected ${firedButton} out of 5`;
        }) 
    } 
}

storeValue();

function showThanks() {
    mainCard.style.display = 'none';
    thanksMessage.style.display = 'flex';
}

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showThanks();
})



// function f(val) {
//     if (!val) {
//         alert('there is no value');
//     } else {
//         feedback.innerHTML = `You selected ${val} out of 5`
//     }

// }

