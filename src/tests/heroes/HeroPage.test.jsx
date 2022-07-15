import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import HeroPage from "../../heroes/pages/HeroPage";


describe('Pruebas del componente <HeroPage />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'Nahum'
        }
    }

    test('debe mostrar el hero batman', () => { 
        const heroID = 'dc-batman'
        
        render(
            <AuthContext.Provider value={{authState: contextValue}}>
                <MemoryRouter initialEntries={[`/hero/${heroID}`]}>
                    <Routes>
                        <Route path="hero/:id" element={<HeroPage />} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        const heroName = screen.getByLabelText('superhero')
        expect(heroName.innerHTML).toBe('Batman')

    })

    test('debe navegar a la pagina Marvel al no encontrar el heroe', () => {
        const heroID = 'd1234'
        
        render(
            <AuthContext.Provider value={{authState: contextValue}}>
                <MemoryRouter initialEntries={[`/hero/${heroID}`]}>
                    <Routes>
                        <Route path="marvel" element={<h1>Marvel Page</h1>} />
                        <Route path="hero/:id" element={<HeroPage />} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        // screen.debug()
        expect(screen.getByText('Marvel Page')).toBeTruthy()
        
    })
})