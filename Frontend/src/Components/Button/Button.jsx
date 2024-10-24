export default function Button({children, ...props}){

    // Style
    const customStyle = {
        padding:"0",
    }

    return(
        <button 
            className={props.className} 
            onClick={props.onClick ? props.onClick : () => console.error("Aucune propriété onClick donné au composant 'Button'")}
            style={customStyle}
        >
            {children}
        </button>
    )
}