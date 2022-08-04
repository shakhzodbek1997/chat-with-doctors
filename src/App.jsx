import React from 'react';
import {StreamChat} from  'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer } from './components';

import './App.css'

const apiKey = 'syn3p4rh4mmy';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="theme light">
        <ChannelListContainer 

        />
        <ChannelContainer 

        />
      </Chat>
    </div>
  );
}

export default App;
