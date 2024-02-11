type Rating = {
  count: number;
  rating: number;
};

type Meta = {
  sku: string;
  gtin: string | null;
};

type Content = {
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
};

type Result = {
  content: Content;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
};

type ApiResponse = {
  results: Result[];
};
