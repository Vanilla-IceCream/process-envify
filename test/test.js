import envify from '../src';

process.chdir(__dirname);

describe('process-envify', () => {
  it('should inject strings', () => {
    const env = {
      NODE_ENV: process.env.NODE_ENV || 'development',
      PORT: process.env.PORT || 3000,
    };

    expect(envify(env)).toMatchSnapshot();
  });
});
