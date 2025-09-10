/**
 * Estado não sincroniza com prop externa
 */
export function MyComponent({ initialValue }) {
	const [value, setValue] = useState(initialValue)

	return (
		<>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</>
	)
}