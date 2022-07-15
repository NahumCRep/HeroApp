import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth";
import AppRouter from "../../router/AppRouter";

describe('Pruebas en el componente <AppRouter />', () => {

    const contextNotLogged = {
        logged: false
    }

    const contextLogged = {
        logged: true,
        user: {id:'123', name:'Nahum'}
    }
    
    test('debe de mostrar el login si no esta autenticado', () => {
        render(
            <AuthContext.Provider value={{authState: contextNotLogged}}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug()
        expect( screen.getByText('Login') ).toBeTruthy()
    })

    test('debe de mostrar el componente de Marvel si esta autenticado', () => { 
        render(
            <AuthContext.Provider value={{authState: contextLogged}}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug()
        expect( screen.getByText('Marvel Heroes') ).toBeTruthy()
    })
})
