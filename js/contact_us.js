"use strict";

const nameErrorSpan = document.getElementById('nameError');
const emailErrorSpan = document.getElementById('emailError');
const emailTypeErrorErrorSpan = document.getElementById('emailTypeError');
const messageErrorSpan = document.getElementById('messageError');
const activityErrorSpan = document.getElementById('activityError'); 
const overlay = document.querySelector('.overlay');
const successModal = document.querySelector('.success_modal');
const errorModal = document.querySelector('.error_modal');
// const modal_continue_button = document.getElementsByClassName('modal_continue_button');
const contactForm = document.getElementById('contactForm');


contactForm.addEventListener('submit', (event)=> { 
    event.preventDefault();
    let isValid = true;


    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const emailTypeError = document.getElementById('emailTypeError');
    const message = document.getElementById('message');
    const activity = document.getElementById('activity');

    // Hide all error messages
    document.querySelectorAll('.error_message').forEach(element => {
        element.classList.remove('shown');
        element.classList.add('hidden');
    });

    if (name.value.trim() === '') {
        nameErrorSpan.classList.remove( "hidden" );
        nameErrorSpan.classList.add( "shown" );
        isValid = false;
    }

    if (email.value.trim() === '') {
        emailErrorSpan.classList.remove( "hidden" );
        emailErrorSpan.classList.add( "shown" );
        isValid = false;
    }

    if (!email.value.includes('@')) {
        emailTypeErrorErrorSpan.classList.remove( "hidden" );
        emailTypeErrorErrorSpan.classList.add( "shown" );
        isValid = false;
    }

    if (message.value.trim() === '') {
        messageErrorSpan.classList.add( "shown" );
        messageErrorSpan.classList.remove( "hidden" );
        isValid = false;
    }

    if (activity.value.trim() === '') {
        activityErrorSpan.classList.remove( "hidden" );
        activityErrorSpan.classList.add( "shown" );
        isValid = false;
    }

    if (isValid) {
        overlay.classList.remove('hidden');
        overlay.classList.add('shown');
        errorModal.classList.remove('shown');
        errorModal.classList.add('hidden');
        successModal.classList.add('shown');
        successModal.classList.remove('hidden');
    }
});


const modal_continue_button = document.querySelectorAll('.modal_continue_button');


modal_continue_button.forEach(element => {
    element.addEventListener('click', () => {
        hideOverlayAndmodal();
        contactForm.reset();
    })
});


function hideOverlayAndmodal() {
    overlay.classList.add('hidden');
    overlay.classList.remove('shown');
    errorModal.classList.add('hidden');
    errorModal.classList.remove('shown');
    successModal.classList.add('hidden');
    successModal.classList.remove('shown');
}