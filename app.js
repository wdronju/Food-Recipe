let searchFeild = document.getElementById("searchFeild");

function FetchMeal() {
  if (searchFeild.value) {
    console.log(searchFeild.value);
    let Url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchFeild.value}`;
    fetch(Url)
      .then((res) => res.json())
      .then((meal) => ShowMeal(meal.meals));
    document.getElementById("nomeal").style.display = "none";
  } else {
    alert("Search  For a Food First !");
  }
}

function ShowMeal(meals) {
  meals.forEach((meal) => {
    let Allbox = document.getElementById("Allbox");
    Allbox.innerHTML += `
        
        <div class="box">
        <img id='thumbnail' src="${meal.strMealThumb}" alt="${meal.strMeal}">
       <div class="boxContent">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions.slice(0, 80)}...</p>
        <span class="author"><b>@</b>${meal.strCategory}</span>
        <div class="boxfooter">
            <a class="watch" href='${meal.strYoutube}' target='blank'>Watch</a>
            <button onclick="PopUpDetails(${
              meal.idMeal
            })" class="view" id="view">View Recipe</button>
        </div>
       </div>
    </div>
        
        `;
  });
}

function PopUpDetails(id) {
  let Url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}
  `;
  fetch(Url)
    .then((res) => res.json())
    .then((meal) => showPopuData(meal.meals[0]));

  console.log(id);

  
    
}


function showPopuData(mealData) {
    console.log(mealData);
   const detailsPopup = document.querySelector(".MainBoxoverlay");
   detailsPopup.style.display='block';

   detailsPopup.innerHTML =`
   
   <div class="parentOfPopup">
   <div class="popup">
       <img src="${mealData.strMealThumb}" alt="">
       <h2>${mealData.strMeal}</h2>
       <h4>@${mealData.strCategory}</h4>
       <table class="tableforPopup">
          
           <tbody>
               <tr>
                   
                   <td>
                   <b>Ingredients:</b><br>
                   ${mealData.strIngredient1} : ${mealData.strMeasure1}<br> 
                   ${mealData.strIngredient2}: ${mealData.strMeasure2}<br> 
                   ${mealData.strIngredient3} : ${mealData.strMeasure3}<br> 
                   ${mealData.strIngredient4} : ${mealData.strMeasure4}<br> 
                   ${mealData.strIngredient5} : ${mealData.strMeasure5}<br> 
                   ${mealData.strIngredient6} : ${mealData.strMeasure6}<br> 
                   ${mealData.strIngredient7}:  ${mealData.strMeasure7}<br> 
                   ${mealData.strIngredient8} : ${mealData.strMeasure8}<br> 
                   ${mealData.strIngredient9} : ${mealData.strMeasure9}<br> 
                   ${mealData.strIngredient10} : ${mealData.strMeasure10}<br> 
                   ${mealData.strIngredient11} : ${mealData.strMeasure11}<br> 
                   ${mealData.strIngredient12} : ${mealData.strMeasure12}<br> 
                   </td>
               </tr>
           </tbody>
       </table>
       <p>${mealData.strInstructions}</p>
       <div class="buttondiv">
           <a href="${mealData.strYoutube}" target="_blank" class="watchVideo">Watch Video</a>
           <button id="closePopup">Close</button>
       </div>
   </div>
</div>
   
   `;


//popup close

   let closePopup = document.getElementById("closePopup");
   closePopup.addEventListener("click", function(){
       detailsPopup.style.display='none';
   });
}


   







let search = document.getElementById("search");
search.addEventListener("click", () => {
  FetchMeal();
});
