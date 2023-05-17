import validateEmail from '../validateEmail';

export default () => {
  describe('Validate Email function', () => {
    it('should match with correct emails', () => {
      expect(validateEmail('apple@apple.app')).toBe(true);
      expect(validateEmail('my.ownsite@ourearth.org')).toBe(true);
      expect(validateEmail('mysite@you.me.net.me')).toBe(true);
    });

    it('should match with correct emails', () => {
      expect(validateEmail('mysite.ourearth.com')).toBe(false);
      expect(validateEmail('mysite@.com.my')).toBe(false);
      expect(validateEmail('@you.me.net')).toBe(false);
      expect(validateEmail('mysite123@gmail.b')).toBe(false);
      expect(validateEmail('mysite@.org.org')).toBe(false);
      expect(validateEmail('mysite@org')).toBe(false);
      expect(validateEmail('.mysite@mysite.org')).toBe(false);
      expect(validateEmail('mysite()*@gmail.com')).toBe(false);
      expect(validateEmail('mysite..1234@yahoo.com')).toBe(false);
    });
  });
};
