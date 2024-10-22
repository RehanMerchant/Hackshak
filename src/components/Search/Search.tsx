import { useState } from "react";

const SearchComp = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event:any) => {
      setInputValue(event.target.value);
    };
  return (
    <div className="pt-4">

<input className='outline-none rounded-md w-full  bg-secondary  py-2   px-2 md:px-3' placeholder='Search' value={inputValue} onChange={handleInputChange} />

    </div>
  )
}

export default SearchComp