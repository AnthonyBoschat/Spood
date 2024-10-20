export default function Button({children, ...props}){



    return(
        <button 
            className={props.className} 
            onClick={props.onClick ? props.onClick : () => console.error("Aucune propriété onClick donné au composant 'Button'")}
        >
            {children}
        </button>
    )
}