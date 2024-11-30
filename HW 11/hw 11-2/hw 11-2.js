fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(console.log);

const divRecipes = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes?limat=50')
    .then(res => res.json())
    .then(({recipes}) => {
        console.log(recipes)
        for (const {id, name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, tags, userId, image, rating, reviewCount, mealType} of recipes) {
            const img = document.createElement('img')
            img.src = image;
            const divBasic = document.createElement('div');
            divBasic.classList.add('recipes-construction');
            const divStart = document.createElement('div');
            divStart.innerText = `
             Id: ${id} 
             Name: ${name}`;
            const ol = document.createElement('ol');
            ol.innerText = `Ingredients:`;
            for (const ingredient of ingredients) {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ol.appendChild(li);
            }
            const divInstructions = document.createElement('div');
            divInstructions.innerText = `Instruction: `;
            for (const sentence of instructions) {
                divInstructions.append(`${sentence}  `);
            }

            const divEnd = document.createElement('div');
            divEnd.innerText = `
             Prep Time Minutes: ${prepTimeMinutes}
             Cook Time Minutes: ${cookTimeMinutes}
             Servings: ${servings}
             Difficulty: ${difficulty}
             Cuisine: ${cuisine} 
             Calories Per Serving: ${caloriesPerServing}
             Tags: ${tags}
             User Id: ${userId}
             Rating: ${rating}
             Review Count: ${reviewCount}
             Meal Type: ${mealType}`

            divBasic.append(img, divStart, ol, divInstructions, divEnd);
            divRecipes.appendChild(divBasic);
        }
    });

// const url = new URL ('https://dummyjson.com/recipes');
// url.searchParams.set('limit', '50');

// const target = document.getElementsByClassName('target')[0];
// fetch(url)
//     .then(value => value.json())
//     .then(recipesObjects => {
//         const {recipes} = recipesObjects;//деструктиризация
//         for (const recipe of recipes) {//итерация масива
//             const recipeDiv = document.createElement('div');
//             for (const recipeKey in recipe) {//итерация обьуктов
//                 if (Array.isArray(recipe[recipeKey])) {//добавляем проверку, если обьект является масивом
//                     const arrayAndTitleDiv = document.createElement('div');
//                     const title = document.createElement('div');
//                     title.innerText = `${recipeKey}`;//наполняем ключами обьектов масива, что бы не прописывать в ручную
//                     const ol = document.createElement('ol');//создаем блок нумерованного списка
//                     const array = recipe[recipeKey];//берем обьект, который есть масивом
//                     for (const item of array) {//итеруем его
//                         const li = document.createElement('li');
//                         li.innerText = item;//создаем список с значениями объектов масива
//                         ol.appendChild(li);
//                     }
//                     arrayAndTitleDiv.append(title, ol);
//                     recipeDiv.appendChild(arrayAndTitleDiv);//добавляем списки в шлавный див
//                 } else {//если обьект не масив выполняем следующее
//                     if (recipeKey !== 'image'){//если ключ обьекта не image, тогда мы с ней работаем. Характеристики имидж в выврдимых обьектах не будет!
//                     const keyDiv = document.createElement('div');
//                     keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`;
//                     recipeDiv.appendChild(keyDiv);}
//
//                 }
//
//
//             }
//             const img = document.createElement('img');
//             img.src = recipe.image;
//             recipeDiv.appendChild(img);
//
//             target.appendChild(recipeDiv);
//         }
//
//
//     })