function CardMeteo({ nomDeLaville, temperatureDeLaVille, heure }) {
  return (
    <div className="card-meteo">
      <h1>{nomDeLaville}</h1>
      <div className="infos-villes">
        <h2>{temperatureDeLaVille}°C</h2>
        <h3>{heure}</h3>
      </div>
    </div>
  );
}

export default CardMeteo;
