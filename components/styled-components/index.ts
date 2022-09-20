import tw from "tailwind-styled-components";


export const SectionHeading = tw.h2`
    font-bold
    capitalize
    text-2xl
    text-primary-aqua
    relative
    after:absolute
    after:content['']
    after:w-24
    after:h-tiny
    after:bg-gray-font
    after:top-1/2
    after:right-0
    
`;

export const Paragraph = tw.p`
    text-bold
`;



