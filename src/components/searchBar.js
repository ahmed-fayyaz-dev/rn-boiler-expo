import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchbarComponent = ({
    onChange,
    value,
    placeholder = "Search",
    ...props
}) => {
    // const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => onChange(query);

    return (
        <Searchbar
            placeholder={placeholder}
            onChangeText={onChangeSearch}
            value={value}
            {...props}
        />
    );
};

export default SearchbarComponent;
