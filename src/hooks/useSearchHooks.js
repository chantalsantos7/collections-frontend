import { useState } from "react";

export const useSearch = () => {
    const [searchBarText, setSearchBarText] = useState(``);

    return { searchBarText, setSearchBarText };
}