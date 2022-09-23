import { describe, it, expect } from 'vitest';

import envify from '../src';

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
