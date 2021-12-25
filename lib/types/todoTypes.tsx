import { EmojiData } from 'emoji-mart';

export type TodoType = {
  title: string;
  emoji: EmojiData;
  createdBy: string;
  done: boolean;
  dueDate: string;
  priority: Priority;
  notification: boolean;
  repeating?: Repeating;
  deleted: boolean;
  deletedAt?: string;
};

export type CreateTodoType = {
  title: string;
  emoji: EmojiData;
  dueDate: string;
  priority: Priority;
  notification: boolean;
  repeating?: Repeating;
};

export type UpdateTodoType = {
  title?: string;
  emoji?: EmojiData;
  done?: boolean;
  dueDate?: string;
  priority?: Priority;
  notification?: boolean;
  repeating?: Repeating;
  deleted?: boolean;
  deletedAt?: string;
};

enum Priority {
  HIGHEST = 'HIGHEST',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  LOWEST = 'LOWEST',
}

enum Repeating {
  MAYBE = 'MAYBE',
  NOT = 'NOT',
  NEEDED = 'NEEDED',
}
