import { useState, useCallback } from "react";
import { generateId } from "../utils/id/generateId";
import { Message } from "../types/chat";
import { getResponse } from "../utils/responses";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([{
    id: generateId(),
    role: 'agent',
    content: "Neural network initialized. How may I assist you today?",
    timestamp: new Date()
  }]);
  const [isThinking, setIsThinking] = useState(false);
  const [isReady] = useState(true);

  const processMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsThinking(true);

    try {
      // For now, use simple response generation
      const response = getResponse('general');
      
      const agentMessage: Message = {
        id: generateId(),
        role: 'agent',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
    } catch (error) {
      console.error('Error processing message:', error);
      const errorMessage: Message = {
        id: generateId(),
        role: 'agent',
        content: "I apologize, but I encountered an error. Could you please try again?",
        timestamp: new Date(),
        error: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsThinking(false);
    }
  }, []);

  return {
    messages,
    processMessage,
    isReady,
    isThinking
  };
}