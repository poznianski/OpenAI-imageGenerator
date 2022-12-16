import React, { useState, useRef, useEffect } from 'react';
import { Loader } from '../Loader';
import '../../styles/main.scss';
import { GeneratedImage } from '../GeneratedImage';

export const FormForImage = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('small');
  const [isLoading, setIsLoading] = useState(false);
  const generatedImageRef = useRef<any>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const BASE_URL = 'https://openai-be.onrender.com/openai/generateimage';

  const generateImageRequest = async (prompt: string, size: string) => {
    setIsLoading(true);

    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          size
        })
      });

      if (!response.ok) {
        throw new Error('Image could not be generated');
      }

      const data = await response.json();
      const imageUrl = data.data;

      setIsLoading(false);

      generatedImageRef.current.src = imageUrl;
      setIsImageLoaded(true);

    } catch (error) {
      setIsLoading(false);
      throw new Error('Something went wrong');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (prompt === '') {
      alert('Please add some text');
      return;
    }

    generateImageRequest(prompt, size);
    setPrompt('');
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="prompt"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Describe a picture you want (e.g. Red bear playing balalaika, Sad man dancing on the Moon, etc) and press
            the button Generate down below
          </label>
          <input
            id="prompt"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={(event => setPrompt(event.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          />

          <label htmlFor="size" className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Choose size of the image
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
              dark:focus:border-blue-500 mb-4 w-[150px]"
            id="size"
            value={size}
            onChange={(event => setSize(event.target.value))}
          >
            <option value="small">small (256x256)</option>
            <option value="medium">medium (512x512)</option>
            <option value="large">large (1024x1024)</option>
          </select>

          <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
          focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5
          mr-2 mb-10 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Generate
          </button>
        </form>
      </div>

      {isLoading && <Loader/>}

      <div>
        <img
          className="max-w-lg h-auto rounded-lg"
          ref={generatedImageRef}
          alt="generated image"
        />
      </div>

      {/*{imageLoaded && <GeneratedImage generatedImageRef={generatedImageRef}/>}*/}

    </>
  )
}
