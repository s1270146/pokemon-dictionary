// Header
export const logoPath: string = '/images/header/logo.svg';
export const sortImagePath: string = '/images/header/icon_sort.svg';
export const searchImagePath: string = '/images/header/icon_search.svg';

// Heading

export const pickupPath: string = '/images/heading/pickup.svg';
export const ballPath: string = '/images/heading/ball.svg';

// API
const api = process.env.NEXT_PUBLIC_API ?? 'http://localhost:9292';

export const apiPath: string = `${api}/api/v1`;
