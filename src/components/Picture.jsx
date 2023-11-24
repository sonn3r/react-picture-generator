import {useState} from "react";
import photoData from '../photoData.jsx'

export default function Picture() {

    const [selectedPhoto, setRandomPhoto] = useState(null);

    const getRandomPhoto = () => {
        // Select a random photo from the photoData array
        const randomIndex = Math.floor(Math.random() * photoData.length);
        const randomPhoto = photoData[randomIndex];

        // Update the selected photo in the state
        setRandomPhoto(randomPhoto);

        // Log the selected photo's ID to the console
        console.log('Selected Photo ID:', randomPhoto.id);
    };

    return (
        <>
            <main>
                <div className='form'>
                    <input type="text" placeholder='Top text'/>
                    <input type="text" placeholder='Bottom text'/>
                    <button onClick={getRandomPhoto}>Get a new image</button>
                </div>
            </main>
            {selectedPhoto && (
                <div className="randomPhoto">
                    <img src={selectedPhoto.url} alt={`Photo ${selectedPhoto.id}`}/>
                </div>
            )}
        </>
    )
}