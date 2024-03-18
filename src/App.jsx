import './App.css'
const Heading = () => {
  return <h1>React Playground</h1>;
};

const Greetings = () =>{
  return <h1>Hello, Alice Smith!</h1>
}

const ExtrenalLink = () => {
  const url = 'https://www.reactexamples.com'
  return <a href={url} target='_blank'>Visit React Examples</a>
}

const Avtar = () =>{
  const imgUrl = "https://via.placeholder.com/200"
  return <div>
    <img src={imgUrl} />
  </div>
}

const UserInfo = () => {
  const user = {
    name: "Alice Smith",
    age: 28,
    email: "alice.smith@example.com",
    bio: "Passionate about React and building innovative web applications."
  };

  return (
    <div>
      <h1>User Information</h1>
      <p><strong>Name:</strong>{user.name}</p>
      <p><strong>Age:</strong>{user.age}</p>
      <p><strong>Ege:</strong>{user.email}</p>
      <p><strong>Bio:</strong>{user.bio}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
    <Heading/>
      <Greetings/>
      <ExtrenalLink/>
      <Avtar/>
      <UserInfo/> 
    </div>
  )
}
