import styled from 'styled-components';

import { FlexRow } from './common/UtilStyle';

export const SearchBar = styled(FlexRow)`
    width: ${(props) => (props.showSearch ? '400px' : '20px')};
    transition: all 1s;
    position: relative;

    .input-wrapper {
        width: 100%;
        i {
            display: ${(props) => (props.showSearch ? 'block' : 'none')};
            position: absolute;
            top: 11px;
            right: 8px;
            color: grey;
        }
    }

    input {
        color: var(--lighter-black);
        transition: all 1s;
        width: 100%;
        opacity: ${(props) => (props.showSearch ? '100%' : '0%')};
        padding: ${(props) => (props.showSearch ? '5px 20px' : '0px')};
        border: 1px solid var(--darker-grey);
        :focus {
            outline: none;
        }
    }
    .search-icon {
        display: ${(props) => (props.showSearch ? 'none' : 'block')};
        margin-left: ${(props) => (props.showSearch ? '5px' : '0px')};
    }

    .dropdown {
        display: ${(props) => (props.showSearch ? 'block' : 'none')};
    }
`;

export const Dropdown = styled.div`
    z-index: 1;
    position: absolute;
    width: 100%;
    top: 43px;
    box-shadow: 0px 3px 5px 0 rgb(0 0 0 / 30%);
    .active {
        background: var(--lighter-grey);
        border: 2px solid yellow;
        padding-left: 30px;
    }
`;

export const DropdownItem = styled(FlexRow)`
    z-index: -1;
    justify-content: flex-start;
    background: white;
    color: black;
    border: 1px solid var(--lighter-grey);
    padding: 10px 20px;
    line-height: 1;
    img {
        width: 50px;
    }
    p {
        margin: 0;
    }
    .book-info {
        margin-left: 10px;
        .book-author {
            font-size: 14px;
            font-style: italic;
            margin-top: 5px;
        }
    }
`;
