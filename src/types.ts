export interface Journal {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  cardColor: string;
  titleColor: string;
  descriptionColor: string;
}

export interface NewJournalData {
  title: string;
  description: string;
  titleColor: string;
  descriptionColor: string;
  cardColor: string;
}