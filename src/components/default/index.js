import "./styles.css";
import Sidebar from "../sidebar";
import Header from "../header";

export default function Default(props) {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="page">
        <Header />
        <div className="scrollable">{props.children}</div>
      </div>
    </div>
  );
}
