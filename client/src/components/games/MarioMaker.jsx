const MarioMaker = (props) => {
  const { characters } = props;
  return (
    <div className="mario-maker">
      <h1>{games.name}</h1>
      <h2>{games.characters}</h2>

    </div>
  )
}
export default MarioMaker