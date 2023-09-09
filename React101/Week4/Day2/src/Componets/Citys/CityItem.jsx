export const CityItem = ({ id, name, population, country, handelDelete }) => {
  return (
    <>
      <div
        style={{ border: "1px solid teal", margin: "10px", padding: "20px" }}
      >
        <h3>ID:{id}</h3>
        <h3>NAME:{name}</h3>
        <h3>POPULATION:{population}</h3>
        <h3>COUNTRY:{country}</h3>
        <button onClick={() => handelDelete(id)}>DELETE</button>
      </div>
    </>
  );
};
