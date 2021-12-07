#!/usr/bin/env node

import runGame from '../index.js';
import { description, makeGameData } from '../src/games/prime.js';

runGame(description, makeGameData);
