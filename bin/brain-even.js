#!/usr/bin/env node

import playGame from '../index.js';
import { gameRule, makeGameData } from '../src/games/gameEven.js';

playGame(gameRule, makeGameData);
