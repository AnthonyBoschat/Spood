import s from "./AddIngredient.module.scss"

export default function AddIngredient(){



    return(
        <div className={s.container}>

            <form action="">

                <div className={s.group}>
                    <div className={s.input}>
                        <label htmlFor="">Nom</label>
                        <input required type="text" />
                    </div>
                </div>

                <div className={s.group}>
                    <div className={s.input}>
                        <label htmlFor="">Calorie</label>
                        <input required type="number" />
                    </div>
                    <div className={s.input}>
                        <label htmlFor="">Poid</label>
                        <input required type="number" />
                    </div>
                </div>

                <div className={s.group}>
                    <div className={s.input}>
                        <label htmlFor="">Protéine</label>
                        <input required className={s.protein} type="number" />
                    </div>
                    <div className={s.input}>
                        <label htmlFor="">Lipide</label>
                        <input required className={s.lipid} type="number" />
                    </div>
                    <div className={s.input}>
                        <label htmlFor="">Glucide</label>
                        <input required className={s.glucid} type="number" />
                    </div>
                </div>
                
            
                <div className={s.submitContainer}>
                    {/* <i className="fa-solid fa-floppy-disk"></i> */}
                    <input type="submit" value={"Enregistrer"} />
                </div>
            </form>






            {/* <Button onClick={() => console.log("controle")}>
                <i className="fa-solid fa-floppy-disk"></i>
                <span>
                    Enregistrer
                </span>
            </Button> */}
        </div>
    )
}