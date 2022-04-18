const DonkeyKong = (props) => {
  const { characters } = props;
  return (
    <div className="donkey-kong">
      <h1>{games.name}</h1>
      <h2>{games.characters}</h2>

    </div>
  )
}
export default DonkeyKong