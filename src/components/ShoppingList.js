import { plantList } from "../datas/plantList"
import CareScale from "./CareScale"
import '../styles/ShoppingList.css'

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
            <ul className='lmj-plant-list'>
                {plantList.map((plant, index) => (
                    <li key={`${plant.name}-${index}`} className='lmj-plant-item'>
                        {plant.name} {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                        <CareScale scaleValue={plant.light} />
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList