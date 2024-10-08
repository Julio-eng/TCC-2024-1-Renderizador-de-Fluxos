export interface Option {
    value: string;
    goToSectionId: string
}

export interface Item {
    itemId: string;
    type: string;
    text: string;
    required: boolean
    options: Option[];
}

export interface Section {
    sectionId: string;
    title: string;
    items: Item[] | [];
}

export interface Occupation {
  title: string;
  sections: Section[];
}

export interface Form {
    occupation: Occupation
}