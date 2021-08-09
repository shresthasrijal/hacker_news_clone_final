import React, { useEffect, useState } from 'react';
import { getBestStoryIds} from '../services/hnApi';
import {Story} from '../components/Story';

export const BestContainer = ()=> {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() =>{
    getBestStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      {storyIds.map(storyId =>(
    <Story key = {storyId} storyId = {storyId} />
      ))}
    </>
  );
};