// src/data/products.js
export const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'clothing', name: 'เสื้อผ้า' },
    { id: 'books', name: 'หนังสือ' }
];

// ข้อมูลสินค้าพื้นฐาน - นักศึกษาจะเพิ่มเติมใน Challenge
export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "electronics",
    price: 45900,
    originalPrice: 49900,
    discount: 8,
    image: "https://placehold.co/300x300/007bff/ffffff?text=iPhone+15",
    description: "สมาร์ทโฟนล่าสุดจาก Apple",
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "เสื้อยืดผ้าฝ้าย",
    category: "clothing",
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: "https://placehold.co/300x300/ffc107/000000?text=T-Shirt",
    description: "เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย",
    inStock: true,
    rating: 4.2
  },
  {
    id: 3,
    name: "หนังสือ React.js Guide",
    category: "books",
    price: 650,
    originalPrice: 650,
    discount: 0,
    image: "https://placehold.co/300x300/17a2b8/ffffff?text=React+Book",
    description: "คู่มือเรียนรู้ React.js ฉบับสมบูรณ์",
    inStock: false,
    rating: 4.7
  },
  {
    id: 4,
    name: "หูฟังไร้สาย SoundX",
    category: "electronics",
    price: 2490,
    originalPrice: 2990,
    discount: 17,
    image: "https://placehold.co/300x300/6f42c1/ffffff?text=SoundX",
    description: "เสียงคมชัด เบสแน่น พร้อมระบบตัดเสียงรบกวน",
    inStock: true,
    rating: 4.5
  },
  {
    id: 5,
    name: "กางเกงยีนส์สีน้ำเงิน",
    category: "clothing",
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: "https://placehold.co/300x300/20c997/000000?text=Jeans",
    description: "กางเกงยีนส์ทรงสวย ใส่สบายทุกโอกาส",
    inStock: true,
    rating: 4.3
  }
];