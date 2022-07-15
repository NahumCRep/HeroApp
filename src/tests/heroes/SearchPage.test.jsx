import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter, useNavigate } from "react-router-dom";
import SearchPage from "../../heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas sobre el componente <SearchPage />', () => { 

    beforeEach(() => jest.clearAllMocks())
    
    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar a batman y el input con el queryString', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        // screen.debug()

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg')
        
        const alertBox = screen.getByLabelText('alert-default')
        expect(alertBox.style.display).toBe('none')
        
        const warningBox = screen.getByLabelText('alert-warning')
        expect(warningBox.style.display).toBe('none')
    })

    test('debe de mostrar el mensaje de error si no encuentra el heroe (batmar123)', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const warningBox = screen.getByLabelText('alert-warning')
        expect(warningBox.style.display).toBe('')
        // screen.debug()
    })

    test('debe de llamar el navigate a la pantalla nueva', () => { 
        
        const hero = 'spiderman'

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )
        
        const input = screen.getByRole('textbox')
        fireEvent.change(input, {target: {value: hero}})

        const form = screen.getByRole('form')
        fireEvent.submit(form, input.value)

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${hero}`)
        // screen.debug()
    })
})