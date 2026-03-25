export function Profile(){
    return (
        
            <img 
                src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFaXQhm6ItkW5JMpg58XQkPDtwEEUoUIdcQ&s"
                alt = "IronMan"
                />
        
    )

}

export default function Gallery() {
    return(
        <section>
            <h1>Amazing Superheroes</h1>
            <Profile />
            <Profile />
            <Profile />
            
        </section>
    )
}