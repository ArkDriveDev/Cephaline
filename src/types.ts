export interface Journal {
  id: string;
  title: string;
  description: string;
  cardColor: string;
  titleColor: string;
  descriptionColor: string;
  createdAt: string;
  updatedAt?: string;
  content?: string; // Add this if you want full journal content
}

export interface NewJournalData {
  title: string;
  description: string;
  titleColor: string;
  descriptionColor: string;
  cardColor: string;
}