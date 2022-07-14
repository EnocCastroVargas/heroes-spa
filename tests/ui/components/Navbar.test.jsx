import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom'; 

import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <Navbar />', () => {
    
    const contextValue = {
        logged: true,
        user: {
            name: 'Enoc Castro'
        },
        logout: jest.fn()
    };

    beforeEach( () => jest.clearAllMocks() );
    
    test('debe de mostrar el nombre del usuario', () => {
    
        render(
            <MemoryRouter >
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('Enoc Castro') ).toBeTruthy();
        
    });

    
    test('debe de llamar el logout y el navigate cuando se hace click en el botón', () => {
        
        render(
            <MemoryRouter >
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true});


    });

});
