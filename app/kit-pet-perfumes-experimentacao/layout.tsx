import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kit Pet Perfumes de Experimentação - Bubbles',
  description: 'Explore as nossas fragrâncias mais desejadas com o Kit Pet Perfumes de Experimentação da Bubbles. 10 fragrâncias icônicas de 30ml.',
  openGraph: {
    title: 'Kit Pet Perfumes de Experimentação - Bubbles',
    description: 'Explore as nossas fragrâncias mais desejadas com o Kit Pet Perfumes de Experimentação da Bubbles. 10 fragrâncias icônicas de 30ml.',
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
