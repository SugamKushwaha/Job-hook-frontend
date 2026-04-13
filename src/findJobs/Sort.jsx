import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateSort } from '../slices/SortSlice';

const opt = ['Relevance','Most Recent','Salary: Low to High','Salary: High to Low'];

const talentSort=['Relevance', 'Experience: Low to High', 'Experience: High to Low'];


const Sort=(props)=> {
  const combobox = useCombobox();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !opt.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? opt.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : opt;

  const options = props.sort=="job"?filteredOptions.map((item) => (
    <Combobox.Option className='text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  )):talentSort.map((item) => (
        <Combobox.Option className='text-xs' value={item} key={item}>
          {item}
        </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        dispatch(updateSort(optionValue));
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <div
          onClick={() => combobox.toggleDropdown()}
          className="cursor-pointer p-2  border flex gap-4 border-amber-500 px-2 py-1 rounded-xl text-sm items-center"
        >
         {value || "Relevance"} <IconAdjustments className='h-5 w-5 text-xs text-amber-500'/>
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default Sort;