import { plantList } from "../datas/plantList"
function ShoppingList() {
    console.log(plantList)
    return (
        <div>
            {/* {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant}</li>
            ))} */}
        </div>
    )
}

export default ShoppingList