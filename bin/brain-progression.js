#!/usr/bin/env node

import playGame from '../index.js';
import { gameRule, makeGameData } from '../src/games/gameProgression.js';

playGame(gameRule, makeGameData);
