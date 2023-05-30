import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { Form, SearchButton, SearchField } from './SearchForm.styled';

export function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      setQuery('');
      toast.error('Search field is empty');
      return;
    }
    onSubmit(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchButton type="submit">
        <FiSearch style={{ marginRight: 8 }} />
      </SearchButton>
      <SearchField
        type="text"
        name="searchQuery"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={query}
        onChange={handleQueryChange}
      />
    </Form>
  );
}
export default SearchForm;
