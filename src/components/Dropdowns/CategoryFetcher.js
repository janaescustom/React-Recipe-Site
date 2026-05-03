import React, { useEffect } from 'react'

const CategoryFetcher = ({ selectedCateogry, onFetchedData }) => {
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCateogry}`);
        const data = await response.json();
        onFetchedData(data);
      }
      catch (error) {
        console.error('Error:', error);
      }
    };
    
    if (selectedCateogry !== 'DEFAULT') {
      
    }
  }, [selectedCateogry, onFetchedData]
  );
  return null;
}

export default CategoryFetcher
