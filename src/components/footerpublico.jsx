import React from 'react';

function FooterPublico() {
  return (
    <footer className="bg-primary fixed-bottom text-light py-3 mt-auto">
      <div className="container text-center">
        <small>app para no se q &copy; {new Date().getFullYear()} — Creado por colocolo</small>
      </div>
    </footer>
  );
}

export default FooterPublico;
