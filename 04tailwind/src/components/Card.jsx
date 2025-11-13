function Card(props) {
  console.log(props);
  return (
    <>
      <h1>Hello Rockstar {props.name}</h1>
      <h2 className="text-4xl">{props.someobj.username} {props.someobj.age}</h2>
    </>
  );
}

export default Card; 
