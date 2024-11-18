import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
import { renderBreeds, renderCat } from "./js/markup";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfoWrapper = document.querySelector('.cat-info');


let selectedValue = null;
let slimSelectInstance = null;

breedSelect.hidden = true;
loader.hidden = false;

Notify.init({
    timeout: "20000",      
    position: 'center-center',
});
  
function addBreeds() {

    fetchBreeds().then((data) => {
        if (!data || data.length === 0) {
            throw new Error;
        }
        breedSelect.hidden = false;

        renderBreeds(data, breedSelect);
        if (slimSelectInstance) {
            slimSelectInstance.destroy();
        }
        slimSelectInstance = new SlimSelect({
            select: breedSelect
        })
    }).catch((error)=>{
        
            Notify.failure("Oops! Something went wrong! Try reloading the page!"); 

    }).finally(() => {
            loader.hidden = true;
        });

}

function addCat() {
    loader.hidden = false;
    catInfoWrapper.innerHTML =''
    fetchCatByBreed(selectedValue).then((data) => {
            if (!data || data.length === 0) {
                throw new Error;
            }
        renderCat(data, catInfoWrapper)
    }).catch((error)=>{

        Notify.failure("Oops! Something went wrong! Try reloading the page!")

    }).finally(() => {
        loader.hidden = true;
    });
}

addBreeds();

const onChangeHandler = (evt) => {
    evt.preventDefault();
    selectedValue = evt.target.value;;
    addCat();
}

breedSelect.addEventListener('change', onChangeHandler)
