import React from 'react';

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h4>{age}</h4>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
