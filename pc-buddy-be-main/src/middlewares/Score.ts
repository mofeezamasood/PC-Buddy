type EfficiencyRating = '80+ gold' | '80+ plat' | '80+ silver' | '90+ gold' | '90+ plat' | '90+ silver';
type ModularityType = 'Non-modular' | 'semi-modular' | 'fully modular';
type FormFactorType = '2.5-inch' | '3.5-inch' | 'm.2' | 'u.2';

export default class Score {
  static calculatePSUScore(
    powerCapacity: number,
    efficiencyRating: EfficiencyRating,
    connectors: number,
    modularity: ModularityType,
    price: number,
  ): number {
    // Assigning weights
    const weightPowerCapacity = 0.3;
    const weightEfficiency = 0.3;
    const weightConnectors = 0.1;
    const weightModularity = 0.2;
    const weightPrice = 0.05;

    // Normalizing values
    const normalizedPowerCapacity = (powerCapacity - 300) / (1200 - 300);
    const normalizedConnectors = (connectors - 3) / (10 - 3);
    const normalizedPrice =
      1 -
      (powerCapacity <= 500
        ? price / 16000
        : powerCapacity <= 750
        ? price / 40000
        : powerCapacity <= 1000
        ? price / 150000
        : price / 300000);

    // Rating efficiencies
    const efficiencyScores: Record<EfficiencyRating, number> = {
      '80+ gold': 0.8,
      '80+ plat': 0.9,
      '80+ silver': 0.7,
      '90+ gold': 0.9,
      '90+ plat': 1,
      '90+ silver': 0.85,
    };
    const efficiencyScore = efficiencyScores[efficiencyRating] || 0.5;

    // Rating modularity
    const modularityScores: Record<ModularityType, number> = {
      'Non-modular': 0.5,
      'semi-modular': 0.75,
      'fully modular': 1,
    };
    const modularityScore = modularityScores[modularity] || 0.5;

    // Calculating score
    return (
      weightPowerCapacity * normalizedPowerCapacity +
      weightEfficiency * efficiencyScore +
      weightConnectors * normalizedConnectors +
      weightModularity * modularityScore +
      weightPrice * normalizedPrice
    );
  }

  static calculateCPUCoolerScore(
    type: string,
    noOfFans: number,
    minFanSpeed: number,
    maxFanSpeed: number,
    size: number,
    rgb: boolean,
    price: number,
  ): number {
    // Assigning weights (These values are examples and might need adjustment)
    const weightNoOfFans = 0.15;
    const weightFanSpeedRange = 0.2; // Considering both min and max fan speed
    const weightSize = 0.1;
    const weightRgb = 0.05;
    const weightPrice = 0.1;

    // Normalizing attributes to be in the range of 0 to 1
    const normalizedFanSpeedRange = (maxFanSpeed - minFanSpeed - 0) / (4000 - 0);
    const normalizedSize = (size - 30) / (200 - 30);
    const normalizedPrice = (price - 0) / (500 - 0);

    // Calculating score based on weighted sum
    return (
      1 /
      (noOfFans * weightNoOfFans +
        normalizedFanSpeedRange * weightFanSpeedRange +
        normalizedSize * weightSize +
        (rgb ? 1 : 0) * weightRgb +
        normalizedPrice * weightPrice)
    );
  }

  static calculateProcessorScore(
    cores: number,
    threads: number,
    baseClock: number,
    boostClock: number,
    cache: number,
    tdp: number,
    architecture: number,
    integratedGraphics: boolean,
    overclockable: boolean,
  ): number {
    // Assigning weights to each parameter
    const weightCores = 0.25;
    const weightThreads = 0.2;
    const weightBaseClock = 0.15;
    const weightBoostClock = 0.1;
    const weightCache = 0.05;
    const weightTdp = 0.1;
    const weightArchitecture = 0.05;
    const weightIntegratedGraphics = 0.05;
    const weightOverclockable = 0.05;

    // Normalized Attributes for each parameter
    const normalizedCores = cores / 128;
    const normalizedThreads = threads / 256;
    const normalizedBaseClock = baseClock / 5.0;
    const normalizedBoostClock = boostClock / 7.0;
    const normalizedCache = cache / 128;
    const normalizedTdp = 1 - tdp / 500;
    const normalizedArchitecture = 1 - architecture / 28;
    const normalizedIntegratedGraphics = integratedGraphics ? 1 : 0;
    const normalizedOverclockable = overclockable ? 1 : 0;

    // Calculating score based on weighted sum
    return (
      weightCores * normalizedCores +
      weightThreads * normalizedThreads +
      weightBaseClock * normalizedBaseClock +
      weightBoostClock * normalizedBoostClock +
      weightCache * normalizedCache +
      weightTdp * normalizedTdp +
      weightArchitecture * normalizedArchitecture +
      weightIntegratedGraphics * normalizedIntegratedGraphics +
      weightOverclockable * normalizedOverclockable
    );
  }

