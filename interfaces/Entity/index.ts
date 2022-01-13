export interface Url {
  url: string;
}

export interface User {
  username: string;
  introduction?: string;
  email?: string;
  carrerFirst?: string;
  carrerSecond?: string;
  banner?: Url;
  profile: Url;
}

export interface Tag {
  id: string;
  text: string;
}

export interface ContentFile {
  description: string;
}

export interface Content {
  _id: string;
  images: Url[];
  view: string;
  interest: string;
  title: string;
  userinfo: User;
  personalPrice: number;
  businessPrice: number;
  enterprisePrice: number;
  individualPrice: number;
  companyPrice: number;
  content_file?: ContentFile;
  tags?: Tag[];
}
