function Button(props) {
  return (
    <div>
      {props.btn && (
        <button
        onClick={props.onClick}
          type={props.type}
          value="Submit"
          className={`bg-gradient-to-r from-indigo-600 to-indigo-200 text-sm font-semibold px-6 py-3 mt-1 mb-1 rounded-full uppercase text-white outline-none hover:border-2 hover:border-gray-400 ${props.className}`}
        >
          {props.btn}
        </button>
      )}
    </div>
  );
}

export default Button;