import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    background: #592507;
    border: 2px solid #592507;
    color: #F2DD72;
    padding: 15px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color:  inherit;
    display: flex;
    gap: 12px;
    align-items: center;
`