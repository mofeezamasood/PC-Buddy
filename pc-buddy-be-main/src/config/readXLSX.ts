import XLSX from 'xlsx';
import { Components } from '../constants/components';
import populateData from './populateData';

export const readXLSXFile = (type: string) => {
  const workbook = XLSX.readFile(getFilePath(type));
  const sheet_name_list = workbook.SheetNames;
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  console.log(data);
  populateData(type, data);
  // console.log(data);
  return data;
};

const getFilePath = (type: string) => {
  switch (type) {
    case Components.PROCESSOR:
      return 'src/assets/Processors.xlsx';
    case Components.CPU_COOLER:
      return 'src/assets/CPUCoolers.xlsx';
    case Components.MOTHERBOARD:
      return 'src/assets/Motherboards.xlsx';
    case Components.RAM:
      return 'src/assets/RAMs.xlsx';
    case Components.STORAGE:
      return 'src/assets/Storages.xlsx';
    case Components.PSU:
      return 'src/assets/PSUs.xlsx';
    case Components.GPU:
      return 'src/assets/GPUs.xlsx';
    default:
      return '';
  }
};
