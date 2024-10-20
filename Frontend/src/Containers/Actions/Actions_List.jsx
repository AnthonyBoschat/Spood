export const actionsCategory = [
    {
        category:"add",
        actions:[
            {
                value:"Ajouter un ingrédient",
                icon:<i className="fa-solid fa-plus"></i>,
                onClick:() => {console.log("controle")},
            },
            {
                value:"Ajouter une recette",
                icon:<i className="fa-solid fa-plus"></i>,
                onClick:null,
            },
            {
                value:"Ajouter un menu",
                icon:<i className="fa-solid fa-plus"></i>,
                onClick:null,
            },
        ]
    },
    {
        category:"open",
        actions:[
            {
                value:"Ouvrir le calendrier",
                icon:<i className="fa-solid fa-arrow-up-right-from-square"></i>,
                onClick:null,
            }
        ]
    },
    {
        category:"special",
        actions:[
            {
                value:"Associer à un programme sportif",
                icon:<i className="fa-solid fa-link"></i>,
                onClick:null,
            },
            {
                value:"Remplacer un module",
                icon:<i className="fa-solid fa-pager"></i>,
                onClick:null,
            },
        ]
    }
]