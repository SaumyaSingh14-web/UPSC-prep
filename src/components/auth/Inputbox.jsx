function Inputbox(props) {
  return (
      
    <div className='p-3 mb-2 rounded-full ml-2 sm:ml-6 text-left sm:text-center'>{props.inputBox}
        <form action="">
            <label>First Name</label>
            <input type="text" placeholder='Your first name' name='firstName' className="min-w-min sm:ml-7 p-3 rounded-xl focus:border-blue-300 outline-none text-left bg-gray-100"/>
        </form>
    </div>
  )
}

export default Inputbox;