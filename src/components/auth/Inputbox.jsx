function Inputbox(props) {
  return (
    <div className="p-3 mb-2 rounded-full ml-2 sm:ml-6 text-left sm:text-center">
      {props.inputBox}
      <form action="">
        <label className="font-bold">{props.label}</label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          className={`min-w-min sm:ml-7 p-3 rounded-xl focus:border-blue-300 outline-none text-left bg-gray-100 ${props.className}`}
        />
      </form>
    </div>
  );
}

export default Inputbox;