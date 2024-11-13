export interface Data {
  type: string;
  title: string;
}

export interface DataWithPosition extends Data {
  position: number;
}

export interface CatApiResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}
