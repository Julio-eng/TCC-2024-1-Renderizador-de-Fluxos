export interface Option {
  value: string;
  goToSectionId: string
}

export interface Item {
  type: string;
  required?: boolean;
  options?: Option[];
  image?: string;
  itemId: string
  description: string
  text: string;
}

export interface Section {
  sectionId: string;
  title: string;
  description: string
  items: Item[] | [];
}

export interface Occupation {
  title: string;
  sections: Section[];
}

export interface Form {
  occupation: Occupation
}