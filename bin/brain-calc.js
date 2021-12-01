#!/usr/bin/env node

import playGame from '../index.js';
import { gameRule, makeGameData } from '../src/games/gameCalc.js';

playGame(gameRule, makeGameData);
