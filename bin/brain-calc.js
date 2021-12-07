#!/usr/bin/env node

import runGame from '../index.js';
import { description, makeGameData } from '../src/games/calc.js';

runGame(description, makeGameData);
