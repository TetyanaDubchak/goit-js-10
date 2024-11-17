import { fetchBreeds,fetchCatByBreed } from "./js/cat-api";
import { renderBreeds, renderCat } from "./js/markup";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorSign = document.querySelector('.error');
const catInfoWrapper = document.querySelector('.cat-info');

let selectedValue = null;

function addBreeds() {
    fetchBreeds().then((data) => {
        renderBreeds(data, breedSelect)
    }).catch((error)=>{
        console.log(error);
    });
   
}

function addCat() {
    fetchCatByBreed(selectedValue).then((data) => {
        renderCat(data, catInfoWrapper)
    }).catch((error)=>{
        console.log(error);
    });
   
}

addBreeds();

const onChangeHandler = (evt) => {
    selectedValue = evt.target.value;;
    addCat();
}

breedSelect.addEventListener('change', onChangeHandler)
