import { useState } from 'react';
import supabase from '../utils/supabase';

type Empresa = {
	idempresaproveedor: string;
	nombreempresaproveedor: string;
	nombrecontacto: string | null;
	celular: string | null;
};

type NavbarProps = {
	search: string
	setSearch: (value: string) => void
	agregarProveedorLocal: (nuevoProveedor: Empresa) => void;
}

function Navbar({ search, setSearch, agregarProveedorLocal }: NavbarProps) {
	const [nombreEmpresa, setNombreEmpresa] = useState("");
	const [contacto, setContacto] = useState("");
	const [celular, setCelular] = useState("");
	const [loading, setLoading] = useState(false);

	// Función para agregar proveedor
	const handleAgregarProveedor = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		// Genera un id único para la empresa (puedes usar uuid o Date.now)
		const idempresaproveedor = Date.now().toString();
		const { error } = await supabase
			.from("empresaproveedor")
			.insert([
				{
					idempresaproveedor,
					nombreempresaproveedor: nombreEmpresa,
					nombrecontacto: contacto,
					celular,
				},
			]);
		setLoading(false);
		if (!error) {
			setNombreEmpresa("");
			setContacto("");
			setCelular("");
			// Agrega el nuevo proveedor a la lista local
			agregarProveedorLocal({
				idempresaproveedor,
				nombreempresaproveedor: nombreEmpresa,
				nombrecontacto: contacto,
				celular,
			});
			// Cierra el modal
			const modal = document.getElementById("my_modal_1") as HTMLDialogElement | null;
			if (modal) modal.close();
			// Opcional: puedes recargar la lista de empresas desde App usando un callback o evento
			alert("Proveedor agregado correctamente");
		} else {
			alert("Error al agregar proveedor");
		}
	};

	return (
		<>
			<div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 py-2">
				<div className="flex-1 flex items-center justify-between w-full">
					<a className="btn btn-ghost text-xl">Here Productos</a>
				</div>
				<div className="flex flex-col md:flex-row gap-2 w-full md:w-auto items-stretch md:items-center">
					{/* Search inputs */}
					<div className="w-full max-w-md">
						<div className="relative">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-4.35-4.35M16.65 10a6.65 6.65 0 11-13.3 0 6.65 6.65 0 0113.3 0z"
									/>
								</svg>
							</span>
							<input
								type="text"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								placeholder="Buscar coincidencias..."
								className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
							/>
						</div>
					</div>

					{/* Button to open modal */}
					<button
						className="btn btn-primary w-full md:w-auto flex items-center justify-center"
						onClick={() => {
							const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
							if (modal) {
								modal.showModal();
							}
						}}
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
						</svg>
						<span className='hidden md:inline'>Agregar Proveedor</span>
					</button>
					{/* ...navbar code... */}
					<dialog id="my_modal_1" className="modal">
						<div className="modal-box">
							<h3 className="font-bold text-lg">Agregar Proveedor</h3>
							<p className="py-2">Ingrese la información del proveedor</p>
							<div className="modal-action">
								<form className="space-y-2 w-full" onSubmit={handleAgregarProveedor}>
									<label className="label mt-2">Nombre de la Empresa</label>
									<input
										type="text"
										className="input w-full"
										placeholder="Vitaltec"
										value={nombreEmpresa}
										onChange={(e) => setNombreEmpresa(e.target.value)}
										required
									/>
									<label className="label mt-2">Contacto</label>
									<input
										type="text"
										className="input w-full"
										placeholder="Fernanda Ancori"
										value={contacto}
										onChange={(e) => setContacto(e.target.value)}
									/>
									<label className="label mt-2">Celular</label>
									<input
										type="text"
										className="input w-full"
										placeholder="+51 987 123 432"
										value={celular}
										onChange={(e) => setCelular(e.target.value)}
									/>
									<button className="btn btn-primary" type="submit" disabled={loading}>
										{loading ? "Agregando..." : "Agregar"}
									</button>
									<button
										className="btn ml-2"
										type="button"
										onClick={() => {
											const modal = document.getElementById("my_modal_1") as HTMLDialogElement | null;
											if (modal) modal.close();
										}}
									>
										Cerrar
									</button>
								</form>
							</div>
						</div>
					</dialog>
					{/* End Button to open modal */}
					<div className="dropdown dropdown-end">
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							<li>
								<a className="pointer-events-none opacity-50 cursor-not-allowed select-none justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a className="pointer-events-none opacity-50 cursor-not-allowed select-none">
									Settings
								</a>
							</li>
							<li>
								<a className="pointer-events-none opacity-50 cursor-not-allowed select-none">
									Logout
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar;