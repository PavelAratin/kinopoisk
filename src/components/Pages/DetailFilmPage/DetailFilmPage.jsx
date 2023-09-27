// import styles from "./DetailFilmPage.module.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailFilm } from "../../../store/slices/detailFilmSlice/detailFilmSlice";

const DetailFilmPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const { error, films, status } = useSelector((state) => state.allFilms);
  // const allFilms = films.items;
  useEffect(() => {
    dispatch(fetchDetailFilm(id));
  }, [dispatch, id]);
  return <h1>Детальная страница фильма</h1>;
};

export default DetailFilmPage;
