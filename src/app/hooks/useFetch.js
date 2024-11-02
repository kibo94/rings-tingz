import { list } from '@/api';
import { useQuery } from '@tanstack/react-query';


const useFetchItems = (url, params = {}) => {
    //  if we  have a params,we have adjust them according our needs
    // Example of params
    /* {
        “limit”: 10,
        “search”: “”,
        “render”: false,
        “page”: 1,
        “filters”: [],
        “sort” : {
       “field”: “price”,
        “direction”: “asc”
       }
        */


    return useQuery({
        queryKey: ['recommendedItems'],
        queryFn: async () => {
            const res = await list(url, params);
            return res.payload.items;
        },
        onError: (error) => {
            console.error("Error fetching  items:", error);
        }
    });
};

export default useFetchItems;