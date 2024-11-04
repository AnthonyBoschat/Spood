import { useState } from "react"
import s from "./AddIngredient.module.scss"
import { useMutation } from "@apollo/client"
import { CreateIngredient } from "@Query/Mutation/CreateIngredient"
import { useDispatch } from "react-redux"
import { addPopup, clearPopup } from "@Redux/Slices/PopupSlice"

export default function AddIngredient(){

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [calorie, setCalorie] = useState("")
    const [weight, setWeight] = useState("")
    const [protein, setProtein] = useState("")
    const [lipid, setLipid] = useState("")
    const [glucid, setGlucid] = useState("")

    const [createIngredient, {data, loading, error}] = useMutation(CreateIngredient)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newIngredient = {
            variables:{
                name,
                calorie:parseFloat(calorie),
                weight:parseFloat(weight),
                protein:parseFloat(protein),
                lipid:parseFloat(lipid),
                glucid:parseFloat(glucid),
            }
        }
        createIngredient(newIngredient)
        .then(result => {
            const response = result.data.createIngredient
            if(response.success){
                setName("")
                setCalorie("")
                setWeight("")
                setProtein("")
                setLipid("")
                setGlucid("")
            }
            dispatch(addPopup(response))
        })
    }

    return(
        <div className={s.container}>

            <form onSubmit={handleSubmit} action="">

                <div className={s.group}>
                    <div className={s.input}>
                        <label htmlFor="">Nom</label>
                        <input value={name} onChange={(e) => setName(e.currentTarget.value)} required type="text" />
                    </div>
                </div>

                <div className={s.group}>
                    <div className={s.input}>
                        <label htmlFor="">Calorie</label>
                        <input value={calorie} onChange={(e) => setCalorie(e.currentTarget.value)}  required type="number" step="any" />
                    </div>
                    <div className={s.input}>
                        <label htmlFor="">Poid</label>
                        <input value={weight} onChange={(e) => setWeight(e.currentTarget.value)} required type="number" step="any" />
                    </div>
                </div>

                <div className={s.group}>
                    <div className={s.input}>
                        <label htmlFor="">Protéine</label>
                        <input value={protein} onChange={(e) => setProtein(e.currentTarget.value)} required className={s.protein} type="number" step="any" />
                    </div>
                    <div className={s.input}>
                        <label htmlFor="">Lipide</label>
                        <input value={lipid} onChange={(e) => setLipid(e.currentTarget.value)} required className={s.lipid} type="number" step="any" />
                    </div>
                    <div className={s.input}>
                        <label htmlFor="">Glucide</label>
                        <input value={glucid} onChange={(e) => setGlucid(e.currentTarget.value)} required className={s.glucid} type="number" step="any" />
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