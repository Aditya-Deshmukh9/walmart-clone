export interface Meta {
  sku: string;
  gtin: string | null;
}

export interface Rating {
  count: number;
  rating: number;
}

export interface Specification {
  key: string;
  value: string;
}

export interface Content {
  url: string;
  meta: Meta;
  price: number;
  title: string;
  rating: Rating;
  currency: string;
  _warnings: string[];
  breadcrumbs: string[];
  description: string;
  specifications: Specification[];
  images: string[];
  parse_status_code: number;
}
export interface Product {
  url: string;
  meta: Meta;
  price: number;
  title: string;
  rating: Rating;
  currency: string;
  _warnings: string[];
  breadcrumbs: string[];
  description: string;
  specifications: Specification[];
  images: string[];
  parse_status_code: number;
}

export interface Result {
  content: Content;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export interface WalmartAPIResponse {
  results: Result[];
}
