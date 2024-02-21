import React, { Dispatch } from "react";
import { Container, Input } from "./styled";
import { IoSearch } from "react-icons/io5";

const SearchBar = (props: {
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
}) => {
  const { search, setSearch } = props;

  return (
    <Container className="search-bar-container">
      <IoSearch color="#592507" size={24} />
      <Input
        type="search"
        placeholder="Pesquisar receita..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </Container>
  );
};

export default SearchBar;
