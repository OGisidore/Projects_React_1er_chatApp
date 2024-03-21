import { time } from "console";
import { Chat } from "../models/Chat";
import { TypeMessage } from "../models/Message";
import { users } from "./users";

export const chats: Chat[] = [
    {
        _id: "1",
        participants: [users[0], users[1]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, comment ça va ?",
            type: TypeMessage.TEXT,
            ownership: "contact",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:2,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[1].profile.picture,
        time :"13:01",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "2",
        participants: [users[0], users[2]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, tu es ou?",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[2].profile.picture,
        time :"12:27",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "3",
        participants: [users[0], users[3]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Stp prend moi de la glace",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[3].profile.picture,
        time :"12:07",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "4",
        participants: [users[0], users[4]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut Bb , t'es ou?",
            type: TypeMessage.TEXT,
            ownership: "contact",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:6,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[4].profile.picture,
        time :"11:30",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "5",
        participants: [users[0], users[5]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, fais moi momo 234$ ",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[5].profile.picture,
        time :"22:00",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "6",
        participants: [users[0], users[6]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, comment ça va ?",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[6].profile.picture,
        time :"17:00",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "7",
        participants: [users[0], users[7]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Tu vas repondre ?",
            type: TypeMessage.TEXT,
            ownership: "contact",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:4,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[7].profile.picture,
        time :"09:00",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "8",
        participants: [users[0], users[8]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, comment ça va ?",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[8].profile.picture,
        time :"15:00",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "9",
        participants: [users[0], users[9]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, comment ça va ?",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[9].profile.picture,
        time :"20:00",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "10",
        participants: [users[0], users[10]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, comment ça va ?",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[10].profile.picture,
        time :"10:00",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "8",
        participants: [users[0], users[8]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, comment ça va ?",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[8].profile.picture,
        time :"15:00",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "9",
        participants: [users[0], users[9]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, comment ça va ?",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[9].profile.picture,
        time :"20:00",
        created_at: new Date(),
        updated_at: new Date()


    },
    {
        _id: "10",
        participants: [users[0], users[10]],
        lastMessage: {
            _id:"1",
             chatId: "chat1",
            content: "Salut, comment ça va ?",
            type: TypeMessage.TEXT,
            ownership: "user",
            sender: "John",
            shared: false,
            create_at: new Date(),
            updated_at: new Date()
        },
        unreadCount:1,
        unreadMentionCount : 0,
        isAutoMuted : false,
        archive: false,
        notSpan:false,
        message:"hello jane !",
        imageUrl : users[10].profile.picture,
        time :"10:00",
        created_at: new Date(),
        updated_at: new Date()


    }

]