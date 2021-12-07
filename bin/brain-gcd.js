#!/usr/bin/env node

import runGame from '../index.js';
import { description, makeGameData } from '../src/games/GCD.js';

runGame(description, makeGameData);
