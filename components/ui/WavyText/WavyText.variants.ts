export const spanVariants = {
    visible: { y: 0, scaleY: 1 },
    hover: {
      y: [-1, -2, -2.8, 0.9, 0],
      scaleY: [1, 1.3, 0.8, 1],
      color: "hsl(165, 100, 69)",
    },
  };
  
export const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
 export const item = {
    visible: {
      opacity: 1,
      y: [-1, -1.9, -2.7, 1],
      scaleY: [1, 1.3, 0.8, 1],
      color: ["hsl(165, 100, 69)", "hsl(225, 70, 88)"],
    },
    hidden: {
      opacity: 0,
    },
  };
  