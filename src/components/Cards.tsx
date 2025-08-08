import { useState } from 'react'
import supabase from '../utils/supabase'

type Empresa = {
  idempresaproveedor: string
  nombreempresaproveedor: string
  nombrecontacto: string | null
  celular: string | null
  productos?: Producto[]
}

type Producto = {
  idproducto: number
  nombreproducto: string
}

type Props = {
  empresas: Empresa[]
}

export default function Cards({ empresas }: Props) {
  const [productos, setProductos] = useState<Producto[]>([])
  const [empresaActual, setEmpresaActual] = useState<string | null>(null)

  const handleOpenModal = async (empresa: Empresa) => {
    setEmpresaActual(empresa.idempresaproveedor)
    // Consulta con join para obtener productos de la empresa
    const { data, error } = await supabase
      .from('empresaproducto')
      .select('producto(idproducto, nombreproducto)')
      .eq('idempresaproveedor', empresa.idempresaproveedor)

    if (!error && data) {
      // data es un array de empresaproducto, cada uno con producto
      setProductos(data.map((item: any) => item.producto))
    } else {
      setProductos([])
    }

    const modal = document.getElementById(
      `modal-${empresa.idempresaproveedor}`
    ) as HTMLDialogElement | null
    if (modal) modal.showModal()
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-6">
      {empresas.map((empresa) => (
        <div
          key={empresa.idempresaproveedor}
          className="card max-w-sm w-full bg-sky-100 shadow-xl hover:scale-105 transition-transform duration-200"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title bold">
              {empresa.nombreempresaproveedor}
            </h2>
            <h3 className="text-sm font-mono font-bold text-info bg-info/10 px-2 py-1 rounded">
              {empresa.idempresaproveedor}
            </h3>
            <p className="mb-2">
              Contacto: {empresa.nombrecontacto || 'No registrado'}
            </p>
            <p className="mb-2">
              Celular: {empresa.celular || 'No registrado'}
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-info btn-sm hover:btn-accent"
                onClick={() => handleOpenModal(empresa)}
              >
                Más info
              </button>

              {/* Modal */}
              <dialog
                id={`modal-${empresa.idempresaproveedor}`}
                className="modal"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    {empresa.nombreempresaproveedor}
                  </h3>
                  <p>Contacto: {empresa.nombrecontacto || 'No registrado'}</p>
                  <p>Celular: {empresa.celular || 'No registrado'}</p>
                  <hr className="my-4" />
                  <h4 className="font-semibold text-md mb-2">Productos que vende:</h4>
                  {empresaActual === empresa.idempresaproveedor && (
                    productos.length === 0 ? (
                      <p className="text-sm text-gray-500">No hay productos registrados.</p>
                    ) : (
                      <ul className="list-disc pl-5">
                        {productos.map((prod) => (
                          <li key={prod.idproducto} className="mb-2">
                            <span className="font-semibold">{prod.nombreproducto}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                  <div className="modal-action mt-4">
                    <form method="dialog">
                      <button className="btn btn-primary btn-sm">
                        Cerrar
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}