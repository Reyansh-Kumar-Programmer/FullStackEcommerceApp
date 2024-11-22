const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function listProducts() {
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }
  return data;
}

export async function fetchProductById(id: number) {
  const res = await fetch(`${API_URL}/products/${id}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }
  return data;
}
