// get all data 

const getAllData = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()
    displayAllFood(data.categories);
}


const displayAllFood = (foods) => {
    foods.forEach((food) => {
        console.log(food);
        const foodContainer = document.getElementById('food-conteiner')
        const div = document.createElement('div')
        div.innerHTML = `
                    <div class=" flex items-center  md:grid grid-cols-2 shadow-lg py-3 border rounded-lg">
                        <div class= bg-cover">
                            <img src=${food.strCategoryThumb} alt="">
                        </div>
                        <div class="  space-y-3">
                            <h1 class="text-3xl font-bold">${food.strCategory}</h1>
                            <p class="text-gray-500">'${food.strCategoryDescription.slice(0,100)}'</p>
                            <button class="btn btn-sm btn-success">View Details</button>
                        </div>
                    </div>
        `
        foodContainer.appendChild(div)
    });

}
getAllData()