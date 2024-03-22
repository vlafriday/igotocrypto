import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="https://www.example.com">
      {/* Вместо текущего содержимого svg вставьте ваш логотип */}
      <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        {/* Здесь вставьте код вашего логотипа */}
        {/* Например: */}
        <image xlinkHref="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F76c3587d-2700-4001-879e-2de5535e70fb%2F6787a0b0-dd0d-4afc-8006-10592a481df7%2Fethereum.png?table=collection&id=0585b263-9d06-4851-99de-78c8238e6ac8&t=0585b263-9d06-4851-99de-78c8238e6ac8&width=800&cache=v2" width="32" height="32" />
      </svg>
    </Link>
  );
}
