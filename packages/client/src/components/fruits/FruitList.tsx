import { gql } from "apollo-boost";
import React from "react";
import Fruit from './Fruit';
import { useQuery } from "@apollo/react-hooks";

const FRUITS_QUERY = gql`
  {
    fruits {
      name,
      img
    }
  }
`;

function FruitList() {
  
  const { loading, error, data } = useQuery(FRUITS_QUERY);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error it</div>;
  }
  console.log("data",data);
  return (
    <ul>
      {data.fruits.map(fruit => (     
        <li><Fruit fruit={fruit}/></li>     
      ))}
    </ul>
  );
}

export default FruitList;
