export const Section = ({ name, lastName = "Desarrollo web", children }) => {
    return (
        <section className='title'>
            <h1>Hola {name} {lastName} !</h1>
            {children}
        </section>
    )
}