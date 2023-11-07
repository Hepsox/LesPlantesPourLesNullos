import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container">
      <Link to={"/resultat"}> Voir le résultat</Link>
    </div>
  );
}

export default Home;
