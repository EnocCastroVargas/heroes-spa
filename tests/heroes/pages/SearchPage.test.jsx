import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom'; 
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

describe('Pruebas en <SearchPage />', () => {
    
    test('debe de mostrarse correctamente con valores por defecto', () => {
        
        const { container } = render( 
            <MemoryRouter>
                <SearchPage /> 
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();

    });

});