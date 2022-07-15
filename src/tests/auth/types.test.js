import { types } from "../../auth/types/types"

describe('Prueba a los types', () => {
    test('debe regresar los types definidos', () => { 
        expect(types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout'
        })
    })
})