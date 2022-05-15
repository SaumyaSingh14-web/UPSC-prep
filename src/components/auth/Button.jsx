function Button(props) {
  return (
    <div>
        {props.btn && <button type="submit" value="Submit" className={`bg-gradient-to-r from-blue-600 via-blue-100  to-blue-600 text-sm font-semibold p-3 mt-1 mb-1 rounded-full min-w-full uppercase hover:bg-gradient-to-l from-blue-200 via-blue-600  to-blue-200 ${props.className}`}>{props.btn}</button>}
    </div>
  );
}

export default Button;