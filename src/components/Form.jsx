import React from 'react';

export default function FormContent(){

    //const [memeItem, setMemeItem] = React.useState('');
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/9iz9.jpg'
    });

    const [allMemesImage,  setAllMemesImage] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemesImage(data.data.memes))
    },[])


    function generateMeme(){
        const randNum = Math.floor(Math.random() * allMemesImage.length);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemesImage[randNum].url
        }))
    }

    function handleChange(event){

        const {name,value} = event.target

        setMeme(prevText => {
            return{
                ...prevText,
                [name] : value
            }
        })
    }

    const formVar = (
        <div className='form-container'>
            <form>
                <div className='input-container'>
                    <input 
                        type='text' 
                        name='topText' 
                        className='meme-intro' 
                        placeholder='Top Text'
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input 
                        type='text' 
                        name='bottomText' 
                        className='meme-outro' 
                        placeholder='Bottom Text'
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button className='form-btn' type='button' onClick={generateMeme}>Get a new meme image</button>
            </form>
            <div className='img-parent'>
                <div className='img-meme'>
                    {meme && <img src={meme.randomImage} alt="meme-img"/>}
                    <h2 className='meme-text top'>{meme.topText}</h2>
                    <h2 className='meme-text bottom'>{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    )

    return formVar;
}