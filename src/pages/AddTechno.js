import { useState } from "react";

export default function AddTechno(props) {
  const [techno, setTechno] = useState({
    technoname: "",
    technocategory: "",
    technodescription: "",
  });
  const { handleAddTechno } = props;

  // const techno = {
  //   name: "React",
  //   category: "Front",
  //   description: "Learn React",
  // };

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddTechno(techno);
    // pour reset l'etat quand on soummet le formulaire
    setTechno({
      technoname: "",
      technocategory: "",
      technodescription: "",
    });
  }
  // props.history.push("/TechnoList");

  // modifie l'etat
  function handleChange(evt) {
    // recuperation du nom et de la valeur
    const { name, value } = evt.target;
    // modifier en le clonant
    setTechno({ ...techno, [name]: value });
  }

  return (
    <div className="add_techno">
      <h1>Ajouter une technology</h1>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <label htmlFor="technoname">Nom:</label>
          <br />
          <input
            type="text"
            name="technoname"
            id="technoname"
            value={techno.technoname}
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <label htmlFor="technocategory">Categories</label>
          <br />
          <select
            name="technocategory"
            id="technocategory"
            value={techno.technocategory}
            onChange={(evt) => handleChange(evt)}
          >
            <option value="">Selectionner une categorie</option>
            <option value="front">Front-End</option>
            <option value="back">Back-End</option>
            <option value="fullstack">Full Stack</option>
            <option value="other">Autres</option>
          </select>
          <br />
          <label htmlFor="technodescription">Description:</label>
          <br />
          <textarea
            name="technodescription"
            id="technodescription"
            cols="30"
            rows="10"
            value={techno.technodescription}
            onChange={(evt) => handleChange(evt)}
          ></textarea>
          <br />
          <input type="submit" value="Ajouter Techno" className="btn" />
        </form>
      </div>
    </div>
  );
}
