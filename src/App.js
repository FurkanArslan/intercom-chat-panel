import logo from './logo.svg';
import './App.css';
import ChattbotButton from './components/atoms/chatbotButton';
import { useState } from 'react';
import Chat from './components/templates/chat';
//376-704

function App() {
  const [showChat, setShowChat] = useState(false)
  return (
    <div className="App">
      {
        showChat && (<Chat />)
      }
      <ChattbotButton isChatShowing={showChat} showChat={(data) => { setShowChat(data) }} />
    </div>
  );
}

export default App;
