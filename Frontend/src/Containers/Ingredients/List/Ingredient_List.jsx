import s from "./Ingredient_List.module.scss"

export default function Ingredient_List(){

    const items = [
        {id:0, name:"Filet de poulet", calorie:100, protein:10, weight:10, lipid:10, glucid:10},
        {id:1, name:"Haricot Vert", calorie:200, protein:20, weight:20, lipid:20, glucid:20},
        {id:2, name:"Crême fraiche", calorie:300, protein:30, weight:30, lipid:30, glucid:30},
    ]

    return(
        <div className={s.container}>
            {items.map(item => (
                <div className={s.item} key={item.id}>
                    <span className={s.name}>{item.name},</span> <span className={s.weight}>{item.weight}g</span>
                </div>
            ))}
        </div>
    )
}