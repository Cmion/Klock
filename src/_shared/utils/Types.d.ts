export interface Cities {
  city: string;
  city_short: string;
  country: string;
  country_code: string;
  utcOffset: string;
  dst: [string, string, string];
  createdAt: string;
  updatedAt: string;
  isSelected: boolean;
  _id: string;
}
export interface MenuItems {
  icon?: string;
  action: Function;
  title: string;
}
