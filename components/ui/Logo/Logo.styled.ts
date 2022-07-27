import tw from "tailwind-styled-components";


export const LogoWrapper = tw.div`
  flex
  justify-between
  align-items: center
  gap:2
  cursor-pointer
  relative
  select-none
`;

const Signal = tw.div`
  absolute
  text-primary-aqua
  duration-75
  ease-linear
`;

export const SignalRight = tw(Signal)`
  -right-5
`;

export const SignalLeft = tw(Signal)`
  -left-3
`;
