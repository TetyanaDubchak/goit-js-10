
function renderBreeds(info, elem) {
  const markup = info
    .map(({id,name}) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join("");
  elem.insertAdjacentHTML("beforeend", markup);
};

function renderCat(info, elem) {
    const markup = info.map(({ breeds: [{ name, temperament, description }], url }) => {
        return `<img class="cat-img" src="${url}" alt="${name}" />
      <div class="cat-info-box">
        <h2 class="cat-name">${name}</h2>
        <p class="cat-subscription">${description}</p>
        <p class="cat-temperament">
          <span>Temperament: </span> ${temperament}
        </p>
      </div>`}).join('');
    
    elem.innerHTML = markup;
};

export {renderBreeds, renderCat}