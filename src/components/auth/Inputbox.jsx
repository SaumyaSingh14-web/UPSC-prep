function Inputbox(props) {
  return (
    <div className='p-3 mb-2 rounded-full ml-1 sm:ml-6 text-left sm:text-center'>{props.inputBox}
        <input type="text" placeholder='Your first name' name='firstName' className="min-w-min sm:ml-7 border-gray-300 p-3 rounded-xl focus:border-blue-300 border-none text-left"/>
    </div>
  )
}

export default Inputbox