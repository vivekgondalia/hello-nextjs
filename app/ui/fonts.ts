//use this file to keep the fonts that will be used throughout your application.
//Primary Font(Inter) and tt's Subset(latin)

import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ weight: ["400", "700"], subsets:['latin'] });