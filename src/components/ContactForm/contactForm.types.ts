export interface TopicValue {
  [key: string]: number; 
}

export interface Topic {
  name: string;
  data: TopicValue[]; 
}

export interface TopicsData {
  [key: string]: TopicValue[]; // Clave (tema) y su array de valores
}

export interface ContactFormValues {
  name: string;
  surname: string;
  email: string;
  idea: string;
  extra: string;
  company: string;
  consent: boolean;
}
