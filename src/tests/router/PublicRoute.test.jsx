import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth";
import { PublicRoute } from "../../router/PublicRoute";

describe('Pruebas del componente <PublicRoute>', () => {

    test('debe de mostrar el children si no esta autenticado', () => {
        const contextValue = {
            logged: false
        } 

        render(
            <AuthContext.Provider value={{authState: contextValue}}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        // screen.debug()
        expect( screen.getByText('Public Route') ).toBeTruthy()
    })

    test('debe de navegar si esta autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {id:'123', name: 'Nahum Casco'}
        } 

        render(
            <AuthContext.Provider value={{authState: contextValue}}>
                <MemoryRouter initialEntries={['/login']}>
                    
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />

                        <Route path="marvel" element={<h1>Marvel Page</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Marvel Page') ).toBeTruthy()
    })
})