import React from 'react';

import {
    Section as SectionWrapper,
    Title,
}from './SectionStyle';

const Section = ({
    children,
    title
}) => {
    return (
        <SectionWrapper>
            {title && <Title>{ title }</Title>}
            { children }
        </SectionWrapper>
    );
}

export default Section;