const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// pop up
const btnbasic = document.getElementById('btnbasic');
const overlaybasic = document.getElementById('overlaybasic');
const popupbasic = document.getElementById('popupbasic');
const btnclosebasic = document.getElementById('btnclosebasic');

const btngrow = document.getElementById('btngrow');
const overlaygrow = document.getElementById('overlaygrow');
const popupgrow = document.getElementById('popupgrow');
const btnclosegrow = document.getElementById('btnclosegrow');

const btnmax = document.getElementById('btnmax');
const overlaymax = document.getElementById('overlaymax');
const popupmax = document.getElementById('popupmax');
const btnclosemax = document.getElementById('btnclosemax');

const btnexc = document.getElementById('btnexc');
const overlayexc = document.getElementById('overlayexc');
const popupexc = document.getElementById('popupexc');
const btncloseexc = document.getElementById('btncloseexc');

// boost basic
btnbasic.addEventListener('click', () => {
    popupbasic.classList.toggle('hidden');   // Tampilkan popup
    overlaybasic.classList.toggle('hidden'); // Tampilkan overlay
});

btnclosebasic.addEventListener('click', () => {
    popupbasic.classList.toggle('hidden');   // Sembunyikan popup
    overlaybasic.classList.toggle('hidden'); // Sembunyikan overlay
});

overlaybasic.addEventListener('click', () => {
    popupbasic.classList.add('hidden');      // Sembunyikan popup
    overlaybasic.classList.add('hidden');    // Sembunyikan overlay
});

// grow vibe
btngrow.addEventListener('click', () => {
    popupgrow.classList.toggle('hidden');   // Tampilkan popup
    overlaygrow.classList.toggle('hidden'); // Tampilkan overlay
});

btnclosegrow.addEventListener('click', () => {
    popupgrow.classList.toggle('hidden');   // Sembunyikan popup
    overlaygrow.classList.toggle('hidden'); // Sembunyikan overlay
});

overlaygrow.addEventListener('click', () => {
    popupgrow.classList.add('hidden');      // Sembunyikan popup
    overlaygrow.classList.add('hidden');    // Sembunyikan overlay
});

// max impact
btnmax.addEventListener('click', () => {
    popupmax.classList.toggle('hidden');   // Tampilkan popup
    overlaymax.classList.toggle('hidden'); // Tampilkan overlay
});

btnclosemax.addEventListener('click', () => {
    popupmax.classList.toggle('hidden');   // Sembunyikan popup
    overlaymax.classList.toggle('hidden'); // Sembunyikan overlay
});

overlaymax.addEventListener('click', () => {
    popupmax.classList.add('hidden');      // Sembunyikan popup
    overlaymax.classList.add('hidden');    // Sembunyikan overlay
});

// exclusive
btnexc.addEventListener('click', () => {
    popupexc.classList.toggle('hidden');   // Tampilkan popup
    overlayexc.classList.toggle('hidden'); // Tampilkan overlay
});

btncloseexc.addEventListener('click', () => {
    popupexc.classList.toggle('hidden');   // Sembunyikan popup
    overlayexc.classList.toggle('hidden'); // Sembunyikan overlay
});

overlayexc.addEventListener('click', () => {
    popupexc.classList.add('hidden');      // Sembunyikan popup
    overlayexc.classList.add('hidden');    // Sembunyikan overlay
});