const products = [
  { title: "GPM Link", path: "/" },
  { title: "GPM for Businesses and Teams", path: "/" },
  { title: "GPM Mall", path: "/" },
  { title: "GPM Travel", path: "/" },
  { title: "GPM Token", path: "/" },
  { title: "GPM Reseller", path: "/" },
];

const Footer = () => (
  <footer>
    <h2>Language</h2>
    <span>English</span>
    <h2>GPM Products</h2>
    <ul>
      {products.map(({ title, path }) => (
        <li key={title}>
          <a href={path}>{title}</a>
        </li>
      ))}
    </ul>
    <h2>Trust & Legal</h2>
    <ul>
      <li>
        <a href="">Privacy & Policy</a>
      </li>
      <li>
        <a href="">Terms and Conditions</a>
      </li>
    </ul>
    <h2>App</h2>
    <p>Copyright &copy; 2022 All rights reserved - Gopop.me</p>
  </footer>
);

export default Footer;
