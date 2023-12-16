import Button from "../Button";
import "./style.scss"

function Profile({ avatar, name, bio, telephone, email }) {
    return (
        <div className="profile">
            <div className="profile_avatar-container">
                <img className="profile_avatar" src={avatar} alt={`${name} - avatar`} />
            </div>
            <div className="profile_info">
                <h2>{name}</h2>
                <p>{bio}</p>
                <p>{telephone}</p>
                <p>{email}</p>
            </div>
            <div className="profile_buttons">
                <Button textButton={"GitHub"} />
                <Button textButton={"Linkedin"} />
                <Button textButton={"Twitter"} />
            </div>
        </div>
    )
}

export default Profile