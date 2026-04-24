import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprar Shampoo Pet Neutralizador Pineapple 5L - Bubbles',
  description: 'Compre o Shampoo Pet Neutralizador Pineapple Essential 5L Bubbles. Ideal para cães e gatos, elimina odores, rende 1:5 e tem perfume duradouro. Aproveite!',
  openGraph: {
    title: 'Comprar Shampoo Pet Neutralizador Pineapple 5L - Bubbles',
    description: 'Compre o Shampoo Pet Neutralizador Pineapple Essential 5L Bubbles. Ideal para cães e gatos, elimina odores, rende 1:5 e tem perfume duradouro. Aproveite!',
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
