import "./App.css";
import Navbar from "./Navbar";
import Calculer from "./article";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Challenge from "./challenge";
import Button from "./Button";
import Changer from "./Changer";
const SHOWIT = true;
const LANGUAGES = [
  { id: 1, title: "PYTHON" },
  { id: 2, title: "JAVASCRIPT" },
  { id: 3, title: "PHP" },
  { id: 4, title: "HTML" },
  { id: 5, title: "MYSQL" },
  { id: 6, title: "SWIFT" },
  { id: 7, title: "LARAVEL" },
];
const MYLANGUAGES = LANGUAGES.map((language) => {
  return <li key={language.id}>{language.title}</li>;
});

const POSTS = [
  {
    id: 1,
    age: 20,
    title: "Hello world!!",
    paragraph:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum ipsa cumque laudantium necessitatibus ex expedita! Repellendus praesentium dignissimos ex, doloremque, omnis tenetur iusto dolore, quod molestias minus nisi. Porro.",
  },
  {
    id: 2,
    title: "Second Post",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Third Post 3",
    paragraph:
      "Odio cum ipsa cumque laudantium necessitatibus ex expedita! Repellendus praesentium dignissimos ex, doloremque, omnis tenetur iusto dolore, quod molestias minus nisi",
  },
];
const MYPOSTS = POSTS.map((item) => {
  return (
    <Challenge>
      <h1 key={item.id}>{item.title}</h1>
      <h2>{item.age} </h2>
      <hr />
      <p>{item.paragraph}</p>
    </Challenge>
  );
});

const BUTTONS = [
  {
    id: 1,
    source: "./font.jpg",
    title: "Articles",
    text: "logo",
    paragraph: "😒😒😒",
    width: "150",
    height: "100",
  },
  {
    id: 2,
    source: "./font.jpg",
    title: "Most readed",
    text: "hello world",
    width: "150",
    height: "100",
  },
  { id: 3, title: "this is children " },
];
const MYBUTTONS = BUTTONS.map((item) => {
  return (
    <Button>
      <h1 key={item.id}>{item.title}</h1>
      <p>{item.paragraph}</p>
      <img
        src={item.source}
        alt={item.text}
        width={item.width}
        height={item.height}
      />
    </Button>
  );
});
function App() {
  return (
    <div className="App">
      <Navbar />
      <Calculer />

      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <Card
            name="Ibrahim"
            lastName="Sohofi"
            email="ibrahimsohofi@gmail.com"
            age="24"
          >
            <h3>Follow me:</h3>
            <a
              href="#home"
              style={{ color: "red", textDecoration: "none", fontSize: "30px" }}
            >
              Home
            </a>
          </Card>
          <Card1
            name="Yassine"
            lastName="Azizi"
            email="yassineazizi@gmail.com"
            age="20"
          >
            <h1>Contact me:</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <textarea
                placeholder="Type a comment"
                style={{
                  border: "none",
                  height: "20px",
                  borderRadius: "5px",
                  padding: "10px",
                  outline: "none",
                }}
              ></textarea>
              <button
                type="submit"
                style={{
                  borderRadius: "5px",
                  background: "blue",
                  color: "white",
                  border: "none",
                  height: "40px",
                }}
              >
                Comment
              </button>
            </div>
          </Card1>
          <Card2
            name="Meryem"
            lastName="Arif"
            email="meryemarif01@gmail.com"
            age="22"
          >
            <div>
              <h3>About me:</h3>
              <p>
                Hello my name is Meryem, i am 22 years old from Morocco and I am
                web developper
              </p>
            </div>
          </Card2>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "strech",
          }}
        >
          <Challenge>
            <h1>20</h1>
            <h2>Hello world!!</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum
              ipsa cumque laudantium necessitatibus ex expedita! Repellendus
              praesentium dignissimos ex, doloremque, omnis tenetur iusto
              dolore, quod molestias minus nisi. Porro.
            </p>
          </Challenge>
          <Challenge>
            <h2>Second Post</h2>
            <hr />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Challenge>
          <Challenge>
            <h2>Third Post 3</h2>
            <hr />
            <p>
              Odio cum ipsa cumque laudantium necessitatibus ex expedita!
              Repellendus praesentium dignissimos ex, doloremque, omnis tenetur
              iusto dolore, quod molestias minus nisi
            </p>
          </Challenge>
        </div>
        <div style={{ width: "70%", display: "flex", flexDirection: "row" }}>
          <Button>
            <h1>Articles</h1>
            <p>😒😒😒</p>
            <img src="./font.jpg" width={150} height={100} alt="logo" />
          </Button>
          <Button>
            <p>Most readed</p>
            <img src="./font.jpg" width={150} height={100} alt="hello world" />
          </Button>
          <Button>
            <h1>this is children </h1>
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "row",
              border: "5px solid green",
              height: "500px",
              margin: "20px",
            }}
          >
            <Shower />
          </div>
          <Challenge>
            <ul style={{ textAlign: "left" }}>{MYLANGUAGES}</ul>
          </Challenge>
        </div>
        <div style={{ width: "70%", display: "flex", flexDirection: "row" }}>
          {MYPOSTS}
        </div>
        <div style={{ width: "70%", display: "flex", flexDirection: "row" }}>
          {MYBUTTONS}
        </div>
      </div>
      <Changer />
    </div>
  );
}
function Shower() {
  if (SHOWIT === true)
    return (
      <Challenge>
        <h2>if is true </h2>
        <hr />
        <p>
          Odio cum ipsa cumque laudantium necessitatibus ex expedita!
          Repellendus praesentium dignissimos ex, doloremque, omnis tenetur
          iusto dolore, quod molestias minus nisi
        </p>
        <Button>
          <p>New Button</p>
        </Button>
      </Challenge>
    );

  return (
    <Challenge>
      <h2>if is false </h2>
      <hr />
      <p>
        Odio cum ipsa cumque laudantium necessitatibus ex expedita! Repellendus
        praesentium dignissimos ex, doloremque, omnis tenetur iusto dolore, quod
        molestias minus nisi
      </p>
      <Button></Button>
    </Challenge>
  );
}

export default App;
