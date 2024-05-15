interface Part {
  code: string;
  name: string;
  price: number;
}

const parts: Part[] = [
  { code: "A", name: "LED Screen", price: 10.28 },
  { code: "B", name: "OLED Screen", price: 24.07 },
  { code: "C", name: "AMOLED Screen", price: 33.3 },
  { code: "D", name: "Wide-Angle Camera", price: 25.94 },
  { code: "E", name: "Ultra-Wide-Angle Camera", price: 32.39 },
  { code: "F", name: "USB-C Port", price: 18.77 },
  { code: "G", name: "Micro-USB Port", price: 15.13 },
  { code: "H", name: "Lightning Port", price: 20.0 },
  { code: "I", name: "Android OS", price: 42.31 },
  { code: "J", name: "iOS OS", price: 45.0 },
  { code: "K", name: "Metallic Body", price: 45.0 },
  { code: "L", name: "Plastic Body", price: 30.0 },
];

export default parts;
