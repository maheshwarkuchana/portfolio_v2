import { hex2rgba } from './index';

describe('hex2rgba', () => {
  test('converts #ffffff to rgba(255,255,255,1)', () => {
    expect(hex2rgba('#ffffff')).toBe('rgba(255,255,255,1)');
  });

  test('converts #000000 with alpha 0.5', () => {
    expect(hex2rgba('#000000', 0.5)).toBe('rgba(0,0,0,0.5)');
  });

  test('converts uppercase hex', () => {
    expect(hex2rgba('#FF0000')).toBe('rgba(255,0,0,1)');
  });
});
