import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '{{ product.title }} | Bubbles Pet',
  description: '{{ product.description | strip_html | truncate: 160 }}',
  openGraph: {
    title: '{{ product.title }}',
    description: '{{ product.description | strip_html | truncate: 160 }}',
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
