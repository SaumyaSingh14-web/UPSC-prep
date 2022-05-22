function Inputbox(props) {
  console.log("Errr", props.errorMessage);
  return (
    <div className="p-3 mb-2 rounded-full ml-2 sm:ml-6 text-left sm:text-center">
      {props.inputBox}
        <label className="font-bold">{props.label}</label>
        <input
        onChange={props.onChange}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          className={`min-w-min sm:ml-7 p-3 rounded-xl outline-none text-left bg-gray-100 text-sm ${props.className}`}
        />
      <p>{props.errorMessage}</p>
    </div>
  );
}

export default Inputbox;