import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        box-sizing: border-box;
        background-color: #756DF4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        font-weight: bold;
        cursor: pointer;                
        &:hover {
            padding: 6px 14px;
            color: #756DF4;
            background-color: #fff;
            border: 2px solid #756DF4;
        }
    }
`;

export const DeleteError = styled.div`
    width: 100%;
    background: #ccc;
    color: red;
    border: 1px solid red;
    box-shadow: 0 0 3px red;
    padding: 15px 0;
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
`