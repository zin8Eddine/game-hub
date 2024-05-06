import useGames from "../hooks/useGames";

export default function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
