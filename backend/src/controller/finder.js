/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable no-continue */
import out from '../helpers/response.js';
import reverseFunc from '../helpers/reverse.js';
import digitChecker from '../helpers/digitsChecker.js';

class FinderController {
  static async findNumbers(req, res) {
    try {
      const { number } = req.body;
      const foundNumbers = [];
      for (let i = 1; i <= number; i++) {
        const num = i; let sum = 0;
        if (i % 10 === 0) continue;
        const reverse = reverseFunc(i);
        sum = num + reverse;
        const flag = digitChecker(sum);
        if (flag === 0) {
          foundNumbers.push(i);
        }
      }
      if (foundNumbers.length === 0) {
        return out(res, 404, 'No reversible numbers were found in that range!');
      }
      return out(res, 200, 'Reversible numbers found successfully', foundNumbers);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default FinderController;
