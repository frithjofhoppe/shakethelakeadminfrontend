// ./tests/setup.ts
import {describe, it, expect, afterEach} from 'vitest';

import {cleanup} from '@testing-library/react';

import React from 'react';


// Runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});