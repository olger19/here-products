import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import supabase from './utils/supabase'
import './App.css'

interface Empresa {
  idempresaproveedor: string
  nombreempresaproveedor: string
  nombrecontacto: string | null
  celular: string | null
}

interface Producto {
  idproducto: number
  nombreproducto: string
}

function App() {
  const [empresasConProductos, setEmpresasConProductos] = useState<
    (Empresa & { productos: Producto[] })[]
  >([])
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true); // <-- Estado de loading

  // Cargar empresas al iniciar
  const agregarProveedorLocal = (nuevoProveedor: Empresa) => {
    setEmpresasConProductos(prev => [
      ...prev,
      { ...nuevoProveedor, productos: [] }
    ]);
  };

  useEffect(() => {
    const fetchEmpresas = async () => {
      setIsLoading(true) // Inicia loading
      const { data: empresasData, error: empresasError } = await supabase
        .from('empresaproveedor')
        .select('*')
      if (empresasError || !empresasData) {
        setIsLoading(false)
        return
      }

      // Obtener productos de cada empresa
      const empresasWithProducts = await Promise.all(
        empresasData.map(async (empresa) => {
          const { data: productosData } = await supabase
            .from('empresaproducto')
            .select('producto(idproducto, nombreproducto)')
            .eq('idempresaproveedor', empresa.idempresaproveedor)
          return {
            ...empresa,
            productos: productosData
              ? productosData.map((item: any) => item.producto)
              : [],
          }
        })
      )
      setEmpresasConProductos(empresasWithProducts);
      setIsLoading(false) // Finaliza loading
    }
    fetchEmpresas()
  }, [])

  // Filtrar empresas por nombre de producto
  const empresasFiltradas = empresasConProductos.filter((empresa) =>
    empresa.productos.some((prod) =>
      prod.nombreproducto.toLowerCase().includes(search.toLowerCase())
    )
  )

  return (
    <>
      <Navbar search={search} setSearch={setSearch}  agregarProveedorLocal={agregarProveedorLocal}/>
      {isLoading ? (
        <div className="flex justify-center items-center mt-10">
          <span className="loading loading-spinner loading-lg text-info"></span>
        </div>
      ) : (
        <Cards empresas={search ? empresasFiltradas : empresasConProductos} />
      )}
    </>
  )
}

export default App