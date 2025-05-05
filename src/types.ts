// src/types.ts
export interface Journal {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    createdAt: string;
  }
  
  export interface NewJournalData {
    title: string;
    description: string;
  }