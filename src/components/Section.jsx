
export const Section = ({ name, lastName = "Desarrollo web", children, handeClick }) => {
    
   
    
    return (
        <section className='title'>
            <h1>Hola {name} {lastName} !</h1>
            {children}
            <button onClick={handeClick}>Cambiar nombre</button>
        </section>
    )
}