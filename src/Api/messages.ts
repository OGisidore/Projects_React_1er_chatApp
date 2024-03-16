import { TypeMessage } from "../models/Message";

export const messages = [
    {
      chatId: "chat1",
      content: "Salut, comment ça va ?",
      type: TypeMessage.TEXT,
      ownership: "user",
      sender: "John",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat1",
      content: "Bonjour ! Tout va bien, merci.",
      type: TypeMessage.TEXT,
      ownership: "contact",
      sender: "Jane",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat1",
      content: "https://example.com/image.jpg",
      type: TypeMessage.IMAGE,
      ownership: "user",
      sender: "John",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat1",
      content: "Check out this video: https://example.com/video.mp4",
      type: TypeMessage.VIDEO,
      ownership: "contact",
      sender: "Jane",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat2",
      content: "Here's a PDF document: https://example.com/document.pdf",
      type: TypeMessage.PDF,
      ownership: "user",
      sender: "John",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat2",
      content: "Let's meet at 2 PM.",
      type: TypeMessage.TEXT,
      ownership: "contact",
      sender: "Jane",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat2",
      content: "https://example.com/audio.mp3",
      type: TypeMessage.AUDIO,
      ownership: "user",
      sender: "John",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat2",
      content: "Don't forget to bring the documents.",
      type: TypeMessage.TEXT,
      ownership: "contact",
      sender: "Jane",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat3",
      content: "Check out this link: https://example.com",
      type: TypeMessage.TEXT,
      ownership: "user",
      sender: "John",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat3",
      content: "https://example.com/image2.jpg",
      type: TypeMessage.IMAGE,
      ownership: "contact",
      sender: "Jane",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    }
  ];
  