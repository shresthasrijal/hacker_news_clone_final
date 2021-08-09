import styled from 'styled-components';

export const StoryWrapper = styled.section`
    padding-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid #ccccc;

    &:first-of-type{
        border-top: 0;
    }

    &:last-of-type{
        margin-bottom: 0;
        padding-bottom: 0;
    }

    `;

export const StoryTitle = styled.h1`
    margin-bottom: 5px;
    font-size: 18 px;
    line-height: 1.8;
    margin: 0;
    text-decoration: none;

    a{
        color: #23232c;
        background-color: #f8dc3d;
        text-decoration: none;
    }
`;

export const StoryMeta = styled.div`
    font-style: italic;

    > span:not(:first-child):before{
        conent: '*'
        margin: 0 7px;
    }

    .story__meta-bold {
        font-weight: bold;
    }
`;

export const StoryMetaElement = styled.span`
    font-weight: bold;
    color: ${props => props.color || 'red'};
`;
