interface IRAM {
  name: string;
  // type: 'ddr' | 'ddr2' | 'ddr3' | 'ddr4' | 'ddr5'; // Add more types as needed
  type: string
  capacity: number;
  readSpeed: number;
  writeSpeed: number;
  latency: number;
  ecc: boolean;
  rgb: boolean;
  price: number;
  status: boolean;
  score: number;
}

export default IRAM;
