import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"

function ShoppingList() {
    let categoryPlantList = plantList.map((plant) => plant.category)
    categoryPlantList = [...new Set(categoryPlantList)]

    console.log(categoryPlantList)
    return (
        <div>
            <ul>
                {categoryPlantList.map((category, index) => (
                    <li key={`${category}-${index}`}>{category}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, name, cover, light, water}) => (
                    <PlantItem key={id} name={name} cover={cover} id={id} light={light} water={water}/>
                ))}
            </ul>
            
        </div>
    )
}

export default ShoppingList