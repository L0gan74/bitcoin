import Link from "next/link";

export default function FourOhFour() {
  return (
    <div >
      <h1>Введён не корректный URL || Cтраницы не существует</h1>
      <Link href="/">
        Вернутся на главную страницу
      </Link>
    </div>
  );
}