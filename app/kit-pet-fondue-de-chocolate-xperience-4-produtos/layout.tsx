import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprar Kit Pet Fondue de Chocolate Xperience - Bubbles',
  description: 'Kit Pet Fondue de Chocolate Xperience Bubbles. Transforme o banho em uma experiência sensorial única com hidratação, maciez e perfume intenso.',
  openGraph: {
    title: 'Comprar Kit Pet Fondue de Chocolate Xperience - Bubbles',
    description: 'Kit Pet Fondue de Chocolate Xperience Bubbles. Transforme o banho em uma experiência sensorial única com hidratação, maciez e perfume intenso.',
    images: [
      {
        url: '{{ product.featured_image | img_url: "1200x630" }}',
        width: 1200,
        height: 630,
        alt: '{{ product.title }}',
      },
    ],
  },
};

export default function ProdutoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