  static calculateGPUScore(
    coreClock: number,
    memoryCapacity: number,
    directx: number,
    opengl: number,
    tdp: number,
    noOfPorts: number,
  ): number {
    // Assigning weights
    const weightCoreClock = 0.25;
    const weightMemoryCapacity = 0.25;
    const weightDirectx = 0.1;
    const weightOpengl = 0.1;
    const weightTdp = 0.1;
    const weightPorts = 0.1;

    // Normalizing values
    const normalizedCoreClock = (coreClock - 500) / (2500 - 500);
    const normalizedMemoryCapacity = (memoryCapacity - 128) / (80000 - 128);
    const normalizedDirectx = (directx - 1.0) / (15.0 - 1.0);
    const normalizedOpengl = (opengl - 1.0) / (5.0 - 1.0);
    const normalizedTdp = 1 - (tdp - 5.0) / (350.0 - 5.0); // Lesser TDP is usually preferred
    const normalizedPorts = (noOfPorts - 0) / (5 - 0);

    // Calculating score
    return (
      weightCoreClock * normalizedCoreClock +
      weightMemoryCapacity * normalizedMemoryCapacity +
      weightDirectx * normalizedDirectx +
      weightOpengl * normalizedOpengl +
      weightTdp * normalizedTdp +
      weightPorts * normalizedPorts
    );
  }

  static calculateMotherboardScore(
    ramSlots: number,
    storageInterfaces: number,
    wifi: boolean,
    bluetooth: boolean,
    price: number,
  ): number {
    // Assigning weights (These values are examples and might need adjustment)
    const weightRamSlots = 0.29;
    const weightStorageInterfaces = 0.29;
    const weightWifi = 0.2;
    const weightBluetooth = 0.2;
    const weightPrice = 0.02;

    // Normalizing values
    const normalizedRamSlots = ramSlots / 32;
    const normalizedStorageInterfaces = storageInterfaces / 10;
    const normalizedWifi = wifi ? 1 : 0;
    const normalizedBluetooth = bluetooth ? 1 : 0;
    const normalizedPrice = price / 100000;

    // Calculating score based on weighted sum
    return (
      normalizedRamSlots * weightRamSlots +
      normalizedStorageInterfaces * weightStorageInterfaces +
      normalizedWifi * weightWifi +
      normalizedBluetooth * weightBluetooth +
      normalizedPrice * weightPrice
    );
  }

  static calculateRAMScore(
    capacity: number,
    readSpeed: number,
    writeSpeed: number,
    latency: number,
    ecc: boolean,
    rgb: boolean,
    price: number,
    status: boolean,
  ): number {
    // Assigning weights
    const weightCapacity = 0.3;
    const weightReadSpeed = 0.1;
    const weightWriteSpeed = 0.1;
    const weightLatency = 0.1;
    const weightEcc = 0.1;
    const weightRgb = 0.05;
    const weightPrice = 0.2;
    const weightStatus = 0.05;

    // Normalizing values
    const normalizedCapacity = (capacity - 2) / (128 - 2); // Assuming the range to be from 2GB to 128GB
    const normalizedReadSpeed = (readSpeed - 800) / (6400 - 800);
    const normalizedWriteSpeed = (writeSpeed - 800) / (6400 - 800);
    const normalizedLatency = 1 - latency / 200; // Lesser latency is better
    const normalizedPrice = 1 - price / 80000; // Lesser price is better

    // Calculating score
    return (
      weightCapacity * normalizedCapacity +
      weightReadSpeed * normalizedReadSpeed +
      weightWriteSpeed * normalizedWriteSpeed +
      weightLatency * normalizedLatency +
      (ecc ? weightEcc : 0) +
      (rgb ? weightRgb : 0) +
      weightPrice * normalizedPrice +
      (status ? weightStatus : 0)
    );
  }

  static calculateStorageScore(
    capacity: number,
    readSpeed: number,
    writeSpeed: number,
    formFactor: FormFactorType,
    price: number,
  ): number {
    // Assigning weights (You can adjust weights as per your requirement)
    const weightCapacity = 0.3;
    const weightReadSpeed = 0.2;
    const weightWriteSpeed = 0.2;
    const weightFormFactor = 0.2; // Can be further refined based on form factors
    const weightPrice = 0.1;

    // Normalizing values
    const normalizedCapacity = (capacity - 128) / (8192 - 128); // Assuming the range to be from 128GB to 8TB
    const normalizedReadSpeed = (readSpeed - 80) / (5000 - 80);
    const normalizedWriteSpeed = (writeSpeed - 80) / (5000 - 80);
    const normalizedPrice = 1 - price / 15000; // Lesser price is better

    // Calculating score based on form factor
    let formFactorScore = 0;
    switch (formFactor) {
      case '2.5-inch':
        formFactorScore = 0.8;
        break;
      case '3.5-inch':
        formFactorScore = 0.7;
        break;
      case 'm.2':
        formFactorScore = 1;
        break;
      case 'u.2':
        formFactorScore = 0.9;
        break;
      default:
        formFactorScore = 0; // Default case if the form factor is not recognized
    }

    // Calculating total score
    return (
      weightCapacity * normalizedCapacity +
      weightReadSpeed * normalizedReadSpeed +
      weightWriteSpeed * normalizedWriteSpeed +
      weightFormFactor * formFactorScore +
      weightPrice * normalizedPrice
    );
  }
}
