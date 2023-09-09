import { useEffect, useState } from "react";
import { AddCity } from "./AddCity";
import { DeleteData, getData, PostData } from "./api";
import { CityItem } from "./CityItem";

export const Citys = () => {
  const [citys, setCitys] = useState([]);
  const [load, setLoad] = useState(false);
  const [isErr, setErr] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 5;
  const sort = "population";
  const order = "asc";
  const fetchAndUpdateData = () => {
    setLoad(true);
    getData({ page, limit, sort, order })
      .then((res) => setCitys(res.data))
      .catch((err) => setErr(err))
      .finally(() => setLoad(false));
  };
  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);
  if (load) {
    return <h1>Loading...</h1>;
  }
  if (isErr) {
    return <h1>Something Went Wrong...</h1>;
  }
  const handelPage = (val) => {
    let updatePage = page + val;
    setPage(updatePage);
  };
  const handelAdd = (data) => {
    PostData(data).then(() => {
      fetchAndUpdateData(page);
    });
  };
  const handelDelete = (id) => {
    DeleteData(id).then(() => {
      fetchAndUpdateData(page);
    });
  };
  console.log(citys);
  return (
    <>
      <h1>City App</h1>
      <AddCity handelAdd={handelAdd} />
      {citys.map((el) => (
        <CityItem key={el.id} {...el} handelDelete={handelDelete} />
      ))}
      <button onClick={() => handelPage(-1)} disabled={page === 1}>
        PREV
      </button>
      <button disabled>{page}</button>
      <button onClick={() => handelPage(1)} disabled={page === 10}>
        Next
      </button>
    </>
  );
};
