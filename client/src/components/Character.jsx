import { Link } from "react-router-dom";

export default function Character({ character }) {
  return (
    <div>
      <Link to={`/characters/${character._id}`}>
        <h1> {character.name} </h1>
      </Link>
    </div>
  );
}
