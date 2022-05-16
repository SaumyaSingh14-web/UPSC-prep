function Button(props) {
  return (
    <div>
      {props.btn && (
        <button
          type="submit"
          value="Submit"
          className={`bg-gradient-to-r from-indigo-600 to-indigo-200 text-sm font-semibold px-6 py-3 mt-1 mb-1 rounded-full uppercase text-white hover:bg-gradient-to-r from-indigo-200 to-indigo-600 ${props.className}`}
        >
          {props.btn}
        </button>
      )}
    </div>
  );
}

export default Button;