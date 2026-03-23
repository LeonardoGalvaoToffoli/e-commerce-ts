export function Footer() {
  const currentDate = new Date().toLocaleDateString("pt-BR");

  return (
    <footer className="bg-light p-4 mt-auto border-top">
      <address className="mb-0 text-center text-muted">
        Leonardo Galvão-Desenvolvimento de software web (Prof. Alexandre
        Almeida)
        <br />
        Acessado em: {currentDate}
      </address>
    </footer>
  );
}
