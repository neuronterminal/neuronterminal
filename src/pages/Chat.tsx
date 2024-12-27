import React from 'react';
import { useChat } from '../hooks/useChat';
import { ChatMessage } from '../components/ChatMessage';
import { ChatInput } from '../components/ChatInput';
import { ChatContainer } from '../components/ChatContainer';
import { Header } from '../components/Header';

export function Chat() {
  const { messages, processMessage, isReady, isThinking } = useChat();

  return (
    <div className="w-full flex items-center justify-center">
      <ChatContainer>
        <Header isReady={isReady} onSettings={() => {}} />
        <div className="flex-1 h-[400px] overflow-y-auto mb-4 md:mb-6 custom-scrollbar">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        <ChatInput 
          onSend={processMessage}
          disabled={!isReady || isThinking}
        />
      </ChatContainer>
    </div>
  );
}