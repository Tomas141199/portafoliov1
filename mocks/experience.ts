interface rol {
    id: number,
    role: String,
}

interface experience {
    id: number,
    place: String,
    job: String,
    date: String,
    roles: rol[],
    stack: String,
}

export const experience_data: experience[]  = [
    {
        id: 113300, place: "Bolzas", job: "FREELANCE FULL-STACK DEVELOPER",
        date: "mar 2022 - on going",
        roles: [
          { id: 14401,  role: "Developing the landing page of the application using Adobe XD"},
            {id: 12402, role: "Talking with the client to extract the functional and non-functional requirements of the application."},
          {id: 14703, role: "Modeling the application database with MysqlWorkbench"},
         { id:14604, role:"Organized a development team for the documentation and development of the application modules according to the SCRUM methodology"},
         {id:14805, role: "Developing an administration panel for local products using Nodejs and strapi CMS"},
        {  id: 14406, role:"Following CI/CD methodologies for application distribution and development automation."},
        ],
        stack: "ReactTS, CSS, Nodejs, Mysql, Redux, Prettier, Express",

    },
    {
        id: 114301, place: "Wizeline Academy", job: "FRONT-END DEVELOPER",
        date: "may 2022 - jul 2022",
        roles: [
            {id: 145407 ,role:"Design from scratch of the entire application applying principles and laws of UX with Adobe xd."},
            {id: 145508,role:"Delivering functional prototypes every week according to the list of requirements."},
            {id: 140439,role:"Developing all the modules of the application using ReactJs with Styles Components applying the best practices and patterns improving the performance of the application."},
            {id: 142010 ,role:"Working together with a mentor to monitor the project and provide feedback to suggest improvements or clear up doubts."},
        ],
        stack: "Reactjs, Redux, Context, StyledComponents, CSS Modules, Hooks, Formik, Yup, NPM, Fetch",

    },
    {
        id: 1154402, place: "Seguros Lagunes", job: "FREELANCE FRONT-END DEVELOPER",
        date: "sep 2022 - on going",
        roles: [
            {id: 1443013 ,role:"Calculating project development budget."},
            {id: 1404314 ,role:"Proposing designs for the main interfaces."},
        ],
        stack: "NextTS, CSS Modules, Figma, MaterialUI",

    },

]