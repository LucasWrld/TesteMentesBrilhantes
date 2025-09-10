/**
 * Ajuste o código para que o componente pai possa controlar o valor do campo e limpá-lo ao 
 * clicar no botão.
 */
const { useState } = require('react')

function SearchField() {
	const [value, setValue] = useState('')

	return (
		<input
			placeholder='Buscar...'
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	)
}

export default function SearchPanel() {
	const handleReset = () => {

	}

	return (
		<div>
			<SearchField />
			<button onClick={handleReset}>Limpar</button>
		</div>
	)
}