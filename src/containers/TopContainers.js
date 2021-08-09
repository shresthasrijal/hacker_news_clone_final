import React, { useEffect, useState } from 'react';
import { getTopStoryIds} from '../services/hnApi';
import {Story} from '../components/Story';

export const TopContainer = ()=> {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() =>{
    getTopStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      {storyIds.map(storyId =>(
    <Story key = {storyId} storyId = {storyId} />
      ))}
    </>
  );
};
