interface IStorage {
  name: string;
  // type: 'hdd' | 'ssd';
  type: string;
  capacity: number;
  readSpeed: number;
  writeSpeed: number;
  // formFactor: '2.5-inch' | '3.5-inch' | 'm.2' | 'u.2';
  formFactor: string;
  price: number;
  status: boolean;
  score: number;
}

export default IStorage;
