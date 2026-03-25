import './App.css' 



function Profile() {
  return (
    <img 
         src = "https://rajcomics.shop/cdn/shop/collections/Dhruva_Col.jpg?v=1718799484&width=750"
         alt = "SuperCommandoDhruv"
         />
  );
}

function Profile2() {
  return (
    <img 
        src = "https://cdn.britannica.com/54/93454-050-5AC49E5E/Spider-Man-Tobey-Maguire-2.jpg"
        alt = "SpiderMan"></img>
  )
}

function Profile3() {
  return (
    <img 
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4mTm6Mm23fJ5UQcAqf6H-zINq949Xjgktg&s"
        alt = "BatMan"></img>
  )
}

function Profile4() {
  return (
    <img 
        src = "https://editorial.rottentomatoes.com/wp-content/uploads/2025/07/Superman_Reviews1.jpg?w=700"
        alt = "SuperMan"></img>
  )
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Superheroes</h1>
      <Profile />
      <Profile />
      <Profile2 />
      <Profile2 />
      <Profile3 />
      <Profile3 />
      <Profile4 />
      <Profile4 />

    </section>
  )
}

