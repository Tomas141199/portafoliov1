import tw from 'tailwind-styled-components';

interface Props{
    $position: boolean;
}

interface ImageProps{
    $urlImage: String;
    $position: boolean;
}

export const ProjectContainer = tw.div`
    mb-28 
    flex 
    flex-col 
    items-center
    ${(p: any) => p.$position ? "sm:items-start" : "sm:items-end"}
    relative
    z-20
    bg-[#10213d] 
    sm:bg-transparent
    p-4
    sm:p-0
    rounded
`;

export const ProjectName = tw.h3`
    font-bold
    capitalize 
    text-lg 
    mt-2
`;

export const ProjectDescription = tw.p<Props>`
    text-xs
    text-blue-font 
    mt-4 px-6 py-3 
    bg-[#10213d] 
    rounded 
    w-11/12
    sm:w-2/3
    cursor-default
    text-left
    ${(p:any) => (p.$position ? "sm:text-left" : "sm:text-right")}
`;

export const LinkImage = tw.a`
transition duration-300
ease-in-out 
text-base-100  
hover:text-primary-green
`;

export const ProjectImage = tw.a<ImageProps>`
max-w-lg
absolute
top-1/2 
-translate-y-1/2 
w-full
sm:w-8/12
h-full 
${(p:any) => p.$position ? "right-0" : "left-0"}
rounded
${(p:any) => `bg-[url('/${p.$urlImage}')]`}
bg-[length:100%_100%]
-z-50
after:absolute
after:content-['']
after:h-full
after:w-full
after:bg-[rgba(16,33,61,0.9)]
sm:after:bg-[rgba(5,253,216,0.3)]
after:transition
after:duration-300
after:-ease-in-out
after:hover:bg-[rgba(5,253,216,0)]
`;