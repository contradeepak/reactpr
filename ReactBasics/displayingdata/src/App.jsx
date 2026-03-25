const user = {
  name: 'Deepak Sahani',
  imageUrl: 'https://rajcomicsuniverse.com/wp-content/uploads/2025/12/CVR-SPCL-0235-H-JALJALA--600x898.jpg.webp',
  imageSize: 900,
};


export default function Profile() {
  return (
    <>
    <h1>{user.name}</h1>
    <img 
    className="avatar"
    src={user.imageUrl}
    alt = {'Photo of' + user.name}
    style={{
      width:user.imageSize,
      height:user.imageSize
    }}
    />
    
    </>
  )
}


