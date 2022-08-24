import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6e706f;
`;

export const Box = styled.form`
    width: 380px;
    height: 460px;
    border-radius: 10px;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
    padding: 20px 20px;
`;
export const SearchBox = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 10%;
        height: 40px;
        border: none;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        margin-left: -30px;
        background-color: #fc4903;
        color: white;
    }

    input {
        width: 100%;
        height: 20px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        color: white;
        border: none;
        outline: none;
        background-color: inherit;
        padding: 10px;

        ::placeholder {
            color: white;
        }
    }
`;

export const LocationBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`;

export const Location = styled.div`
    font-weight: 400;
    font-size: 28px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #fc4903;
`;

export const Time = styled.div`
    font-size: 22px;
    font-family: monospace;
    font-weight: 500;
    color: #fc4903;
`;

export const Temperature = styled.div`
    position: relative;
    display: inline-block;
    margin: 30px auto;
    background-color: inherit;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 15px 20px;
    font-size: 60px;
    color: #fc4903;
    font-weight: 900;
`;

export const Weather = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2px;

    img {
        width: 100px;
    }

    p {
        font-size: 30px;
        color: #fc4903;
        font-family: serif;
    }
`;
