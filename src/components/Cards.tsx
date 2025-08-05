function Cards() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
			{/* Card 0 */}
			<div className="card w-96 shadow-xl hover:scale-105 transition-transform duration-200">
				<div className="card-body items-center text-center">
					<h2 className="card-title">EMPRESA EJEMPLO E.I.R.L. <span className="text-blue-500 font-bold text-lg"> 00</span></h2>
					<p className="mb-2">Tecnologia y Calidad Asegurada</p>
					<div className="card-actions justify-end">
						<button
							className="btn btn-info btn-sm hover:btn-accent"
							onClick={() => {
								const modal = document.getElementById('my_modal_info') as HTMLDialogElement | null;
								if (modal) {
									modal.showModal();
								}
							}}
						>
							Más info
						</button>

						{/* Modal for more info */}
						<dialog id="my_modal_info" className="modal">
							<div className="modal-box">
								<div className="flex items-center gap-3 mb-4">
									{/* Icono empresa */}
									<svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3 21V7a2 2 0 012-2h2a2 2 0 012 2v14M9 21V3a2 2 0 012-2h2a2 2 0 012 2v18M15 21V10a2 2 0 012-2h2a2 2 0 012 2v11" />
									</svg>
									<h3 className="font-bold text-lg text-primary">Información de la empresa</h3>
								</div>
								<ul className="mb-4 text-left space-y-1">
									<li>
										<span className="font-semibold">Nombre de la empresa:</span> IMPORT MEDICAL ANICAMA E.I.R.L
									</li>
									<span className="font-semibold">ID:</span><span className="text-blue-500 font-bold text-lg"> 00</span>
									<li>
										<span className="font-semibold">Contacto:</span> Juana Cervantes
									</li>
									<li>
										<span className="font-semibold">Teléfono:</span> +51 978 903 789
									</li>
								</ul>
								<div className="flex items-center gap-3 mb-2 mt-6">
									{/* Icono producto */}
									<svg className="w-8 h-8 text-info" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
									</svg>
									<h3 className="font-bold text-lg text-info">Información de Producto</h3>
								</div>
								<ul className="text-left space-y-1">
									<li>
										<span className="font-semibold">Nombre del producto:</span> <p>Esterializacion suave de papel crepé (Supawrap)</p>
									</li>
								</ul>
								<div className="modal-action mt-8 flex justify-end">
									<form method="dialog">
										<button className="btn btn-primary btn-sm">Cerrar</button>
									</form>
								</div>
							</div>
						</dialog>
					</div>
				</div>
			</div>

			{/* Card 1 */}
			<div className="card w-96 shadow-xl hover:scale-105 transition-transform duration-200">
				<div className="card-body items-center text-center">
					<h2 className="card-title">IMPORT MEDICAL ANICAMA E.I.R.L.<span className="text-blue-500 font-bold text-lg"> 01</span></h2>
					<p className="mb-2">Tecnologia y Calidad Asegurada</p>
					<div className="card-actions justify-end">
						<button
							className="btn btn-info btn-sm hover:btn-accent"
							onClick={() => {
								const modal = document.getElementById('my_modal_info') as HTMLDialogElement | null;
								if (modal) {
									modal.showModal();
								}
							}}
						>
							Más info
						</button>
					</div>
				</div>
			</div>

			{/* Card 2 */}
			<div className="card w-96 shadow-xl hover:scale-105 transition-transform duration-200">
				<div className="card-body items-center text-center">
					<h2 className="card-title">VITALTEC<span className="text-blue-500 font-bold text-lg"> 02</span></h2>
					<p className="mb-2">Equipo Medico</p>
					<div className="card-actions justify-end">
						<button
							className="btn btn-info btn-sm hover:btn-accent"
							onClick={() => {
								const modal = document.getElementById('my_modal_info') as HTMLDialogElement | null;
								if (modal) {
									modal.showModal();
								}
							}}
						>
							Más info
						</button>
					</div>
				</div>
			</div>

			{/* Card 3 */}
			<div className="card w-96 shadow-xl hover:scale-105 transition-transform duration-200">
				<div className="card-body items-center text-center">
					<h2 className="card-title">SETGAD<span className="text-blue-500 font-bold text-lg"> 03</span></h2>
					<p className="mb-2">Metrologia</p>
					<div className="card-actions justify-end">
						<button
							className="btn btn-info btn-sm hover:btn-accent"
							onClick={() => {
								const modal = document.getElementById('my_modal_info') as HTMLDialogElement | null;
								if (modal) {
									modal.showModal();
								}
							}}
						>
							Más info
						</button>
					</div>
				</div>
			</div>

			{/* Card 4 */}
			<div className="card w-96 shadow-xl hover:scale-105 transition-transform duration-200">
				<div className="card-body items-center text-center">
					<h2 className="card-title">MEDICAL SUPPLIES<span className="text-blue-500 font-bold text-lg"> 04</span></h2>
					<p className="mb-2">Pasion por superar expectativas</p>
					<div className="card-actions justify-end">
						<button
							className="btn btn-info btn-sm hover:btn-accent"
							onClick={() => {
								const modal = document.getElementById('my_modal_info') as HTMLDialogElement | null;
								if (modal) {
									modal.showModal();
								}
							}}
						>
							Más info
						</button>
					</div>
				</div>
			</div>

			{/* Card 5 */}
			<div className="card w-96 shadow-xl hover:scale-105 transition-transform duration-200">
				<div className="card-body items-center text-center">
					<h2 className="card-title">CEDEMIC<span className="text-blue-500 font-bold text-lg"> 05</span></h2>
					<p className="mb-2">Somos un soporte en procedimientos quirurgicos y muestreo</p>
					<div className="card-actions justify-end">
						<button
							className="btn btn-info btn-sm hover:btn-accent"
							onClick={() => {
								const modal = document.getElementById('my_modal_info') as HTMLDialogElement | null;
								if (modal) {
									modal.showModal();
								}
							}}
						>
							Más info
						</button>
					</div>
				</div>
			</div>

			{/* Card 6 */}
			<div className="card w-96 shadow-xl hover:scale-105 transition-transform duration-200">
				<div className="card-body items-center text-center">
					<h2 className="card-title">AIRWELD<span className="text-blue-500 font-bold text-lg"> 06</span></h2>
					<p className="mb-2">INGENIERIA MEDICA</p>
					<p className="mb-2">Importacion & Distribucion de Equipos e Insumos Medicos</p>
					<div className="card-actions justify-end">
						<button
							className="btn btn-info btn-sm hover:btn-accent"
							onClick={() => {
								const modal = document.getElementById('my_modal_info') as HTMLDialogElement | null;
								if (modal) {
									modal.showModal();
								}
							}}
						>
							Más info
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
