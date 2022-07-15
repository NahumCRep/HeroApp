import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";
import { Navbar } from "../../ui";

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}))

describe('Pruebas del componente <Navbar />', () => {
    const contextValue = {
        logged: true,
        user: {id:'123', name:'Nahum Casco'},
    }
    const logoutMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el nombre del usuario', () => { 
        render(
            <AuthContext.Provider value={{authState:contextValue, logout:logoutMock}}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug()
        expect(screen.getByText(contextValue.user.name)).toBeTruthy()
    })

    test('debe de llamar el logout y navigate cuando se precione el boton de logout', () => { 
        render(
            <AuthContext.Provider value={{authState:contextValue, logout:logoutMock}}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug()
        const logoutBtn = screen.getByLabelText('logout')
        fireEvent.click(logoutBtn)
        expect(logoutMock).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})
    })
})