import styled from 'styled-components';

export const FormContainer =
	styled.div`
        margin: 10px;
        padding: 15px;
        background-color: white;
        border-radius: 10px;
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

export const InputButton =
    styled.button`
        border-radius: 5px;
        border: none;
        height: 30px;
        width: 80px;
        padding: 2px;
        font-weight: bold;
    `;

export const ErrorMessage =
    styled.p`
        color: red;
        font-size: 10px;
    `;