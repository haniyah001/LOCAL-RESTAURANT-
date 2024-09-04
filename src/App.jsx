import React from "react";
import "./index.css";

// DATA INFORMATION//

const foodData = [
  {
    name: "Abula",
    protein: "Meat,Fish,Shaki,Ponmo",
    price: "A plate For #2500",
    foodImage: "/Amala_and_Gbegiri_with_Ewedu_soup 1.jpg",
    soldOut: false,
  },

  {
    name: "Amala And Ewedu",
    protein: "Meat,Fish Or Ponmo",
    price: "A plate For #1900",
    foodImage: "/amala and ewedu 1.jpeg",
    soldOut: false,
  },

  {
    name: "White Eba And Efo-Riro",
    protein: "Meat,Fish,Turkey",
    price: "A plate For #2900",
    foodImage: "/eba and efo 1.jpeg",
    soldOut: false,
  },

  {
    name: "Yellow Eba And Efo-Riro",
    protein: "Fish,Chicken Or Ponmo",
    price: "A plate For #2600",
    foodImage: "/yellow eba and efo riro 2.jpeg",
    soldOut: true,
  },

  {
    name: "White Eba And Okro",
    protein: "Chicken,Fish Or Ponmo",
    price: "A plate For #2300",
    foodImage: "/eba and okro 1.jpeg",
    soldOut: false,
  },

  {
    name: "Yellow Eba And Ogbono",
    protein: "Meat,Fish Or Ponmo",
    price: "A plate For #2500",
    foodImage: "/yellow eba and ogbono 1.jpeg",
    soldOut: false,
  },

  {
    name: "Pounded Yam And Efo-Riro",
    protein: "Meat,Shaki,Fish Or Ponmo",
    price: "A plate For #3500",
    foodImage: "/pounded yam and efo riro 2.jpg",
    soldOut: false,
  },

  {
    name: "Pounded Yam And Egusi",
    protein: "Meat,Shaki,Fish Or Turkey",
    price: "A plate For #3500",
    foodImage: "pounded yam and egusi 1.jpg",
    soldOut: false,
  },

  {
    name: "Semo And Efo-Riro",
    protein: "Meat,Fish,Shaki Or Ponmo",
    price: "A plate For #2900",
    foodImage: "/semo and efo riro 1.jpeg",
    soldOut: true,
  },

  {
    name: "Semo And Egusi ",
    protein: "Meat,Fish,Shaki Or Ponmo",
    price: "A plate For #2900",
    foodImage: "/semo and egusi 2.jpg",
    soldOut: false,
  },
];

// Header //

function Header() {
  return (
    <div className="header">
      <span></span>
      <h1>Larry-K`s Local Eats 👨‍🍳🍽</h1>
      <span></span>
    </div>
  );
}

function MenuItem(props) {
  const { food: { name, protein, price, foodImage, soldOut } } = props; //prettier-ignore

  return (
    <div className="menu_item">
      <div>
        <img src={foodImage} alt={name} />
      </div>

      <div className={soldOut ? "grayscale" : ""}>
        <div>
          <h2>{name}</h2>
          <p>{protein}</p>
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>

        <span>
          {soldOut ? "Sold Out" : "Available"} 
        </span>

      </div>
    </div>
  );
}

// MENU//

function Menu() {
  return (
    <div className="Menu">
      <h1>Our Menu</h1>
      <p>
        Bringing Local Delights to Your Table, Where Every Bite Feels Like Home
        with our ten(10) local dishes to choose from 😊😋.
      </p>

      <div className="menu_items">
        {/* Menu item */}
        {foodData.map(function (food, i) {
          return <MenuItem key={i} food={food} />;
        })}
        ;
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      {/* HEADER */}
      <Header />

      {/* MENU */}
      <Menu />
    </div>
  );
}

export default App;
