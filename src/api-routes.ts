import type { Nullable } from './types';

export enum ApiRoute {
	Maybelline = 'maybelline',
	ELF = 'e.l.f.',
	CoverGirl = 'covergirl',
	AnnaBelle = 'annabelle',
	Marcelle = 'marcelle',
	Nyx = 'nyx',
	MineralFusion = 'mineral%20fusion'
}

export enum QueryType {
	Brand = 'brand='
}

export const apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export interface ProductType {
	id: Nullable<number>;
	brand: Nullable<string>;
	name: Nullable<string>;
	price: Nullable<string>;
	price_sign: Nullable<string>;
	currency: Nullable<string>;
	image_link: Nullable<string>;
	product_link: Nullable<string>;
	website_link: Nullable<string>;
	description: Nullable<string>;
	rating: Nullable<number>;
	category: Nullable<string>;
	product_type: Nullable<string>;
	tag_list: Nullable<string[]>;
	created_at: Nullable<string>;
	updated_at: Nullable<string>;
	product_api_url: Nullable<string>;
	api_featured_image: Nullable<string>;
	product_colors: Nullable<Record<string, string>[]>;
}
