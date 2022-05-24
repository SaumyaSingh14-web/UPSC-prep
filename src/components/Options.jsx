function Options(props) {
    return (
      <div>
        <input
          type="radio"
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />{" "}
        <span className="ml-2">{props.option}</span>
      </div>
    );
  }
  
  export default Options;