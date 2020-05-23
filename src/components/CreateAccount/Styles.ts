import styled from 'styled-components';

export const FormContainer =
	styled.div`
        margin: 10px;
        padding: 15px;
		background-color: white;
	`;

export const InputText =
    styled.input.attrs({ type: 'text'})`
        border-radius: 5px;
        height: 20px;
        width: 200px;
        padding: 2px;
    `;
