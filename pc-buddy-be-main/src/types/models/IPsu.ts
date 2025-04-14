interface IPSU {
  name: string;
  powerCapacity: number;
  // efficiencyRating: '80+ gold' | '80+ plat' | '80+ silver' | '90+ gold' | '90+ plat' | '90+ silver' | 'none';
  efficiencyRating: string;
  connectors: number;
  // modularity: 'Non-modular' | 'semi-modular' | 'fully modular';
  modularity: string;
  price: number;
  status: boolean;
  score: number;
}

export default IPSU;
