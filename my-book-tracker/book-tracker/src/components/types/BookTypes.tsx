interface VolumeInfo {
  allowAnonLogging: boolean;
  authors: string[];
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  imageLinks: ImageLinks;
  industryIdentifiers: IndustryIdentifier[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: PanelizationSummary;
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  readingModes: ReadingModes;
  title: string;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface IndustryIdentifier {
  type: string;
  identifier: string;
}

interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface Books {
  accessInfo: Record<string, any>;
  id: string;
  etag: string;
  saleInfo: Record<string, any>;
  selfLink: string;
  volumeInfo: VolumeInfo;
}
export interface BookList {
  books?: Books[] | null;
}
