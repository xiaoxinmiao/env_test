import discover from '../utils/APIDiscovery';

export function getEnv() {
    return discover("envs")
}
