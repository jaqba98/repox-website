export interface PersonsSocialMediaModel {
  label: string;
  link: string;
}

export interface PersonsModel {
  avatar: string;
  name: string;
  description: string;
  socialMedias: PersonsSocialMediaModel[];
}
