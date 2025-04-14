interface IProcessor {
  name: string;
  type: 'desktop' | 'laptop' | 'server' | 'workstation';
  cores: number;
  threads: number;
  baseClock: number;
  boostClock: number;
  cache: number;
  tdp: number;
  architecture: number;
  socket: string;
  integratedGraphics: boolean;
  overClockable: boolean;
  price: number;
  status: boolean;
  score: number;
}

export default IProcessor;
