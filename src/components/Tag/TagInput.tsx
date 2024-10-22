import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
const TagInput: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue) {
      e.preventDefault();
      if (!tags.includes(inputValue)) {
        setTags([...tags, inputValue]);
        setInputValue('');
      }
    } else if (e.key === 'Backspace' && !inputValue && tags.length) {
      const newTags = [...tags];
      newTags.pop();
      setTags(newTags);
    }
  };

  const handleDelete = (tagToDelete: string) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-wrap   gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-secondary rounded-md px-3 py-2 flex gap-2 items-center">
            {tag}
            <button onClick={() => handleDelete(tag)}><IoIosCloseCircleOutline className='size-5'/></button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter your Tags here"
          className='w-full p-2 outline-none bg-secondary rounded-md'
          maxLength={30}
        />
      </div>

    </div>
  );
};

export default TagInput;
