#!/usr/bin/env node

import runGame from '../index.js';
import { description, makeGameData } from '../src/games/progression.js';

runGame(description, makeGameData);
