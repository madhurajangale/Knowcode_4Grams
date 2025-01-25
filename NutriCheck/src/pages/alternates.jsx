// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import "../styles/alternates.css";

// function Recommendations() {
//     const [recommendations, setRecommendations] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5001/api/recommendations')
//             .then(response => {
//                 console.log(response.data);
//                 setRecommendations(response.data || []);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the recommendations!', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Recommended Alternatives</h1>
//             <ul>
//                 {recommendations.map((item, index) => (
//                     <li key={index}>
//                         <p>Product Name: {item.product_name}</p>
//                         <p>Nutri-Score: {item.nutri_score}</p>
//                         <p>Carbon Footprint: {item.carbon_footprint} kg CO2</p>
//                         <p>More Info: <a href={item.url} target="_blank" rel="noopener noreferrer">Click here</a></p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Recommendations;


import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/alternates.css";

function Recommendations() {
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
<<<<<<< HEAD
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/recommendations');
                if (Array.isArray(response.data)) {
                    setRecommendations(response.data);
                } else {
                    console.error("Invalid data format:", response.data);
                    setError("Received invalid data from the server.");
                }
            } catch (err) {
                console.error("There was an error fetching the recommendations!", err);
                setError("Failed to fetch recommendations. Please try again later.");
            }
        };

        fetchRecommendations();
=======
        axios.get('http://localhost:5001/api/recommendations')
            .then(response => {
                console.log(response)
                setRecommendations(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the recommendations!', error);
            });
>>>>>>> f498ab6b879e3b16319e51941abe2fd77a6a0964
    }, []);

    return (
        <div>
            <h1>Recommended Alternatives</h1>
            {error ? (
                <p className="error">{error}</p>
            ) : recommendations.length === 0 ? (
                <p>Loading recommendations...</p>
            ) : (
                <ul>
                    {recommendations.map((item, index) => (
                        <li key={index}>
                            <p><strong>Product Name:</strong> {item.product_name}</p>
                            <p><strong>Nutri-Score:</strong> {item.nutri_score}</p>
                            <p><strong>Carbon Footprint:</strong> {item.carbon_footprint === Infinity ? "Not Available" : `${item.carbon_footprint} kg CO2`}</p>
                            <p><strong>More Info:</strong> <a href={item.url} target="_blank" rel="noopener noreferrer">Click here</a></p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Recommendations;

