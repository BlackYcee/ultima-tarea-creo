import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark fixed-bottom text-light py-3 mt-auto">
      <div className="container text-center">
        <small>&copy; {new Date().getFullYear()} Aplicacion para no se q</small>
      </div>
    </footer>
  );
}

export default Footer;
