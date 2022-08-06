import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';

import './App.css';

function App() {
  const options1 = [
    { value: 'jack', label: 'Jack' },
    { value: 'john', label: 'John' },
    { value: 'mike', label: 'Mike' },
  ];

  const options2 = [
    { value: 'jack', label: 'Jack' },
    { value: 'john', label: 'John' },
    { value: 'mike', label: 'Mike' },
  ];

  const options3 = [
    { value: 'jack', label: 'Jack' },
    { value: 'john', label: 'John' },
    { value: 'mike', label: 'Mike' },
  ];

  const options4 = [
    { value: 'jack', label: 'Jack', color: '#FF8B00' },
    { value: 'john', label: 'John', color: '#36B37E' },
    { value: 'mike', label: 'Mike', color: '#0052CC' },
  ];

  const options5 = [
    { value: 'jack', label: 'Jack', color: '#FF8B00' },
    { value: 'john', label: 'John', color: '#36B37E' },
    { value: 'mike', label: 'Mike', color: '#0052CC' },
  ];

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: '#CCC' }),
    option: (styles, { data }) => ({ ...styles, color: data.color }),
    multiValue: (styles, { data }) => ({
        ...styles,
        backgroundColor: data.color,
        color: '#fff',
    }),

    multiValueLabel: (styles) => ({
        ...styles,
        color: 'fff',
    }),

    multiValueRemove: (styles) => ({
        ...styles,
        color: '#fff',
        cursor: 'pointer',
        ':hover': {
            color: '#fff',
        },
    }),
  };

  function handleChange1(selectedOption) {
    console.log('handleChange - 1', selectedOption);
  }

  function handleChange2(selectedOption) {
    console.log('handleChange - 2', selectedOption);
  }

  function handleChange3(selectedOption) {
    console.log('handleChange - 3', selectedOption);
  }

  function handleChange4(selectedOption) {
    console.log('handleChange - 4', selectedOption);
  }

  function handleChange5(selectedOption, actionMeta) {
    console.log('handleChange - 4', selectedOption, actionMeta);
  }

  const handleInputChange = (inputValue, actionMeta) => {
    console.log('handleInputChange', inputValue, actionMeta);
  };

  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
        const filteredOptions = options3.filter((option) => (
            option.label.toLowerCase().includes(searchValue.toLowerCase())));
        callback(filteredOptions);
    });
  };

  return (
    <>
      React Select Example
      <Select
        options={options1}
        onChange={handleChange1}
      />

      React Multi-Select Example
      <Select
        options={options2}
        onChange={handleChange2}
        isMulti
      />

      React Async Example - To Search Terms
      <AsyncSelect
        loadOptions={loadOptions}
        defaultOptions
        // isMulti
        onChange={handleChange3}
      />

      React Styled Multi-Select Example
      <Select
        options={options4}
        onChange={handleChange4}
        isMulti
        styles={colorStyles}
      />

      React Creatable Example
      <CreatableSelect
        options={options5}
        onChange={handleChange5}
        onInputChange={handleInputChange}
        isMulti
        styles={colorStyles}
      />
    </>
  );
}

export default App;
