import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CardMeteo from "../components/CardMeteo";

function Resultat() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [time, setTime] = useState(0);

  const getMeteo = async () => {
    const reponse = await axios.get(
      "http://api.weatherstack.com/current?access_key=67a11adba63457f685e2c20ffef6bb07&query=Angers"
    );
    console.log(reponse);

    setCity(reponse.data.location.name);
    setTemperature(reponse.data.current.temperature);
    setTime(reponse.data.location.localtime);
  };

  useEffect(() => {
    getMeteo();
  }, []);

  return (
    <div>
      <CardMeteo
        nomDeLaville={city}
        temperatureDeLaVille={temperature}
        heure={time}
      />
    </div>
  );
}
export default Resultat;
