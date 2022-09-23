import { describe, it, expect } from 'vitest';

import envify from '../src';

describe('process-envify', () => {
  it('should inject strings', () => {
    const data = {
      BOOK_NAME: 'ECMAScript: Up and Running',
    };

    expect(envify(data)).toMatchSnapshot();
  });
});
