// import React, {useCallback, useEffect, useState} from "react";



// function useFetch(url) {
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)
//     useEffect(() => {
        
//             fetch(url)
//             .then((res) => res.json())
//             .then((data) => setData(data.splice(0, 50)) , setLoading(false))
//             .catch(error =>  setError(error), setLoading(false));

            
//     }, [url])
//     console.log(data.includes("Error"))

//   return{data , loading, error};
// }

// export default useFetch;

import React, { useCallback, useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true); // Set loading state to true before fetching data
        setError(null); // Reset error state before fetching data

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setData(data.splice(0, 50)); // Set data
            })
            .catch((error) => {
                setError(error); // Set error state
            })
            .finally(() => {
                setLoading(false); // Set loading state to false whether fetch succeeds or fails
            });
    }, [url]);
    return { data, loading, error };
}

export default useFetch;
