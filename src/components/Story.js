import React, { useEffect, useState } from 'react';
import {getStory, getStoryIds} from  "../services/hnApi";
import {StoryTitle, StoryWrapper, StoryMeta, StoryMetaElement} from '../styles/StoryStyles';

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && setStory(data));
    }, []);

    return story && story.url ? (
        <StoryWrapper data-testid ="story">
        <StoryTitle>
            <a href = {story.url}>{story.title}</a>
        </StoryTitle>

        <StoryMeta>
            <span className="story__by" data-testid="story-by">           
                <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
            </span>  

            <span className="story__time" data-testid="story-time">
                <StoryMetaElement color="#000">Posted:</StoryMetaElement>  {`${story.time}`}
                {story.time}
            </span>
        </StoryMeta>
        </StoryWrapper>

    ) : null;
};