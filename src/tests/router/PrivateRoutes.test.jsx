import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth";
import { PrivateRoute } from "../../router/PrivateRoute";

describe('Pruebas en el componente <PrivateRoute>', () => {

    test('debe de mostrar el children si esta autenticado', () => {

        // localStorage.setItem
        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {id:'123', name:'Nahum'}
        }
        
        render(
            <AuthContext.Provider value={{authState: contextValue}}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Private Route')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPage", "/marvel")
    })

    test('debe de navegar al login si no esta autenticado', () => { 
        const contextValue = {
            logged: false,
            user: null
        }
        
        render(
            <AuthContext.Provider value={{authState: contextValue}}>
                <MemoryRouter initialEntries={['/marvel']}>
                    
                    <Routes>
                        <Route path="login" element={
                            <h1>Login Page</h1>
                        } />
                        <Route path="marvel" element={
                            <PrivateRoute>
                                <h1>Private Route</h1>
                            </PrivateRoute>
                        } />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Login Page')).toBeTruthy()
    })
})