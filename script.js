// Navigasi mobile, filter menu, pencarian, dan data detail produk.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '×' : '☰';
});
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');
const searchInput = document.querySelector('#menu-search');
const emptyState = document.querySelector('#empty-state');
let activeFilter = 'all';
function filterMenu() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  let visible = 0;
  menuItems.forEach(item => {
    const categoryMatch = activeFilter === 'all' || item.dataset.category === activeFilter;
    const textMatch = item.textContent.toLowerCase().includes(query);
    const show = categoryMatch && textMatch;
    item.hidden = !show;
    if (show) visible++;
  });
  if (emptyState) emptyState.hidden = visible !== 0;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  filterMenu();
}));
searchInput?.addEventListener('input', filterMenu);

const products = {
  'bakso-daging':['Bakso','Bakso Daging','Rp12.000','Bakso daging disajikan bersama kuah hangat.','https://upload.wikimedia.org/wikipedia/commons/6/6e/Bakso_Indonesian_Meatball_Soup_from_Solo.jpg'],
  'bakso-urat':['Bakso','Bakso Urat','Rp12.000','Pilihan bakso dengan tekstur urat.','https://upload.wikimedia.org/wikipedia/commons/6/6e/Bakso_Indonesian_Meatball_Soup_from_Solo.jpg'],
  'bakso-telur':['Bakso','Bakso Telur','Rp12.000','Bakso dengan isian telur.','https://upload.wikimedia.org/wikipedia/commons/6/6e/Bakso_Indonesian_Meatball_Soup_from_Solo.jpg'],
  'bakso-setengah-porsi':['Bakso','Bakso ½ Porsi','Rp7.000','Porsi bakso yang lebih ringan.','https://upload.wikimedia.org/wikipedia/commons/6/6e/Bakso_Indonesian_Meatball_Soup_from_Solo.jpg'],
  'bakso-double':['Bakso','Bakso Double','Rp20.000','Pilihan bakso dengan porsi lebih banyak.','https://upload.wikimedia.org/wikipedia/commons/6/6e/Bakso_Indonesian_Meatball_Soup_from_Solo.jpg'],
  'mie-ayam-biasa':['Mie Ayam','Mie Ayam Biasa','Rp12.000','Mie ayam sebagai pilihan sajian utama.','https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1400&q=85'],
  'mie-ayam-bakso-kecil':['Mie Ayam','Mie Ayam Bakso Kecil','Rp14.000','Mie ayam dengan tambahan bakso kecil.','https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1400&q=85'],
  'mie-ayam-bakso-daging':['Mie Ayam','Mie Ayam Bakso Daging','Rp17.000','Mie ayam dengan tambahan bakso daging.','https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1400&q=85'],
  'mie-ayam-bakso-urat':['Mie Ayam','Mie Ayam Bakso Urat','Rp19.000','Mie ayam dengan tambahan bakso urat.','https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1400&q=85'],
  'mie-ayam-bakso-telur':['Mie Ayam','Mie Ayam Bakso Telur','Rp19.000','Mie ayam dengan tambahan bakso telur.','https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1400&q=85'],
  'pempek-kapal-selam':['Pempek','Kapal Selam','Rp4.500','Pempek kapal selam dengan isian telur.','https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85'],
  'pempek-lenjer':['Pempek','Lenjer','Rp4.500','Pempek berbentuk panjang.','https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85'],
  'pempek-adaan':['Pempek','Adaan','Rp4.500','Pempek berbentuk bulat.','https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85'],
  'pempek-kulit':['Pempek','Kulit','Rp4.500','Pempek dengan bahan kulit ikan.','https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85'],
  'pempek-satu-porsi':['Pempek','Satu Porsi','Harga belum dicantumkan','Harga belum terlihat pada daftar menu. Silakan konfirmasi langsung ke kedai.','https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85'],
  'es-teh-manis':['Minuman','Es Teh Manis','Harga belum dicantumkan','Harga belum terlihat pada daftar menu. Silakan konfirmasi langsung ke kedai.','https://images.unsplash.com/photo-1758705206938-a196ac3ae3bb?auto=format&fit=crop&w=1400&q=85'],
  'es-jeruk':['Minuman','Es Jeruk','Harga belum dicantumkan','Harga belum terlihat pada daftar menu. Silakan konfirmasi langsung ke kedai.','https://images.unsplash.com/photo-1689066117649-0ca9762fc92c?auto=format&fit=crop&w=1400&q=85'],
  'es-teh-tawar':['Minuman','Es Teh Tawar','Harga belum dicantumkan','Harga belum terlihat pada daftar menu. Silakan konfirmasi langsung ke kedai.','https://images.unsplash.com/photo-1758705206938-a196ac3ae3bb?auto=format&fit=crop&w=1400&q=85'],
  'teh-manis-hangat':['Minuman','Teh Manis Hangat','Harga belum dicantumkan','Harga belum terlihat pada daftar menu. Silakan konfirmasi langsung ke kedai.','https://images.unsplash.com/photo-1758705206938-a196ac3ae3bb?auto=format&fit=crop&w=1400&q=85'],
  'air-mineral':['Minuman','Air Mineral','Harga belum dicantumkan','Harga belum terlihat pada daftar menu. Silakan konfirmasi langsung ke kedai.','https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1400&q=85']
};
const params = new URLSearchParams(location.search);
const product = products[params.get('id')];
if (document.querySelector('#product-name')) {
  const [category, name, price, description, image] = product || ['Menu','Produk tidak ditemukan','', 'Silakan kembali ke daftar menu untuk memilih produk lain.',''];
  document.querySelector('#product-category').textContent = `BASO MASYU / ${category.toUpperCase()}`;
  document.querySelector('#product-name').textContent = name;
  document.querySelector('#product-price').textContent = price;
  document.querySelector('#product-description').textContent = description;
  if (image) document.querySelector('#product-image').src = image;
  document.title = `${name} — Baso Masyu`;
}
