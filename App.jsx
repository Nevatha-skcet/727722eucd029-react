import './App.css';
import Profile from './placeholder.avif'

function App(myprop) {
  let url = 'https://amypo.com'

  const ProfileImage = myprop.imgurl || Profile;

  return (
    <div className="container">
    <div className="card">
      <div className="profile-picture">
        <img src={ProfileImage} alt='Amypo'/>
      </div>
      <h2 className="name">{myprop.company} Technologies</h2>
      <h3 className="username">@{myprop.tag}</h3>
      <p className="tagline">Keep going.</p>
      <p className="description">{myprop.slogan}.</p>
      <a href={url} className="button">Visit Profile</a>
    </div>
</div>
  );
}

export default App;
