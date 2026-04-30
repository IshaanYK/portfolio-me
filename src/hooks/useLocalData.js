import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

/**
 * Custom hook to fetch mock collections locally
 * @param {string} collectionName - name of the collection (e.g., 'certs', 'exp_internships')
 */
export const useLocalData = (collectionName) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulating immediate load from local static data
        try {
            const staticData = portfolioData[collectionName] || [];
            setData(staticData);
            setLoading(false);
        } catch (err) {
            console.error(`Error fetching collection ${collectionName}:`, err);
            setError(err);
            setLoading(false);
        }
    }, [collectionName]);

    return { data, loading, error };
};
