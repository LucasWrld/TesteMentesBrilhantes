/**
 * O componente Dashboard possui um layout com muitas divs aninhadas e markup duplicado
 * para montar sessões distintas da tela. Melhore a organização e clareza criando componentes
 * reutilizáveis para cada seção (Summary, Graph, Table) e aplique boas práticas de
 * composição visual.
 */
export default function Dashboard() {
	return (
		<div className='dashaboard'>
			<div className='box'>
				<h2>Resumo</h2>
				<p>Dados resumidos...</p>
			</div>
			<div className='box'>
				<h2>Gráfico</h2>
				<canvas id='graph'></canvas>
			</div>
			<div className='box'>
				<h2>Histórico</h2>
				<table>
					<tbody>
						<tr>
							<td>Carregando...</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}