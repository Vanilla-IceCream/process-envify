import envify from '../src';

process.chdir(__dirname);

describe('process-envify', () => {
  it('should inject strings (process.env)', () => {
    const data = {
      BOOK_NAME: 'ECMAScript: Up and Running',
    };

    expect(envify(data)).toMatchSnapshot();
  });

  it('should inject strings (import.meta)', () => {
    const data = {
      BOOK_NAME: 'ECMAScript: Up and Running',
    };

    expect(envify(data, { useImportMeta: true })).toMatchSnapshot();
  });
});
