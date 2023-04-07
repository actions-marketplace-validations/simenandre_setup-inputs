import { info } from '@actions/core';
import github from '@actions/github';
// import { config } from './config';

if (github.context.eventName === 'repository_dispatch') {
  info(JSON.stringify(github.context.payload, null, 2));
}