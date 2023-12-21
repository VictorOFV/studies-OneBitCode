import Profile from "./components/Profile"
import avatar1 from "./assets/avatar.png"
import avatar2 from "./assets/avatar2.gif"
import avatar3 from "./assets/avatar3.jpg"
import "./styles/app.scss"


function App() {
  const profiles = [
    {
      avatar: avatar2,
      name: "Lucas Henrique",
      bio: "FrontEnd & DataSecurity",
      email: "lucashenrique@gmail.com",
      telephone: "(11) 9 9854-9585"
    },
    {
      avatar: avatar1,
      name: "Victor Manoel",
      bio: "FrontEnd & BackEnd",
      email: "victormanoel@gmail.com",
      telephone: "(69) 9 9247-8922"
    },
    {
      avatar: avatar3,
      name: "Melissa Rebecca",
      bio: "FrontEnd & Design",
      email: "melissarebecca@gmail.com",
      telephone: "(22) 9 9547-8695"
    }
  ]

  return (
    <>
      <div className="profile-container">
        {profiles.map((profile) =>
          <Profile
            avatar={profile.avatar}
            name={profile.name}
            bio={profile.bio}
            email={profile.email}
            telephone={profile.telephone} />
        )}
      </div>
    </>
  )
}

export default App
