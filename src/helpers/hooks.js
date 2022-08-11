import { useState, useEffect, useCallback, useRef } from "react";

/*--useStateWithCallback*/
export const useStateWithCallback = (initialState, callback) => {
    const [state, setState] = useState(initialState);

    useEffect(() => callback(state), [state, callback]);

    return [state, setState];
};

/*--CallBackLazily*/
export function useStateWithCallbackLazy(initialState) {
    const [state, setState] = useState(initialState);
    const cbRef = useRef(null);

    useEffect(() => {
    // cb.current is `null` on initial render,
    // so we only invoke callback on state *updates*
        if (cbRef.current) {
            cbRef.current(state);
            cbRef.current = null; // reset callback after execution
        }
    }, [state]);

    const setStateCallback = useCallback((state, cb) => {
        cbRef.current = cb;
        setState(state);
    }, []); // keep object reference stable

    return [state, setStateCallback];
}

//--searchHook To be Implemnted using useEffect
export const searchFilter = (data, searchText) => {
    var filteredData = [];
    const stringifiedObjectList = data.map((itemObj) =>
        JSON.stringify(itemObj).toLowerCase()
    );
    // filter on the string array. Just like searching a string
    const filteredStringifiedObjectList = stringifiedObjectList.filter(
        (itemObj) => itemObj.includes(searchText.toLowerCase())
    );
    const filtered = filteredStringifiedObjectList.map((item) =>
        JSON.parse(item)
    );
    filteredData = filtered;
    return filteredData;
};
