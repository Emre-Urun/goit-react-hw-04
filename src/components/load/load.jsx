import { PropagateLoader } from "react-spinners";
import css from "./load.module.css";

function Loader() {
  return (
    <div className={css.loaderWrapper}>
      {/* color prop'u ile tema rengimizi veriyoruz */}
      <PropagateLoader color="#3f51b5" />
    </div>
  );
}

export default Loader;
