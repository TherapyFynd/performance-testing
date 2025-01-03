import { saveMetricsReport } from '../performanceUtils';
import path from 'path';
// module.exports = async () => {
//     console.log('Global teardown complete.');
//   };
  
export default async () => {
  const reportPath = path.resolve(__dirname, 'performance-report.txt');
  saveMetricsReport(reportPath);
};
