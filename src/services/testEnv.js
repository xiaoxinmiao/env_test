import { backendAddr } from '../utils/config';

export function getEnv() {
    return "API:" + process.env.API_ENV + " STAGE:" + process.env.STAGE_ENV + " NODE:" + process.env.NODE_ENV
}
