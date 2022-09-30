import tw from "tailwind-styled-components";


export const SectionHeading = tw.h2`
    font-bold
    block
    capitalize
    text-2xl
    text-extralight-gray
    relative
    after:absolute
    after:content['']
    after:w-24
    after:h-extratiny
    after:bg-gray-font
    after:top-1/2
    -after:right-0
    after:translate-x-4
`;

export const Paragraph = tw.p`
    text-bold
    text-blue-font
    my-8
`;

export const Accent = tw.span`
    inline
    text-primary-green
`;



