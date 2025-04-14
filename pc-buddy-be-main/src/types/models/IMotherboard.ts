interface IMotherboard {
  name: string;
  socket: string;
  // formFactor: 'atx' | 'micro-atx' | 'mini-itx';
  formFactor: string;
  chipset: string;
  ramSlots: number;
  // ramType: 'ddr2' | 'ddr3' | 'ddr4' | 'ddr5';
  ramType: string;
  storageInterfaces: number;
  audioChipset: string;
  wifi: boolean;
  bluetooth: boolean;
  price: number;
  status: boolean;
  score: number;
}

export default IMotherboard;
