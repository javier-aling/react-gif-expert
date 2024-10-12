import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault(); // Para detener el refrescamiento del navegador que tiene por defecto el <form>
        const trimValue = inputValue.trim();
        if (trimValue.length <= 1) return;

        // setCategories( (categories) => [inputValue, ...categories] );
        onNewCategory( trimValue );
        setInputValue('');
    };

  return (
    <form onSubmit={ onSubmit }>
        <input
            type='text'
            placeholder='Buscar Gifs'
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}