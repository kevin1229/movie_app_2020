import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return <div>
    <h2>I Love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "https://i.ytimg.com/vi/L7yagdjcalQ/maxresdefault.jpg",
    rating: 5
  },
  {
    id:2,
    name: "KimBap",
    image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F60ANBnHjiDU%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 4.8
  }
]
function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
