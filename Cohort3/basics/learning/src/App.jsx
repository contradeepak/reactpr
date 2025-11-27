function App() {
  return (
    <div
      style={{
        background: "#dfe6e9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: 30,
      }}
    >
      <div>
        <PostComponent
          name="harkirat"
          followerCount={20}
          time="2m ago"
          image="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          description="Want to know how to win big? Check out how these folks won $600 in bounties."
        />

        <br />

        <PostComponent
          name="100xdevs"
          followerCount={23888}
          time="12m ago"
          image="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          description="Check out the latest updates in tech and coding!"
        />

        <br />

        <PostComponent
          name="Deepak"
          followerCount={120}
          time="5m ago"
          image="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          description="Learning React is so much fun!"
        />
      </div>
    </div>
  );
}

const style = {
  width: 250,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  borderStyle: "solid",
  display: "flex",
  flexDirection: "column",
  padding: 10,
};

function PostComponent({ name, followerCount, time, image, description }) {
  return (
    <div style={style}>
      {/* First row */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={image}
          style={{ width: 30, height: 30, borderRadius: 20 }}
        />

        <div style={{ marginLeft: 10 }}>
          <div style={{ fontSize: 12, fontWeight: "bold" }}>{name}</div>

          <div style={{ fontSize: 10, color: "gray" }}>
            {followerCount} followers • {time}
          </div>
        </div>
      </div>

      {/* Description */}
      <div style={{ fontSize: 12, marginTop: 10 }}>
        {description}
      </div>
    </div>
  );
}

export default App;
