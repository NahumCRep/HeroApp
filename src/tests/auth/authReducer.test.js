import { authReducer } from "../../auth";
import { types } from "../../auth/types/types";

describe('Pruebas del reducer authReducer', () => {

    const initialState = {
        logged: false,
        user: null
    }

    const user = {
        id: '123',
        name: 'Nahum Casco'
    }

    const loggedUser = {
        logged: true,
        user: user
    }

    test('debe retornar el estado por defecto', () => { 
        const state = authReducer(initialState, {})
        expect(state).toBe(initialState)
    })

    test('debe de llamar login, autenticar y establecer el usuario', () => {
        
        const state = authReducer(initialState, {
            type: types.login,
            payload: user
        })

        expect(state).toEqual(loggedUser)
        expect(state.logged).toBeTruthy()
        expect(state.user.name).toBe(user.name)
    })

    test('debe de llamar logoutm, borrar el usuario y logged en false', () => {
        
        const state = authReducer(initialState, { type: types.logout })

        expect(state).toEqual(initialState)
        expect(state.logged).toBeFalsy()
        expect(state.user).toBeNull()
    })
})