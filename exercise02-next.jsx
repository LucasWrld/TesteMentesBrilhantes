/**
 * A página está sempre em branco
 */
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return { props: { data } }
}
