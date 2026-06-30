import React, { useEffect, useState } from 'react'

const CategoryFetcher = ({ selectedCateogry, onFetchedData }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      console.log(selectedCateogry)
      try {
        setLoading(true);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCateogry}`);
        const data = await response.json();
        onFetchedData(data);
        console.log(data)
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
