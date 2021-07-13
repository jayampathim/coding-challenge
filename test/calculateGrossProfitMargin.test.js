  import getGrossProfitMargin from '../src/calculateGrossProfitMargin'

  describe('Test Calculating Gross Profit Margin', () => {

    const salesAndCredit_1 = {
      account_type: 'sales',
      value_type: 'credit',
      total_value: 50,
    };

    const salesAndDebit_2 = {
      account_type: 'sales',
      value_type: 'debit',
      total_value: 150,
    };
 
    test('when empty items', () => {
      expect(getGrossProfitMargin([],0)).toEqual(NaN);
    });

    test('ignore irrelavant sales and credit', () => {
      expect(getGrossProfitMargin([salesAndCredit_1,salesAndDebit_2],50)).toBeCloseTo(3);
    });

    
  });