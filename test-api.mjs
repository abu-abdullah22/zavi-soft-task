async function testApi() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    console.log("Products count:", data.length);
    console.log("First product:", JSON.stringify(data[0], null, 2));
  } catch (e) {
    console.error("API Error:", e);
  }
}
testApi();
