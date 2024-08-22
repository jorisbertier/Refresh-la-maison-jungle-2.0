function Categories({categories, activeCategory, setActiveCategory}) {
    console.log(activeCategory)
    return (
        <div>
            <label for="cars">Sélectionné une catégorie:</label><br></br>
            <select name="cars" id="cars"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >
				{categories.map((cat) => (
					<option value={cat} key={cat}>{cat}</option>
				))}
            </select>
        </div>
    )
}

export default Categories