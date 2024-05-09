import useGenre from "./hooks/useGenre";

export default function GenreList() {
  const { data } = useGenre();
  
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
