/**
 * A página está sempre em branco
 */
export async function getServerSideProps() {
	fetch('https://jsonplaceholder.typicode.com/posts')
	return { props: { data: [] } }
}