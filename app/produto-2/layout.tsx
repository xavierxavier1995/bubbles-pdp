import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shampoo Pet Neutralizador Pineapple Essential 5L - Bubbles Pet',
  description: 'O segredo dos melhores groomers. Shampoo profissional com tecnologia Deoplex Clear para neutralização de odores e rendimento extremo (1:5).',
  openGraph: {
    title: 'Shampoo Pet Neutralizador Pineapple Essential 5L - Bubbles Pet',
    description: 'O segredo dos melhores groomers. Shampoo profissional com tecnologia Deoplex Clear para neutralização de odores e rendimento extremo (1:5).',
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
