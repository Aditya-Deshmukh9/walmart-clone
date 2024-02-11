// export interface WalmartProductResult {
//   results: ProductContent();
//   job: JobDetails;
// }

// export interface ProductContent {
//   content: Product;

// }

export interface Rating {
  count: number;
  rating: number;
}

export interface Meta {
  sku: string;
  gtin: string | null;
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
  specifications: { key: string; value: string }[];
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

export interface ApiResponse {
  results: Result[];
}
