const SuperMarioWorld = (props) => {
  const { characters } = props;
  return (
    <div className="super-mario-world">
      <h1>{games.name}</h1>
      <h2>{games.characters}</h2>

    </div>
  )
}
export default SuperMarioWorld