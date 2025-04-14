interface IGPU {
  name: string;
  type: 'integrated' | 'discrete' | 'desktop';
  busInterface: string;
  coreClock: number;
  memoryType: string;
  memoryCapacity: number;
  directX: number;
  openGL: number;
  tdp: number;
  numberOfPorts: number;
  price: number;
  status: boolean;
  score: number;
}

export default IGPU;
