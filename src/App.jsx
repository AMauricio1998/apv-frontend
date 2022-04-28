import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import { AuthLayout } from './layout/AuthLayout';
import { ConfirmarCuenta } from './paginas/ConfirmarCuenta';
import { Login } from './paginas/Login';
import NuevoPassword from './paginas/NuevoPassword';
import { OlvidePassword } from './paginas/OlvidePassword';
import { Registrar } from './paginas/Registrar';
import { RutaProtegida } from './layout/RutaProtegida';
import AdministrarPacientes from './paginas/AdministrarPacientes';
import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';
import EditarPerfil from './paginas/EditarPerfil';
import CambiarPassword from './paginas/CambiarPassword';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route index element={ <Login /> } />
                <Route path='registrar' element={ <Registrar /> } />
                <Route path='olvide-password' element={ <OlvidePassword /> } />
                <Route path='olvide-password/:token' element={ <NuevoPassword /> } />
                <Route path='confirmar/:id' element={ <ConfirmarCuenta /> } />
            </Route>

            <Route path='/admin' element={ <RutaProtegida />}>
              <Route index element={ <AdministrarPacientes /> }/>    
              <Route path='perfil' element={ <EditarPerfil /> }/>    
              <Route path='cambiar-password' element={ <CambiarPassword /> }/>    
            </Route>
          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
