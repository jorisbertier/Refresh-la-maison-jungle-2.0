import { plantList } from "../datas/plantList"
function ShoppingList() {
    // console.log(plantList)
    let categoryPlantList = plantList.map((plant) => plant.category)
    categoryPlantList = [...new Set(categoryPlantList)]
    // let categoryPlantList = plantList.reduce((acc, plant) =>
    //     acc.includes(plant.category) ? acc : acc.concat(plant.category),
    // []
    // )
    console.log(categoryPlantList)
    return (
        <div>
            <ul>
                {categoryPlantList.map((category, index) => (
                    <li key={`${category}-${index}`}>{category}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant, index) => (
                    <li key={`${plant.name}-${index}`}>{plant.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList