const cards = document.querySelectorAll('.card');

//Para cada cartao encontrado em cards
for (let card of cards) {
    card.addEventListener('click', function() {
        const positionRecipe = card.getAttribute('id');
        window.location.href = `http://localhost:5000/receita/${positionRecipe}`;
    });
}

//Botoes de Mostrar e Esconder na receitas
const ingredientesVisible = document.querySelector('.ingredientesVisible');

document.querySelector('.ingredientes button').addEventListener('click', function() {
    if (document.querySelector('.ingredientesVisible.notVisible')) {
        ingredientesVisible.classList.remove('notVisible');
        document.querySelector('.ingredientes button').textContent = 'Esconder';
    } else {
        ingredientesVisible.classList.add('notVisible');
        document.querySelector('.ingredientes button').textContent = 'Mostrar';
    }
});

const modePreparationVisible = document.querySelector('.modePreparationVisible');

document.querySelector('.modePreparation button').addEventListener('click', function() {
    if (document.querySelector('.modePreparationVisible.notVisible')) {
        modePreparationVisible.classList.remove('notVisible');
        document.querySelector('.modePreparation button').textContent = 'Esconder';
    } else {
        modePreparationVisible.classList.add('notVisible');
        document.querySelector('.modePreparation button').textContent = 'Mostrar';
    }
});

const extraInformationVisible = document.querySelector('.extraInformationVisible');

document.querySelector('.extraInformation button').addEventListener('click', function() {
    if (document.querySelector('.extraInformationVisible.notVisible')) {
        extraInformationVisible.classList.remove('notVisible');
        document.querySelector('.extraInformation button').textContent = 'Esconder';
    } else {
        extraInformationVisible.classList.add('notVisible');
        document.querySelector('.extraInformation button').textContent = 'Mostrar';
    }
});

/*Formulario dinamico*/
function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
    
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(
      true
    );
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = ""; 
    ingredients.appendChild(newField);
  }

function modePreparation() {
    const ingredients = document.querySelector("#modesPreparation");
    const fieldContainer = document.querySelectorAll(".modePreparationTwo");
    
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(
      true
    );
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = ""; 
    ingredients.appendChild(newField);
  }


