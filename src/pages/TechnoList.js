import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
  const { technos, handleDeleteTechno } = props;
  // prop drilling 
  return (
    <div className="techno-list">
      <h1>Tous les technos</h1>
      <div>
        {/* on va mapper sur le tableau  */}
        {technos.map((techno) => (
          <TechnoItem techno={techno} key={techno.technoid} handleDeleteTechno={handleDeleteTechno}/>
        ))
        }
      </div>
    </div>
  );
}
