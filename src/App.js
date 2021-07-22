import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />;
    return(
        <ChatEngine
            height="100vh"
            projectID="8bccc260-25ad-459f-af91-c8a8e4c9c2ae"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed  {...chatAppProps} />}
        />
    );
}

export default App;
