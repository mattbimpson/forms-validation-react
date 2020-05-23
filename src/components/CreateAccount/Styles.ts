import styled from 'styled-components';

export const FormContainer =
	styled.div`
        margin: 10px;
        padding: 15px;
        background-color: white;
        width: 50%;

        @media (max-height: 500px) {
            width: fit-content;
        }
    `;

export const InputText =
    styled.input`
        border-radius: 5px;
        height: 20px;
        width: 200px;
        padding: 2px;
    `;

export const FormItem =
    styled.div`
        margin-bottom: 20px;
    `;