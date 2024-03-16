import { Message, TypeMessage } from "../models/Message";

export const messages : Message[] = [
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
      content: "https://cdn.pixabay.com/photo/2024/02/25/10/11/forsythia-8595521_640.jpg",
      type: TypeMessage.IMAGE,
      ownership: "user",
      sender: "John",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat1",
      content: "https://cdn.pixabay.com/vimeo/191338839/les-abeilles-6341.mp4?width=640&hash=91b311db9dc4634b8bffd86044a9017bf879780c",
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
      content: "Check out this link: https://google.com",
      type: TypeMessage.TEXT,
      ownership: "user",
      sender: "John",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    },
    {
      chatId: "chat3",
      content: "https://cdn.pixabay.com/photo/2024/02/25/10/11/forsythia-8595521_640.jpg",
      type: TypeMessage.IMAGE,
      ownership: "contact",
      sender: "Jane",
      shared: false,
      create_at: new Date(),
      updated_at: new Date()
    }
  ];
  