import styled from 'styled-components';
import { FlexRow, FlexColumn } from './common/UtilStyle';

export const SellStyle = styled(FlexRow)`
    height: 100vh;
    margin-top: 80px;
    padding: 0px var(--container-padding);
    .side-img {
        width: 33.33%;
    }
    background: var(--lighter-grey);
`;

export const Form = styled(FlexColumn)`
    position: relative;

    width: 66.67%;
    background: white;
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 10%);
    margin-left: 50px;
    padding: 30px 40px;
    border-radius: 8px;

    h2 {
        font-weight: bold;
        margin-bottom: 20px;
    }

    input,
    .custom-file-upload {
        margin-top: 10px;
        font-size: 20px;
        min-width: 180px;
        border-radius: 5px;
        padding: 5px 15px;
        border: 1px solid var(--darker-grey);
        :focus {
            outline: none;
            border: 1px solid var(--lighter-blue);
        }
    }

    input[type='file'] {
        display: none;
    }
    .custom-file-upload {
        margin-bottom: 0px;
        i {
            color: var(--lighter-blue);
        }
        :hover {
            cursor: pointer;
            background: var(--lighter-grey);
        }
    }

    button {
        margin-top: 40px;
        background: var(--lighter-blue);
        color: white;
        padding: 5px 20px;
        width: 100%;
        border: 1px solid var(--lighter-blue);
        border-radius: 5px;
        :hover {
            background: var(--darker-blue);
        }
    }

    p {
        margin-top: 20px;
        font-size: 16px;
        a {
            color: var(--darker-blue);
        }
    }
`;

export const Column = styled(FlexColumn)`
    width: 50%;
`;

export const Row = styled(FlexRow)`
    width: 100%;
    .left {
        align-items: flex-start;
    }
    .right {
        align-items: flex-end;
    }
`;
