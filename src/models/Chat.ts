import { Message } from "./Message";
import { User } from "./User";

export interface Chat {
  _id?: string;
  participants: User[];
  lastMessage: Message;
  unreadCount?: number;
  unreadMentionCount?: number;
  isAutoMuted?: boolean;
  archive?: boolean;
  notSpan?: boolean;
  message: string;
  imageUrl: string;
  time: string;
  created_at?: Date;
  updated_at?: Date;
}
