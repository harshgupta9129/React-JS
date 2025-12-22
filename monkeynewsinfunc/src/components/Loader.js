import loader from "./Loading.gif";

export default function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <img src={loader} alt="Loading..." />
    </div>
  );
}
